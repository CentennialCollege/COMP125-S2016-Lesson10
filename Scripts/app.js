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

    var xhr;

    // we can use a named function instead of an anonymous function
    function readData() {
           // data loaded                everything is ok
        if((xhr.readyState === 4) && (xhr.status === 200)) {

            var addressbook = JSON.parse(xhr.responseText);
            var contacts = addressbook.contacts;

            contacts.forEach(function(contact) {
                console.log(contact);
            }, this);
            
           }
    }

    // app entry function
    function init() {
       xhr = new XMLHttpRequest(); // step 1 - create xhr object
   
       xhr.open("GET","Scripts/addressbook.json",true); // step 2 - open request

       xhr.send(null); // step 3 - send request

       xhr.addEventListener("readystatechange", readData); // step 4

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();