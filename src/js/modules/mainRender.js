import {renderSpotlight} from "./renderSpotlight.js";
import {useAPI} from "../api/useAPI.js";
import {state} from "../state.js";


export async function mainRender() {
    const bestGamesTab = document.getElementById('best-games-tab');
    const catalogueTab = document.getElementById('catalogue-tab');
    const mainTabContent = document.getElementById('main-tab-content');




    function bestContent () {
        mainTabContent.innerHTML = `
            <section class="best-games">

                    <div class="best-games__container">
                    
                                    <div class="best-games__title">

                                    <p class="best-games__title-title">В центре внимания</p>

                                    <div class="best-games__title-pagination">

                                   
                                    </div>

                                </div>

                        <section class="best-games__content swiper">

                            <section id="wrapper" class="best-games__spotlight swiper-wrapper">

                                <div class="swiper-pagination"></div>
                            </section>

                        </section>
                    </div>

                </section>

                <section class="deals">

                    <div class="best-games__container">

                        <section class="best-games__content">

                            <section class="best-games__spotlight">

                                <div class="best-games__title">

                                    <p class="best-games__title-title">Во что поиграть</p>

                                   

                                </div>

                                <section id="deals-cards" class="deals__cards">

                                    

                                </section>

                            </section>

                        </section>
                    </div>

                </section>
        `
        const card = document.querySelectorAll('.card-link')
        card.forEach(item => {

            item.addEventListener('click', function () {
                state().postCardId(item.id);
            })
        })

        renderSpotlight()
    }

    async function catalogue() {
        const useAPIStore = useAPI()

        let data = await useAPIStore.getSpotlightCards();

        let filteredData = data;
        mainTabContent.innerHTML = '';

        mainTabContent.innerHTML = `
            <div class="catalogue__container">
                <div class="catalogue__filter-and-sort">
                    <div class="catalogue__filter-buttons">
                    <div class="dropdown" id="platformDropdown">
                        <button id="choosePlatform">платформы</button>
                        <div class="dropdown-content" id="platformOptions">
                                <label><input name="platforms" value="PC"  type="checkbox"> PC</label>
                                <label><input name="platforms" value="Apple Mac"  type="checkbox"> Apple Mac</label>
                                <label><input name="platforms" value="Sony Playstation"  type="checkbox"> Sony Playstation</label>
                                <label><input name="platforms" value="Sony Playstation 2"  type="checkbox"> Sony Playstation 2</label>
                                <label><input name="platforms" value="Sony Playstation 3"  type="checkbox"> Sony Playstation 3</label>
                                <label><input name="platforms" value="Sony Playstation 4"  type="checkbox"> Sony Playstation 4</label>
                                <label><input name="platforms" value="Sony Playstation 5"  type="checkbox"> Sony Playstation 5</label>
                                <label><input name="platforms" value="Sony Playstation Protable"  type="checkbox"> Sony Playstation Protable</label>
                                <label><input name="platforms" value="Sony Playstation Vita"  type="checkbox"> Sony Playstation Vita</label>
                                <label><input name="platforms" value="Microsoft Xbox"  type="checkbox"> Microsoft Xbox</label>
                                <label><input name="platforms" value="Microsoft Xbox 360"  type="checkbox"> Microsoft Xbox 360</label>
                                <label><input name="platforms" value="Microsoft Xbox One"  type="checkbox"> Microsoft Xbox One</label>
                                <label><input name="platforms" value="Microsoft Xbox Series X"  type="checkbox"> Microsoft Xbox Series X</label>
                                <label><input name="platforms" value="Nintendo Game Boy"  type="checkbox"> Nintendo Game Boy</label>
                                <label><input name="platforms" value="Nintendo Game Boy Color"  type="checkbox"> Nintendo Game Boy</label>
                                <label><input name="platforms" value="Nintendo Game Boy Advance"  type="checkbox"> Nintendo Game Boy</label>
                                <label><input name="platforms" value="Nintendo DS"  type="checkbox"> Nintendo DS</label>
                                <label><input name="platforms" value="Nintendo 3DS"  type="checkbox"> Nintendo 3DS</label>
                                <label><input name="platforms" value="Nintendo Entertainment System"  type="checkbox"> Nintendo Entertainment System</label>
                                <label><input name="platforms" value="Nintendo 64"  type="checkbox"> Nintendo 64</label>
                                <label><input name="platforms" value="Nintendo GameCube"  type="checkbox"> Nintendo GameCube</label>
                                <label><input name="platforms" value="Nintendo Wii"  type="checkbox"> Nintendo Wii</label>
                                <label><input name="platforms" value="Nintendo Wii U"  type="checkbox"> Nintendo Wii U</label>
                                <label><input name="platforms" value="Nintendo Switch"  type="checkbox"> Nintendo Switch</label>
                                <label><input name="platforms" value="Apple IOS"  type="checkbox"> Apple IOS</label>
                                <label><input name="platforms" value="Android"  type="checkbox"> Android</label>
                                <label><input name="platforms" value="Sega Master System"  type="checkbox"> Sega Master System</label>
                                <label><input name="platforms" value="Sega Mega Drive/Genesis"  type="checkbox"> Sega Mega Drive/Genesis</label>
                                <label><input name="platforms" value="Sega Gear"  type="checkbox"> Sega Gear</label>
                                <label><input name="platforms" value="Sega Nomad"  type="checkbox"> Sega Nomad</label>
                                <label><input name="platforms" value="Sega CD"  type="checkbox"> Sega CD</label>
                                <label><input name="platforms" value="Sega 32X"  type="checkbox"> Sega 32X</label>
                                <label><input name="platforms" value="Sega Saturn"  type="checkbox"> Sega Saturn</label>
                                <label><input name="platforms" value="Steam Deck"  type="checkbox"> Steam Deck</label>
                            
                        </div>
                    </div>  
                    <div class="dropdown" id="genreDropdown">
                        <button id="chooseGenre">Жанры</button>
                        <div class="dropdown-content" id="genreOptions">
                            <label>
                                <input type="checkbox" name="genre" value="Экшн">Экшн
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Приключение">Приключение
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Аркада">Аркада
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Карточная">Карточная
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Казино">Казино
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Казуальный">Казуальный
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Обучающее">Обучающее
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Файтинг">Файтинг
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Головоломка">Головоломка
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="ММО">ММО
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Онлайн">Онлайн
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Гонка">Гонка
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Ролевая">Ролевая
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Симулятор">Симулятор
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Спортивная">Спортивная
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Стратегия">Стратегия
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Визуальная новелла">Визуальная новелла
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Зомби">Зомби
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Хоррор">Хоррор
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="Песочница">Песочница
                            </label>
                        </div>
                    </div> 
                    </div>
                        <select class="catalogue__sort" name="" id="catalogue-sort">
                            <option class="catalogue__sort-option" value="noSort" selected>Без сортировки</option>
                            <option class="catalogue__sort-option" value="rating">По рейтингу</option>
                            <option class="catalogue__sort-option" value="new">Сначала новые</option>
                            <option class="catalogue__sort-option" value="old">Сначала старые</option>
                        </select>            
                </div>
                
            </div>
        `



        const platformCheckboxControl = function () {
            const choosePlatform = document.getElementById('choosePlatform');
            choosePlatform.addEventListener('click', function () {


                function toggleDropdown() {
                    const dropdownContent = document.getElementById("platformOptions");
                    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
                }

                document.addEventListener("click", function(event) {
                    const dropdown = document.getElementById("platformDropdown");
                    if (!dropdown.contains(event.target)) {
                        document.getElementById("platformOptions").style.display = "none";
                    }
                });

                document.getElementById("platformOptions").addEventListener("click", function(event) {
                    event.stopPropagation(); // Предотвратить закрытие при клике внутри выпадающего списка
                });
                toggleDropdown()
                let counter = 0;
                const platforms = document.querySelectorAll('input[name="platforms"]')
                platforms.forEach(item => item.addEventListener('click',function (){
                    filteredData = []
                    if (item.checked){
                        counter+=1
                        console.log(counter)
                        data.forEach(function (game){
                            if (game.platforms.includes(item.value)){
                                filteredData.push(game)
                            }
                        })
                        catalogueContent.innerHTML = ''
                        filteredData.forEach(item => {
                            catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                        });
                        const card = document.querySelectorAll('.card-link')
                        console.log(card)
                        // функция перехода на страницу с игрой
                        card.forEach(item => {
                            console.log(item.id)
                            item.addEventListener('click', function () {
                                state().postCardId(item.id);
                            })
                        })
                    }else{
                        counter-=1;
                    }
                    if (counter === 0){
                        filteredData = data
                        catalogueContent.innerHTML = '';
                        console.log(catalogueContent.innerHTML)
                        filteredData.forEach(item => {
                            catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                        });
                        const card = document.querySelectorAll('.card-link')

                        // функция перехода на страницу с игрой
                        card.forEach(item => {
                            item.addEventListener('click', function () {
                                state().postCardId(item.id);
                                let cardId = state().getCardId()
                            })
                        })
                    }
                }))
            })



        }
        const genreCheckboxControl = function () {
            const chooseGenre = document.getElementById('chooseGenre');
            chooseGenre.addEventListener('click', function () {

                function toggleDropdown() {
                    const dropdownContent = document.getElementById("genreOptions");
                    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
                }

                document.addEventListener("click", function(event) {
                    const dropdown = document.getElementById("genreDropdown");
                    if (!dropdown.contains(event.target)) {
                        document.getElementById("genreOptions").style.display = "none";
                    }
                });

                document.getElementById("genreOptions").addEventListener("click", function(event) {
                    event.stopPropagation(); // Предотвратить закрытие при клике внутри выпадающего списка
                });
                toggleDropdown()
                let counter = 0;
                const genre = document.querySelectorAll('input[name="genre"]')
                genre.forEach(item => item.addEventListener('click',function (){
                    filteredData = []
                    if (item.checked){
                        counter+=1
                        console.log(counter)
                        data.forEach(function (game){
                            if (game.genre.includes(item.value)){
                                filteredData.push(game)
                            }
                        })
                        catalogueContent.innerHTML = ''
                        filteredData.forEach(item => {
                            catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                        });
                        const card = document.querySelectorAll('.card-link')

                        // функция перехода на страницу с игрой
                        card.forEach(item => {
                            item.addEventListener('click', function () {
                                state().postCardId(item.id);
                                let cardId = state().getCardId()
                            })
                        })
                    }else{
                        counter-=1;
                    }
                    if (counter === 0){
                        filteredData = data
                        catalogueContent.innerHTML = '';
                        console.log(catalogueContent.innerHTML)
                        filteredData.forEach(item => {
                            catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                        });
                        const card = document.querySelectorAll('.card-link')

                        // функция перехода на страницу с игрой
                        card.forEach(item => {
                            item.addEventListener('click', function () {
                                state().postCardId(item.id);
                                let cardId = state().getCardId()
                            })
                        })
                    }
                }))
            })



        }
        genreCheckboxControl()
        platformCheckboxControl()


        const catalogueContainer = document.createElement('div');
        catalogueContainer.classList.add('catalogue__container');
        mainTabContent.append(catalogueContainer)

        const catalogueContent = document.createElement('div');
        catalogueContent.classList.add('catalogue__content');
        catalogueContainer.append(catalogueContent)



        filteredData.forEach(item => {
            catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
        `
        });
        const card = document.querySelectorAll('.card-link')

        card.forEach(item => {
            item.addEventListener('click', function () {
                state().postCardId(item.id);
                let cardId = state().getCardId()
            })
        })

        async function sort() {
            function compareByRating(a, b) {

                const ratingA = parseInt(a.rating, 10)
                const ratingB = parseInt(b.rating, 10)
                if (ratingA < ratingB) {
                    return 1;
                } else if (ratingA > ratingB) {
                    return -1;
                } else {
                    return 0;
                }
            }
            function compareByDate(a, b) {

                const ratingA = parseInt(a.date, 10)
                const ratingB = parseInt(b.date, 10)
                if (ratingA < ratingB) {
                    return 1;
                } else if (ratingA > ratingB) {
                    return -1;
                } else {
                    return 0;
                }
            }

            const catalogueSort = document.getElementById('catalogue-sort');
            let selectedValueCheck
            catalogueSort.addEventListener('change', async function () {
                const selectedOption = catalogueSort.options[catalogueSort.selectedIndex];
                const selectedValue = selectedOption.value;
                selectedValueCheck = selectedValue
                console.log(selectedValue);



                if (selectedValueCheck === 'rating') {
                    filteredData.sort(compareByRating);
                    catalogueContent.innerHTML = ''
                    filteredData.forEach(item => {
                        catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                    });
                    const card = document.querySelectorAll('.card-link')

                    // функция перехода на страницу с игрой
                    card.forEach(item => {
                        item.addEventListener('click', function () {
                            state().postCardId(item.id);
                            let cardId = state().getCardId()
                            console.log(cardId)
                        })
                    })
                } else if (selectedValue === 'new') {
                    filteredData.sort(compareByDate);
                    catalogueContent.innerHTML = ''
                    filteredData.forEach(item => {
                        catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                    });
                    const card = document.querySelectorAll('.card-link')

                    // функция перехода на страницу с игрой
                    card.forEach(item => {
                        item.addEventListener('click', function () {
                            state().postCardId(item.id);
                            let cardId = state().getCardId()
                            console.log(cardId)
                        })
                    })
                }else if (selectedValue === 'old') {
                    filteredData.sort(compareByDate);
                    filteredData.reverse()
                    catalogueContent.innerHTML = ''
                    filteredData.forEach(item => {
                        catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                    });
                    const card = document.querySelectorAll('.card-link')

                    // функция перехода на страницу с игрой
                    card.forEach(item => {
                        item.addEventListener('click', function () {
                            state().postCardId(item.id);
                            let cardId = state().getCardId()
                            console.log(cardId)
                        })
                    })
                } else if (selectedValue === 'noSort') {
                    data = await useAPIStore.getSpotlightCards();
                    catalogueContent.innerHTML = ''
                    data.forEach(item => {
                        catalogueContent.innerHTML += `
                            <a id="game-link" href="/pages/game/game.html" >
                                <div id="${item.id}" class="cards__card card-link">
                                    <p class="cards__card-name">${item.name}</p>
                                    <img class="card__img" src="${item.image}" alt="card-image">
                                </div>
                            </a>
                    `
                    });
                    console.log(data)
                    const card = document.querySelectorAll('.card-link')


                    card.forEach(item => {
                        item.addEventListener('click', function () {
                            state().postCardId(item.id);
                            let cardId = state().getCardId()
                            console.log(cardId)
                        })
                    })
                }
            })







        }

        await sort()



        window.addEventListener('beforeunload', function() {
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            sessionStorage.setItem('scrollPosition', scrollPosition);

        });

        // Восстановление положения при загрузке страницы
        window.addEventListener('load', function() {
            const savedScrollPosition = sessionStorage.getItem('scrollPosition');
            if (savedScrollPosition) {
                window.scrollTo(0, savedScrollPosition);

            }
        });


    }







    bestGamesTab.addEventListener('click', function () {
        bestGamesTab.classList.add('main__tab-btn-active')
        catalogueTab.classList.remove('main__tab-btn-active')

        bestContent();




    })

    catalogueTab.addEventListener('click', function () {
        bestGamesTab.classList.remove('main__tab-btn-active')
        catalogueTab.classList.add('main__tab-btn-active')

        catalogue()
    })



    bestContent();

}