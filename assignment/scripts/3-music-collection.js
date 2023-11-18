console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
myCollection=[];

function addToCollection(collection, title, artist, yearPublished){
  const album={title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return collection[collection.length-1];
}
addToCollection(myCollection, 'London Calling', 'The Clash', 1979);
console.log(myCollection);
addToCollection(this.myCollection, 'The Clash', 'The Clash', 1977);
addToCollection(this.myCollection, 'Piper at the Gates of Dawn', 'Pink Floyd', 1967);
addToCollection(this.myCollection, 'Circles', 'Mac Miller', 2020);
addToCollection(this.myCollection, 'Dreams and Nightmares', 'Meek Mill', 2012);
addToCollection(this.myCollection, 'Is This it', 'The Strokes', 2001);
addToCollection(this.myCollection, 'Sgt. Peppers Lonely Hearts Club Band', 'The Beatles', 1967);
console.log(this.myCollection);

function showCollection(collection){
  for(let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
showCollection(this.myCollection);






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
