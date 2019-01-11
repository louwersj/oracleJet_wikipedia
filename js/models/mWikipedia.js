/**
 * Copyright (c) 2017, 2018, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.
 */
define(['ojs/ojcore','jquery'],
       function(oj, $) {
           function wikipedia() {

           }

           /**
            * Parse information in JSON from the wikipedia API.
            * @returns {promise} - resolve on the following object
            *   {
            *     hostname
            *     ip
            *     kernel_version
            *     mem
            *     os_version
            *     platform_version
            *     root_disk_size
            *     uptime
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
