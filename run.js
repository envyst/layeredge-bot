import { spawn } from "child_process";

function startProcess() {
  console.log("Starting WalletDashboard...");

  const process = spawn("node", ["main.js"], { stdio: "inherit" });

  setTimeout(() => {
    console.log("Restarting WalletDashboard after 1 hour...");
    process.kill(); // Kill the current process
    startProcess(); // Restart the process
  }, 1800000); // 1 hour
}

startProcess();
