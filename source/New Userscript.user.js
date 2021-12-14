// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://schools.dnevnik.ru/marks.aspx?school=54250&index=6&tab=period&homebasededucation=False
// @icon         https://www.google.com/s2/favicons?domain=dnevnik.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var trs = $('table#journal>tbody>tr')
    $(trs[0]).append('<th style="width:5%" rowspan="2">Ср.балл</th>')
    for (var i = 2; i<trs.length; i++)
    {
        var current_tr = $(trs[i])
        var current_marks_elements = current_tr.find('.tac>span')

        var sum_marks = 0
        var count = 0
        var average_score = 0

        for (var j = 0; j<current_marks_elements.length; j++){
            sum_marks = sum_marks + parseInt(current_marks_elements[j].innerHTML)
            count = count+1
        }
        average_score = sum_marks/count
        console.log(average_score)
        current_tr.append('<th><span class="mark">' + average_score.toFixed(2) + '</span></th>')
    }
})();