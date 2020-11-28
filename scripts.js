
const button = document.getElementById('buttonChrome')

button.addEventListener('click', ()=>{
    axios({
        method:'GET',
        url: 'https://rickandmortyapi.com/api/character'
        
    }).then(res=>{
        console.log(res)
    })

})