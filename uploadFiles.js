const dotenv = require('dotenv/config'),
    credentials = require('./grabCredentials').parseCFG,
    colors = require('colors'),
    bunyan = require('bunyan'),
    imagesPath = process.env.IMAGES_PATH,
    awsID = credentials.AWS_KEY,
    awsSecret = credentials.AWS_SECRET,
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