exports.getVitals = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Vitals Data",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};