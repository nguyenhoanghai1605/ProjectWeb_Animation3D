 (function(a){a.fn.scrollToTop=function(c){var d={speed:800};c&&a.extend(d,{speed:c});return this.each(function(){var b=a(this);a(window).scroll(function(){100<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(b){b.preventDefault();a("body, html").animate({scrollTop:0},d.speed)})})}})(jQuery);
//menu mobile
var width_win = $(window).width();
$(function () {
     $(".navx").prepend("<i class='fa btn_navx'><span></span></i>");
	 $(".btn_navx").on('click', function (e) {
		 var hs=$(this).hasClass("btn_active");
		 if( hs )
		 {
			 $(this).closest(".navx").removeClass("menu_active");
			 $(this).removeClass("btn_active");
		 }
		 else
		 {
			 $(this).closest(".navx").addClass("menu_active");
			 $(this).addClass("btn_active");
		 }
	 });
    $( ".navx > ul   li" ).has( "ul" ).addClass("parent");
	$( ".navx > ul  li.parent" ).prepend("<i class='fa fa-plus'></i>");
    $(function () {
 	$('.navx > ul   li> i').on('click', function (e) {
		$(this).parent("li").addClass("active-left");
		$(this).parent("li").children("ul").slideToggle();
		
		$(this).parent("li").addClass("yl");
		if(	$(this).parent("li").children("i").hasClass("fa fa-plus")){
		$(this).parent("li").children("i").removeClass("fa-plus").addClass("fa-minus");
		
		}
		else{
		$(this).parent("li").children("i").removeClass("fa-minus").addClass("fa-plus");
		$(this).parent("li").removeClass("yl");
		}
});
});   
});


$(function () {
	var ha=$( ".inner-box-a" ).height();
	var wa=$( ".inner-box-a" ).width();
	$( ".inner-box-a" ).append("<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><line class='top' x1='0' y1='0' x2='"+wa*3+"' y2='0'/><line class='left' x1='0' y1='"+ha+"' x2='0' y2='-"+ha*2+"'/><line class='bottom' x1='"+wa+"' y1='"+ha+"' x2='-"+wa*2+"' y2='"+ha+"'/><line class='right' x1='"+wa+"' y1='0' x2='"+wa+"' y2='"+ha*3+"'/>");
	
	$( ".link-detail  " ).append("<i class='fa fa-long-arrow-right'></i>");
	$( ".navx >ul > li> ul>li:first-child" ).append("<span class='caretB'></span>");
	$( ".navx ul ul" ).has("ul").addClass("menu_lg");
	$( ".menu_lg > li>.lv a").prepend("<i class='fa fa-list'></i> ")
	$( ".otherNews ul li  " ).prepend("<i class='fa fa-angle-right'></i>");
	$( ".news .media, .link-news,.thongbao a" ).prepend("<i class='fa fa-caret-right'></i>");
	$( ".col-ft h4" ).prepend("<i class='fa fa-caret-right'></i>");
	$( ".hotline-httt" ).prepend("<i class='icon-hl-httt'></i>");
 $( ".tt-side" ).prepend("<i class='fa fa-plus'></i>");
	$( ".orther-new-index li" ).prepend("<i class='fa fa-angle-right fa-lg'></i>");
	$( ".ser-box, .orther-new-index li    ").addClass("wow fadeInUp");
	$( "  .ibl ,  .col-ft , .media, .media-box ").addClass("wow fadeInDown");
	$(".content2").closest("main").addClass("bgwhite");
	$( " .popup-over .media ").removeClass("wow fadeInDown");
});
$( ".navx li h3").addClass("lv lv1");
$( ".navx li h4").addClass("lv lv2");
$( ".navx li h5").addClass("lv lv3");

$( ".navx>ul>li>ul").addClass("ul-lv1");
$( ".navx>ul>li>ul>li>ul").addClass("ul-lv2");

$( ".navx li h4 a").prepend("<i class='fa fa-caret-right' style=' margin-right:5px;  '></i>");
$( ".navy li h3").addClass("lv lv1");
$( ".navy li h4").addClass("lv lv2");
$( ".navy li h5").addClass("lv lv3");
$("body").append(" <a href='#top' id='toTop'> <i class='fa fa-angle-double-up'></i></a> ");
$(function() {
	$("#toTop").scrollToTop(1000);
});
 
try {
var has=$("body").has("#camera_wrap_1").length ? 1: 0;
if(width_win>768 && has==1){
jQuery(function(){
jQuery('#camera_wrap_1').camera({
height: '376px',
loader: 'none',
pagination: true,
thumbnails: false,
});
});
}
 
if(width_win<768 && has==1){
jQuery(function(){
jQuery('#camera_wrap_1').camera({
height: '200px',
loader: 'none',
pagination: false,
thumbnails: false
});
});

}
}
catch(err){ }


try {
var has=$("body").has("#camera_wrap_4").length ? 1: 0;
if(width_win>768 && has==1){
jQuery(function(){
jQuery('#camera_wrap_4').camera({
height: '200px',
loader: 'none',
pagination: true,
thumbnails: false,
fx	:'simpleFade',
navigation: false,time				:4000,
});
});
}
 
if(width_win<768 && has==1){
jQuery(function(){
jQuery('#camera_wrap_4').camera({
height: '150px',
loader: 'none',
pagination: false,
thumbnails: false,
fx	:'simpleFade',
navigation: false,
});
});

}
}
catch(err){ }


try {
var has2=$("body").has("#camera_wrap_2").length ? 1: 0;
if(width_win>768 && has2==1){
jQuery(function(){
jQuery('#camera_wrap_2').camera({
thumbnails: false,
height: '460px',
navigation: true,
pagination:false, 
thumbnails:true,
});			 
});
}
if(width_win<768 && has2==1){
	jQuery(function(){
		jQuery('#camera_wrap_2').camera({
		thumbnails: false,
		height: '200px',
		navigation: true,
		portrait:true,
		thumbnails			: true,
});			 
});
}
}
catch(err){ }
 
$(".sticky1").sticky({ topSpacing:  0 });
							
//popup
$(function() {  
$(".link-popup").on('click', function(e){
	var namepp=$(this).attr('href');
 $(document).find(namepp).removeClass("hidden").fadeIn();
	});
	$(".close-pp").on('click', function(e){$(this).closest(".popup-over").addClass("hidden").hide();});
});
 
//$( "#popup-news" ).hide(0).delay( 1000 ).fadeIn( 400 );
 
 

//menu phong ban
$( ".list-pb > li " ).prepend("<i class='fa fa-angle-right'></i>");
$( ".list-pb ul li " ).prepend("<i class='fa'> + </i>");
$( ".list-pb > li" ).has('ul').addClass('parent');
$('.list-pb > li.parent>i').on('click', function(){
$(this).parent().nextAll().removeClass('open').children('ul').slideUp().removeClass('active');
$(this).parent().prevAll().removeClass('open').children('ul').slideUp().removeClass('active');
$(this).parent().addClass('open').children('ul').slideDown().addClass('active');
});


////slide truot 2 ben
function FloatTopDiv()   
    {   
        startLX = ((document.body.clientWidth -MainContentW)/2)-LeftBannerW-LeftAdjust , startLY = TopAdjust+80;   
        startRX = ((document.body.clientWidth -MainContentW)/2)+MainContentW+RightAdjust , startRY = TopAdjust+80;   
        var d = document;   
        function ml(id)   
        {   
            var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];   
            el.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';};   
            el.x = startRX;   
            el.y = startRY;   
            return el;   
        }   
        function m2(id)   
        {   
            var e2=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];  
            e2.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';};   
            e2.x = startLX;   
            e2.y = startLY;   
            return e2;   
        }   
        window.stayTopLeft=function()   
        {   
            if (document.documentElement && document.documentElement.scrollTop)   
                var pY =  document.documentElement.scrollTop;   
            else if (document.body)   
                var pY =  document.body.scrollTop;   
             if (document.body.scrollTop > 30){startLY = 3;startRY = 3;} else  {startLY = TopAdjust;startRY = TopAdjust;};   
            ftlObj.y += (pY+startRY-ftlObj.y)/16;   
            ftlObj.sP(ftlObj.x, ftlObj.y);   
            ftlObj2.y += (pY+startLY-ftlObj2.y)/16;   
            ftlObj2.sP(ftlObj2.x, ftlObj2.y);   
            setTimeout("stayTopLeft()", 1);   
        }   
        ftlObj = ml("divAdRight");   
        //stayTopLeft();   
        ftlObj2 = m2("divAdLeft");   
        stayTopLeft();   
    }   
    function ShowAdDiv()   
    {   
        var objAdDivRight = document.getElementById("divAdRight");   
        var objAdDivLeft = document.getElementById("divAdLeft");     
        if (document.body.clientWidth < 1100)   
        {   
		 
            objAdDivRight.style.display = "none";   
            objAdDivLeft.style.display = "none";   
        }   
        else   
        {   
            objAdDivRight.style.display = "block";   
            objAdDivLeft.style.display = "block";  
            FloatTopDiv();   
        }   
    }

document.write("<script type='text/javascript' language='javascript'>MainContentW = 1000;LeftBannerW = 150;RightBannerW = 150;LeftAdjust = 15;RightAdjust = 15;TopAdjust = 210;ShowAdDiv();window.onresize=ShowAdDiv;;<\/script>");


//-------- tab content
$(".tab li:first-child .tablinks").addClass("active");
//$(".tab li a").prepend("<i class='fa fa-caret-right'></i>");
$(".list-tabcontent > div:first-child").show();
function openTab(evt, tabname) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	} 

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tabcontent.length; i++) {
			tablinks[i].classList.remove("active");
	} 

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.classList.add("active");
};

//-----------end tab content