const path = require('path');
const multer = require('multer');

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ext);
  },
});
module.exports = multer({ storage: storage });
