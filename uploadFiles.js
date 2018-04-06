const dotenv = require('dotenv/config'),
    colors = require('colors'),
    bunyan = require('bunyan'),
    imagesPath = process.env.IMAGES_PATH,
    awsID = process.env.AWS_KEY,
    awsSecret = process.env.AWS_SECRET,
    prompt = require('prompt'),
    s3Upload = require('s3-folder-upload');

    uploadFiles();

    function uploadFiles() {

        const credentials = {
             "accessKeyId": awsID,
              "secretAccessKey": awsSecret,
              "region": "ap-southeast-2",
              "bucket": "viemailsender"
        }
        
        s3Upload(imagesPath, credentials)
    }