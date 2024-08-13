const express = require("express");
const app = express();
const PORT=process.env.PORT ||8080
app.get("/check", (req, res) => {
  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Server running successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
