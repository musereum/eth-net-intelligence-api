console.log(
  'vars:',
  process.env.ETHNET_API,
  process.env.LOGS_ROOT,
  process.env.ETH_STAT_SECRET,
  process.env,
)

module.exports = [
  {
    "name"              : "node-app",
    "cwd"               : process.env.ETHNET_API,
    "script"            : "app.js",
    "log_date_format"   : "YYYY-MM-DD HH:mm Z",
    "log_file"          : process.env.LOGS_ROOT + "/node-app-log.log",
    "out_file"          : process.env.LOGS_ROOT + "/node-app-out.log",
    "error_file"        : process.env.LOGS_ROOT + "/node-app-err.log",
    "merge_logs"        : false,
    "watch"             : false,
    "max_restarts"      : 10,
    "exec_interpreter"  : "node",
    "exec_mode"         : "fork_mode",
    "env":
    {
      "NODE_ENV"        : "production",
      "RPC_HOST"        : "localhost",
      "RPC_PORT"        : "8545",
      "LISTENING_PORT"  : "30000",
      "INSTANCE_NAME"   : "",
      "CONTACT_DETAILS" : "",
      "WS_SERVER"       : "wss://localhost:9545",
      "WS_SECRET"       : process.env.ETH_STAT_SECRET,
      "VERBOSITY"       : 2
    }
  }
]
