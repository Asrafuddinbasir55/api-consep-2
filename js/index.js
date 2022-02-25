
const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    const main = document.getElementById("main");
    const firstData = dogList.slice(0, 10) 
    
    for (const dog of firstData) {
        const div = document.createElement('div');
        div.className = "col-lg-4"
        console.log(dog.weight.imperial);
        div.innerHTML = `
         <h2>${dog.name}</h2>
         <p>${dog.temperament.Prototype}</p>
         <h4>${dog.weight.imperial}</h4>
         <img width="400px" height="250px" src="${dog.image.url}" />
        `
        console.log(div);
        main.appendChild(div)
    } 
}

