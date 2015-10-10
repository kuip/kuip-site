
syncPosition =  function (el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

center = function (number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }


progressRun = function (){
    //var horse= $(".horse")
    //horse.css({left: initTime+"%"})
    console.log('progressRun')
    tick = setInterval(interval, 10)
  }

interval = function (){
    var horse= $(".horse")
    //alert("f")
    if (percentTime > 80) {
      percentTime = initTime
      $("#sync1").data('owlCarousel').next()
    }
    percentTime += 2000/ time;
    horse.css({left: percentTime+"%"})
  }


var initTime=-15,percentTime=initTime,time=10000
var sync1, sync2

Template.carousel.onRendered(function() {
 
  sync1 = $("#sync1");
  sync2 = $("#sync2");

  $("#sync1 .item").append('<img class="horse" src="run.svg" >')
 
  sync1.owlCarousel({
    singleItem : true,
    autoPlay: time,
    slideSpeed : 1000,
    //navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    afterInit: progressRun
  });
  
 
  sync2.owlCarousel({
    items : 7,
    itemsDesktop      : [1199,7],
    itemsDesktopSmall     : [979,6],
    itemsTablet       : [768,4],
    itemsMobile       : [479,2],
    pagination: true,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
  /*
  this.autorun(function() {
    var win = Session.get("window")
    var w = Math.min(win.w,win.sw)
    if(w <= 768)
      $('.content').css('width', '100%')
    else if(w <= 979)
      $('.content').css('width', '80%')
    else if(w <= 1199)
      $('.content').css('width', '65%')
    else
      $('.content').css('width', '50%')
    //$('.stage').css('height', win.h+'px')
  })*/

})

Template.navbar.onRendered(function() {
  $('.sticky').sticky()
})