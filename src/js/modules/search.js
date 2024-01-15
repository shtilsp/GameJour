import {useAPI} from "../api/useAPI.js";
import {debounce} from "./debounce.js";
import {state} from "../state.js";


export async function search() {

    let data = await useAPI().searchSpotlightCards()
    const cardData = await useAPI().getSpotlightCards()

    console.log(data)
    const headerSearchInput = document.getElementById('header-search-input');
    const headerSearchBtn = document.getElementById('header-search-btn');
    const searchResult = document.getElementById('search-result')
    const searchResultWrapper = document.getElementById('search-result-wrapper')

    const debounceSearch = debounce(() => {
        let ids1 = headerSearchInput.value
        const cardDataFiltered = cardData.filter(item => item.name.toLowerCase().includes(ids1.toLowerCase()))



        searchResult.innerHTML = ''

        cardDataFiltered.forEach(item => {
            searchResultWrapper.style.display = "flex";

            searchResult.innerHTML += `
                           <a id="${item.id}" class="search-result-link" href="/pages/game/game.html">
                                <li  class="header__search-result-game">
                                     <div class="header__search-result-game-content">
                                         <img class="header__search-result-game-image" src="${item.image}" alt="search game result">
                                         <p class="header__search-result-game-text">${item.name}</p>
                                     </div>
                                </li>
                           </a>
            `

            const searchResultLink = document.querySelectorAll('.search-result-link')

            searchResultLink.forEach(item => {
                item.addEventListener('click', function () {
                    state().postCardId(item.id);
                    let cardId = state().getCardId()
                    console.log(cardId)
                })
            })
        })

        if (ids1.trim() === '') {
            searchResult.innerHTML = ''
            searchResultWrapper.style.display = "none";
        }

    }, 200)



    headerSearchInput.addEventListener('input', debounceSearch );
}