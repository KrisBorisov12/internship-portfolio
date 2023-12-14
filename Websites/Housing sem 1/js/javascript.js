//this filter model was created using the information from this video: https://www.youtube.com/watch?v=G1eW3Oi6uoc

let filterCityNamesInput = document.getElementById('filter-city-names');

filterCityNamesInput.addEventListener('keyup', filterCityNames);

function filterCityNames(){

    let filterCityValue = filterCityNamesInput.value.toUpperCase()
    console.log(filterCityValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');


    for (let index = 0; index < li.length; index++) {
        let h1 = li[index].getElementsByTagName('h1')[0];

        if(h1.innerHTML.toUpperCase().indexOf(filterCityValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

let filterMinPriceInput = document.getElementById('filter-min-price');

filterMinPriceInput.addEventListener('keyup', filterByMinPrice);

function filterByMinPrice(){

    let filterMinPriceValue = filterMinPriceInput.value.toUpperCase()

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    console.log(+filterMinPriceValue + 3);
    for (let index = 0; index < li.length; index++) {
        let h2 = li[index].getElementsByClassName('searchprice')[0];
        if(h2.innerHTML.toUpperCase().indexOf(filterMinPriceValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}
let filterHousingTypeInput = document.getElementById('filter-housing-type');

filterHousingTypeInput.addEventListener('keyup', filterHousingType);

function filterHousingType(){

    let filterHousingTypeValue = filterHousingTypeInput.value.toUpperCase()
    console.log(filterHousingTypeValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    for (let index = 0; index < li.length; index++) {
        let h2 = li[index].getElementsByClassName('housingType')[0];

        if(h2.innerHTML.toUpperCase().indexOf(filterHousingTypeValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

let filterNumberRoomsInput = document.getElementById('filter-number-rooms');

filterNumberRoomsInput.addEventListener('keyup', filterNumberRooms);

function filterNumberRooms(){

    let filterNumberRoomsValue = filterNumberRoomsInput.value.toUpperCase()
    console.log(filterNumberRoomsValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    for (let index = 0; index < li.length; index++) {
        let h3 = li[index].getElementsByTagName('h3')[0];

        console.log(h3)
        if(h3.innerHTML.toUpperCase().indexOf(filterNumberRoomsValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

function checkGWE(){
    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');
if (GWEcheck.checked)
{
    for (let index = 0; index < li.length; index++) {
        let h4 = li[index].getElementsByTagName('h4')[0];
        console.log(h4);

        if(h4.innerHTML === "yes"){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}
else {
    for (let index = 0; index < li.length; index++) {
        let h4 = li[index].getElementsByTagName('h4')[0];
        console.log(h4);
        li[index].style.display = "flex";
        
    }
}
}
function checkFacilities(){
    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');
if (facilitiesStatus.checked)
{
    for (let index = 0; index < li.length; index++) {
        let p = li[index].getElementsByClassName('facilitiesstate')[0];
        if(p.innerHTML === "yes"){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}
else {
    for (let index = 0; index < li.length; index++) {
        let p = li[index].getElementsByClassName('facilitiesstate')[0];
        console.log(p);
        li[index].style.display = "flex";
        
    }
}
}

let filterRoomSizeInput = document.getElementById('roomsizefilter');
filterRoomSizeInput.addEventListener('keyup', filterByRoomSize);

function filterByRoomSize(){

    let filterRoomSizeValue = filterRoomSizeInput.value.toUpperCase()

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    console.log(filterRoomSizeValue);
    for (let index = 0; index < li.length; index++) {
        let h6 = li[index].getElementsByClassName('roomsize')[0];
        if(h6.innerHTML.toUpperCase().indexOf(filterRoomSizeValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}
let filterOccupantsInput = document.getElementById('filterbyoccupants');
filterOccupantsInput.addEventListener('keyup', filterNumberOccupants);

function filterNumberOccupants(){

    let filterRoomSizeValue = filterOccupantsInput.value.toUpperCase()

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    console.log(filterRoomSizeValue);
    for (let index = 0; index < li.length; index++) {
        let h6 = li[index].getElementsByClassName('numberoccupants')[0];
        if(h6.innerHTML.toUpperCase().indexOf(filterRoomSizeValue) > -1){
            li[index].style.display = "flex";

        }else{
            li[index].style.display = "none";

        }
        
    }
}