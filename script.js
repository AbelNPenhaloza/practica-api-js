async function buscarPersonajes(nombre){
    let personajes = []
    let nextPage = ""
    const url =`https://rickandmortyapi.com/api/character/?name=${nombre}`
    
    while(nextPage == '' ? url: nextPage){
        await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            personajes.push(...data.results)
            nextPage = data.info.next
        })
        .catch((error) => alert(error))
    }
    console.log(personajes)
 }
 buscarPersonajes("rick")
