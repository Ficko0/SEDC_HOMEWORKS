function secondConsoleLog () {
    console.log('Second Console Log');
}

//callback function

function callbackFunction () {
    setTimeout(() => {
        console.log('First Console Log');
        setTimeout(secondConsoleLog, 2000)
    }, 2000)
}

callbackFunction();

//Promise function

function waitSomeTime (timeout) {
    return new Promise ((resolve, reject) => {
        if (timeout <= 0) {
            reject ('The timeout cannot be negative or zero.');
        }
        else {
            setTimeout(() => {
                resolve (`Message after ${timeout} milliseconds.`);
            }, timeout)
        }
    });
}

// waitSomeTime(2000)
// .then(success => {
//     console.log('Wait 2 seconds');
//     console.log(success);
// })
// .catch(error => {
//     console.log(`Error: ${error}`);
// })
// .finally(() => {
//     console.log('Finally. It prints everything even if the conditions fail.');
// })

// waitSomeTime(-2000)
// .then(success => {
//     console.log('Wait 2 seconds');
//     console.log(success);
// })
// .catch(error => {
//     console.log(`Error: ${error}`);
// })

//async && await

async function getDocuments () {
    return fetch ("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
        .then (response => response.json())
            .then (data => data)
                .catch (error => console.log(error));
}

async function getImportantDocuments (documents) {
    let improtantDocuments = documents.filter(document => document.important);
    return new Promise ((resolve, reject) => {
        if (improtantDocuments.length === 0) {
            reject ('There are no important documents.');
        }
        else {
            setTimeout(() => {
                resolve(improtantDocuments);
            },3000)
        }
    })
}

async function checkDocuments (documents) {
    if (documents.length === 0) {
        throw new Error ('No documents found.');
    }
    if (!documents) {
        throw new Error ('Problem with deocument.');
    }
}

async function showDocuments (documents) {
    documents.forEach(document => console.log(`${document.name} ${document.type}`));
}

async function showImportantDocs () {
    let doc = await getDocuments(); // ova vtoro ke se izvrshi (se dodeka ne zavrshi await nema da prodlzhi kodot)
    checkDocuments(doc);
    let importantDocuments = await getImportantDocuments(doc);
    showDocuments(importantDocuments);
}

showImportantDocs(); // ova prvo ke se izvrshi
console.log('Random text');