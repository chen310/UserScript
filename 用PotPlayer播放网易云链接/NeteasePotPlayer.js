// ==UserScript==
// @name         NeteasePotPlayer
// @icon         https://s1.music.126.net/style/favicon.ico?v20180823
// @namespace    https://github.com/chen310
// @version      1.0.0
// @description  用 PotPlayer 打开网易云音乐链接进行播放
// @author       chen310
// @match        *://music.163.com/song?*
// @match        *://music.163.com/mv?*
// @match        *://music.163.com/video?*
// @match        *://music.163.com/playlist?*
// @match        *://music.163.com/album?*
// @match        *://music.163.com/djradio?*
// @match        *://music.163.com/program?*
// @match        *://music.163.com/artist?*
// @match        *://music.163.com/discover/toplist*
// @match        *://music.163.com/discover/recommend/taste
// @match        *://music.163.com/my/
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// ==/UserScript==

// 需要配合 PotPlayer 插件 https://github.com/chen310/NeteasePotPlayer 进行使用

(function () {
    "use strict";

    var fakeProtocol = "rtmp";
    var url = window.location.href.replace("https", fakeProtocol).replace("http", fakeProtocol);
    var element =
        '<a class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="PotPlayer" target="_blank" href="' +
        url +
        '"><i><em class="ply"></em>PotPlayer</i></a>';

    var btns;
    if (window.location.href.search("song") != -1) {
        btns = "#content-operation";
    }
    else if (window.location.href.search("mv") != -1) {
        btns = "#j-op";
    }
    else if (window.location.href.search("video") != -1) {
        btns = "#j-op";
    }
    else if (window.location.href.search("program") != -1) {
        btns = "div.btns.f-cb.j-flag";
    }
    else if (window.location.href.search("playlist") != -1) {
        btns = "#content-operation";
    }
    else if (window.location.href.search("album") != -1) {
        btns = "#content-operation";
    }
    else if (window.location.href.search("djradio") != -1) {
        btns = "div.btns.f-cb.j-flag";
    }
    else if (window.location.href.search("artist") != -1) {
        btns = "#content-operation";
    }
    else if (window.location.href.search("toplist") != -1) {
        btns = "div.btns.f-cb";
    }
    else if (window.location.href.search("taste") != -1) {
        btns = "div.btnwrap.f-cb.j-flag";
    }

    $(btns).append(element);
})();

