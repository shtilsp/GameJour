import {profileModal} from "../../src/js/modules/profileModal.js";
import {search} from "../../src/js/modules/search.js";
import {useAPI} from "../../src/js/api/useAPI.js";
import {state} from "../../src/js/state.js";


async function profile() {
    profileModal();
    await search();


    const profileContent = document.getElementById('profile-content');
    const user = await useAPI().getUser()
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const userId = currentUser.id;

    const find = user.find(user => user.id === userId)
    profileContent.innerHTML = `
    <p class="profile-content__nickname">${currentUser.nickname}</p>
                <img class="profile-content__image" src="${currentUser.avatar}" alt="image">
                <div class="profile-content__change-btns">
                    <p id="changeNick">Изменить Никнейм</p>
                    <p id="changeImg">Изменить Фото</p>
                </div>
                <button id="exit" class="profile-content__exit">Выйти</button>
    `
    const exit = document.getElementById('exit');
    exit.addEventListener('click', function () {
        localStorage.clear();
        window.history.back();
    })
    const changeNick = document.getElementById('changeNick');
    const changeImg = document.getElementById('changeImg');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('profile-content__modal-overlay')


    changeImg.addEventListener('click', async function () {
        const changeNickModal = document.createElement('div');
        changeNickModal.classList.add('profile-content__change-btns-change-nick-modal');
        modalOverlay.append(changeNickModal);
        profileContent.append(modalOverlay)
        modalOverlay.style.display = "flex"
        changeNickModal.innerHTML = `
            <div id="closeProfileModal" class="profile-content__change-btns-change-nick-modal-cross-container">
                <div class="profile-content__change-btns-change-nick-modal-cross">
                    <div class="profile-content__change-btns-change-nick-modal-cross-line profile-content__change-btns-change-nick-modal-cross-horizontal-line"></div>
                    <div class="profile-content__change-btns-change-nick-modal-cross-line profile-content__change-btns-change-nick-modal-cross-vertical-line"></div>
                </div>
            </div>
            <p class="profile-content__change-btns-change-nick-modal-title">Изменть аватар</p>
            <input  id="profileAvatarInput" class="profile-content__change-btns-change-nick-modal-input" type="url" name="avatar" placeholder="URL" required>
            <button id="changeNickSave" class="profile-content__change-btns-change-nick-modal-save">Сохранить</button>
            <p id="changeNickError"></p>
            `
        const changeNickSave = document.getElementById('changeNickSave');
        const profileAvatarInput = document.querySelector('#profileAvatarInput');

        changeNickSave.addEventListener('click' ,async function () {
            const changeNickError = document.getElementById('changeNickError')
            if (!isValidLogin(profileAvatarInput.value)) {
                changeNickError.innerHTML = 'Укажите ссылку на изображение'
                return
            }

            function isValidLogin(loginInput) {
                const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
                return pattern.test(loginInput);
            }

            const newAvatar = profileAvatarInput.value;
            const ChangeUserNick = {
                id: userId,
                login: currentUser.login,
                password: currentUser.password,
                likedGames: currentUser.likedGames,
                nickname: currentUser.nickname,
                isAdmin: currentUser.isAdmin,
                avatar: newAvatar,

            }

            await useAPI().changeUser(userId, ChangeUserNick)

            localStorage.setItem('user', JSON.stringify(ChangeUserNick))

            function reload() {
                location.reload()
            }

            changeNickSave.innerHTML = 'Изменено'
            changeNickSave.style.backgroundColor = 'rgba(24, 133, 54, 1)'
            setInterval(reload, 500)
        })
        const closeProfileModal = document.getElementById('closeProfileModal');
        closeProfileModal.addEventListener('click', function () {
            modalOverlay.removeChild(changeNickModal);
            profileContent.removeChild(modalOverlay);
        })



    })
    changeNick.addEventListener('click', function () {
        const changeNickModal = document.createElement('div');
        changeNickModal.classList.add('profile-content__change-btns-change-nick-modal');
        modalOverlay.append(changeNickModal);
        profileContent.append(modalOverlay)
        modalOverlay.style.display = "flex"
        changeNickModal.innerHTML = `
            <div id="closeProfileModal" class="profile-content__change-btns-change-nick-modal-cross-container">
                <div class="profile-content__change-btns-change-nick-modal-cross">
                    <div class="profile-content__change-btns-change-nick-modal-cross-line profile-content__change-btns-change-nick-modal-cross-horizontal-line"></div>
                    <div class="profile-content__change-btns-change-nick-modal-cross-line profile-content__change-btns-change-nick-modal-cross-vertical-line"></div>
                </div>
            </div>
            <p class="profile-content__change-btns-change-nick-modal-title">Введите новый Ник</p>
            <input id="profileNickInput" class="profile-content__change-btns-change-nick-modal-input" type="text" name="nickname" placeholder="${currentUser.nickname}">
            <button id="changeNickSave" class="profile-content__change-btns-change-nick-modal-save">Сохранить</button>
            <p id="changeNickError"></p>
            `

        const changeNickSave = document.getElementById('changeNickSave');
        changeNickSave.addEventListener('click' ,async function () {
            const profileNickInput = document.getElementById('profileNickInput')
            const changeNickError = document.getElementById('changeNickError')
            if (!isValidLogin(profileNickInput.value)) {
                changeNickError.innerHTML = 'Ник может содержать только буквы на латинице и цифры'
                return
            }

            function isValidLogin(loginInput) {
                const pattern = /^[a-zA-Z0-9]+$/;
                return pattern.test(loginInput);
            }
            const newNick = profileNickInput.value;
            const ChangeUserNick = {
                id: userId,
                login: currentUser.login,
                password: currentUser.password,
                likedGames: currentUser.likedGames,
                nickname: newNick,
                isAdmin: currentUser.isAdmin,
                avatar: currentUser.avatar,

            }

            await useAPI().changeUser(userId, ChangeUserNick)
            console.log(currentUser)
            localStorage.setItem('user', JSON.stringify(ChangeUserNick))

            function reload() {
                location.reload()
            }

            changeNickSave.innerHTML = 'Изменено'
            changeNickSave.style.backgroundColor = 'rgba(24, 133, 54, 1)'
            setInterval(reload, 500)

        })
        const closeProfileModal = document.getElementById('closeProfileModal');
        closeProfileModal.addEventListener('click', function () {
            modalOverlay.removeChild(changeNickModal);
            profileContent.removeChild(modalOverlay);
        })
    })

}

await profile()