// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/* {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  }*/

function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((array) => {
      return array.director 
    })
    return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        const filteredMovies = moviesArray.filter((array) => {
        return array.genre.includes("Drama") && array.director === "Steven Spielberg"
    })
    if (filteredMovies === []){
        return 0;
    }
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray && moviesArray.length === 0) {
        return 0;
    }

    const total = moviesArray.reduce((tot, mov) => {
        return tot + (mov.score || 0);
    },0);
   
   return parseFloat((total / moviesArray.length).toFixed(2));
   

   }

   

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const filteredMovies = moviesArray.filter((array) => {
        if (array === undefined) {
            return 0;
        }
        return array.genre.includes("Drama");
        })

        const sum = filteredMovies.reduce((p, c) => {
            p += c.score;
            return p;
        }, 0);

        return parseFloat((sum / filteredMovies.length).toFixed(2));
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movieYear = moviesArray.filter((array) => {
        return array.year;
    });
   
    const sortedMovies = movieYear.sort((a, b) => {
        return a.year - b.year;
    
    });
    
    return sortedMovies
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitle = moviesArray.map((array) => {
        return array.title;
    }) 

    const sortedMovies = movieTitle.sort()

    return sortedMovies.slice(0, 20); 
   
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
