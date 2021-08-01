const express = require("express");

const router = express.Router();

router.get("/health-check", (_, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  res.send(healthcheck);
});

module.exports = router;
