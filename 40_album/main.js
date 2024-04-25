"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating 3 variables with different values
let album1 = make_album("Amna", "album title #1");
let album2 = make_album("uzma", "album title #2");
let album3 = make_album("Amna", "album title #3", 50);
console.log(album1);
console.log(album2);
console.log(album3);
