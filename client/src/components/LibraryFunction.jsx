export const generatePassword = () => {
    const characters =
      "azertyupqsdfghjkmwxcvbn0123456789AZERTYUPQSDFGHJKMWXCVBN&|@#§!_-€*$%£µ?:+=°";
    let pass = "";
    for (let i; pass.length < 16; i += i) {
      const randCharacters = Math.round(Math.random() * characters.length);
      pass += characters.substring(randCharacters, randCharacters + 1);
    }
  };

  export const linterSilent='';
  