function collapseNavbar(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){document.documentElement.lang;$("#language_select select").on("change",function(){var a=$(this).val();window.location.href="/"+("en"===a?"":a)}),$(".nav-button").click(function(){$(".nav-button,.primary-nav").toggleClass("open")})}),$(function(){$("a.page-scroll").bind("click",function(a){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top},800,"easeInOutExpo"),a.preventDefault()})});