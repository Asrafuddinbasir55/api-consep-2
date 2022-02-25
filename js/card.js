
const main = document.getElementById('main');
const searchBtn = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
  
    const inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue=="") {
        // alert('please enter a value true')
        error.innerText = 'please give a number'
        input.value = ''
        main.innerHTML = ''
    }
    else if (inputValue <= 0) {
        error.innerText = 'please give a positive value'
        input.value = ''
        main.innerHTML = ''
    }
    else {
        main.innerHTML = ''
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data.cards))
        error.innerHTML = ''   
    }
}

const cardDisplay = (cards) => {
    console.log(cards);
    for(const card of cards) {
        console.log(card);
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${card.suit}</h5>
        <p class="card-text">${card.code}</p>
        <button onclick="cardDelails('${card.code}')" href="#" class="btn btn-primary">See Details</button>
     </div>
    </div>
        `
        main.appendChild(div)
    }
}

const cardDelails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then(res => res.json())
    .then(data => {
        const allCards = data.cards
        const singleCard = allCards.find(card => card.code === code)
       const div = document.createElement('div')
       main.innerHTML = ''
       div.innerHTML = `
       <div class="card" style="width: 18rem;">
       <img src="${singleCard.image}" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">${singleCard.suit}</h5>
       <p class="card-text">${singleCard.code}</p>
       <p class="card-text">${singleCard.value}</p>
    </div>
   </div>
       `
       main.appendChild(div)
    })
//   console.log(code);
}