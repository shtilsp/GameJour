import {useAPI} from "../api/useAPI.js";
import {state} from "../state.js";
import {Swiper} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export async function renderSpotlight() {
    const cardsSpotlight = document.getElementById('bestCardsSpotlight');
    const useAPIStore = useAPI()

    let data = await useAPIStore.getSpotlightCards();

    let dealsData = await useAPIStore.getSpotlightCards();

    dealsData = dealsData.slice(0,3)

    const bestGamesLeft = document.getElementById('best-games-left')
    const besGamesRight = document.getElementById('best-games-right')



    const wrapper = document.getElementById('wrapper')
    const dealsCards = document.getElementById('deals-cards')


    // функия рендера карточек во вкладку в центре внимания
    data.forEach(item => {
        wrapper.innerHTML += `
               <a id="game-link" class="swiper-slide" href="/pages/game/game.html" >
                   <div id="${item.id}" class="cards__card card-link">
                        <p class="cards__card-name">${item.name}</p>
                        <img class="card__img" src="${item.image}" alt="card-image">
                    </div>
                </a>
           `
    });

    dealsData.forEach(item => {
        dealsCards.innerHTML += `
               <a class="link" href="/pages/game/game.html">
                   <div id="${item.id}" class="deals__cards-card card-link">
                        <img class="deals__card" src="${item.image}" alt="baldeurs">
                    </div>
               </a>
           `
    });

    const card = document.querySelectorAll('.card-link')


    card.forEach(item => {
        item.addEventListener('click', function () {
            state().postCardId(item.id);
            let cardId = state().getCardId()
            console.log(cardId)
        })
    })

    const mySwiper = new Swiper('.swiper', {
        slidesPerView: 5,

        pagination: {
            el: '.swiper-pagination'
        }

    });





}
