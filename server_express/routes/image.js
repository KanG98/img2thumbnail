const express = require("express");
const router = express.Router();
const uploadTypes = require("../startup/formDataConfig")();
const s3Service = require('../services/s3Service')();
const imageMiddleWare = require('../middlewares/formData').formDataTypes.image;

router.post('/image', imageMiddleWare, (req, res) => {
    const params = { 
        Bucket: process.env.BUCKET_NAME, 
        Key: req.file.filename, 
        Body: Buffer.from(req.file.buffer, 'binary')
    };

    s3Service.uploadImg(params, s3Service.defaultOptions, (err, data) => {
        if (err) res.status(500).send();
        else res.status(200).send();
    })
});

module.exports = router;