import {profileModal} from "../../src/js/modules/profileModal.js";
import {search} from "../../src/js/modules/search.js";
import {useAPI} from "../../src/js/api/useAPI.js";



export async function admin() {
    profileModal();
    await search();

    const contentRender = document.getElementById('main__admin-content-render');



    const tabAdd = function () {
        const contentAdd = document.createElement('section');
        contentAdd.classList.add('main__admin-content-add');

        contentAdd.innerHTML = `<form id="form" class="main__admin-content-add-form" method="post">

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Название игры</span>
                            <input id="game-name" class="main__admin-content-add-input-content input-send" type="text" name="name">
                        </label>



                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Изображение игры(ссылка)</span>
                            <input id="game-image" class="main__admin-content-add-input-content input-send" type="url" name="image">
                        </label>

                          
                            
                            <label id="gallery-inputs" class="main__admin-content-add-input">
                                <span class="main__admin-content-add-input-text">Изображения для галереи</span>
                                <input class="game-gallery main__admin-content-add-input-content input-send" type="text" name="gallery">
                                <div class="main__admin-content-add-input-btns-gallery gallery__edited-btns">
                                    <button id="gallery-add-input" class="main__admin-content-add-input-btns-plus main__admin-content-add-input-btn">
                                        Добавить поле
                                    </button>
                                    <button id="gallery-remove-input" class="main__admin-content-add-input-btns-minus main__admin-content-add-input-btn">
                                        Убрать поле
                                    </button>
                                </div>
                            </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Рейтинг игры</span>
                            <input id="game-rating" class="main__admin-content-add-input-content input-send" type="number" name="rating" min="1" max="100">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Дата выхода игры</span>
                            <input id="game-date" class="main__admin-content-add-input-content input-send" type="date" name="date">
                        </label>

                        <label id="dev-inputs" class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Разработчики игры</span>
                            <input class="game-dev main__admin-content-add-input-content input-send" type="text" name="dev">
                            <div class="main__admin-content-add-input-btns">
                                <button id="dev-add-input" class="main__admin-content-add-input-btns-plus main__admin-content-add-input-btn">
                                    Добавить поле
                                </button>
                                <button id="dev-remove-input" class="main__admin-content-add-input-btns-minus main__admin-content-add-input-btn">
                                    Убрать поле
                                </button>
                            </div>
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Издатель игры</span>
                            <input id="game-publisher" class="main__admin-content-add-input-content input-send" type="text" name="publisher">
                        </label>

                        <div class="main__admin-content-add-input-genre">
                            <span class="main__admin-content-add-input-text">платформы</span>
                            <fieldset class="main__admin-content-add-inputs-genre">
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="PC"  type="checkbox"> PC</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple Mac"  type="checkbox"> Apple Mac</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation"  type="checkbox"> Sony Playstation</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 2"  type="checkbox"> Sony Playstation 2</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 3"  type="checkbox"> Sony Playstation 3</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 4"  type="checkbox"> Sony Playstation 4</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 5"  type="checkbox"> Sony Playstation 5</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Protable"  type="checkbox"> Sony Playstation Protable</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Vita"  type="checkbox"> Sony Playstation Vita</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox"  type="checkbox"> Microsoft Xbox</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox 360"  type="checkbox"> Microsoft Xbox 360</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox One"  type="checkbox"> Microsoft Xbox One</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox Series X"  type="checkbox"> Microsoft Xbox Series X</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Color"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Advance"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo DS"  type="checkbox"> Nintendo DS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 3DS"  type="checkbox"> Nintendo 3DS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Entertainment System"  type="checkbox"> Nintendo Entertainment System</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 64"  type="checkbox"> Nintendo 64</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo GameCube"  type="checkbox"> Nintendo GameCube</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii"  type="checkbox"> Nintendo Wii</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii U"  type="checkbox"> Nintendo Wii U</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Switch"  type="checkbox"> Nintendo Switch</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple IOS"  type="checkbox"> Apple IOS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Android"  type="checkbox"> Android</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Master System"  type="checkbox"> Sega Master System</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Mega Drive/Genesis"  type="checkbox"> Sega Mega Drive/Genesis</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Gear"  type="checkbox"> Sega Gear</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Nomad"  type="checkbox"> Sega Nomad</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega CD"  type="checkbox"> Sega CD</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega 32X"  type="checkbox"> Sega 32X</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Saturn"  type="checkbox"> Sega Saturn</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Steam Deck"  type="checkbox"> Steam Deck</label>
                            </fieldset>
                        </div>

                        <div class="main__admin-content-add-input-genre">
                            <span class="main__admin-content-add-input-text">Жанры игры</span>
                            <fieldset class="main__admin-content-add-inputs-genre">
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Экшн"  type="checkbox"> Экшн</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Приключение"  type="checkbox"> Приключение</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Аркада"  type="checkbox"> Аркада</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Карточная"  type="checkbox"> Карточная</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казино"  type="checkbox"> Казино</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казуальный"  type="checkbox"> Казуальный</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Обучающее"  type="checkbox"> Обучающее</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Файтинг"  type="checkbox"> Файтинг</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Головоломка"  type="checkbox"> Головоломка</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="ММО"  type="checkbox"> ММО</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Онлайн"  type="checkbox"> Онлайн</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Гонка"  type="checkbox"> Гонка</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Ролевая"  type="checkbox"> Ролевая</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Симулятор"  type="checkbox"> Симулятор</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Спортивная"  type="checkbox"> Спортивная</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Стратегия"  type="checkbox"> Стратегия</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Визуальная новелла"  type="checkbox"> Визуальная новелла</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Зомби"  type="checkbox"> Зомби</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Хоррор"  type="checkbox"> Хоррор</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Песочница"  type="checkbox"> Песочница</label>
                            </fieldset>
                        </div>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Минимальные системные требования</span>
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="ОС">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Процессор">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Память">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Видеокарта">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Место на жестком диске">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Звуковая капта">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Рекомендуемые системные требования</span>
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="ОС">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Процессор">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Память">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Видеокарта">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Место на жестком диске">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Звуковая капта">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">описание игры</span>
                            <input id="game-description" class="main__admin-content-add-input-content input-send" type="text" name="description">
                        </label>

                       
                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">обзор игры</span>
                            <input id="review-header" placeholder="Заголовок" class="game-review main__admin-content-add-input-content input-send" type="text" name="header">
                            <input id="review-image" placeholder="URL картинки" class="game-review main__admin-content-add-input-content input-send" type="url" name="image">
                            <textarea id="review-text" placeholder="Текст" class="game-review main__admin-content-add-input-content input-send main__admin-content-add-input-content-textarea " name="text"></textarea>
                        </label>

                        <button id="submit-btn" class="main__admin-content-submit">Добавить</button>

                        <p class="admin-error"></p>
                    </form>`



        const checkBoxControl = function () {
                function setChecked(target) {
                    const checkboxes = target.querySelectorAll("input[type='checkbox']:checked");
                    const selectOption = target.querySelector('.main__admin-content-add-inputs-genre select option:first-child');

                    if (checkboxes.length) {
                        selectOption.textContent = 'Выбрано: ' + checkboxes.length;
                    } else {
                        selectOption.textContent = 'Выберите из списка';
                    }
                }

                document.querySelectorAll('.main__admin-content-add-inputs-genre').forEach(function(element) {
                    const popup = document.createElement('div');
                    popup.className = 'main__admin-content-add-inputs-genre-popup';
                    popup.innerHTML = element.innerHTML;
                    element.innerHTML = '';

                    const control = document.createElement('div');
                    control.className = 'main__admin-content-add-inputs-genre-control';
                    control.innerHTML =
                        '<select class="form-control"><option></option></select>' +
                        '<div class="main__admin-content-add-inputs-genre-control-over"></div>';

                    element.appendChild(control);
                    element.appendChild(popup);

                    setChecked(element);

                    element.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
                        checkbox.addEventListener('click', function() {
                            setChecked(element);
                        });
                    });

                    control.addEventListener('click', function() {
                        const otherPopups = document.querySelectorAll('.main__admin-content-add-inputs-genre-popup:not(:last-child)');

                        otherPopups.forEach(function(otherPopup) {
                            otherPopup.style.display = 'none';
                        });

                        if (popup.style.display === 'none') {
                            popup.style.display = 'block';
                            control.querySelector('select').focus();
                        } else {
                            popup.style.display = 'none';
                        }
                    });
                });

                document.addEventListener('click', function(e) {
                    const target = e.target;

                    if (!target.closest('.main__admin-content-add-inputs-genre')) {
                        document.querySelectorAll('.main__admin-content-add-inputs-genre-popup').forEach(function(popup) {
                            popup.style.display = 'none';
                        });
                    }
                });

            const galleryAddInput = document.getElementById('gallery-add-input');
            const galleryRemoveInput = document.getElementById('gallery-remove-input');

            const galleryInputs = document.getElementById('gallery-inputs');
            const galleryButtons = document.querySelector('.main__admin-content-add-input-btns-gallery')
            function addInputGallery () {
                const newGalleryInput = document.createElement('input');
                newGalleryInput.type = 'text';
                newGalleryInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-gallery')
                newGalleryInput.name = 'dev'

                galleryInputs.insertBefore(newGalleryInput, galleryButtons)
            }

            function removeInputGallery () {
                if (galleryInputs.childNodes.length > 7) {
                    const newInputRemove = galleryInputs.childNodes[galleryInputs.childNodes.length - 3];

                    galleryInputs.removeChild(newInputRemove)
                }

            }

            galleryAddInput.addEventListener('click', function () {
                addInputGallery();
            })

            galleryRemoveInput.addEventListener('click', function () {
                removeInputGallery();
            })

            const devAddInput = document.getElementById('dev-add-input');
            const devRemoveInput = document.getElementById('dev-remove-input');

            const devInputs = document.getElementById('dev-inputs');
            const devButtons = document.querySelector('.main__admin-content-add-input-btns')
            function addInputDev () {
                const newDevInput = document.createElement('input');
                newDevInput.type = 'text';
                newDevInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-dev')
                newDevInput.name = 'dev'

                devInputs.insertBefore(newDevInput, devButtons)
            }

            function removeInputDev () {
                if (devInputs.childNodes.length > 7) {
                    const newInputRemove = devInputs.childNodes[devInputs.childNodes.length - 3];

                    devInputs.removeChild(newInputRemove)
                }

            }

            devAddInput.addEventListener('click', function () {
                addInputDev();
            })

            devRemoveInput.addEventListener('click', function () {
                removeInputDev();
            })

        }



        contentRender.append(contentAdd);
        checkBoxControl()

        const submitBtn = document.getElementById('submit-btn');
        const inputValue = document.querySelectorAll('.input-send')

        const inputs = document.querySelectorAll('input');
        const inputValues = []



        document.getElementById('form').addEventListener('submit', function (event) {
            event.preventDefault();

        })

        async function getInputValues() {


            const timestamp = Date.now();
            const random = Math.random().toString(36).substring(2, 8).length;
            const newGame = {
                id: parseInt(`${timestamp}${random}`),
                name: document.getElementById('game-name').value,
                image: document.getElementById('game-image').value,
                gallery: [],
                rating: document.getElementById('game-rating').value,
                date: document.getElementById('game-date').value,
                dev: [],
                publisher: document.getElementById('game-publisher').value,
                platforms: [],
                genre: [],
                minSys: [],
                recSys: [],
                description: document.getElementById('game-description').value,
            };

            const newReview = {
                gameId: newGame.id,
                header: document.getElementById('review-header').value,
                image: document.getElementById('review-image').value,
                text: document.getElementById('review-text').value,
            }

            let genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
            genreCheckboxes.forEach(function(checkbox) {
                newGame.genre.push(checkbox.value);
            });

            let platformCheckboxes = document.querySelectorAll('input[name="platforms"]:checked');
            platformCheckboxes.forEach(function(checkbox) {
                newGame.platforms.push(checkbox.value);
            });

            let devInputs = document.querySelectorAll('.game-dev');
            devInputs.forEach(function(input) {
                newGame.dev.push(input.value);
            });

            let galleryInputs = document.querySelectorAll('.game-gallery');
            galleryInputs.forEach(function(input) {
                newGame.gallery.push(input.value);
            });

            let recSysInputs = document.querySelectorAll('.game-recSys');
            recSysInputs.forEach(function(input) {
                newGame.minSys.push(input.value);
            });

            let minSysInputs = document.querySelectorAll('.game-minSys');
            minSysInputs.forEach(function(input) {
                newGame.recSys.push(input.value);
            });



            await useAPI().postNewGame(newGame);
            await useAPI().postNewReview(newReview)
            submitBtn.innerHTML = 'Добавлено'
            submitBtn.style.backgroundColor = 'rgba(24, 133, 54, 1)'

        }



        function checkboxGenreCheck() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"][name="genre"]')
            for (const checkbox of checkboxes) {
                if (checkbox.checked) {
                    return true
                }
            }

            return false

        }



        function checkboxPlatformCheck() {

            const checkboxes = document.querySelectorAll('input[type="checkbox"][name="platforms"]')

            for (const checkbox of checkboxes) {
                if (checkbox.checked) {
                    return true
                }
            }

            return false

        }

        const adminError = document.querySelector('.admin-error')

        async function adminFormValidate() {
            const form = document.getElementById('form');
            const formCheck = document.querySelectorAll('.game-dev, .game-recSys, .game-minSys, #game-name, #game-image, #rating, #game-date, #game-publisher, #game-description')

            function isValidFormCheck(formCheck) {
                const pattern = /^[a-zA-Z0-9а-яА-Я]+$/;
                return pattern.test(formCheck);
            }

            for (const element of formCheck) {
                if(!element.value) {
                    adminError.innerHTML = 'Необходимо заполнить все поля'
                    return
                }

                // if (!isValidFormCheck(formCheck)) {
                //     adminError.innerHTML = "подчеркнутые поля должны состоять из латиницы, кирилицы и цифр"
                //
                //     return
                // }

                if (!checkboxGenreCheck()) {
                    adminError.innerHTML = 'Необходимо выбрать хотя бы один жанр'
                    return
                }

                if (!checkboxPlatformCheck()) {
                    adminError.innerHTML = 'Необходимо выбрать хотя бы одну платформу'
                    return
                }
            }

            await getInputValues()
            adminError.innerHTML = ''
            setTimeout(reload, 500)

        }

        function reload(){
            location.reload()
        }



        submitBtn.addEventListener('click', async function () {
            await adminFormValidate()
        })
    }
    tabAdd()
    // const gameEdit = function () {
    //     const contentAdd = document.createElement('section');
    //     contentAdd.classList.add('main__admin-content-add');
    //
    //     contentAdd.innerHTML = `<form id="form" class="main__admin-content-add-form" method="post">
    //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Название игры</span>
    //                 //         <input id="game-name" class="main__admin-content-add-input-content input-send" type="text" name="name">
    //                 //     </label>
    //                 //
    //                 //
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Изображение игры(ссылка)</span>
    //                 //         <input id="game-image" class="main__admin-content-add-input-content input-send" type="url" name="image">
    //                 //         <div id="game-preview"></div>
    //                 //     </label>
    //                 //
    //                 //         <label class="main__admin-content-add-input">
    //                 //             <span class="main__admin-content-add-input-text">Изображения для галлереи</span>
    //                 //             <div class="main__admin-content-add-input-wrapper">
    //                 //                 <input id="game-gallery" class="main__admin-content-add-input-wrapper-content-file input-send" name="gallery" type="file" multiple>
    //                 //                 <span class="main__admin-content-add-input-wrapper-span">Выберете файл</span>
    //                 //             </div>
    //                 //         </label>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Рейтинг игры</span>
    //                 //         <input id="game-rating" class="main__admin-content-add-input-content input-send" type="number" name="rating" min="1" max="100">
    //                 //     </label>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Дата выхода игры</span>
    //                 //         <input id="game-date" class="main__admin-content-add-input-content input-send" type="date" name="date">
    //                 //     </label>
    //                 //
    //                 //     <label id="dev-inputs" class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Разработчики игры</span>
    //                 //         <input class="game-dev main__admin-content-add-input-content input-send" type="text" name="dev">
    //                 //         <div class="main__admin-content-add-input-btns">
    //                 //             <button id="dev-add-input" class="main__admin-content-add-input-btns-plus main__admin-content-add-input-btn">
    //                 //                 Добавить поле
    //                 //             </button>
    //                 //             <button id="dev-remove-input" class="main__admin-content-add-input-btns-minus main__admin-content-add-input-btn">
    //                 //                 Убрать поле
    //                 //             </button>
    //                 //         </div>
    //                 //     </label>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Издатель игры</span>
    //                 //         <input id="game-publisher" class="main__admin-content-add-input-content input-send" type="text" name="publisher">
    //                 //     </label>
    //                 //
    //                 //     <div class="main__admin-content-add-input-genre">
    //                 //         <span class="main__admin-content-add-input-text">платформы</span>
    //                 //         <fieldset class="main__admin-content-add-inputs-genre">
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="PC"  type="checkbox"> PC</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple Mac"  type="checkbox"> Apple Mac</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation"  type="checkbox"> Sony Playstation</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 2"  type="checkbox"> Sony Playstation 2</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 3"  type="checkbox"> Sony Playstation 3</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 4"  type="checkbox"> Sony Playstation 4</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 5"  type="checkbox"> Sony Playstation 5</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Protable"  type="checkbox"> Sony Playstation Protable</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Vita"  type="checkbox"> Sony Playstation Vita</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox"  type="checkbox"> Microsoft Xbox</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox 360"  type="checkbox"> Microsoft Xbox 360</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox One"  type="checkbox"> Microsoft Xbox One</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox Series X"  type="checkbox"> Microsoft Xbox Series X</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy"  type="checkbox"> Nintendo Game Boy</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Color"  type="checkbox"> Nintendo Game Boy</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Advance"  type="checkbox"> Nintendo Game Boy</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo DS"  type="checkbox"> Nintendo DS</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 3DS"  type="checkbox"> Nintendo 3DS</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Entertainment System"  type="checkbox"> Nintendo Entertainment System</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 64"  type="checkbox"> Nintendo 64</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo GameCube"  type="checkbox"> Nintendo GameCube</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii"  type="checkbox"> Nintendo Wii</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii U"  type="checkbox"> Nintendo Wii U</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Switch"  type="checkbox"> Nintendo Switch</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple IOS"  type="checkbox"> Apple IOS</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Android"  type="checkbox"> Android</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Master System"  type="checkbox"> Sega Master System</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Mega Drive/Genesis"  type="checkbox"> Sega Mega Drive/Genesis</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Gear"  type="checkbox"> Sega Gear</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Nomad"  type="checkbox"> Sega Nomad</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega CD"  type="checkbox"> Sega CD</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega 32X"  type="checkbox"> Sega 32X</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Saturn"  type="checkbox"> Sega Saturn</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Steam Deck"  type="checkbox"> Steam Deck</label>
    //                 //         </fieldset>
    //                 //     </div>
    //                 //
    //                 //     <div class="main__admin-content-add-input-genre">
    //                 //         <span class="main__admin-content-add-input-text">Жанры игры</span>
    //                 //         <fieldset class="main__admin-content-add-inputs-genre">
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Экшн"  type="checkbox"> Экшн</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Приключение"  type="checkbox"> Приключение</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Аркада"  type="checkbox"> Аркада</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Карточная"  type="checkbox"> Карточная</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казино"  type="checkbox"> Казино</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казуальный"  type="checkbox"> Казуальный</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Обучающее"  type="checkbox"> Обучающее</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Файтинг"  type="checkbox"> Файтинг</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Головоломка"  type="checkbox"> Головоломка</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="ММО"  type="checkbox"> ММО</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Онлайн"  type="checkbox"> Онлайн</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Гонка"  type="checkbox"> Гонка</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Ролевая"  type="checkbox"> Ролевая</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Симулятор"  type="checkbox"> Симулятор</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Спортивная"  type="checkbox"> Спортивная</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Стратегия"  type="checkbox"> Стратегия</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Визуальная новелла"  type="checkbox"> Визуальная новелла</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Зомби"  type="checkbox"> Зомби</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Хоррор"  type="checkbox"> Хоррор</label>
    //                 //             <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Песочница"  type="checkbox"> Песочница</label>
    //                 //         </fieldset>
    //                 //     </div>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Минимальные системные требования</span>
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="ОС">
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Процессор">
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Память">
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Видеокарта">
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Место на жестком диске">
    //                 //         <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Звуковая капта">
    //                 //     </label>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">Рекомендуемые системные требования</span>
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="ОС">
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Процессор">
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Память">
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Видеокарта">
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Место на жестком диске">
    //                 //         <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Звуковая капта">
    //                 //     </label>
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">описание игры</span>
    //                 //         <input id="game-description" class="main__admin-content-add-input-content input-send" type="text" name="description">
    //                 //     </label>
    //                 //
    //                 //
    //                 //     <label class="main__admin-content-add-input">
    //                 //         <span class="main__admin-content-add-input-text">обзор игры</span>
    //                 //         <input id="review-header" placeholder="Заголовок" class="game-review main__admin-content-add-input-content input-send" type="text" name="header">
    //                 //         <input id="review-image" placeholder="URL картинки" class="game-review main__admin-content-add-input-content input-send" type="url" name="image">
    //                 //         <textarea id="review-text" placeholder="Текст" class="game-review main__admin-content-add-input-content input-send main__admin-content-add-input-content-textarea " name="text"></textarea>
    //                 //     </label>
    //                 //
    //                 //     <button id="submit-btn" class="main__admin-content-submit">Добавить</button>
    //                 //
    //                 //     <p class="admin-error"></p>
    //                 // </form>`
    //
    //
    //
    //     const checkBoxControl = function () {
    //         function setChecked(target) {
    //             const checkboxes = target.querySelectorAll("input[type='checkbox']:checked");
    //             const selectOption = target.querySelector('.main__admin-content-add-inputs-genre select option:first-child');
    //
    //             if (checkboxes.length) {
    //                 selectOption.textContent = 'Выбрано: ' + checkboxes.length;
    //             } else {
    //                 selectOption.textContent = 'Выберите из списка';
    //             }
    //         }
    //
    //         document.querySelectorAll('.main__admin-content-add-inputs-genre').forEach(function(element) {
    //             const popup = document.createElement('div');
    //             popup.className = 'main__admin-content-add-inputs-genre-popup';
    //             popup.innerHTML = element.innerHTML;
    //             element.innerHTML = '';
    //
    //             const control = document.createElement('div');
    //             control.className = 'main__admin-content-add-inputs-genre-control';
    //             control.innerHTML =
    //                 '<select class="form-control"><option></option></select>' +
    //                 '<div class="main__admin-content-add-inputs-genre-control-over"></div>';
    //
    //             element.appendChild(control);
    //             element.appendChild(popup);
    //
    //             setChecked(element);
    //
    //             element.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    //                 checkbox.addEventListener('click', function() {
    //                     setChecked(element);
    //                 });
    //             });
    //
    //             control.addEventListener('click', function() {
    //                 const otherPopups = document.querySelectorAll('.main__admin-content-add-inputs-genre-popup:not(:last-child)');
    //
    //                 otherPopups.forEach(function(otherPopup) {
    //                     otherPopup.style.display = 'none';
    //                 });
    //
    //                 if (popup.style.display === 'none') {
    //                     popup.style.display = 'block';
    //                     control.querySelector('select').focus();
    //                 } else {
    //                     popup.style.display = 'none';
    //                 }
    //             });
    //         });
    //
    //
    //
    //         document.addEventListener('click', function(e) {
    //             const target = e.target;
    //
    //             if (!target.closest('.main__admin-content-add-inputs-genre')) {
    //                 document.querySelectorAll('.main__admin-content-add-inputs-genre-popup').forEach(function(popup) {
    //                     popup.style.display = 'none';
    //                 });
    //             }
    //         });
    //
    //         const devAddInput = document.getElementById('dev-add-input');
    //         const devRemoveInput = document.getElementById('dev-remove-input');
    //
    //         const devInputs = document.getElementById('dev-inputs');
    //         const devButtons = document.querySelector('.main__admin-content-add-input-btns')
    //         function addInputDev () {
    //             const newDevInput = document.createElement('input');
    //             newDevInput.type = 'text';
    //             newDevInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-dev')
    //             newDevInput.name = 'dev'
    //
    //             devInputs.insertBefore(newDevInput, devButtons)
    //         }
    //
    //         function removeInputDev () {
    //             if (devInputs.childNodes.length > 7) {
    //                 const newInputRemove = devInputs.childNodes[devInputs.childNodes.length - 3];
    //
    //                 devInputs.removeChild(newInputRemove)
    //             }
    //
    //         }
    //
    //         devAddInput.addEventListener('click', function () {
    //             addInputDev();
    //         })
    //
    //         devRemoveInput.addEventListener('click', function () {
    //             removeInputDev();
    //         })
    //
    //     }
    //
    //
    //
    //     contentRender.append(contentAdd);
    //     checkBoxControl()
    //
    //     const submitBtn = document.getElementById('submit-btn');
    //     const inputValue = document.querySelectorAll('.input-send')
    //
    //     const inputs = document.querySelectorAll('input');
    //     const inputValues = []
    //
    //
    //
    //     document.getElementById('form').addEventListener('submit', function (event) {
    //         event.preventDefault();
    //
    //     })
    //
    //     async function getInputValues() {
    //
    //
    //         const timestamp = Date.now();
    //         const random = Math.random().toString(36).substring(2, 8).length;
    //         const newGame = {
    //             id: parseInt(`${timestamp}${random}`),
    //             name: document.getElementById('game-name').value,
    //             image: document.getElementById('game-image').value,
    //             gallery: document.getElementById('game-gallery').files, // Файлы из input type="file"
    //             rating: document.getElementById('game-rating').value,
    //             date: document.getElementById('game-date').value,
    //             dev: [],
    //             publisher: document.getElementById('game-publisher').value,
    //             platforms: [],
    //             genre: [],
    //             minSys: [],
    //             recSys: [],
    //             description: document.getElementById('game-description').value,
    //         };
    //
    //         const newReview = {
    //             gameId: newGame.id,
    //             header: document.getElementById('review-header').value,
    //             image: document.getElementById('review-image').value,
    //             text: document.getElementById('review-text').value,
    //         }
    //
    //         let genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
    //         genreCheckboxes.forEach(function(checkbox) {
    //             newGame.genre.push(checkbox.value);
    //         });
    //
    //         let platformCheckboxes = document.querySelectorAll('input[name="platforms"]:checked');
    //         platformCheckboxes.forEach(function(checkbox) {
    //             newGame.platforms.push(checkbox.value);
    //         });
    //
    //         let devInputs = document.querySelectorAll('.game-dev');
    //         devInputs.forEach(function(input) {
    //             newGame.dev.push(input.value);
    //         });
    //
    //         let recSysInputs = document.querySelectorAll('.game-recSys');
    //         recSysInputs.forEach(function(input) {
    //             newGame.minSys.push(input.value);
    //         });
    //
    //         let minSysInputs = document.querySelectorAll('.game-minSys');
    //         minSysInputs.forEach(function(input) {
    //             newGame.recSys.push(input.value);
    //         });
    //
    //
    //
    //         await useAPI().postNewGame(newGame);
    //         await useAPI().postNewReview(newReview)
    //         submitBtn.innerHTML = 'Добавлено'
    //         submitBtn.style.backgroundColor = 'rgba(24, 133, 54, 1)'
    //
    //     }
    //
    //
    //
    //     function checkboxGenreCheck() {
    //         const checkboxes = document.querySelectorAll('input[type="checkbox"][name="genre"]')
    //         for (const checkbox of checkboxes) {
    //             if (checkbox.checked) {
    //                 return true
    //             }
    //         }
    //
    //         return false
    //
    //     }
    //
    //
    //
    //     function checkboxPlatformCheck() {
    //
    //         const checkboxes = document.querySelectorAll('input[type="checkbox"][name="platforms"]')
    //
    //         for (const checkbox of checkboxes) {
    //             if (checkbox.checked) {
    //                 return true
    //             }
    //         }
    //
    //         return false
    //
    //     }
    //
    //     const adminError = document.querySelector('.admin-error')
    //
    //     async function adminFormValidate() {
    //         const form = document.getElementById('form');
    //         const formCheck = document.querySelectorAll('.game-dev, .game-recSys, .game-minSys, #game-name, #game-image, #rating, #game-date, #game-publisher, #game-description')
    //
    //         function isValidFormCheck(formCheck) {
    //             const pattern = /^[a-zA-Z0-9а-яА-Я]+$/;
    //             return pattern.test(formCheck);
    //         }
    //
    //         for (const element of formCheck) {
    //             if(!element.value) {
    //                 adminError.innerHTML = 'Необходимо заполнить все поля'
    //                 return
    //             }
    //
    //             // if (!isValidFormCheck(formCheck)) {
    //             //     adminError.innerHTML = "подчеркнутые поля должны состоять из латиницы, кирилицы и цифр"
    //             //
    //             //     return
    //             // }
    //
    //             if (!checkboxGenreCheck()) {
    //                 adminError.innerHTML = 'Необходимо выбрать хотя бы один жанр'
    //                 return
    //             }
    //
    //             if (!checkboxPlatformCheck()) {
    //                 adminError.innerHTML = 'Необходимо выбрать хотя бы одну платформу'
    //                 return
    //             }
    //         }
    //
    //         await getInputValues()
    //         adminError.innerHTML = ''
    //         setTimeout(reload, 500)
    //
    //     }
    //
    //     function reload(){
    //         location.reload()
    //     }
    //
    //
    //
    //     submitBtn.addEventListener('click', async function () {
    //         await adminFormValidate()
    //     })
    // }



    async function adminListControl() {
        const adminList = document.createElement('ul');
        adminList.classList.add("main__Admin-content-game-list");

        let data = await useAPI().getSpotlightCards();

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.id = item.id;
            listItem.classList.add("main__admin-content-game-list-el");

            listItem.innerHTML = `
            <div class="main__admin-content-game-list-el-game-content">
                <img class="main__admin-content-game-list-el-game-content-image" src="${item.image}" alt="image">
                <p class="main__admin-content-game-list-el-game-content-name">${item.name}</p>
            </div>
            <div class="main__admin-content-game-list-control">
                <img class="main__admin-content-game-list-control-edit" src="/src/img/icons/edit.png" alt="edit">
                <img class="main__admin-content-game-list-control-del" src="/src/img/icons/del.png" alt="del">
            </div>
            `;

            adminList.appendChild(listItem);
        });

        contentRender.addEventListener('click', async event => {
            const btnDel = event.target.closest('.main__admin-content-game-list-control-del');
            const btnEdit = event.target.closest('.main__admin-content-game-list-control-edit')


            if (btnDel) {
                const listItem = btnDel.closest('.main__admin-content-game-list-el');
                const cardId = listItem.id;
                listItem.remove();

                data = data.filter(card => card.id !== parseInt(cardId));


                await useAPI().deleteCard(cardId);
                await useAPI().deleteReview(cardId);

                console.log(data); // Обновленные данные
            }
            if (btnEdit) {
                const listItem = btnEdit.closest('.main__admin-content-game-list-el');
                const cardId = parseInt(listItem.id, 10);

                const editedCard = data.filter((card) => card.id === cardId)[0];

                const contentEdit = document.createElement('section');
                contentEdit.classList.add('main__admin-content-add');




                contentEdit.innerHTML = `<form id="form" class="main__admin-content-add-form" method="post">

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Название игры</span>
                            <input id="game-name" class="main__admin-content-add-input-content input-send" type="text" name="name">
                        </label>



                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Изображение игры(ссылка)</span>
                            <input id="game-image" class="main__admin-content-add-input-content input-send" type="url" name="image">
                            <div id="game-preview"></div>
                        </label>

                            <label id="gallery-inputs" class="main__admin-content-add-input">
                                <span class="main__admin-content-add-input-text">Изображения для галереи</span>
                                <div class="main__admin-content-add-input-btns-gallery gallery__edited-btns">
                                    <button id="gallery-add-input" class="main__admin-content-add-input-btns-plus main__admin-content-add-input-btn">
                                        Добавить поле
                                    </button>
                                    <button id="gallery-remove-input" class="main__admin-content-add-input-btns-minus main__admin-content-add-input-btn">
                                        Убрать поле
                                    </button>
                                </div>
                            </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Рейтинг игры</span>
                            <input id="game-rating" class="main__admin-content-add-input-content input-send" type="number" name="rating" min="1" max="100">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Дата выхода игры</span>
                            <input id="game-date" class="main__admin-content-add-input-content input-send" type="date" name="date">
                        </label>

                        <label id="dev-inputs" class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Разработчики игры</span>
                            <div class="main__admin-content-add-input-btns dev__edited-btns">
                                <button id="dev-add-input" class="main__admin-content-add-input-btns-plus main__admin-content-add-input-btn">
                                    Добавить поле
                                </button>
                                <button id="dev-remove-input" class="main__admin-content-add-input-btns-minus main__admin-content-add-input-btn">
                                    Убрать поле
                                </button>
                            </div>
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Издатель игры</span>
                            <input id="game-publisher" class="main__admin-content-add-input-content input-send" type="text" name="publisher">
                        </label>

                        <div class="main__admin-content-add-input-genre">
                            <span class="main__admin-content-add-input-text">платформы</span>
                            <fieldset class="main__admin-content-add-inputs-genre">
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="PC"  type="checkbox"> PC</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple Mac"  type="checkbox"> Apple Mac</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation"  type="checkbox"> Sony Playstation</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 2"  type="checkbox"> Sony Playstation 2</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 3"  type="checkbox"> Sony Playstation 3</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 4"  type="checkbox"> Sony Playstation 4</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation 5"  type="checkbox"> Sony Playstation 5</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Protable"  type="checkbox"> Sony Playstation Protable</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sony Playstation Vita"  type="checkbox"> Sony Playstation Vita</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox"  type="checkbox"> Microsoft Xbox</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox 360"  type="checkbox"> Microsoft Xbox 360</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox One"  type="checkbox"> Microsoft Xbox One</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Microsoft Xbox Series X"  type="checkbox"> Microsoft Xbox Series X</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Color"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Game Boy Advance"  type="checkbox"> Nintendo Game Boy</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo DS"  type="checkbox"> Nintendo DS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 3DS"  type="checkbox"> Nintendo 3DS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Entertainment System"  type="checkbox"> Nintendo Entertainment System</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo 64"  type="checkbox"> Nintendo 64</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo GameCube"  type="checkbox"> Nintendo GameCube</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii"  type="checkbox"> Nintendo Wii</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Wii U"  type="checkbox"> Nintendo Wii U</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Nintendo Switch"  type="checkbox"> Nintendo Switch</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Apple IOS"  type="checkbox"> Apple IOS</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Android"  type="checkbox"> Android</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Master System"  type="checkbox"> Sega Master System</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Mega Drive/Genesis"  type="checkbox"> Sega Mega Drive/Genesis</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Gear"  type="checkbox"> Sega Gear</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Nomad"  type="checkbox"> Sega Nomad</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega CD"  type="checkbox"> Sega CD</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega 32X"  type="checkbox"> Sega 32X</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Sega Saturn"  type="checkbox"> Sega Saturn</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class="game-platforms main__admin-content-add-inputs-genre-content input-send" name="platforms" value="Steam Deck"  type="checkbox"> Steam Deck</label>
                            </fieldset>
                        </div>

                        <div class="main__admin-content-add-input-genre">
                            <span class="main__admin-content-add-input-text">Жанры игры</span>
                            <fieldset class="main__admin-content-add-inputs-genre">
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Экшн"  type="checkbox"> Экшн</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Приключение"  type="checkbox"> Приключение</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Аркада"  type="checkbox"> Аркада</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Карточная"  type="checkbox"> Карточная</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казино"  type="checkbox"> Казино</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Казуальный"  type="checkbox"> Казуальный</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Обучающее"  type="checkbox"> Обучающее</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Файтинг"  type="checkbox"> Файтинг</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Головоломка"  type="checkbox"> Головоломка</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="ММО"  type="checkbox"> ММО</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Онлайн"  type="checkbox"> Онлайн</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Гонка"  type="checkbox"> Гонка</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Ролевая"  type="checkbox"> Ролевая</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Симулятор"  type="checkbox"> Симулятор</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Спортивная"  type="checkbox"> Спортивная</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Стратегия"  type="checkbox"> Стратегия</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Визуальная новелла"  type="checkbox"> Визуальная новелла</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Зомби"  type="checkbox"> Зомби</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Хоррор"  type="checkbox"> Хоррор</label>
                                <label class="main__admin-content-add-inputs-genre-el"><input class = "game-genre main__admin-content-add-inputs-genre-content input-send" name="genre" value="Песочница"  type="checkbox"> Песочница</label>
                            </fieldset>
                        </div>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Минимальные системные требования</span>
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="ОС">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Процессор">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Память">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Видеокарта">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Место на жестком диске">
                            <input class="game-minSys main__admin-content-add-input-content input-send" type="text" name="minSys" placeholder="Звуковая капта">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">Рекомендуемые системные требования</span>
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="ОС">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Процессор">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Память">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Видеокарта">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Место на жестком диске">
                            <input class="game-recSys main__admin-content-add-input-content input-send" type="text" name="recSys" placeholder="Звуковая капта">
                        </label>

                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">описание игры</span>
                            <input id="game-description" class="main__admin-content-add-input-content input-send" type="text" name="description">
                        </label>

               
                        <label class="main__admin-content-add-input">
                            <span class="main__admin-content-add-input-text">обзор игры</span>
                            <input id="review-header" placeholder="Заголовок" class="game-review main__admin-content-add-input-content input-send" type="text" name="header">
                            <input id="review-image" placeholder="URL картинки" class="game-review main__admin-content-add-input-content input-send" type="url" name="image">
                            <textarea id="review-text" placeholder="Текст" class="game-review main__admin-content-add-input-content input-send main__admin-content-add-input-content-textarea " name="text"></textarea>
                        </label>

                        <button id="submit-btn-edit" class="main__admin-content-submit">Изменить</button>

                        <p class="admin-error"></p>
                    </form>`

                const checkBoxControl = function () {

                    const form = document.getElementById('form')
                    form.addEventListener('submit' ,function (e) {
                        e.preventDefault()
                    })
                    function setChecked(target) {
                        const checkboxes = target.querySelectorAll("input[type='checkbox']:checked");
                        const selectOption = target.querySelector('.main__admin-content-add-inputs-genre select option:first-child');

                        if (checkboxes.length) {
                            selectOption.textContent = 'Выбрано: ' + checkboxes.length;
                        } else {
                            selectOption.textContent = 'Выберите из списка';
                        }
                    }

                    document.querySelectorAll('.main__admin-content-add-inputs-genre').forEach(function(element) {
                        const popup = document.createElement('div');
                        popup.className = 'main__admin-content-add-inputs-genre-popup';
                        popup.innerHTML = element.innerHTML;
                        element.innerHTML = '';

                        const control = document.createElement('div');
                        control.className = 'main__admin-content-add-inputs-genre-control';
                        control.innerHTML =
                            '<select class="form-control"><option></option></select>' +
                            '<div class="main__admin-content-add-inputs-genre-control-over"></div>';

                        element.appendChild(control);
                        element.appendChild(popup);

                        setChecked(element);

                        element.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
                            checkbox.addEventListener('click', function() {
                                setChecked(element);
                            });
                        });

                        control.addEventListener('click', function() {
                            const otherPopups = document.querySelectorAll('.main__admin-content-add-inputs-genre-popup:not(:last-child)');

                            otherPopups.forEach(function(otherPopup) {
                                otherPopup.style.display = 'none';
                            });

                            if (popup.style.display === 'none') {
                                popup.style.display = 'block';
                                control.querySelector('select').focus();
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });

                    document.addEventListener('click', function(e) {
                        const target = e.target;

                        if (!target.closest('.main__admin-content-add-inputs-genre')) {
                            document.querySelectorAll('.main__admin-content-add-inputs-genre-popup').forEach(function(popup) {
                                popup.style.display = 'none';
                            });
                        }
                    });

                    const galleryAddInput = document.getElementById('gallery-add-input');
                    const galleryRemoveInput = document.getElementById('gallery-remove-input');

                    const galleryInputs = document.getElementById('gallery-inputs');
                    const galleryButtons = document.querySelector('.main__admin-content-add-input-btns-gallery')
                    function addInputGallery () {
                        const newGalleryInput = document.createElement('input');
                        newGalleryInput.type = 'text';
                        newGalleryInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-gallery')
                        newGalleryInput.name = 'gallery'

                        galleryInputs.insertBefore(newGalleryInput, galleryButtons)
                    }

                    function removeInputGallery () {
                        if (galleryInputs.childNodes.length > 6) {
                            const newInputRemove = galleryInputs.childNodes[galleryInputs.childNodes.length - 3];

                            galleryInputs.removeChild(newInputRemove)
                        }

                    }

                    galleryAddInput.addEventListener('click', function () {
                        addInputGallery();
                    })

                    galleryRemoveInput.addEventListener('click', function () {
                        removeInputGallery();
                    })


                    const devAddInput = document.getElementById('dev-add-input');
                    const devRemoveInput = document.getElementById('dev-remove-input');

                    const devInputs = document.getElementById('dev-inputs');
                    const devButtons = document.querySelector('.main__admin-content-add-input-btns')
                    function addInputDev () {
                        const newDevInput = document.createElement('input');
                        newDevInput.type = 'text';
                        newDevInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-dev')
                        newDevInput.name = 'dev'

                        devInputs.insertBefore(newDevInput, devButtons)
                    }

                    function removeInputDev () {
                        if (devInputs.childNodes.length > 6) {
                            const newInputRemove = devInputs.childNodes[devInputs.childNodes.length - 3];

                            devInputs.removeChild(newInputRemove)
                        }

                    }

                    devAddInput.addEventListener('click', function () {
                        addInputDev();
                    })

                    devRemoveInput.addEventListener('click', function () {
                        removeInputDev();
                    })

                }

                contentRender.innerHTML = '';
                contentRender.append(contentEdit);
                checkBoxControl()

                document.getElementById("game-name").value = editedCard.name;
                document.getElementById("game-image").value = editedCard.image;
                document.getElementById("game-rating").value = editedCard.rating;
                document.getElementById("game-date").value = editedCard.date;
                const galleryInputsEdited = document.getElementById('gallery-inputs');
                const galleryEditedButtons = document.querySelector('.gallery__edited-btns');
                editedCard.gallery.forEach(function(item) {
                    const newEditedGalleryInput = document.createElement('input');
                    newEditedGalleryInput.type = 'text';
                    newEditedGalleryInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-gallery')
                    newEditedGalleryInput.name = 'dev'

                    newEditedGalleryInput.value = item
                    galleryInputsEdited.insertBefore(newEditedGalleryInput, galleryEditedButtons);
                } )


                const devInputsEdited = document.getElementById('dev-inputs');
                const devEditedButtons = document.querySelector('.dev__edited-btns');
                editedCard.dev.forEach(function(item) {
                    const newEditedDevInput = document.createElement('input');
                    newEditedDevInput.type = 'text';
                    newEditedDevInput.classList.add('main__admin-content-add-input-content', 'input', 'send' , 'game-dev')
                    newEditedDevInput.name = 'dev'

                    newEditedDevInput.value = item
                    devInputsEdited.insertBefore(newEditedDevInput, devEditedButtons);
                } )



                document.getElementById("game-publisher").value = editedCard.publisher;
                document.getElementById('game-preview').style.backgroundImage = 'url(' + editedCard.image + ')'
                editedCard.platforms.forEach(function (platform) {
                    document.querySelector(`input[value="${platform}"].game-platforms`).checked = true;
                });
                editedCard.genre.forEach(function (genre) {
                    document.querySelector(`input[value="${genre}"].game-genre`).checked = true;
                });
                const inputElementMin = document.querySelectorAll(`input[name="minSys"].game-minSys`);
                console.log('мин',editedCard.minSys, 'рек', editedCard.recSys)
                for (let minSysKey in editedCard.minSys) {

                    if (editedCard.minSys.hasOwnProperty(minSysKey)) {

                        inputElementMin.item(minSysKey).value = editedCard.minSys[minSysKey]
                    }

                }
                const inputElementRec = document.querySelectorAll(`input[name="recSys"].game-recSys`);
                for (let recSysKey in editedCard.recSys) {
                    if (editedCard.recSys.hasOwnProperty(recSysKey)) {
                        inputElementRec.item(recSysKey).value = editedCard.recSys[recSysKey]
                    }
                }



                const reviewData = await useAPI().getReview()

                const findReview = reviewData.filter((review) => review.gameId === cardId)[0]
                document.getElementById("game-description").value = editedCard.description;
                document.getElementById("review-header").value = findReview.header;
                document.getElementById("review-image").value = findReview.image;
                document.getElementById("review-text").value = findReview.text;
                editedCard.dev = []
                editedCard.gallery = []
                console.log(editedCard)


                const submitBtnEdit = document.getElementById('submit-btn-edit')
                submitBtnEdit.addEventListener('click', async function () {
                    for (let minSysKey in editedCard.minSys) {
                        if (editedCard.minSys.hasOwnProperty(minSysKey)) {
                            editedCard.minSys[minSysKey] = inputElementMin.item(minSysKey).value
                            console.log(inputElementMin.item(minSysKey))
                        }

                    }
                    for (let recSysKey in editedCard.recSys) {
                        if (editedCard.recSys.hasOwnProperty(recSysKey)) {
                            editedCard.recSys[recSysKey] = inputElementRec.item(recSysKey).value
                        }
                    }
                    const editedGameDevInputs = document.querySelectorAll('.game-dev')
                    editedGameDevInputs.forEach(devInput => editedCard.dev.push(devInput.value))

                    const editedGameGalleryInputs = document.querySelectorAll('.game-gallery')
                    editedGameGalleryInputs.forEach(function(galleryInput){editedCard.gallery.push(galleryInput.value)})



                    const editedCardData = {
                        id: cardId,
                        name: document.getElementById("game-name").value,
                        image: document.getElementById("game-image").value,
                        rating: document.getElementById("game-rating").value,
                        date: document.getElementById("game-date").value,
                        gallery: editedCard.gallery,
                        dev: editedCard.dev,
                        publisher: document.getElementById("game-publisher").value,
                        platforms: editedCard.platforms,
                        genre: editedCard.genre,
                        minSys: editedCard.minSys,
                        recSys: editedCard.recSys,
                        description: document.getElementById("game-description").value,
                    }

                    function reload() {
                        location.reload()
                    }


                    submitBtnEdit.innerHTML = 'Изменено'
                    submitBtnEdit.style.backgroundColor = 'rgba(24, 133, 54, 1)'
                    console.log(editedCardData)
                    await useAPI().editCard(cardId, editedCardData)

                    setTimeout(reload, 1000)
                })
            }
        });



        contentRender.append(adminList);



    }

    const adminAdd = document.getElementById('admin-add');
    const adminList = document.getElementById('admin-list');

    adminAdd.addEventListener('click', function () {
        adminAdd.classList.add('main__admin-content-tab-el-active');
        adminList.classList.remove('main__admin-content-tab-el-active')
        contentRender.innerHTML = ''
        tabAdd()
    })

    adminList.addEventListener('click', function () {
        adminAdd.classList.remove('main__admin-content-tab-el-active');
        adminList.classList.add('main__admin-content-tab-el-active')
        contentRender.innerHTML = ''
        adminListControl()
    })












}


await admin();

