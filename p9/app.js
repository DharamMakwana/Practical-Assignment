const mysql = require("mysql2");

// MySQL database configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeassignment",
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Function to execute a query with a promise-based approach
function executeQuery(query, values = []) {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function main() {
  try {
    // Insert a record in the employee table
    const insertQuery =
      "INSERT INTO employee (name, age, designation) VALUES (?, ?, ?)";
    const insertValues = ["Dharam Makwana", 23, "Software Engineer"];
    await executeQuery(insertQuery, insertValues);
    console.log("Record inserted successfully.");

    // Display all records in the employee table
    const selectQuery = "SELECT * FROM employee";
    const records = await executeQuery(selectQuery);
    console.log("All records in the employee table:");
    console.log(records);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // Close the connection pool
    pool.end();
  }
}

main();
