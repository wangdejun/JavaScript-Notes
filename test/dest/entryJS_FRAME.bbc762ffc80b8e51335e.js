!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,n,t){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function t(e){ga("send","event","Frame-Nav","Search",e),__insp.push(["virtualPage"]),"m"==window.modeSens.Gender.get()?window.location="/product/men/?txt="+e:window.location="/product/women/?txt="+e}function o(e){$("#errmsg").html(e),$("#errmodal").modal("show")}function i(){if(-1==document.cookie.indexOf(a)){myajax("POST","/tip/gettips/");var e=new Date;e.setTime(e.getTime()+864e5),document.cookie=a+";path=/;expires="+e.toUTCString()}}function c(e){var n,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null}function r(){var e=$(window).scrollTop();Math.max($(window).height(),$(this).outerHeight(),$("html").height());e+200>Math.min(window.innerHeight,document.body.clientHeight)?$("#totop").fadeIn(500):$("#totop").fadeOut(500)}console.log("ABCDDD");var a="gottips=1",u=!1;$(document).ready(function(){error&&error.length>0&&o(error),"0"!=noticeu&&$("#nme > a").append("<div class='ncount'>"+noticeu+"</div>"),"0"!=noticep&&$("#nprod > a").append("<div class='ncount'>"+noticep+"</div>"),$("#searchtxt, #search, #mini_searchtxt").typeahead({showHintOnFocus:!0,source:[],minLength:0,delay:10,autoSelect:!1}),$("#searchtxt").keyup(function(e){13==(e.keyCode?e.keyCode:e.which)&&t(encodeURIComponent($(this).val()))}).blur(function(){$("#searchtxt").css("display","none")}),$("#mini_searchtxt").keyup(function(e){13==(e.keyCode?e.keyCode:e.which)&&t(encodeURIComponent($(this).val()))}),$("#mini_search_button").click(function(){t(encodeURIComponent($("#mini_searchtxt").val()))}),$("#search_button").click(function(){$("#searchtxt").css("display","block");encodeURIComponent($("#searchtxt").val())}),$("#precover").fadeOut("200"),i(),$(document).mouseup(function(e){if(u){var n=$("#search_bar");n.is(e.target)||0!==n.has(e.target).length||(n.hide(),u=!1)}}),$("#countrySelectContainer").flagStrap({countries:COUNTRIES,selectedCountry:COUNTRY,inputName:"country"}),$("[name='country']").on("change",function(e){$("#countrySelectContainer .dropdown-toggle").dropdown("toggle"),$("#countryLanguageForm").submit()}),$("#langSelect").on("change",function(){var e=this.value;e="zh-cn"==e?"zh":e,$("#lang").val(e),$("#langForm").submit()}),$("#invite_code").focus(function(){$(this).attr("placeholder","")}).blur(function(){$(this).attr("placeholder","请输入VIP邀请码")}),1==c("showinvitation")&&cncode.length>0&&!c("invitationcode")?$("#invite-code-modal").modal("show"):($("#invite-code-modal").modal("hide"),document.cookie="showinvitation=1;path=/;max-age=86400"),$("#service,#service_qrcode").hover(function(){ga("send","event","Lead_Download","Enter")}),$("#service,#service_qrcode").click(function(){ga("send","event","Lead_Download","Click")}),$("#711668live800150133").hover(function(){ga("send","event","Customer_service","Enter")}),$(window).scroll(r),-1!=location.href.indexOf("popup=open")&&$("#campaign_modal").modal("show")})}]);