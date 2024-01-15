import {useAPI} from "/src/js/api/useAPI.js";
import {profileModal} from "../../src/js/modules/profileModal.js";
import {state} from "../../src/js/state.js";
import {search} from "../../src/js/modules/search.js";

import {Swiper} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function gameInit() {
    profileModal();
    await search();
    const gameMainContent = document.getElementById('game-main-content');

    const useAPIStore = useAPI()
    const data = await useAPIStore.getSpotlightCards();

    const idToFind = parseInt(localStorage.getItem('cardId'))

    const find = data.find(card => card.id === idToFind)

    const userData = useAPIStore.getUser();
    const currentUser = JSON.parse(localStorage.getItem('user'))

    const commentData = await useAPIStore.getComments()

    const findComment = commentData.find(comment => comment.id === idToFind)


    async function cardMainRender(){
        gameMainContent.innerHTML = '';

        gameMainContent.innerHTML = `
        <a id="back" class="game-main__content-back-btn">

                    <img src="/src/img/icons/leftV.png" alt="back arrow">
                    Вернуться

                </a>

                <section class="game-main__content-top">

                    <section class="game-main__content-left-side">

                        <img id="gameImage" class="game-main__content-game-image" alt="game image" src="${find.image}">


                        <button id="to-like" class="game-main__content-favorite-btn-text">В избранное</button>


                    </section>

                    <section class="game-main__content-middle">

                        <div class="game-main__content-title">
                            <p class="game-main__content-title-name">${find.name}</p>
                            <p class="game-main__content-title-score">${find.rating}</p>
                        </div>



                        <section class="game-main__content-info">
                            <div class="game-main__content-info-lines">
                                <p class="game-main__content-info-name">Дата выхода</p>
                                <p class="game-main__content-info-text">${find.date}</p>
                            </div>
                            <div class="game-main__content-info-lines">
                                <p class="game-main__content-info-name">Разработчики</p>
                                <p class="game-main__content-info-text">${find.dev}</p>
                            </div>
                            <div class="game-main__content-info-lines">
                                <p class="game-main__content-info-name">Издатель</p>
                                <p class="game-main__content-info-text">${find.publisher}</p>
                            </div>
                            <div class="game-main__content-info-lines">
                                <p class="game-main__content-info-name">Платформы</p>
                                <p class="game-main__content-info-text">${find.platforms}</p>
                            </div>
                            <div class="game-main__content-info-lines">
                                <p class="game-main__content-info-name">Жанры</p>
                                <p class="game-main__content-info-text">${find.genre}</p>
                            </div>
                        </section>

                    </section>

                    <section class="game-main__content-right-side">

                        <div class="game-main__content-right-side-btns">
                            <a id="review-btn" class="game-main__content-btn">
                                Обзор
                            </a>
                            <a id="gellery-btn" class="game-main__content-btn">
                                Галерея
                            </a>
                        </div>

                        <div class="game-main__content-tabs">
                            <button id="tab-min" class="game-main__content-tab game-main__content-tab-active">Минимальные</button>
                            <button id="tab-rec" class="game-main__content-tab">рекомендуемые</button>
                        </div>

                        <div id="tab-min-content" class="game-main__content-tabs-content">
                            <h3 id="tab-min-title" class="game-main__content-tabs-content-title">Минимальные</h3>
                            <p id="tab-min-text" class="game-main__content-tabs-content-text">${find.minSys}</p>
                        </div>

                        <div id="tab-rec-content" class="game-main__content-tabs-content">
                            <h3 id="tab-rec-title" class="game-main__content-tabs-content-title">Рекомендуемые</h3>
                            <p id="tab-rec-text" class="game-main__content-tabs-content-text">${find.recSys}</p>
                        </div>



                    </section>

                </section>

                <section class="game-main__content-description">

                    <h3 class="game-main__content-description-title">Описание</h3>
                    <p class="game-main__content-description-text">${find.description}</p>

                </section>
                <section class="game-main__content-comments">
                        
                        <div id="writeNewCommentWrapper" class="game-main__content-comments-add-comment">
                            <input id="addNewComment" type="text" placeholder="Добавить комментарий">
                            <button id="addNewCommentBtn">Добавить</button>
                        </div>
                        <span class="game__comments-error error"></span>
                    <div id="commentWrapper" class="game-main__content-comments-wrapper">

                    </div>
                </section>
    `
    }
    await cardMainRender()

    const commentWrapper = document.getElementById('commentWrapper');
    const addNewComment = document.getElementById('addNewComment');
    const newCommentWrapper = document.getElementById('writeNewCommentWrapper')





    const addNewCommentBtn = document.getElementById('addNewCommentBtn');

    const getComments = await useAPIStore.getComments()
    if(!JSON.parse(localStorage.getItem('user'))){
        newCommentWrapper.style.display = 'none'
    }

    const comments = []
    getComments.forEach(function(comment){
        if (comment.gameId === idToFind){
            comments.push(comment)
        }
    })
    comments.reverse()
    comments.forEach(item => commentWrapper.innerHTML += `<div class="game-main__content-comments-comment">
                            <div class="game-main__content-comments-comment-profile">
                                <p class="game-main__content-comments-comment-name">${item.userNickname}</p>
                                <img class="game-main__content-comments-comment-avatar" src="${item.userAvatar}" alt="img">
                            </div>
                            <p class="game-main__content-comments-comment-text">${item.text}</p>
                        </div>
    `)
    addNewCommentBtn.addEventListener('click', async function() {
        const newCommentText = addNewComment.value.trim()
        const error = document.querySelector('.game__comments-error')
        if (newCommentText){
            error.innerHTML=''
            const newComment = document.createElement('div')
            newComment.classList.add('game-main__content-comments-comment')
            newComment.innerHTML = `
        <div class="game-main__content-comments-comment-profile">
                                <p class="game-main__content-comments-comment-name">${currentUser.nickname}</p>
                                <img class="game-main__content-comments-comment-avatar" src="${currentUser.avatar}" alt="img">
                            </div>
                            <p class="game-main__content-comments-comment-text">${addNewComment.value}</p>
                        `

            const newUserComment = {
                id:Date.now().toString(),
                gameId: idToFind,
                userNickname: currentUser.nickname,
                userAvatar: currentUser.avatar,
                text: newCommentText
            }
            await useAPIStore.postComment(newUserComment)
            commentWrapper.prepend(newComment)
            addNewComment.value = ''
        }else {

            error.innerHTML = 'Необходимо заполнить поле';
            error.style.cssText = `
              color: #A73535;
              padding-top: 1px;
              text-align: left;
            `
        }
    })





    const back = document.getElementById('back');
    back.addEventListener('click', function () {
        window.history.back();
        // localStorage.removeItem('cardId');
    })

    const toLike = document.getElementById('to-like');

    const reviewBtn = document.getElementById('review-btn')
    const galleryBtn = document.getElementById('gellery-btn');

    async function galleryContentRender() {
        gameMainContent.innerHTML = `
         <a id="review-back" class="game-main__content-back-btn">
            <img src="/src/img/icons/leftV.png" alt="back arrow">
            Вернуться
        </a>
        <section class="swiper gallery__content">
            <section id="gallery-wrapper" class="swiper-wrapper gallery__container">
                    
            
            </section>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
            
        </section>        
        `

        const galleryWrapper = document.getElementById('gallery-wrapper');
        find.gallery.forEach(item => {
            galleryWrapper.innerHTML += `
                <img src="${item}" class="swiper-slide gallery-image" alt="image">
            `
        })

        const mySwiper = new Swiper('.swiper', {
            slidesPerView: 1,
            modules: [Navigation, Pagination],
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },

        });
        mySwiper.update();








    }
    async function reviewContentRender() {
        const dataReview = await useAPIStore.getReview();

        const idToFind = parseInt(localStorage.getItem('cardId'))

        const findReview = dataReview.find(review => review.gameId === idToFind)

        gameMainContent.innerHTML = `
        <a id="review-back" class="game-main__content-back-btn">
            <img src="/src/img/icons/leftV.png" alt="back arrow">
            Вернуться
        </a>
        <div class="game-main__content-review-content">
            <h3 class="game-main__content-review-content-header">${findReview.header}</h3>
            <img class="game-main__content-review-content-image" src="${findReview.image}" alt="image">
            <p class="game-main__content-review-content-text">${findReview.text}</p>
        </div>
        `


    }

    async function switchCards() {
        const reviewBack = document.getElementById('review-back');
        reviewBack.addEventListener('click', async function() {
             await cardMainRender()
            location.reload()
        })
        console.log(reviewBack)
    }


    reviewBtn.addEventListener('click', async function () {
        await reviewContentRender()
        await switchCards()
    })

    galleryBtn.addEventListener('click', async  function() {
        await galleryContentRender()
        await switchCards()
    })


    const gameId = await useAPI().getSpotlightCards()

    toLike.addEventListener('click', async function () {


        const user = state().getUser()






        // функция удаления игры из избранного
        if (toLike.classList.contains('game-main__content-favorite-btn-text-active')) {
            toLike.classList.remove('game-main__content-favorite-btn-text-active');
            toLike.innerHTML = '';
            toLike.innerHTML = 'В избранное';

            const user = state().getUser()
            const cardId = state().getCardId()

            user.likedGames.pop(cardId)

            const editData = {
                id: user.id,
                login: user.login,
                password: user.password,
                likedGames: user.likedGames,
                isAdmin: user.isAdmin
            }


            await useAPI().addLiked(user.id, editData)

            const newUser = await useAPI().getUser(user.login, user.password)
            localStorage.setItem('user', JSON.stringify(newUser[0]))

            // функция добавления игры в избранное
        } else {
            toLike.classList.add('game-main__content-favorite-btn-text-active');
            toLike.innerHTML = '';
            toLike.innerHTML = 'В избранном'


            const user = state().getUser()
            const cardId = state().getCardId()

            user.likedGames.push(cardId)

            const editData = {
                id: user.id,
                login: user.login,
                password: user.password,
                likedGames: user.likedGames,
                isAdmin: user.isAdmin
            }


            await useAPI().addLiked(user.id, editData)
            const newUser = await useAPI().getUser(user.login, user.password)
            localStorage.setItem('user', JSON.stringify(newUser[0]))



        }


    })

        const user = state().getUser()
        const cardId = state().getCardId()


        user.likedGames.some((item) => {
            console.log(item, cardId)
            if (item === cardId)  {
                toLike.classList.add('game-main__content-favorite-btn-text-active');
                toLike.innerHTML = 'В избранном'
                return true
            } else {
                toLike.classList.remove('game-main__content-favorite-btn-text-active');
                toLike.innerHTML = 'В избранное';
            }

        })









    const tabMin = document.getElementById('tab-min');
    const tabRec = document.getElementById('tab-rec');

    const tabMinText = document.getElementById('tab-min-text');
    const tabRecText = document.getElementById('tab-rec-text');

    const tabMinContent = document.getElementById('tab-min-content');
    const tabRecContent = document.getElementById('tab-rec-content');

    tabMin.addEventListener('click', function () {
        tabRec.classList.remove('game-main__content-tab-active')
        tabMin.classList.add('game-main__content-tab-active');
        tabMinContent.style.display = "flex"
        tabRecContent.style.display = "none"
    })

    tabRec.addEventListener('click', function () {
        tabMin.classList.remove('game-main__content-tab-active')
        tabRec.classList.add('game-main__content-tab-active');
        tabRecContent.style.display = "flex"
        tabMinContent.style.display = "none"
        console.log(1)

    })

}

await gameInit()