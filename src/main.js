import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
    ********* USSD APP ********
    1- MVOLA
    2- SOS crédit YAS
    3- Quitter
`);

rl.question("Entrez votre choix : ", (choix) => {
  switch (choix.trim()) {
    case "1":
      console.log(`
        --- MVOLA ---
        1- Vérifier le solde
        2- Envoyer de l'argent
        3- Retour
      `);
      rl.question("Entrez votre choix MVOLA : ", (choixMvola) => {
        switch (choixMvola.trim()) {
          case "1":
            console.log("Votre solde est de 50 000 MGA");
            rl.close();
            break;
          case "2":
            console.log("Fonction d'envoi d'argent en cours...");
            rl.close();
            break;
          case "3":
            console.log("Retour au menu principal.");
            rl.close();
            break;
          default:
            console.log("Choix invalide.");
            rl.close();
        }
      });
      break;

    case "2":
      console.log(`
        --- SOS Crédit YAS ---
        1- Demander un SOS de 200 Ar
        2- Vérifier l'éligibilité
        3- Retour
      `);
      rl.question("Entrez votre choix SOS : ", (choixSos) => {
        switch (choixSos.trim()) {
          case "1":
            console.log("Vous avez reçu un SOS de 200 Ar.");
            rl.close();
            break;
          case "2":
            console.log("Vous êtes éligible au SOS crédit.");
            rl.close();
            break;
          case "3":
            console.log("Retour au menu principal.");
            rl.close();
            break;
          default:
            console.log("Choix invalide.");
            rl.close();
        }
      });
      break;

    case "3":
      console.log("Merci d’avoir utilisé notre service.");
      rl.close();
      break;

    default:
      console.log("Choix invalide. Veuillez réessayer.");
      rl.close();
  }
});
