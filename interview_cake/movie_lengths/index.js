// Users on longer flights like to start a second movie right 
// when their first one ends, but they complain that the plane 
// usually lands before they can see the ending. So you're 
// building a feature for choosing two movies whose total 
// runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength 
// (in minutes) and an array of integers movieLengths (in minutes) 
// and returns a boolean indicating whether there are two numbers 
// in movieLengths whose sum equals flightLength.

function findMovies(movies, flightLength) {
  let moviesWatched = new Set();
  for (let i = 0; i < movies.length; i++) {
    let firstMovie = movies[i];
    let secondMovie = flightLength - firstMovie;
    if (moviesWatched.has(secondMovie)) {
      return true;
    } else {
      moviesWatched.add(firstMovie);
    }
    return false;
  }
}

export default findMovies;