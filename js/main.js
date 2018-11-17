$( document ).ready(function() {

  // // таймер
  // var clock = $('.clock').FlipClock({
  //   language:'ru-ru',
  //   autoStart: false,
  //   countdown: true,
  // });
  // clock.setTime(29892);
  // clock.start(0);


  // скролл к форме
  $("#link-1").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  });

  $("#link-2").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  });

///////////////////////////////////////////////////////////////////////////

  // скролл наверх
  $('#scroll-top-btn').on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({'scrollTop':0},1000);
  });

  var timer;
  $(window).on('scroll', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      showScrollTopBtn();
    }, 100);
  });

  showScrollTopBtn();

  function showScrollTopBtn() {
    if( $(document).scrollTop() > 500 ) {
      $('#scroll-top-btn').fadeIn();
    }
    else {
      $('#scroll-top-btn').fadeOut();
    }
  }

///////////////////////////////////////////////////////////////////////////


  // таймеры
  var gstep = 29892; //сколько нужно отсчитывать

  var clock;
    clock = $(".clock").FlipClock({
      autoStart : true,
      language:'ru-ru',
      countdown: true,

      callbacks : {
        start: function () {
          //проверяем есть ли кука
          if(Cookies.get('timer_start')){
            console.log(1);
          var cts = parseInt(Cookies.get('timer_start'));
          var now = parseInt(new Date().getTime() / 1000);
          var cstep = parseInt(Cookies.get('timer_step'));

          //если счетчик уже завершился
          if((cts + cstep) <= now){
            clock.setTime(gstep);
          }
           else{
            //если нет, то получаем новое значение и начинаем считать
            var n = cts + cstep - now;
            clock.setTime(n);
           }
          }

          else {
            //если нету то ставим
            Cookies.set('timer_step', gstep);
            Cookies.set('timer_start', new Date().getTime() / 1000);

          }
        },


        stop : function () {

        Cookies.remove('timer_start');
            Cookies.remove('timer_step');
            clock.start();
          // $(".message").slideDown();
        }
      }


    });

    setInterval(startNewCountdown, 1000*60*60*8.2);
    startNewCountdown();

    function startNewCountdown() {
      var ctsM = parseInt(Cookies.get('timer_start'));
      var nowM = parseInt(new Date().getTime() / 1000);
      var cstepM = parseInt(Cookies.get('timer_step'));
      var magic = ctsM + cstepM - nowM;
      var mag = magic % 10;

      var x = 0;
      if (mag == 0) {
        x = 9
      }
      if (mag == 9) {
        x = 8
      }
      if (mag == 8) {
        x = 7
      }
      if (mag == 7) {
        x = 6
      }
      if (mag == 6) {
        x = 5
      }
      if (mag == 5) {
        x = 4
      }
      if (mag == 4) {
        x = 3
      }
      if (mag == 3) {
        x = 2
      }
      if (mag == 2) {
        x = 1
      }
      if (mag == 1) {
        x = 0
      }
      // clock.setTime(now);
      clock.setTime(gstep);
      clock.setTime(gstep+x);
      clock.start();
      // $(".message").slideUp();
    }

    var clock2;
    clock2 = $(".clock2").FlipClock({
      autoStart : true,
      language:'ru-ru',
      countdown: true,

      callbacks : {
        start: function () {
          //проверяем есть ли кука
          if(Cookies.get('timer_start')){
            console.log(1);
          var cts = parseInt(Cookies.get('timer_start'));
          var now = parseInt(new Date().getTime() / 1000);
          var cstep = parseInt(Cookies.get('timer_step'));

          //если счетчик уже завершился
          if((cts + cstep) <= now){
            clock2.setTime(gstep);
          }
           else{
            //если нет, то получаем новое значение и начинаем считать
            var n = cts + cstep - now;
            clock2.setTime(n);
           }
          }

          else {
            //если нету то ставим
            Cookies.set('timer_step', gstep);
            Cookies.set('timer_start', new Date().getTime() / 1000);

          }
        },


        stop : function () {

        Cookies.remove('timer_start');
            Cookies.remove('timer_step');
            clock2.start();
          // $(".message").slideDown();
        }
      }


    });

    setInterval(startNewCountdown2, 1000*60*60*8.2);
    startNewCountdown2();

    function startNewCountdown2() {
      var ctsM = parseInt(Cookies.get('timer_start'));
      var nowM = parseInt(new Date().getTime() / 1000);
      var cstepM = parseInt(Cookies.get('timer_step'));
      var magic = ctsM + cstepM - nowM;
      var mag = magic % 10;

      var x = 0;
      if (mag == 0) {
        x = 9
      }
      if (mag == 9) {
        x = 8
      }
      if (mag == 8) {
        x = 7
      }
      if (mag == 7) {
        x = 6
      }
      if (mag == 6) {
        x = 5
      }
      if (mag == 5) {
        x = 4
      }
      if (mag == 4) {
        x = 3
      }
      if (mag == 3) {
        x = 2
      }
      if (mag == 2) {
        x = 1
      }
      if (mag == 1) {
        x = 0
      }
      // clock.setTime(now);
      clock2.setTime(gstep);
      clock2.setTime(gstep+x);
      clock2.start();
      // $(".message").slideUp();
    }

    var clock3;
    clock3 = $(".clock3").FlipClock({
      autoStart : true,
      language:'ru-ru',
      countdown: true,

      callbacks : {
        start: function () {
          //проверяем есть ли кука
          if(Cookies.get('timer_start')){
            console.log(1);
          var cts = parseInt(Cookies.get('timer_start'));
          var now = parseInt(new Date().getTime() / 1000);
          var cstep = parseInt(Cookies.get('timer_step'));

          //если счетчик уже завершился
          if((cts + cstep) <= now){
            clock3.setTime(gstep);
          }
           else{
            //если нет, то получаем новое значение и начинаем считать
            var n = cts + cstep - now;
            clock3.setTime(n);
           }
          }

          else {
            //если нету то ставим
            Cookies.set('timer_step', gstep);
            Cookies.set('timer_start', new Date().getTime() / 1000);

          }
        },


        stop : function () {

        Cookies.remove('timer_start');
            Cookies.remove('timer_step');
            clock3.start();
          // $(".message").slideDown();
        }
      }
    });

    setInterval(startNewCountdown3, 1000*60*60*8.2);
    startNewCountdown3();

    function startNewCountdown3() {
      var ctsM = parseInt(Cookies.get('timer_start'));
      var nowM = parseInt(new Date().getTime() / 1000);
      var cstepM = parseInt(Cookies.get('timer_step'));
      var magic = ctsM + cstepM - nowM;
      var mag = magic % 10;
      var x = 0;
      if (mag == 0) {
        x = 9
      }
      if (mag == 9) {
        x = 8
      }
      if (mag == 8) {
        x = 7
      }
      if (mag == 7) {
        x = 6
      }
      if (mag == 6) {
        x = 5
      }
      if (mag == 5) {
        x = 4
      }
      if (mag == 4) {
        x = 3
      }
      if (mag == 3) {
        x = 2
      }
      if (mag == 2) {
        x = 1
      }
      if (mag == 1) {
        x = 0
      }
      // clock.setTime(now);
      // clock3.setTime(gstep);
      clock3.setTime(gstep+x);
      clock3.start();
      // $(".message").slideUp();
    }



