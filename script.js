//fetch("https://api.themoviedb.org/3/movie/550?api_key=ccab0fd6d82ebe901567cadaab136467")
//.then(result => result.json())
//.then(result => {
//    console.log(result);
//})
/*.then(result => {
    console.log(result)
})*/
//let movie =[]
let containerMovie = document.getElementById("list-movie")

let getDataMovie = async () => {
    let response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=ccab0fd6d82ebe901567cadaab136467")
    let movie = await response.json()

    movie.forEach(element => {
        console.log(element)
    });
}

getDataMovie()