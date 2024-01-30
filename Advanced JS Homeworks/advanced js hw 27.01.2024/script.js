const divToWrite1 = document.querySelector('.toWrite');
const divToWrite2 = document.querySelector('.toWrite2');
const divToWrite3 = document.querySelector('.toWrite3');
const divToWrite4 = document.querySelector('.toWrite4');
const priceHigherThan20List = document.querySelector('.priceHigherThan20');
const foodOnDiscountList = document.querySelector('.foodOnDiscount');
const discountedProductsList = document.querySelector('.discountedProducts');
const vowelProductsList = document.querySelector('.vowelProducts');

class Product {
        constructor (name, category, hasDiscount, price) {
                this.name = name;
                this.category = category;
                this.hasDiscount = hasDiscount;
                this.price = price;
        }
}

let products = [
        new Product('Car', 'Vehicle', false, 200),
        new Product('Motorbike', 'Vehicle', true, 180),
        new Product('Water', 'Bevrage', false, 5),
        new Product('Mouse', 'Tech', false, 15),
        new Product('Monitor', 'Tech', true, 20),
        new Product('Phone', 'Tech', true, 21),
        new Product('Book', 'Literature', false, 12),
        new Product('Painting', 'Art', false, 50),
        new Product('Headphones', 'Tech', false, 10),
        new Product('Pasta', 'Food', true, 10),
        new Product('Astra', 'Accessorie', true, 25),
        new Product('Sun Glasses', 'Accessorie', false, 19),
        new Product('Computer', 'Tech', true, 15),
        new Product('Washing Machine', 'White Tech', false, 50),
        new Product('Sandwich', 'Food', false, 15)
];

products.filter(product => product.price > 20)
        .map(product => priceHigherThan20List.innerHTML += `<li>${product.name}</li>`);

products.filter(product => product.hasDiscount == true && product.category == 'Food')
        .map(product => foodOnDiscountList.innerHTML += `<li>${product.name}</li>`);

products.filter(product => product.hasDiscount == true)
        .map(product => discountedProductsList.innerHTML += `<li>${product.name}</li>`);

products.filter(product => (product.hasDiscount == false) && (product.name.toLowerCase().startsWith('a') || product.name.toLowerCase().startsWith('e') || product.name.toLowerCase().startsWith('i') || product.name.toLowerCase().startsWith('o') || product.name.toLowerCase().startsWith('u')))
        .map(product => vowelProductsList.innerHTML += `<li>${product.name}</li>`)

// function checkForVowel (array) {
//         let firstLetter = array[0].charAt(0);
//         if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
//                 vowelProductsList.innerHTML += `<li>${array[0]}</li>`;
//         }
//         else {
//                 return;
//         }
// }

// checkForVowel(products);

// function checkForVowel (product) {
//         let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
//         let firstLetter = product.name[0];

//         let isTrue = false;
//         for (let i = 0; i < arrayOfVowels.length; i++) {
//                 if (arrayOfVowels[i] == firstLetter) {
//                         isTrue = true;
//                 }
//         }
//         return isTrue;
// }

// let filteredProducts = products.filter(checkForVowel);
// filteredProducts.map(product => vowelProductsList.innerHTML += `<li>${product.name}</li>`)