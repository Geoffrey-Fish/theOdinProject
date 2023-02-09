//The first four lines of code determine the source of the json file.
//The fifth line of code calls the populate function, passing in the json file.
//The sixth line of code calls the populateHeader function.
async function populate() {

    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}

function populateHeader(obj) {
    const header = document.querySelector('header'); //search for the header element in the html file
    const myH1 = document.createElement('h1'); //create a new h1 element
    myH1.textContent = obj.squadName; //set the text content of the h1 element to the squad name
    header.appendChild(myH1); //append the h1 element to the header element

    const myPara = document.createElement('p'); //create a new p element
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`; //set the text content of the p element to the home town and formed
    header.appendChild(myPara);  //append the p element to the header element
}

//The populateHeroes function takes the json file as an argument.(obj)
function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members; //set the heroes variable to the members array in the json file(Important detail!)

    for (const hero of heroes) { //loop through the members array
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers; //set the superPowers variable to the powers array in the json file
        for (const power of superPowers) { //loop through the powers array
            const listItem = document.createElement('li'); //create a new li element
            listItem.textContent = power; //set the text content of the li element to the power
            myList.appendChild(listItem); //append the li element to the ul element
        }
        //append the h2, p1, p2, p3, and ul elements to the article element
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        //append the article element to the section element
        section.appendChild(myArticle);
    }
}
populate();// final call to the populate function
