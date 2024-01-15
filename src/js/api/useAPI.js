export function useAPI() {
    return {
        // получение данных по всем играм
        async getSpotlightCards(){
            const res = await fetch('http://localhost:3000/spotlightGamesDb', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async getComments(){
            const res = await fetch('http://localhost:3000/comments', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async postComment(newComment){
            const res = await fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newComment)
            })
        },
        async editCard(id, data){
            const res = await fetch(`http://localhost:3000/spotlightGamesDb/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            return res.json()
        },
        async deleteCard(id){
            const res = await fetch(`http://localhost:3000/spotlightGamesDb/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async deleteReview(gameId){
            const res = await fetch(`http://localhost:3000/reviews/${gameId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async postNewGame(newGame){
            const res = await fetch('http://localhost:3000/spotlightGamesDb', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newGame)
            })
            return res.json()
        },
        async postNewReview(newReview){
            const res = await fetch('http://localhost:3000/reviews', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview)
            })
            return res.json()
        },
        async getReview(){
            const res = await fetch('http://localhost:3000/reviews', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async searchSpotlightCards(str) {
            const res = await fetch(`http://localhost:3000/spotlightGamesDb/?name_like=${str}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            return res.json()
        },
        async getDeals(){
            const res = await fetch('http://localhost:3000/deals', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        //получение данных пользователя
        async getUser(login, password) {
            const res = await fetch(`http://localhost:3000/users?login=${login}&password=${password}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return res.json()
        },
        async changeUser(id, data) {
            const res = await fetch(`http://localhost:3000/users/${id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            return res.json()
        },
        // функция регистрации нового пользователя
        async postNewUser(user) {
            const res = await fetch(`http://localhost:3000/users`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            return res.json()
        },
        async checkUser(login) {
            const res = await fetch(`http://localhost:3000/users?login=${login}` , {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }

                })
            return res.json()
        },
        //функция добавления в избранное
        async addLiked(id, data) {
            const res = await fetch(`http://localhost:3000/users/${id}` , {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

        }
    }
}