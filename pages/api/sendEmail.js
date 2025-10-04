import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configuration du transporteur Nodemailer
    // Utilisation des variables d'environnement pour la sécurité
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Validation basique côté serveur
    if (!name || !email || !message) {
      return res.status(400).send("Tous les champs sont requis.");
    }

    // Options du message
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Utiliser l'email du service pour l'envoi
      replyTo: email, // Ajouter l'email de l'utilisateur dans le champ "reply-to"
      to: process.env.EMAIL_TO, // L'adresse de destination doit aussi être une variable d'environnement
      subject: "Nouveau message de contact",
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Envoi du message
      await transporter.sendMail(mailOptions);
      console.log("Email envoyé avec succès");
      res.status(200).send("Message envoyé avec succès!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi du message.");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// export default async (req,res)=>{
// if(req.method === "GET"){
//     res.send("Test 1 2");
// }
// }
