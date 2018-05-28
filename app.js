window.onload = function() {
let ageInput = (prompt("How old are you? (in years)"));

isValidAge = function isInt(ageText){
    let inputIsANumber = Number(ageText) != NaN;
    let inputIsAnInteger = ageText % 1 === 0;
    return inputIsANumber && inputIsAnInteger;
  }

  if (isValidAge(ageInput) && ageInput > 0 && ageInput <= 1 ) {
        document.writeln  ('Congratulations, you are one VERY advanced baby!')
      }
  if (isValidAge(ageInput) && ageInput > 1 && ageInput <= 3 ) {
        document.writeln ('Wow, what a talented toddler you are!')
      }
  if (isValidAge(ageInput) && ageInput > 3 && ageInput <= 5 ) {
        document.writeln ('Look at you, ready for preschool!')
  }
  if (isValidAge(ageInput) && ageInput > 5 && ageInput <= 12 ) {
        document.writeln ('Off you go to gradeschool!')
  }
  if (isValidAge(ageInput) && ageInput > 12 && ageInput <= 18 ) {
        document.writeln ('Welcome to Teenage Hell')
  }
  if (isValidAge(ageInput) && ageInput > 18 && ageInput <= 21 ) {
    document.writeln ('Congratulations, you made it to young adulthood. No pressure or anything!')
  }
};
