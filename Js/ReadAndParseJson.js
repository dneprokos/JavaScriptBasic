"use strict";

function TestResult(testName, testDuration, passed, errorMsg){
    this.testName = testName;
    this.testDuration = testDuration / 1000 + " sec";
    this.passed = passed;

    errorMsg != undefined ? this.errorMsg = errorMsg : this.errorMsg = "";
}

$.getJSON( "../Jsons/report.json", function( data ) {
    var objects = [];
    $.each( data, function( key, val ) {
        let assertRes = val.assertions[0]; 
        let testResult = new TestResult(val.description, val.duration, assertRes.passed, assertRes.errorMsg);        
        objects.push(testResult);
    });

    var trHTML = '';

    $.each(objects, function (i, item) {
            
        trHTML += 
        '<tr>' + 
        '<td>' + objects[i].testName + '</td>' + 
        '<td>' + objects[i].passed + '</td>' +
        '<td>' + objects[i].testDuration + '</td>' +
        '<td>' + objects[i].errorMsg + '</td>' +     
        '</tr>';
    });

    $('#testResults').append(trHTML);
});

