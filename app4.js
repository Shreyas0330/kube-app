const redis = require('redis');
const client = redis.createClient({
    host: 'your_redis_host', // Update with your Redis server host
    port: your_redis_port // Update with your Redis server port
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

// Publish message to Redis
client.publish('channelName', 'Hello, Redis!');
