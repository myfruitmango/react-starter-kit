const pkg = require("./package.json");
const port = 2501;

module.exports = {
  apps: [
    {
      name: `${pkg.name}:${port}`,
      script: "npm",
      args: "start",
      interpreter: "none",
      watch: false,
      merge_logs: true,
      env: {
        PORT: port,
      },
    },
  ],
};
