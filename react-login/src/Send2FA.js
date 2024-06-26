import emailjs from "@emailjs/browser";

const send2fa = (sento) => {
  // EmailJS service ID, template ID, and Public Key
  const serviceId = "service_u17g2mm";
  const templateId = "template_19rjfp9";
  const publicKey = "DpTbUhjJ5CiC9YQLc";

  // Generate a random number between 1000000000 (inclusive) and 9999999999 (exclusive)
  const randomnumber = Math.floor(
    Math.random() * (9999999999 - 1000000000) + 1000000000
  );

  // Assign values to the the template parameters
  const templateParams = {
    randomnumber: randomnumber,
    sendto: sento,
  };

  // Send the email using EmailJS
  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
      console.log("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });

  // Return the random number
  return randomnumber;
};

export default send2fa;
