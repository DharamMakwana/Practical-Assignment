const fs = require("fs");
const path = require("path");
const unzipper = require("unzipper");

const zipFilePath = "./compressed/compressed_folder1.zip";
const extractionFolderPath = "./extracted/compressed_folder1";

function extractZipFile(zipFilePath, extractionFolderPath) {
  fs.mkdirSync(extractionFolderPath, { recursive: true });

  const zipFileStream = fs.createReadStream(zipFilePath);

  zipFileStream
    .pipe(unzipper.Extract({ path: extractionFolderPath }))
    .on("error", (err) => {
      console.error("Extraction error:", err);
    })
    .on("finish", () => {
      console.log(
        `Extraction successful. Contents extracted to ${extractionFolderPath}.`
      );
    });
}

extractZipFile(zipFilePath, extractionFolderPath);
