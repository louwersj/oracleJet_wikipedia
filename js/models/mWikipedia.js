/**
 * Copyright (c) 2018, Johan Louwers. Licensed under GNU GENERAL PUBLIC LICENSE
 */
define(['ojs/ojcore','jquery'],
       function(oj, $) {
           function wikipedia() {

           }

           /**
            * wikipediaParse will parse information in JSON via the wikipedia
            * API based upon a pageid. As this function uses the pageid as the
            * prime way of locating the page you will have to provide this. As
            * an example you can use 16095 as pageid to get the Jimi Hendrix
            * page parsed into a JSON format.
            * !! Do use &callback=? in the URL to prvent CORS issues !!
            */
           wikipedia.prototype.wikipediaParse = function() {
               return(
                       new Promise(function(resolve, reject) {
                           $.ajax( {
                               'url':'http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&pageid=16095&callback=?',
                               'async': true,
                               'dataType': "json"
                           }).done(
                               function wikipediaParseDone (data) {
                                   resolve(data);
                               }
                           ).fail(
                               function wikipediaParseFail (jqxhr, text_status, error_thown) {
                                   reject(jqxhr.responseJSON ? jqxhr.responseJSON.msg : jqxhr.responseText);
                               }
                           );
                       })
                   );
           };

           /**
            * wikipediaExtract will get an extract of a page in the form of
            * a JSON file from the wikipedia API. This will require a pageid
            * as the input. As an example you can use 16099 as pageid to get
            * the Janet Reno extract into a JSON format.
            * !! Do use &callback=? in the URL to prvent CORS issues !!
            */
           wikipedia.prototype.wikipediaExtract = function() {
               return(
                       new Promise(function(resolve, reject) {
                           $.ajax( {
                               'url':'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=16099&callback=?',
                               'async': true,
                               'dataType': "json"
                           }).done(
                               function wikipediaParseDone (data) {
                                   resolve(data);
                               }
                           ).fail(
                               function wikipediaParseFail (jqxhr, text_status, error_thown) {
                                   reject(jqxhr.responseJSON ? jqxhr.responseJSON.msg : jqxhr.responseText);
                               }
                           );
                       })
                   );
           };


           return wikipedia;
       });
