const { execSync } = require("child_process");
const fs = require("fs");

// Run yarn build
execSync("yarn build", { stdio: "inherit" });

// Get the current npm version
const currentVersion = execSync("npm version patch").toString().trim();

// Remove the 'v' prefix from the version
const version = currentVersion.replace(/^v/, "");

// Update package.json with the new version
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.version = version;
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

//git versioning

execSync(`git add . && git commit -m '${currentVersion}'`);

// Publish the package to npm
execSync("npm publish", { stdio: "inherit" });
