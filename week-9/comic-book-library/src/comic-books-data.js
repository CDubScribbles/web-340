/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: comic-books-data.js
 * Description: Child script that outputs a JSON stringified array of
 *              comic books to the console.
 */
"use strict";

const comicBooks = [
  { Name: "The Dark Knight Returns", Publisher: "DC Comics", Superhero: "Batman", Villain: "The Joker" },
  { Name: "The Death of Superman", Publisher: "DC Comics", Superhero: "Superman", Villain: "Doomsday" },
];

console.log(JSON.stringify(comicBooks));