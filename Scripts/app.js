/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date July 11, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";


    // app entry function
    function init() {
        console.log("App Started");

        var mystring = "MyStrIng";
        console.log("Original String: " + mystring);
        var newstring = mystring.toLowerCase();
        console.log("New String: " + newstring);

        var firstNameLastName = "John Smith";
        var spacePosition = firstNameLastName.indexOf(" ");
        console.log(spacePosition);

        var firstName = firstNameLastName.slice(0, spacePosition + 2);
        console.log(firstName);

        var emailPattern = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;

        var myArray = new Array();
        var myOtherArray = [];
        myOtherArray[0] = "firstString";

        function Card(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        var deck = [
            new Card("Ace","Spades"), 
            new Card("King","Diamonds"), 
            new Card("Jack","Clubs"),
            new Card("Queen", "Hearts"),
            new Card("10", "Spades")
            ];

        /*
        for (var index = 0; index < deck.length; index++) {
            console.log(deck[index].face + " " + deck[index].suit);
        }
        */

        /*
        deck.forEach(function(card) {
            console.log(card.face + " " + card.suit);
        }, this);
        */

        for (var card in deck) {
            console.log(deck[card].face + " " + deck[card].suit);
        }

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();