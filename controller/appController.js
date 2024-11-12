const axios = require("axios");

module.exports = {
  post: async (req, res) => {
    try {
      console.log(req.body);

      // Pabbly Webhook URL
      const webhookUrl = process.env.WEBHOOK_URL;

      // Send the data to the Pabbly Webhook URL using axios POST
      const response = await axios.post(webhookUrl, req.body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Log the response from Pabbly (optional, for debugging)
      console.log("Pabbly response:", response.data);

      res.status(200).json({
        status: `${res.statusCode}`,
        message: "Data sent successfully.",
      });
    } catch (error) {
      // Log the error (optional, for debugging)
      console.error("Error sending data to Pabbly:", error);
      res.status(500).send("Internal server error");
    }
  },
};
