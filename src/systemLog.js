// src/systemLog.js
export const systemLog = {
  info(message) {
    console.log(`[SYSTEM][INFO] ${new Date().toLocaleTimeString()} - ${message}`);
  },
  warn(message) {
    console.warn(`[SYSTEM][WARN] ${new Date().toLocaleTimeString()} - ${message}`);
  },
  error(message) {
    console.error(`[SYSTEM][ERROR] ${new Date().toLocaleTimeString()} - ${message}`);
  },
};

// Example usage:
// systemLog.info("App started");
// systemLog.error("Failed to load data");
