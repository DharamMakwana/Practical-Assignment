const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const folderToCompress = "./compressed/";
const zipFileName = "./compressed/compressed_folder1.zip";

const htmlContent = "<html><body><h1>Hello Node.js</h1></body></html>";
fs.writeFileSync(path.join(folderToCompress, "hello.html"), htmlContent);

function createZipFile(sourceFolder, zipFileName) {
  const output = fs.createWriteStream(zipFileName);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.on("error", (err) => {
    console.error("Compression error:", err);
  });

  output.on("error", (err) => {
    console.error("Output stream error:", err);
  });

  archive.directory(sourceFolder, false);
  archive.file(path.join(sourceFolder, "hello.html"), { name: "hello.html" });

  // Pipe the archive to the output stream
  archive.pipe(output);

  // Listen for the 'finish' event on the archive stream
  archive.on("finish", () => {
    console.log(`Compression successful. ${zipFileName} created.`);
  });

  // Finalize the archive
  archive.finalize();
}

createZipFile(folderToCompress, zipFileName);
