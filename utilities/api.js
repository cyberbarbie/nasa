const api = {
    nasaPics(){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=pI4tNKeoc0hHwi3F75yL7H7sCveGOgYns5dQa9qM'
        return fetch(url).then((res) => res.json())
    }
}

module.exports = api


