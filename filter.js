const lakefrontButton = document.getElementById("lakefront-button");
const beachButton = document.getElementById("beach-button");
const cabinButton = document.getElementById("cabin-button");
const omgButton = document.getElementById("omg-button");
const nationalButton = document.getElementById("national-button");
const tinyButton = document.getElementById("tiny-button");

const displayHomesDiv = document.getElementById("display-homes");

const homes = [
    {
        type: 'Lakefront',
        image: 'https://picsum.photos/200?random=',
        address: '1 Sample St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'Beach',
        image: 'https://picsum.photos/200?random=',
        address: '1 James St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'Beach',
        image: 'https://picsum.photos/200?random=',

        address: '1 Anon St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',

        address: '1 Sample St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',

        address: '1 Sample St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',
        address: '1 Sample St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',

        address: '1 Jerry St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '1 Josh St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '1 Berry St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '1 Jerry St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'Lakefront',
        image: 'https://picsum.photos/200?random=',
        address: '6 Sample St',
        city: 'Doston',
        rent: 800
    }
];

function findType(targetArray){

}

function buttonManager(){

};

lakefrontButton.addEventListener("click", function (){
const findLakefront = homes.filter((item) =>{
    if(item.type === "Lakefront"){
        return true;
    }
    return false;
})
    createElements(findLakefront)
});

beachButton.addEventListener("click", function (){

});

cabinButton.addEventListener("click", function (){

});

omgButton.addEventListener("click", function (){

});

nationalButton.addEventListener("click", function (){

});

tinyButton.addEventListener("click", function (){
console.log("test")
});


const createElements = (array) => {

    array.forEach((item) => {
        let randomImgNumber = Math.floor(Math.random() * 1000);


        const createdDiv = document.createElement("div")//.innerHTML = `${array.type}`
        createdDiv.innerHTML = `<div class="border border-black rounded-md shadow-lg">${item.type} <img src= ${item.image}+${String(randomImgNumber)}>, ${item.address}, ${item.city}, $${item.rent}</div>`;
        displayHomesDiv.appendChild(createdDiv);
    });
};