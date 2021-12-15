// ==UserScript==
// @name         average_score
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       KrasBaDA
// @match        https://schools.dnevnik.ru/marks.aspx*tab=period*
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
        average_score = (sum_marks/count).toFixed(2)
        var mark_class = 'mG'

        if (2.5 < average_score && average_score < 3.5){mark_class = 'mY'}
        if (average_score < 2.5){mark_class = 'mR'}

        current_tr.append('<th><span class="mark '+mark_class+'">' + average_score + '</span></th>')
    }
})();
