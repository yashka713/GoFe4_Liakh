$(function(){$(function(){$(".jcarousel").jcarousel({}),$(".jcarousel-prev").click(function(){$(".jcarousel").jcarousel("scroll","-=1")}),$(".jcarousel-next").click(function(){$(".jcarousel").jcarousel("scroll","+=1")})}),$(function(){var l=1;$(".bottom-content--title-right").siblings("h2").siblings("p:hidden"),$("article h2").click(function(){var l=$(this);l.next("p").slideToggle("slow").siblings("p:visible").slideUp("slow"),l.toggleClass("active"),l.siblings("h2").removeClass("active")}).eq(l).addClass("active").next().show()})});