// Включаю слайдер

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2100,
    speed: 800,
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });




   $("#phone-mask").mask("+7 (999) -999 -9999");
  $("#phone-mask-questions").mask("+7 (999) -999 -9999");
  $("#phone-mask-popup").mask("+7 (999) -999 -9999");
  $("#phone-mask-popup2").mask("+7 (999) -999 -9999");
  $("#phone-mask-popup3").mask("+7 (999) -999 -9999");
  $("#phone-mask-popup4").mask("+7 (999) -999 -9999");
  $("#phone-mask-popup5").mask("+7 (999) -999 -9999");








  // // Приветственная анимация
  // $( ".first-video-text " ).fadeOut(0);
  // $( ".main-video-text " ).fadeOut(0);
  // $( ".is_overlay" ).addClass('js_overlay-on');
  // $( ".first-video-text ").delay(1200).fadeIn(1000);
  // $( ".first-video-text ").delay(400).fadeOut(1000);
  // $( ".main-video-text ").delay(3600).fadeIn(1000);
  // $( "#myBtn").delay(3600).fadeIn(1000);



  // // Модальное окно
  // var modal = document.getElementById("myModal");
  // var btn = document.getElementById("myBtn");
  // var span = document.getElementsByClassName("close")[0];

  // btn.onclick = function () {
  //   $('#myModal').fadeIn(400);
  // }
  // span.onclick = function() {
  //   $('#myModal').fadeOut(400);
  // }

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     $('#myModal').fadeOut(400);
  //   }
  // }

});



// Маски для форм мин
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
