const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

const filePathToDelete = "./files/file.html";

unlinkAsync(filePathToDelete)
  .then(() => {
    console.log(`${filePathToDelete} has been successfully deleted.`);
  })
  .catch((err) => {
    console.error("Error deleting file:", err);
  });
