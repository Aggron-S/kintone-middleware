module.exports = {
  post: async (req, res) => {
    try {
      // Delet this later
      console.log(req.body);

      // Define queueing logic here
      

      res.status(200).json({
        status: `${res.statusCode}`,
        message: "Data sent successfully.",
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
};
