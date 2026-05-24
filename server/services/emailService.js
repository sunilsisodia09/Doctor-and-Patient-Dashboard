const sendEmail = async (email, subject, message) => {
  console.log("Email Sent To:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
};

module.exports = sendEmail;