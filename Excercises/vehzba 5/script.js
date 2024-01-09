const randomArray = [1, 2, 3, null, undefined, 6, false, NaN, 9, 10];

function removeItemsFromArray (array) {
    const result = array.filter(Boolean); // .filter komanda za filtriranje na falsy vrednosti vo javascript
    console.log(result);
}

removeItemsFromArray(randomArray);