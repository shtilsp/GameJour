import {useAPI} from "../api/useAPI.js";
import {state} from "../state.js";

export function profileModal() {
    const profileModal = document.createElement('section');
    const profileModalReg = document.createElement('section');
    const profileEnter = document.getElementById('profile-enter');
    const profilePrivate = document.getElementById('profile-private');
    const profileExit = document.getElementById('profile-exit');
    const liked = document.getElementById('liked')
    const profileIcons = document.getElementById('profile-icons')

    const likedIcon = document.createElement('a');
    likedIcon.classList.add("header__icon-like", "profile-icons-el");
    likedIcon.href = "/pages/liked/liked.html"
    likedIcon.innerHTML = `<svg width="28" height="28" viewBox="0 0 27 25" fill="#EFF0F0" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 25C13.3575 25.0002 13.2165 24.9716 13.0849 24.9161C12.9533 24.8606 12.8337 24.7791 12.7331 24.6765L2.37872 14.1353C-0.792905 10.9065 -0.792905 5.65245 2.37872 2.42362C5.42451 -0.679321 10.3067 -0.804101 13.5 2.05701C16.6911 -0.800788 21.5733 -0.680425 24.6213 2.42362C27.7929 5.65245 27.7929 10.9076 24.6213 14.1353L14.2669 24.6765C14.1663 24.7791 14.0468 24.8606 13.9151 24.9161C13.7835 24.9716 13.6425 25.0002 13.5 25ZM8.13189 2.20829C7.34838 2.20689 6.57232 2.36303 5.84824 2.66774C5.12416 2.97245 4.46631 3.41974 3.91246 3.98392C2.79505 5.12361 2.16746 6.66809 2.16746 8.27835C2.16746 9.88861 2.79505 11.4331 3.91246 12.5728L13.5 22.3332L23.0875 12.5728C24.205 11.4331 24.8325 9.88861 24.8325 8.27835C24.8325 6.66809 24.205 5.12361 23.0875 3.98392C21.968 2.84636 20.4509 2.20745 18.8692 2.20745C17.2875 2.20745 15.7703 2.84636 14.6509 3.98392L14.2669 4.37483C14.1662 4.47746 14.0467 4.55889 13.9151 4.61444C13.7835 4.67 13.6425 4.6986 13.5 4.6986C13.3575 4.6986 13.2165 4.67 13.0849 4.61444C12.9533 4.55889 12.8338 4.47746 12.7331 4.37483L12.3491 3.98392C11.7957 3.41975 11.1383 2.97246 10.4145 2.66774C9.69081 2.36302 8.91507 2.20688 8.13189 2.20829Z" fill="#EFF0F0"/></svg>`

    const adminPanel = document.createElement('a');
    adminPanel.classList.add("header__icon-admin", "profile-icons-el");
    adminPanel.href = "/pages/admin/admin.html";
    adminPanel.innerHTML = `<svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.5H18.5C19.163 3.5 19.7989 3.76339 20.2678 4.23223C20.7366 4.70107 21 5.33696 21 6V23.5C21 24.163 20.7366 24.7989 20.2678 25.2678C19.7989 25.7366 19.163 26 18.5 26H3.5C2.83696 26 2.20107 25.7366 1.73223 25.2678C1.26339 24.7989 1 24.163 1 23.5V6C1 5.33696 1.26339 4.70107 1.73223 4.23223C2.20107 3.76339 2.83696 3.5 3.5 3.5H6" stroke="#EFF0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.75 1H7.25C6.55964 1 6 1.55964 6 2.25V4.75C6 5.44036 6.55964 6 7.25 6H14.75C15.4404 6 16 5.44036 16 4.75V2.25C16 1.55964 15.4404 1 14.75 1Z" stroke="#EFF0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`


    profileExit.addEventListener('click', function (){
        localStorage.clear();
        location.reload();
        window.history.back()
    })



    if (localStorage.getItem('user') === null) {
        profileEnter.style.display = "block";
        profileExit.style.display = "none";
        profilePrivate.style.display = "none";
        // liked.style.display = 'none'
    } else {
        profileEnter.style.display = "none";
        profileExit.style.display = "block";
        profilePrivate.style.display = "block";
        profileIcons.insertAdjacentElement('afterbegin', likedIcon)

        const user = state().getUser();

        console.log(user)
        if (user.isAdmin) {
        profileIcons.insertAdjacentElement('afterbegin', adminPanel)
        }



    }

    // adminPanel.addEventListener()



    async function profileModalRender() {
        profileModal.classList.add('profile-modal');

        profileModal.innerHTML = `
        <div class="profile-modal__modal-container">

                        <img id="profile-modal__cross" class="profile-modal__cross" src="/src/img/icons/cross.png" alt="cross">
                        <h3 class="profile-modal__title">Вход на Gamejour</h3>

                        <div class="profile-modal__inputs">

                            <div class="profile-modal__input">

                                <p class="profile-modal__input-name">логин</p>
                                <input id="profile-modal-login" class="profile-modal__input-input" type="text" required>

                            </div>

                            <div class="profile-modal__input">

                                <p class="profile-modal__input-name">пароль</p>
                                <input id="profile-modal-password" class="profile-modal__input-input" type="password" required>

                            </div>

                        </div>

                        <button id="profile-modal-btn" class="profile-modal__btn" type="submit">Войти</button>
                        <p id="profile-modal-auth-error"></p>
                        <p id="profile-registration" class="profile-modal__reg-link">Зарегистрироваться</p>
                    </div>
                
        `
        document.body.append(profileModal)
        const profileModalBtn = document.getElementById('profile-modal-btn');
        const login = document.getElementById('profile-modal-login');
        const password = document.getElementById('profile-modal-password');

        const profileModalAuthError = document.getElementById('profile-modal-auth-error')

        const loginInput = login.value;
        const passwordInput = password.value;

        profileModalBtn.addEventListener('click', async function () {

            if (!login.value || !password.value) {
                profileModalAuthError.innerHTML = 'Пожалуйста, заполните все поля'
                return
            }

            if (!isValidLogin(login.value)) {
                profileModalAuthError.innerHTML = 'Логин может содержать только буквы на латинице и цифры'
                return
            }

            if (!isValidPassword(password.value)) {
                profileModalAuthError.innerHTML = 'Пароль должен состоять из 8 символов, среди которыйх хотя бы одна строчная, одна заглавная буква'
                return;
            }

            function isValidLogin(loginInput) {
                const pattern = /^[a-zA-Z0-9]+$/;
                return pattern.test(loginInput);
            }

            function isValidPassword(passwordInput) {
                const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,20}$/;
                return pattern.test(passwordInput);
            }

            const res = await useAPI().getUser(login.value, password.value)



            profileModalAuthError.innerHTML = res.length ? '' : 'не парильный логин или пароль';

            if (res.length) {
                profileModal.style.display = "none";
                document.body.style.cssText = `
                overflow: auto;
                `

                localStorage.setItem('user', JSON.stringify(res[0]));
                location.reload()
            }

        })


        const modalCross = document.getElementById('profile-modal__cross');
        profileModal.style.display = 'flex';
        document.body.style.cssText = `
        overflow: hidden;
        `

        modalCross.addEventListener('click', () => {
            console.log(1)
            profileModal.style.display = "none";
            document.body.style.cssText = `
                overflow: auto;
            `
        })
    }

    function profileModalRegRender() {
        profileModal.style.display = 'none'
        profileModalReg.classList.add('profile-modal');
        profileModalReg.innerHTML = `
        <div class="profile-modal__modal-container">

                        <img id="profile-modal__cross-reg" class="profile-modal__cross" src="/src/img/icons/cross.png" alt="cross">
                        <h3 class="profile-modal__title">Регистрация на Gamejour</h3>

                        <div class="profile-modal__inputs">

                            <div class="profile-modal__input">

                                <p class="profile-modal__input-name">логин</p>
                                <input id="profile-modal-reg-login" class="profile-modal__input-input" type="text">

                            </div>

                            <div class="profile-modal__input">

                                <p class="profile-modal__input-name">пароль</p>
                                <input id="profile-modal-reg-password" class="profile-modal__input-input" type="password">

                            </div>

                        </div>

                        <button id="profile-modal-reg-btn" class="profile-modal__btn">Зарегистрироваться</button>
                        <p id="profile-modal-reg-error"></p>
                    </div>
        `
        document.body.append(profileModalReg)


        const profileModalRegBtn = document.getElementById('profile-modal-reg-btn');

        const login = document.getElementById('profile-modal-reg-login');
        const password = document.getElementById('profile-modal-reg-password');

        const loginInput = login.value;
        const passwordInput = password.value;



        const profileModalAuthError = document.getElementById('profile-modal-reg-error')

        profileModalRegBtn.addEventListener('click', async function () {




            if (!login.value || !password.value) {
                profileModalAuthError.innerHTML = 'Пожалуйста, заполните все поля'
                return
            }

            if (!isValidLogin(login.value)) {
                profileModalAuthError.innerHTML = 'Логин может содержать только буквы на латинице и цифры'
                return
            }

            if (!isValidPassword(password.value)) {
                profileModalAuthError.innerHTML = 'Пароль должен состоять из 8 символов, среди которыйх хотя бы одна строчная, одна заглавная буква'
                return;
            }

            function isValidLogin(loginInput) {
                const pattern = /^[a-zA-Z0-9]+$/;
                return pattern.test(loginInput);
            }

            function isValidPassword(passwordInput) {
                const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
                return pattern.test(passwordInput);
            }

            // функция регистрации нового пользователя
            const res = await useAPI().checkUser(login.value);

            try {

                if (res.length) {
                    login.style.cssText = `
                        border: 1px solid #A73535;
                    `
                    profileModalAuthError.innerHTML = 'логин занят'

                } else {
                    const timestamp = Date.now();
                    const random = Math.random().toString(36).substring(2, 8).length;
                    const newUser = {
                        id:`${timestamp}${random}`,
                        login: login.value,
                        password: password.value,
                        likedGames: [],
                        nickname: login.value,
                        isAdmin: false,
                        avatar: 'https://cdn-icons-png.flaticon.com/512/25/25400.png',
                    }
                    await useAPI().postNewUser(newUser);

                    profileModalRegBtn.innerHTML = 'Успех'
                    profileModalRegBtn.style.backgroundColor = 'rgba(24, 133, 54, 1)'

                    function closeReg () {
                        profileModalReg.style.display = "none";
                        document.body.style.cssText = `
                        overflow: auto;
                    `
                    }

                    setTimeout(closeReg, 500)


                }

            } catch (error) {
                console.error('ошибка', error)
            }



        });

        const modalCross = document.getElementById('profile-modal__cross-reg');
        profileModalReg.style.display = 'flex';
        document.body.style.cssText = `
            overflow: hidden;
        `

        modalCross.addEventListener('click', () => {
            profileModalReg.style.display = "none";
            document.body.style.cssText = `
                overflow: auto;
            `
        })
    }

    profileEnter.addEventListener('click', async function () {
        await profileModalRender();
        const profileRegistration = document.getElementById('profile-registration')

        profileRegistration.addEventListener('click', function () {

            profileModalRegRender()
        })
    })

}