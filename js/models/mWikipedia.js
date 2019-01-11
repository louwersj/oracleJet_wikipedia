/**
 * Copyright (c) 2018, Johan Louwers. Licensed under GNU GENERAL PUBLIC LICENSE
 */
define(['ojs/ojcore','jquery'],
       function(oj, $) {
           function wikipedia() {

           }

           /**
            * Parse information in JSON from the wikipedia API.
            * @returns {promise} - resolve on the following object
            *   {
            *     parse {
            *        title
            *        pageid
            *        text {
            *          *
            *       }
            *     }
            *   }
            */
           wikipedia.prototype.wikipediaParse = function() {
               return(
                       new Promise(function(resolve, reject) {
                           $.ajax( {
                               'url':'http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?',
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
