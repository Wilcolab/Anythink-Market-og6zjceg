const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Node!" });
});