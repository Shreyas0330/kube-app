// Required modules
const redis = require('redis');

// Redis client
const client = redis.createClient({ 
    host: 'your_host', // Specify the host here
    port: 9999 // Specify the port here
});

// Function to write event message to Redis stream
function writeEventToStream(streamName, eventName, eventData) {
    client.xadd(streamName, '*', 'eventName', eventName, 'eventData', eventData, (err, messageId) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Message written to stream with ID:', messageId);
        }
    });
}

// Example usage
const streamName = 'eventStream';
const eventName = 'userLoggedIn';
const eventData = JSON.stringify({ username: 'example_user', timestamp: new Date() });

writeEventToStream(streamName, eventName, eventData);
