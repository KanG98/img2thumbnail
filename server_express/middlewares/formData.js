const multer = require("multer");
const upload = multer();

const init = function(app) {
  app.use(upload.single('temp'));
}

const formDataTypes = {
  image: upload.single('temp');
}

module.exports = { init, formDataTypes };