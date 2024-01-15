import {profileModal} from "../../src/js/modules/profileModal.js";
import {useAPI} from "../../src/js/api/useAPI.js";
import {state} from "../../src/js/state.js";
import {search} from "../../src/js/modules/search.js";




async function init() {
    profileModal();
    await search();

    const user = state().getUser()
    const cardId = state().getCardId()

    const contentGame = document.getElementById('content-game')

    const useAPIStore = useAPI();
    let data = await useAPIStore.getSpotlightCards();



    const ids1 = user.likedGames
    const ids2 = data.map(item => item.id)
    console.log(ids1)
    console.log(user)

    ids1.forEach(item => {
        ids2.forEach(e => {
            if (item == e) {
                const likedGameContent = data.filter((item) => item.id === e)[0]
                console.log(likedGameContent)
                contentGame.innerHTML += `
               <a id="game-link" href="/pages/game/game.html" >
                   <div id="${likedGameContent.id}" class="cards__card">
                        <p class="cards__card-name">${likedGameContent.name}</p>
                        <img class="card__img" src="${likedGameContent.image}" alt="card-image">
                    </div>
                </a>
           `
            }
        })
    })


    user.likedGames.forEach((item) => {
        data.forEach(id => {
            if (item === id) {
                contentGame.innerHTML += `
               <a id="game-link" href="/pages/game/game.html" >
                   <div id="${data.id}" class="cards__card">
                        <p class="cards__card-name">${data.name}</p>
                        <img class="card__img" src="${data.image}" alt="card-image">
                    </div>
                </a>
           `
            }
        })
    })






    const card = document.querySelectorAll('.cards__card')

    card.forEach(item => {
        item.addEventListener('click', function () {
            state().postCardId(item.id);
            let cardId = state().getCardId()
            console.log(cardId)
        })
    })

}



await init();