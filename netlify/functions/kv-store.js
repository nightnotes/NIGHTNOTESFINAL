const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    // Lees artists.json uit public
    const filePath = path.join(process.cwd(), "public", "artists.json");
    const data = fs.readFileSync(filePath, "utf8");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };
  } catch (error) {
    console.error("Error loading artists.json:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to load artists.json" }),
    };
  }
};
