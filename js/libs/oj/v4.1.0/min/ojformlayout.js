/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","ojs/ojcomponentcore","ojs/ojlabel"],function(a){function g(c){var e=this;e.cEa="-labelled-by";e.WO="data-oj-ofl-bonus-dom";e.BCa="["+e.WO+"]";e.mk=function(){var a=document.createElement("div");a.classList.add("oj-form");a.setAttribute("data-oj-context","");for(a.setAttribute("data-oj-internal","");c.firstElementChild;)a.appendChild(c.firstElementChild);c.appendChild(a);e.bx=a};e.render=function(b){e.dUa();a.Context.getContext(e.bx).Rc().whenReady().then(function(){e.fUa();e.fra.disconnect();
e.SZa();b||e.HVa();e.WGa();e.LGa();e.fra.observe(e.bx,{childList:!0,subtree:!0});e.npa();e.Moa()})};e.dUa=function(){if(!e.Fe){var b=a.Context.getContext(c).Rc();e.Fe=b.Vc({description:"The oj-form-layout component with id \x3d '"+c.id+"' is being rendered."})}};e.Moa=function(){e.Fe&&(e.Fe(),e.Fe=null)};e.fUa=function(){if(!e.pT){var b=a.Context.getContext(e.bx).Rc();e.pT=b.Vc({description:"The oj-form div for oj-form-layout component with id \x3d '"+c.id+"' is being rendered."})}};e.npa=function(){e.pT&&
(e.pT(),e.pT=null)};e.SZa=function(){var a=e.bx,b=c.maxColumns;"start"===c.labelEdge?(a.classList.add("oj-form-cols-labels-inline"),a.classList.add("oj-ofl-labels-inline"),a.classList.remove("oj-form-cols")):(a.classList.add("oj-form-cols"),a.classList.remove("oj-form-cols-labels-inline"),a.classList.remove("oj-ofl-labels-inline"));a.style.columnCount=b;a.style.webkitColumnCount=b;a.style.MozColumnCount=b};e.HVa=function(){for(var a=e.bx.querySelectorAll(e.BCa),b=a.length,c=0;c<b;++c){var d=a[c];
"OJ-LABEL"===d.tagName?d.parentElement.removeChild(d):e.QVa(d)}};e.WGa=function(){for(var a=e.bx.firstElementChild,b;a;){if("labelHint"in a)e.Q1(a),b=e.cKa(a),a.parentElement.insertBefore(b,a),e.PZa(a,b),e.CGa(a);else throw e.Q1(c),e.Q1(a),e.npa(),e.Moa(),Error("oj-form-layout component with id\x3d'"+c.id+"' has a child element "+a.tagName+" with id\x3d'"+a.id+"' that is not a supported child type.  See oj-form-layout tag documentation for more information.");a=a.nextElementSibling}};e.cKa=function(a){var b=
document.createElement("oj-label");b.setAttribute(e.WO,"");b.setAttribute("data-oj-internal","");b.setAttribute("data-oj-binding-provider","none");b.setAttribute("data-oj-context","");var c=document.createElement("span");c.id=a.id+"|hint";c.textContent=a.labelHint;b.appendChild(c);e.eTa(b,a);return b};e.eTa=function(a,b){"labelledBy"in b?(a.id=b.id+e.cEa,b.labelledBy=a.id):a.setAttribute("for",b.id)};e.pha=function(a){var b=document.getElementById(a.target.id+"|hint");b&&(b.innerText=a.detail.value)};
e.oha=function(a){var b=e.wla(a.target);b&&(b.help=a.detail.value)};e.qha=function(a){var b=e.wla(a.target);b&&(b.showRequired=a.detail.value)};e.CGa=function(a){a.getAttribute("data-oj-has-event-listeners")||(a.setAttribute("data-oj-has-event-listeners",""),a.addEventListener("labelHintChanged",e.pha),a.addEventListener("helpHintsChanged",e.oha),a.addEventListener("requiredChanged",e.qha))};e.SVa=function(a){for(var b=a.length,c=0;c<b;c++)for(var d=a[c],g=d.removedNodes.length,p=0;p<g;p++){var t=
d.removedNodes[p];1===t.nodeType&&null!=t.getAttribute("data-oj-has-event-listeners")&&(t.removeEventListener("labelHintChanged",e.pha),t.removeEventListener("helpHintsChanged",e.oha),t.removeEventListener("requiredChanged",e.qha),t.removeAttribute("data-oj-has-event-listeners"))}};e.wla=function(a){return"labelledBy"in a?c.getElementById(a.labelledBy):c.querySelector('oj-label[for\x3d"'+a.id+'"]')};e.PZa=function(b,c){a.Context.getContext(c).Rc().whenReady().then(function(){var a=b.helpHints;a&&
(a.definition||a.source)&&(c.help=b.helpHints);c.showRequired=b.required})};e.LGa=function(){var a=[],b,g,l,m=e.bx.children.length,p="start"===c.labelEdge?c.labelWidth:"100%",t=0;for(e.AHa(e.bx.children,a);t<m;)b=a[t],g=e.g1("oj-flex"),l=e.g1("oj-flex-item"),g.appendChild(l),l.appendChild(b),t++,b=a[t],l.style.webkitFlex="0 1 "+p,l.style.K8a="0 1 "+p,l.style.maxWidth=p,l.style.width=p,l=e.g1("oj-flex-item"),g.appendChild(l),b.parentElement.insertBefore(g,b),l.appendChild(b),t++};e.AHa=function(a,
b){for(var c=a.length;c--;)b[c]=a[c]};e.g1=function(a){var b=document.createElement("div");b.setAttribute(e.WO,"");b.setAttribute("data-oj-internal","");b.classList.add(a);return b};e.fra=new MutationObserver(function(a){document.body.contains(c)?e.oRa(a)||(e.SVa(a),c.refresh()):this.disconnect()});e.oRa=function(a){for(var b=!0,c=a.length,d=0;d<c;d++)if(e.gSa(a[d].target)){b=!1;break}return b};e.gSa=function(a){return a&&"DIV"===a.tagName&&a.hasAttribute(e.WO)};e.QVa=function(a){for(;a.firstElementChild;)a.parentNode.insertBefore(a.firstElementChild,
a);a.parentNode.removeChild(a)};e.Q1=function(a){a.id||(a.id="oflId_"+b++)}}var c={properties:{labelEdge:{type:"string",enumValues:["start","top"],value:"top"},labelWidth:{type:"string",value:"33%"},maxColumns:{type:"number",value:1}},extension:{rp:function(a){var b=a._ojFormLayout,c=!1;b||(c=!0,b=new g(a),b.mk(),Object.defineProperty(a,"_ojFormLayout",{value:b}),a.classList.add("oj-form-layout"));b.render(c)}}};Object.freeze(c);var b=0;a.J.Ua("oj-form-layout",null,c);a.J.register("oj-form-layout",
{metadata:a.J.getMetadata("oj-form-layout")})});