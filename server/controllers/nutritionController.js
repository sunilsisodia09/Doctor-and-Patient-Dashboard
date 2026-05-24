exports.getNutrition = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Nutrition Data",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};