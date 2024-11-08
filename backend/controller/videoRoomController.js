const axios = require('axios');

const DAILY_API_KEY = process.env.DAILY_API_KEY; // Make sure this is set in your .env file

const createVideoRoom = async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.daily.co/v1/rooms',
      {
        properties: {
          enable_screenshare: true,
          exp: Math.floor(Date.now() / 1000) + 3600, // Room expires in 1 hour
        },
      },
      { headers: { Authorization: `Bearer ${DAILY_API_KEY}` } }
    );
    res.json({ roomUrl: response.data.url });
  } catch (error) {
    console.error('Error creating video room:', error.message);
    res.status(500).json({ error: 'Failed to create video room' });
  }
};

module.exports = { createVideoRoom };
