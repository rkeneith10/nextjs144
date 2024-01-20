import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: smtp.mail.icloud.com,
      port: 587,
      auth: {
        user: "rkeneith@icloud.com",
        pass: "RSKenneth1210",
      },
    });

    // Options du message
    const mailOptions = {
      from: email,
      to: 'rkeneith@icloud.com', // Remplacez par l'adresse e-mail de votre destinataire
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Envoi du message
      await transporter.sendMail(mailOptions);
      res.status(200).send('Message envoyé avec succès!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi du message.');
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