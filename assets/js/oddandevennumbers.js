// Kullanıcıdan en az 10 tane sayı girmesini isteyelim
// Girilen her bir sayı tek ise "tekSayilar" dizisine, çift ise "ciftSayilar" dizisine eklensin.
// Daha sonra console'da "tek sayılar : " ve "çift sayılar : " diye yazdıralım.

let oddNumbers = []
let evenNumbers = []

let numbers = []
let number;

for(let i = 0; i < 10; i++) {
  number = Number(prompt('İstediğiniz bir sayı giriniz.'));
  numbers.push(number);
}

function separateNumbers() {
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
}

function listOddNumbers(){
  console.log('Girdiğiniz sayılardan tek sayı olan sayılar:');
  for(let i = 0; i < oddNumbers.length; i++) {
    console.log(oddNumbers[i]);
  }
}

function listEvenNumbers(){
  console.log('Girdiğiniz sayılardan çift sayı olan sayılar:');
  for(let i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i]);
  }
}

separateNumbers();
listOddNumbers();
listEvenNumbers();
