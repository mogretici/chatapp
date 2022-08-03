const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db:  process.env.REDIS_DB,
	});
};

module.exports.getClient = getClient;
