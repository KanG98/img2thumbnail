const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.REGION });
const s3 = new AWS.S3();

class S3Service {
  defaultOptions = { partSize: 10 * 720 * 1280};
  _awsClient;
  _region;
  _bucket;

  constructor(awsSdk, region, bucket) {
    awsSdk.config.update({ region });
    this._awsClient = new awsSdk.S3();
    this._region = region;
    this._bucket = bucket;
  }
  
  uploadImage = (params, options, callback) => {
    this._awsClient.upload(params, options, (err, data) => callback(err, data));
  }
}

export.module = new S3Service(AWS, process.env.REGION, process.env.BUCKET_NAME);