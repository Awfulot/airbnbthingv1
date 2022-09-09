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

        address: '10 Sample St',
        city: 'Boston',
        rent: 200
    },
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',
        address: '19 Sample St',
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
        address: '7 Sample St',
        city: 'Boston',
        rent: 800
    }
    ,
    {
        type: 'Lakefront',
        image: 'https://picsum.photos/200?random=',
        address: '8 Sample St',
        city: 'Boston',
        rent: 800
    }
    ,
    {
        type: 'Lakefront',
        image: 'https://picsum.photos/200?random=',
        address: '66 Sample St',
        city: 'Boston',
        rent: 800
    }
    ,
    {
        type: 'Beach',
        image: 'https://picsum.photos/200?random=',

        address: '5 Anon St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Beach',
        image: 'https://picsum.photos/200?random=',

        address: '4 Anon St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Beach',
        image: 'https://picsum.photos/200?random=',

        address: '3 Anon St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '18 Jerry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '16 Jerry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '13 Jerry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '11 Jerry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Cabins',
        image: 'https://picsum.photos/200?random=',

        address: '15 Jerry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '2 Berry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '3 Berry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '4 Berry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '5 Berry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'Tiny homes',
        image: 'https://picsum.photos/200?random=',

        address: '6 Berry St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '1 Josh St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '3 Josh St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '5 Josh St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '7 Josh St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'OMG',
        image: 'https://picsum.photos/200?random=',
        address: '9 Josh St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',

        address: '1000 Sample St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',

        address: '1009 Sample St',
        city: 'Boston',
        rent: 200
    }
    ,
    {
        type: 'National parks',
        image: 'https://picsum.photos/200?random=',

        address: '1057 Sample St',
        city: 'Boston',
        rent: 200
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

//function buttonManager(){

//}

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
        let randomStarNumber = Math.floor(Math.random() * 6);


        const createdDiv = document.createElement("div")//.innerHTML = `${array.type}`
        createdDiv.classList.add("flex")
        //createdDiv.classList.add("relative")
        //createdDiv.classList.add("mr-10")
        createdDiv.innerHTML = `
        <div class="">
            <p>${item.type}</p>
            <img src= ${item.image}+${String(randomImgNumber)}> 
            <div class="flex justify-between">
             
                
                <p>Rating: ${randomStarNumber} Star(s)</p>
                
            </div>
            <div><p>${item.address}</p> <p>${item.city}</p> <p>$${item.rent}</p></div>
        </div>
        `;
        displayHomesDiv.appendChild(createdDiv);
    });
};