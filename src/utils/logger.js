function info(message) {
  console.log(`ℹ️ ${message}`);
}

function success(message) {
  console.log(`✅ ${message}`);
}

function error(message, err) {
  console.error(`❌ ${message}`, err);
}

module.exports = { info, success, error };
