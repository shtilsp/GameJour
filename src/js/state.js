export function state() {

    function getCardId() {
        let cardId = localStorage.getItem('cardId')
        console.log(cardId)
        return cardId
    }

    function newUser(newUserId) {
        localStorage.setItem('user', newUser)
        console.log(localStorage.getItem('user'))

    }

    function postCardId(newCardId) {
        localStorage.setItem('cardId', newCardId)
        console.log(localStorage.getItem('cardId'))
    }

    function getLikedCardId() {
        let cardLikedId = localStorage.getItem('cardLikedId')
        console.log(localStorage.getItem('cardId'))
        return getLikedCardId
    }
    function postLikedCardId(newCardLikedId) {
        localStorage.setItem('cardLikedId', newCardLikedId)
        console.log(localStorage.getItem('cardId'))
    }

    function getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }


    function removeCardId() {
        localStorage.removeItem('cardId');
    }

    return {
        getCardId, postCardId, removeCardId, postLikedCardId, getUser, getLikedCardId, newUser
    }



}