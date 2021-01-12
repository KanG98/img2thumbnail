// server
require("dotenv").config;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(upload.single('temp'));
app.use(express.static('public'));

var uploadType = upload.single('temp');
const server = require('http').createServer(app)
const AWS = require('aws-sdk');
var bucketName = 'inventoryapps3bucket';
AWS.config.update({ region: process.env.REGION })
//AWS.config.loadFromPath('./config.json');
const s3 = new AWS.S3();

const uploadImg = async (params, options, callback) => {
    s3.upload(params, options, (err, data) => callback(err, data))
}

app.get('/', async(req, res) => {
    console.log("it is workign");
})

app.post('/image', uploadType, async (req, res) => {
    console.log(req);
    const file = req.file;
    const base64data = Buffer.from(file.buffer, 'binary');
    const params = { Bucket: bucketName, Key: "testKey.jpeg", Body: base64data};
    const thumbnailOptions = { partSize: 10 * 720 * 1280};
    uploadImg(params, thumbnailOptions, (err, data) => console.log(err, data));
    res.status(200).send();
})

// listener


const port = 3050;
server.listen(port, () => {
    console.log(`listening to port ${port}...`);
});