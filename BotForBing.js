// ==UserScript==
// @name         Bot for Bing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  searching something
// @author       Maria Tsval
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let searchBtn = document.getElementsByName("search")[0];

if (searchBtn != undefined) {
    bingInput.value = keyword;
    searchBtn.click();
} else {
    for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
    let link = links[i];
    link.click();
         }
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}