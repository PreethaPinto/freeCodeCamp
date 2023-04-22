const filteredList = watchList
  .filter((movie) => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map((movie) => {
    return {
      title: movie.Title,
      rating: movie.imdbRating,
    };
  });
