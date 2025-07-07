const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "..", "index.html");

try {
    fs.rmSync(filePath);
    console.log("🧹 Removed root index.html");
} catch (err) {
    // Silently ignore file-not-found errors
}
