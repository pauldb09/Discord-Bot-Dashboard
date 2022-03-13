(function(window,document,$){"use strict";var $html=$("html");var $body=$("body");var $danger="#ea5455";var $primary="#ea5455";var $textcolor="#4e5154";$(window).on("load",function(){var rtl;var compactMenu=false;if($body.hasClass("menu-collapsed")){compactMenu=true;}
if($("html").data("textdirection")=="rtl"){rtl=true;}
setTimeout(function(){$html.removeClass("loading").addClass("loaded");},1200);$.app.menu.init(compactMenu);var config={speed:300};if($.app.nav.initialized===false){$.app.nav.init(config);}
Unison.on("change",function(bp){$.app.menu.change();});$('[data-toggle="tooltip"]').tooltip({container:"body"});if($(".navbar-hide-on-scroll").length>0){$(".navbar-hide-on-scroll.fixed-top").headroom({offset:205,tolerance:5,classes:{initial:"headroom",pinned:"headroom--pinned-top",unpinned:"headroom--unpinned-top"}});$(".navbar-hide-on-scroll.fixed-bottom").headroom({offset:205,tolerance:5,classes:{initial:"headroom",pinned:"headroom--pinned-bottom",unpinned:"headroom--unpinned-bottom"}});}
$('a[data-action="collapse"]').on("click",function(e){e.preventDefault();$(this).closest(".card").children(".card-content").collapse("toggle");$(this).closest(".card").children(".card-header").css("padding-bottom","1.5rem");$(this).closest(".card").find('[data-action="collapse"]').toggleClass("rotate");});$('a[data-action="expand"]').on("click",function(e){e.preventDefault();$(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-maximize icon-minimize");$(this).closest(".card").toggleClass("card-fullscreen");});$(".scrollable-container").each(function(){var scrollable_container=new PerfectScrollbar($(this)[0],{wheelPropagation:false});});$('a[data-action="reload"]').on("click",function(){var block_ele=$(this).closest(".card").find(".card-content");var reloadActionOverlay;if($body.hasClass("dark-layout")){var reloadActionOverlay="#10163a";}else{var reloadActionOverlay="#fff";}
block_ele.block({message:'<div class="feather icon-refresh-cw icon-spin font-medium-2 text-primary"></div>',timeout:2000,overlayCSS:{backgroundColor:reloadActionOverlay,cursor:"wait"},css:{border:0,padding:0,backgroundColor:"none"}});});$('a[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast");});setTimeout(function(){$(".row.match-height").each(function(){$(this).find(".card").not(".card .card").matchHeight();});},500);$('.card .heading-elements a[data-action="collapse"]').on("click",function(){var $this=$(this),card=$this.closest(".card");var cardHeight;if(parseInt(card[0].style.height,10)>0){cardHeight=card.css("height");card.css("height","").attr("data-height",cardHeight);}else{if(card.data("height")){cardHeight=card.data("height");card.css("height",cardHeight).attr("data-height","");}}});$(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active");var menuType=$body.data("menu");if(menuType!="horizontal-menu"&&compactMenu===false){$(".main-menu-content").find("li.active").parents("li").addClass("open");}
if(menuType=="horizontal-menu"){$(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open");$(".main-menu-content").find('li.active').closest('li.nav-item').addClass('sidebar-group-active open');}
$(".heading-elements-toggle").on("click",function(){$(this).next(".heading-elements").toggleClass("visible");});var chartjsDiv=$(".chartjs"),canvasHeight=chartjsDiv.children("canvas").attr("height"),mainMenu=$(".main-menu");chartjsDiv.css("height",canvasHeight);if($body.hasClass("boxed-layout")){if($body.hasClass("vertical-overlay-menu")){var menuWidth=mainMenu.width();var contentPosition=$(".app-content").position().left;var menuPositionAdjust=contentPosition-menuWidth;if($body.hasClass("menu-flipped")){mainMenu.css("right",menuPositionAdjust+"px");}else{mainMenu.css("left",menuPositionAdjust+"px");}}}
$(".custom-file input").change(function(e){$(this).next(".custom-file-label").html(e.target.files[0].name);});$(".char-textarea").on("keyup",function(event){checkTextAreaMaxLength(this,event);$(this).addClass("active");});function checkTextAreaMaxLength(textBox,e){var maxLength=parseInt($(textBox).data("length")),counterValue=$(".counter-value"),charTextarea=$(".char-textarea");if(!checkSpecialKeys(e)){if(textBox.value.length<maxLength-1)
textBox.value=textBox.value.substring(0,maxLength);}
$(".char-count").html(textBox.value.length);if(textBox.value.length>maxLength){counterValue.css("background-color",$danger);charTextarea.css("color",$danger);charTextarea.addClass("max-limit");}else{counterValue.css("background-color",$primary);charTextarea.css("color",$textcolor);charTextarea.removeClass("max-limit");}
return true;}
function checkSpecialKeys(e){if(e.keyCode!=8&&e.keyCode!=46&&e.keyCode!=37&&e.keyCode!=38&&e.keyCode!=39&&e.keyCode!=40)
return false;else return true;}
$(".content-overlay").on("click",function(){$(".search-list").removeClass("show");$(".app-content").removeClass("show-overlay");$(".bookmark-wrapper .bookmark-input").removeClass("show");});var container=document.getElementsByClassName("main-menu-content");if(container.length>0){container[0].addEventListener("ps-scroll-y",function(){if($(this).find(".ps__thumb-y").position().top>0){$(".shadow-bottom").css("display","block");}else{$(".shadow-bottom").css("display","none");}});}});$(document).on("click",".sidenav-overlay",function(e){$.app.menu.hide();return false;});if(typeof Hammer!=='undefined'){var rtl;if($('html').data('textdirection')=='rtl'){rtl=true;}
var swipeInElement=document.querySelector('.drag-target'),swipeInAction='panright',swipeOutAction='panleft';if(rtl===true){swipeInAction='panleft';swipeOutAction='panright';}
if($(swipeInElement).length>0){var swipeInMenu=new Hammer(swipeInElement);swipeInMenu.on(swipeInAction,function(ev){if($body.hasClass('vertical-overlay-menu')){$.app.menu.open();return false;}});}
setTimeout(function(){var swipeOutElement=document.querySelector('.main-menu');var swipeOutMenu;if($(swipeOutElement).length>0){swipeOutMenu=new Hammer(swipeOutElement);swipeOutMenu.get('pan').set({direction:Hammer.DIRECTION_ALL,threshold:100});swipeOutMenu.on(swipeOutAction,function(ev){if($body.hasClass('vertical-overlay-menu')){$.app.menu.hide();return false;}});}},300);var swipeOutOverlayElement=document.querySelector('.sidenav-overlay');if($(swipeOutOverlayElement).length>0){var swipeOutOverlayMenu=new Hammer(swipeOutOverlayElement);swipeOutOverlayMenu.on(swipeOutAction,function(ev){if($body.hasClass('vertical-overlay-menu')){$.app.menu.hide();return false;}});}}
$(document).on("click",".menu-toggle, .modern-nav-toggle",function(e){e.preventDefault();$.app.menu.toggle();setTimeout(function(){$(window).trigger("resize");},200);if($("#collapse-sidebar-switch").length>0){setTimeout(function(){if($body.hasClass("menu-expanded")||$body.hasClass("menu-open")){$("#collapse-sidebar-switch").prop("checked",false);}else{$("#collapse-sidebar-switch").prop("checked",true);}},50);}
if($(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").hasClass("show")){$(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").removeClass("show");}
return false;});$(".navigation").find("li").has("ul").addClass("has-sub");$(".carousel").carousel({interval:2000});$(".nav-link-expand").on("click",function(e){if(typeof screenfull!="undefined"){if(screenfull.isEnabled){screenfull.toggle();}}});if(typeof screenfull!="undefined"){if(screenfull.isEnabled){$(document).on(screenfull.raw.fullscreenchange,function(){if(screenfull.isFullscreen){$(".nav-link-expand").find("i").toggleClass("icon-minimize icon-maximize");$("html").addClass("full-screen");}else{$(".nav-link-expand").find("i").toggleClass("icon-maximize icon-minimize");$("html").removeClass("full-screen");}});}}
$(document).ready(function(){$(".step-icon").each(function(){var $this=$(this);if($this.siblings("span.step").length>0){$this.siblings("span.step").empty();$(this).appendTo($(this).siblings("span.step"));}});});$(window).resize(function(){$.app.menu.manualScroller.updateHeight();});$("#sidebar-page-navigation").on("click","a.nav-link",function(e){e.preventDefault();e.stopPropagation();var $this=$(this),href=$this.attr("href");var offset=$(href).offset();var scrollto=offset.top-80;$("html, body").animate({scrollTop:scrollto},0);setTimeout(function(){$this.parent(".nav-item").siblings(".nav-item").children(".nav-link").removeClass("active");$this.addClass("active");},100);});i18next.use(window.i18nextXHRBackend).init({debug:false,fallbackLng:"en",backend:{loadPath:"../../../app-assets/data/locales/{{lng}}.json"},returnObjects:true},function(err,t){jqueryI18next.init(i18next,$);});$(".dropdown-language .dropdown-item").on("click",function(){var $this=$(this);$this.siblings(".selected").removeClass("selected");$this.addClass("selected");var selectedLang=$this.text();var selectedFlag=$this.find(".flag-icon").attr("class");$("#dropdown-flag .selected-language").text(selectedLang);$("#dropdown-flag .flag-icon").removeClass().addClass(selectedFlag);var currentLanguage=$this.data("language");i18next.changeLanguage(currentLanguage,function(err,t){$(".main-menu, .horizontal-menu-wrapper").localize();});});var $filename=$(".search-input input").data("search"),bookmarkWrapper=$(".bookmark-wrapper"),bookmarkStar=$(".bookmark-wrapper .bookmark-star"),bookmarkInput=$(".bookmark-wrapper .bookmark-input"),navLinkSearch=$(".nav-link-search"),searchInput=$(".search-input"),searchInputInputfield=$(".search-input input"),searchList=$(".search-input .search-list"),appContent=$(".app-content"),bookmarkSearchList=$(".bookmark-input .search-list");bookmarkStar.on("click",function(e){e.stopPropagation();bookmarkInput.toggleClass("show");bookmarkInput.find("input").val("");bookmarkInput.find("input").blur();bookmarkInput.find("input").focus();bookmarkWrapper.find(".search-list").addClass("show");var arrList=$("ul.nav.navbar-nav.bookmark-icons li"),$arrList="",$activeItemClass="";$("ul.search-list li").remove();for(var i=0;i<arrList.length;i++){if(i===0){$activeItemClass="current_item";}else{$activeItemClass="";}
$arrList+='<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer '+
$activeItemClass+
'">'+
'<a class="d-flex align-items-center justify-content-between w-100" href='+
arrList[i].firstChild.href+
">"+
'<div class="d-flex justify-content-start align-items-center">'+
'<span class="mr-75 '+
arrList[i].firstChild.firstChild.className+
'"  data-icon="'+
arrList[i].firstChild.firstChild.className+
'"></span>'+
"<span>"+
arrList[i].firstChild.dataset.originalTitle+
"</span>"+
"</div>"+
'<span class="float-right bookmark-icon feather icon-star warning"></span>'+
"</a>"+
"</li>";}
$("ul.search-list").append($arrList);});navLinkSearch.on("click",function(){var $this=$(this);var searchInput=$(this).parent(".nav-search").find(".search-input");searchInput.addClass("open");searchInputInputfield.focus();searchList.find("li").remove();bookmarkInput.removeClass("show");});$(".search-input-close i").on("click",function(){var $this=$(this),searchInput=$(this).closest(".search-input");if(searchInput.hasClass("open")){searchInput.removeClass("open");searchInputInputfield.val("");searchInputInputfield.blur();searchList.removeClass("show");appContent.removeClass("show-overlay");}});if($('.search-list-main').length){var searchListMain=new PerfectScrollbar(".search-list-main",{wheelPropagation:false});}
if($('.search-list-bookmark').length){var searchListBookmark=new PerfectScrollbar(".search-list-bookmark",{wheelPropagation:false});}
$(".search-list-main").mouseenter(function(){searchListMain.update();});searchInputInputfield.on("keyup",function(e){$(this).closest(".search-list").addClass("show");if(e.keyCode!==38&&e.keyCode!==40&&e.keyCode!==13){if(e.keyCode==27){appContent.removeClass("show-overlay");bookmarkInput.find("input").val("");bookmarkInput.find("input").blur();searchInputInputfield.val("");searchInputInputfield.blur();searchInput.removeClass("open");if(searchInput.hasClass("show")){$(this).removeClass("show");searchInput.removeClass("show");}}
var value=$(this).val().toLowerCase(),activeClass="",bookmark=false,liList=$("ul.search-list li");liList.remove();if($(this).parent().hasClass("bookmark-input")){bookmark=true;}
if(value!=""){appContent.addClass("show-overlay");if(bookmarkInput.focus()){bookmarkSearchList.addClass("show");}else{searchList.addClass("show");bookmarkSearchList.removeClass("show");}
if(bookmark===false){searchList.addClass("show");bookmarkSearchList.removeClass("show");}
var $startList="",$otherList="",$htmlList="",$bookmarkhtmlList="",$pageList='<li class=" d-flex align-items-center">'+
'<a href="#" class="pb-25">'+
'<h6 class="text-primary mb-0">Pages</h6>'+
'</a>'+
'</li>',$activeItemClass="",$bookmarkIcon="",$defaultList="",a=0;$.getJSON("../../../app-assets/data/"+$filename+".json",function(data){for(var i=0;i<data.listItems.length;i++){if(bookmark===true){activeClass="";var arrList=$("ul.nav.navbar-nav.bookmark-icons li"),$arrList="";for(var j=0;j<arrList.length;j++){if(data.listItems[i].name===arrList[j].firstChild.dataset.originalTitle){activeClass=" warning";break;}else{activeClass="";}}
$bookmarkIcon='<span class="float-right bookmark-icon feather icon-star'+
activeClass+
'"></span>';}
if(data.listItems[i].name.toLowerCase().indexOf(value)==0&&a<5){if(a===0){$activeItemClass="current_item";}else{$activeItemClass="";}
$startList+='<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer '+
$activeItemClass+
'">'+
'<a class="d-flex align-items-center justify-content-between w-100" href='+
data.listItems[i].url+
">"+
'<div class="d-flex justify-content-start align-items-center">'+
'<span class="mr-75 '+
data.listItems[i].icon+
'" data-icon="'+
data.listItems[i].icon+
'"></span>'+
"<span>"+
data.listItems[i].name+
"</span>"+
"</div>"+
$bookmarkIcon+
"</a>"+
"</li>";a++;}}
for(var i=0;i<data.listItems.length;i++){if(bookmark===true){activeClass="";var arrList=$("ul.nav.navbar-nav.bookmark-icons li"),$arrList="";for(var j=0;j<arrList.length;j++){if(data.listItems[i].name===arrList[j].firstChild.dataset.originalTitle){activeClass=" warning";}else{activeClass="";}}
$bookmarkIcon='<span class="float-right bookmark-icon feather icon-star'+
activeClass+
'"></span>';}
if(!(data.listItems[i].name.toLowerCase().indexOf(value)==0)&&data.listItems[i].name.toLowerCase().indexOf(value)>-1&&a<5){if(a===0){$activeItemClass="current_item";}else{$activeItemClass="";}
$otherList+='<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer '+
$activeItemClass+
'">'+
'<a class="d-flex align-items-center justify-content-between w-100" href='+
data.listItems[i].url+
">"+
'<div class="d-flex justify-content-start align-items-center">'+
'<span class="mr-75 '+
data.listItems[i].icon+
'" data-icon="'+
data.listItems[i].icon+
'"></span>'+
"<span>"+
data.listItems[i].name+
"</span>"+
"</div>"+
$bookmarkIcon+
"</a>"+
"</li>";a++;}}
$defaultList=$(".main-search-list-defaultlist").html();if($startList==""&&$otherList==""){$otherList=$(".main-search-list-defaultlist-other-list").html();}
$htmlList=$pageList.concat($startList,$otherList,$defaultList);$("ul.search-list").html($htmlList);$bookmarkhtmlList=$startList.concat($otherList);$("ul.search-list-bookmark").html($bookmarkhtmlList);});}else{if(bookmark===true){var arrList=$("ul.nav.navbar-nav.bookmark-iconss li"),$arrList="";for(var i=0;i<arrList.length;i++){if(i===0){$activeItemClass="current_item";}else{$activeItemClass="";}
$arrList+='<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">'+
'<a class="d-flex align-items-center justify-content-between w-100" href='+
arrList[i].firstChild.href+
">"+
'<div class="d-flex justify-content-start align-items-center">'+
'<span class="mr-75 '+
arrList[i].firstChild.firstChild.className+
'"  data-icon="'+
arrList[i].firstChild.firstChild.className+
'"></span>'+
"<span>"+
arrList[i].firstChild.dataset.originalTitle+
"</span>"+
"</div>"+
'<span class="float-right bookmark-icon feather icon-star warning"></span>'+
"</a>"+
"</li>";}
$("ul.search-list").append($arrList);}else{if(appContent.hasClass("show-overlay")){appContent.removeClass("show-overlay");}
if(searchList.hasClass("show")){searchList.removeClass("show");}}}}});$(document).on("mouseenter",".search-list li",function(e){$(this).siblings().removeClass("current_item");$(this).addClass("current_item");});$(document).on("click",".search-list li",function(e){e.stopPropagation();});$("html").on("click",function($this){if(!$($this.target).hasClass("bookmark-icon")){if(bookmarkSearchList.hasClass("show")){bookmarkSearchList.removeClass("show");}
if(bookmarkInput.hasClass("show")){bookmarkInput.removeClass("show");}}});$(document).on("click",".bookmark-input input",function(e){bookmarkInput.addClass("show");bookmarkSearchList.addClass("show");});$(document).on("click",".bookmark-input .search-list .bookmark-icon",function(e){e.stopPropagation();if($(this).hasClass("warning")){$(this).removeClass("warning");var arrList=$("ul.nav.navbar-nav.bookmark-icons li");for(var i=0;i<arrList.length;i++){if(arrList[i].firstChild.dataset.originalTitle==$(this).parent()[0].innerText){arrList[i].remove();}}
e.preventDefault();}else{var arrList=$("ul.nav.navbar-nav.bookmark-icons li");$(this).addClass("warning");e.preventDefault();var $url=$(this).parent()[0].href,$name=$(this).parent()[0].innerText,$icon=$(this).parent()[0].firstChild.firstChild.dataset.icon,$listItem="",$listItemDropdown="";$listItem='<li class="nav-item d-none d-lg-block">'+
'<a class="nav-link" href="'+
$url+
'" data-toggle="tooltip" data-placement="top" title="" data-original-title="'+
$name+
'">'+
'<i class="ficon '+
$icon+
'"></i>'+
"</a>"+
"</li>";$("ul.nav.bookmark-icons").append($listItem);$('[data-toggle="tooltip"]').tooltip();}});$(window).on("keydown",function(e){var $current=$(".search-list li.current_item"),$next,$prev;if(e.keyCode===40){$next=$current.next();$current.removeClass("current_item");$current=$next.addClass("current_item");}else if(e.keyCode===38){$prev=$current.prev();$current.removeClass("current_item");$current=$prev.addClass("current_item");}
if(e.keyCode===13&&$(".search-list li.current_item").length>0){var selected_item=$(".search-list li.current_item a");window.location=selected_item.attr("href");$(selected_item).trigger("click");}});Waves.init();Waves.attach(".btn",["waves-light"]);})(window,document,jQuery);