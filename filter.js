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

function findType(originalArray,arrayType){
const newArray = originalArray.filter((item) =>{
    if(item.type === arrayType){
        return true
    }
    return false
})
    createElements(newArray)
}

function buttonManager(){

}

lakefrontButton.addEventListener("click", function (){
findType(homes,"Lakefront")
});

beachButton.addEventListener("click", function (){
findType(homes,"Beach")
});

cabinButton.addEventListener("click", function (){
findType(homes,"Cabins")
});

omgButton.addEventListener("click", function (){
findType(homes,"OMG")
});

nationalButton.addEventListener("click", function (){
findType(homes,"National parks")
});

tinyButton.addEventListener("click", function (){
findType(homes,"Tiny homes")
});


const createElements = (array) => {
    displayHomesDiv.innerHTML = ""
    array.forEach((item) => {
        let randomImgNumber = Math.floor(Math.random() * 1000);


        const createdDiv = document.createElement("div")//.innerHTML = `${array.type}`
        createdDiv.innerHTML = `<div class="border-2 border-black rounded-md shadow-lg">${item.type} <img src= ${item.image}+${String(randomImgNumber)}>, ${item.address}, ${item.city}, $${item.rent}</div>`;
        displayHomesDiv.appendChild(createdDiv);
    });
};