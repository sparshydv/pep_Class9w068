const movies = [
    { name: "Inception", releaseDate: "2010" },
    { name: "Interstellar", releaseDate: "2014" },
    { name: "The Dark Knight", releaseDate: "2008" },
    { name: "Avengers: Endgame", releaseDate: "2019" },
    { name: "The Matrix", releaseDate: "1999" },
    { name: "Parasite", releaseDate: "2019" },
    { name: "The Godfather", releaseDate: "1972" },
    { name: "Forrest Gump", releaseDate: "1994" },
    { name: "Fight Club", releaseDate: "1999" },
    { name: "Titanic", releaseDate: "1997" }
];

//First Operation
//ForEach()

movies.forEach((movie) => console.log(`Movie Names is : ${movie.name}`));

movies.forEach((releaseD) => console.log(`Release Date is : ${releaseD.releaseDate}`));

movies.forEach((m) => console.log(`Movie Named ${m.name} will release on ${m.releaseDate}`));





//Second Operation
//Filter()

const filterArr = movies.filter((n) => {return n.name == "Forrest Gump"});
console.log(filterArr);





//Third Operation
//Map()

movies.map((n) => console.log(`Normal Name: ${n.name}, Name in Capital Letters: ${n.name.toUpperCase()}`))





//4th Operation
//Find()

//Listen ye releaseDate ke basis pe filter/find karta hai lakin agar mil jai too return purra element karta hai with name and releaseDate
//Same is for Filter ie it checks on the basis of that but return full element

const findArr = movies.find((m) => m.releaseDate >= 2010);
console.log(findArr);





//5th Operation
//Every()

const everyArr = movies.every((m) => m.releaseDate > 1950);
console.log(everyArr);





//6th Operation
//Reduce()

//Iss me eek accumulator variable hota hai uss ko increase ya decrease karte hai and Optional 2nd parameter me uss ki initial value bhi dete hai.


const movieDetails = movies.reduce((acc, m) => {
    return acc + `Movie Named ${m.name} will release on ${m.releaseDate}\n`;
}, '');

console.log(movieDetails);






//7th Operation
//Sort()

//This will sort the original array
movies.sort((m1, m2) => m1.name.localeCompare(m2.name));

//As the sort() does not return each element implicitly so we have to console.log explicitly
movies.forEach((m) => console.log(m.name));
