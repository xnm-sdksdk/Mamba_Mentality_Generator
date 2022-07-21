// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// ARRAY WITH QUOTES
const quotes = [{
    quote: `
    “Everyting negative, pressure, challenges, is all an opportunity for me to rise.” `,
    person: `Kobe Bryant`
}, {
    quote: `
    “Heroes come and go, but legends are forever.” `,
    person: `Kobe Bryant`
}, {
    quote: `“You can manipulate an opponent's strength and use it against them.” `,
    person: `Kobe Bryant`

}, {
    quote: `
    “Rest at the end, not in the middle” `,
    person: `Kobe Bryant`
}, {
    quote: `
    “Good coaches tell you where the fish are, great coaches teach you how to find them.” `,
    person: `Kobe Bryant`
},
{
    quote: `
    "You want first place come play with me, you want second go somewhere else."`,
    person: `Kobe Bryant`
}];


btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})


















