import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 5000;
const allowedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const password = "abracadabra";

// Use the environment variable GUESTS_DIR or default to 'guests' in the current working directory
const guestsDir = process.env.GUESTS_DIR || path.join(process.cwd(), "guests");

const server = http.createServer(async (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
    return;
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !validateAuth(authHeader)) {
    res.writeHead(401, {
      "Content-Type": "application/json",
      "WWW-Authenticate": 'Basic realm="Access to gatecrashers"',
    });
    res.end("Authorization Required");
    return;
  }

  const guestName = decodeURIComponent(req.url.slice(1));
  if (!guestName) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "bad request" }));
    return;
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const contentType = req.headers["content-type"] || "";
      if (!contentType.includes("application/json") || !body) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "bad request" }));
        return;
      }

      const data = JSON.parse(body);

      await fs.mkdir(guestsDir, { recursive: true });
      const filePath = path.join(guestsDir, `${guestName}.json`);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

function validateAuth(authHeader) {
  const [method, encoded] = authHeader.split(" ");
  if (method !== "Basic") return false;

  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  const [username, pass] = decoded.split(":");

  return allowedUsers.includes(username) && pass === password;
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});