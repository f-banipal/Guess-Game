//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

console.log("*** WELCOME TO GUESS GAME ****");

const randomNumber = Math.floor(Math.random() * 101);
let remainingTrial = 5;

console.log(randomNumber);
alert("GUESS GAME: We kept a number between 0-100. Please guess the number!");

for (let trial = 1; trial <= 5; trial++) {
  const userGuess = Number(prompt("Please guess the number!"));
  console.log(userGuess);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    console.log();
    alert("Invalid login. Please enter a number between 0 and 100.");
    continue;
  }

  if (userGuess === randomNumber) {
    console.log(`Congrats! You guessed it right on the ${trial}. try.`);
    break;
  } else {
    remainingTrial--;

    if (remainingTrial > 0) {
      const hint = userGuess < randomNumber ? "INCREASE" : "DECREASE";
      console.log(
        `Unfortunately wrong! Remaining trial: ${remainingTrial}. Please ${hint} the number.`
      );
    } else {
      console.log(`Sorry you lost. The correct number is ${randomNumber}.`);
    }
  }
}
