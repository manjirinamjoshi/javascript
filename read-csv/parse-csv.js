const fs = require("fs");

// Specify the path of the CSV file
const path = "assetIds.csv";

// Read the CSV file
await fs.readFile(path, "utf8");

fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error while reading:", err);
    return;
  }

  // Split the data into lines
  const lines = data.split("\n");

  // Initialize the output array
  const output = [];

  // Loop through each line and split it into fields
  lines.forEach((line) => {
    const fields = line.split(",");
    output.push(fields);
  });

  // Log the output array
  console.log(output);
});
