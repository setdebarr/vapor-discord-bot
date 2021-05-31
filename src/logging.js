const winston = require("winston");
require("winston-daily-rotate-file");

const logger = winston.createLogger({
	exitOnError: false,
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.metadata({
			fillExcept: ["message", "level", "timestamp"],
		}),
		winston.format.printf((info) => {
			return JSON.stringify({
				level: info.level,
				timestamp: info.timestamp,
				message: info.message,
				meta: info.metadata,
			});
		}),
	),
	transports: [
		new winston.transports.DailyRotateFile({
			level: "info",
			dirname: "logs",
			filename: "%DATE%.log",
			zippedArchive: true,
			maxFiles: "5d",
			handleExceptions: true,
		}),
		new winston.transports.DailyRotateFile({
			level: "error",
			dirname: "logs",
			filename: "%DATE%_error.log",
			zippedArchive: true,
			maxFiles: "7",
			handleExceptions: true,
		}),
		new winston.transports.Console({
			stderrLevels: ["info"],
		}),
	],
});

module.exports = logger;
