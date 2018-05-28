window.onload = function() {
let ageInput = (prompt("How old are you? (in complete years)"));

isValidAge = function isInt(ageText){
    let inputIsANumber = Number(ageText) != NaN;
    let inputIsAnInteger = ageText % 1 === 0;
    return inputIsANumber && inputIsAnInteger;
  }

  if (isValidAge(ageInput)) {
    if (ageInput > 0 && ageInput <= 1 ) {
      document.writeln ('Congratulations, you are one VERY advanced baby!')
    }
    if (ageInput > 1 && ageInput <= 3 ) {
      document.writeln ('Wow, what a talented toddler you are!')
    }
    if (ageInput > 3 && ageInput <= 5 ) {
        document.writeln ('Look at you, ready for preschool!')
    }
    if (ageInput > 5 && ageInput <= 12 ) {
          document.writeln ('Off you go to gradeschool!')
    }
    if (ageInput > 12 && ageInput <= 18 ) {
          document.writeln ('Welcome to Teenage Hell')
    }
    if (ageInput > 18 && ageInput <= 21 ) {
      document.writeln ('Congratulations, you made it to young adulthood. No pressure or anything!')
    }

  } else {
    document.writeln ('Write an integer')
  }
};
