
    var box = document.querySelector(".box")
    var btn = document.querySelector(".js-button")


    async function getAPI(){
        const url = "https://api.quotable.io/random"
        const response = await fetch(url)
        const data = await response.json()
        const quote = data.content
        const author = data.author
        box.innerHTML = `<span>"${quote}"</span> <h3>- ${author}</h3>`
        console.log(quote)
    }

    getAPI()

    btn.addEventListener('click', function(event){
        getAPI()
    })