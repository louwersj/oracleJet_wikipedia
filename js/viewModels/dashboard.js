/**
 * Copyright (c) 2018, Johan Louwers. Licensed under GNU GENERAL PUBLIC LICENSE
 */
 
define(['models/mWikipedia', 'ojs/ojcore', 'knockout', 'jquery'],
 function(wikipedia, oj, ko, $) {



    function vmWikipedia() {

      this.wikiTitle = ko.observable();
      this.wikiPageId = ko.observable();
      this.wikiContent = ko.observable();

       function vmWikipediaParse()
       {
         var p = new wikipedia();

         p.wikipediaParse().then(
             function (info)
             {
                self.wikiTitle(info.parse.title);
                self.wikiPageId(info.parse.pageid);
                self.wikiContent(info.parse.text["*"]);
             }).catch(function (reason)
         {
             // TODO : enough for now
             oj.Logger.warn('get appliance info  has failed : %s', reason);
             console.log(reason)
         });
      }



      var self = this;

     vmWikipediaParse()
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new vmWikipedia();
  }
);
