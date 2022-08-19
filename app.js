const express = require('express');
const multer = require('multer');
const Unzipper = require('decompress-zip');
const decompress = require('decompress');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3003;

const unzipPath = 'unzipped/';

const upload = multer({
  dest: 'uploads/', // this saves your file into a directory called "uploads"
});

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/', upload.single('file-to-upload'), (req, res, next) => {
  if (req.file) {
    console.log(`Uploading file "${req.file.originalname}"...`);

    /*
    decompress(req.file.path, unzipPath, {
      map: file => {
        console.log(file.path)
      }
    }).then(files => {
      console.log('done!');
    });
    */

    /*
    var unzipper = new Unzipper(req.file.path);

    unzipper.on("error", function(err) {
      console.log(`Caught an error: ${err}`);
    });

    unzipper.on("progress", function(fileIndex, fileCount) {
      console.log(fileIndex, fileCount);
      // let percentComplete = (fileIndex / fileCount) * 100;
      // console.log(percentComplete);
      // console.log(`Extracting file ${(fileIndex + 1)} of ${fileCount}...${percentComplete}`);
    });

    unzipper.on("extract", function(log) {
      console.log(`Finished extracting file "${req.file.originalname}".`);

      // delete the uploaded file
      fs.unlink(req.file.path, function(err) {
        if (err) console.log(`error deleting file: ${err}`);
        console.log(`temp file "${req.file.path}" successfully deleted.`);
        res.redirect("/");
      });
    });

    unzipper.on("list", function(files) {
      console.log("The archive contains:");
      console.log(files);
    });
    unzipper.list();
    */

    // delete the old directory
    /*
    fs.unlink("unzipped/top-programming-fonts-master", function(err) {
      if (err) console.log("error deleting file", err);
      console.log(
        `"top-programming-fonts-master" folder successfully deleted.`
      );
    });
    */

    // unzipper.extract({ path: unzipPath });
  } else {
    console.log('No File Uploaded');
    // var filename = "FILE NOT UPLOADED";
    // var uploadStatus = "File Upload Failed";
  }
  // res.status(204).end();
  // res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
