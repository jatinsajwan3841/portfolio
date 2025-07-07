import { rmSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "..", "index.html");

try {
    rmSync(filePath);
    console.log("🧹 Removed root index.html");
} catch (err) {
    // Ignore error if file doesn't exist
}
