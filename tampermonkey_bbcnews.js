// ==UserScript==
// @name         Automatically play bbc news
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.bbc.co.uk/*
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==


function clickPlay()
{
    var dom = document.getElementById('main');
    console.log(dom.querySelector(".channel-panel-item__content__ctas__cta a.button--clickable"));
    dom.querySelector(".channel-panel-item__content__ctas__cta a.button--clickable").click();
    console.log("click");
}

unsafeWindow.tmpmnk_clickPlay = clickPlay;

(function() {
    'use strict';
    setTimeout('tmpmnk_clickPlay()',2000);
})();