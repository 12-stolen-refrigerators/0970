// ==UserScript==
// @name         Bot for Bing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  searching something
// @author       Maria Tsval
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let searchBtn = document.getElementsByName("search")[0];

if (searchBtn != undefined) {
    let i = 0;
    let timerId = setInterval(function() {
        bingInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            searchBtn.click();
        }
    }, 300);

    } else if (location.hostname == "napli.ru") {
        setInterval(() => {
            let index = getRandom(0, links.length);
            if (getRandom(0, 101) >= 70) {
                location.href = "https://www.bing.com/";
            }
            if (links[index].href.indexOf("napli.ru") != -1) {
                links[index].click();
            }
        }, getRandom(2000, 5000))

} else {
    let nextBingPage = true;
    for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
    let link = links[i];
    nextBingPage = false;
    setTimeout(() => link.click(), getRandom(2500, 4000));
    break;
         }
    }
let currentBingPage = document.querySelector(".sb_pagS");
if (currentBingPage.innerText == "5") {
    nextBingPage = false;
    location.href = "https://www.bing.com/";
}

if (nextBingPage) {
    let nextButton = document.querySelector(".sb_pagN");
    setTimeout(() => nextButton.click(),getRandom(2000, 4000));
}

}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
