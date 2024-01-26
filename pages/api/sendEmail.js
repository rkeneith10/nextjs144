import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: "mail.xbooksconnect.com",
      port: 465,
      secure: true,
      auth: {
        user: "service@xbooksconnect.com",
        pass: "SERVICE@xbooks2023",
      },
    });

    // Options du message
    const mailOptions = {
      from: email,
      to: "rkeneith10@yahoo.com", // Remplacez par l'adresse e-mail de votre destinataire
      subject: "Nouveau message de contact",
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Envoi du message
      await transporter.sendMail(mailOptions);
      console.log("Good");
      res.status(200).send("Message envoyé avec succès!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi du message.");
    }
  } else {
    res.status(405).end();
  }
};

// export default async (req,res)=>{
// if(req.method === "GET"){
//     res.send("Test 1 2");
// }
// }
