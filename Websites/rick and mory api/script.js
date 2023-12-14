
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// chosenEntityNumber = (getRandomInt(21)); //gets random number between 0 and 20 for the entity



// function getRandomInt2(max1) {
//     return Math.floor(Math.random() * max1);
// }
// chosenPageNumber = (getRandomInt(43)); //gets random number between 0 and 43 for the page number






function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

chosenEntityNumber = getRandomIntInclusive(0, 19)                 //gets random number between 0 and 20 for the entity
console.log(chosenEntityNumber);   //debugger

// #####################################################################################################################################

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

chosenPageNumber = getRandomIntInclusive(0, 41)               //gets random number between 0 and 43 for the page number
console.log(chosenPageNumber);  //debugger


// function changeColor() {
//     const elem = document.getElementById("entity-status");
//     if (elem == "Dead") {
//         document.getElementById("entity-status").style.color = "#FF0000";
//     }


// }








const url = ('https://rickandmortyapi.com/api/character/?page=' + [chosenPageNumber])

fetch(url)
    .then(response => response.json()) // Read the response as text
    .then(html => { //console.log(html)
        document.getElementById("character-name").textContent = html.results[chosenEntityNumber].name;  //Name
        document.getElementById("character-image").src = html.results[chosenEntityNumber].image;        //image
        document.getElementById("entity-id").textContent = html.results[chosenEntityNumber].id;         //id
        jivot = document.getElementById("entity-status").textContent = html.results[chosenEntityNumber].status; //dead/alive status
        document.getElementById("entity-episode").textContent = html.results[chosenEntityNumber].origin.name;      //episode name
       
    })
    .then(html =>{
        console.log(document.getElementById("entity-status").innerText);
        if (document.getElementById("entity-status").innerText == "Dead") {
            document.getElementById("entity-status").style.color = "#FF0000";
        }
    });

    // console.log(document.getElementById("entity-id"));
// .then(html => characters(html)); // Alert the retrieved HTML content

// Object.result.name

// html.results[0].name







// const url = ('https://rickandmortyapi.com/api/character/?page=3')

// fetch(url)
//     .then(response => response.json()) // Read the response as text
//     .then(html => { //console.log(html)
//         let character = html.results[0]
//         document.getElementById("character-name").textContent = charater.name;
//         document.getElementById("character-image").src = html.image;
//         document.getElementById("character-image").alt = html.name;
//     });

// // .then(html => characters(html)); // Alert the retrieved HTML content

// // Object.result.name

// // html.results[0].name