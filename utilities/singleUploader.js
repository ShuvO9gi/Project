//external import
const multer = require("multer");
const path = require("path");

function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_message
) {
  //file upload path
  const Uploads_Path = `${__dirname}/../public/uploads/${subfolder_path}`;

  //storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, Uploads_Path);
    },
    filename: function (req, file, cb) {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  //prepare the final multer object

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_message));
      }
    },
  });

  return upload;
}

module.exports = uploader;
