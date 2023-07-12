$(function () {
  /* nav 영역 */
  $('nav .dep1').mouseover(function () {
    $(this).find('.sub').stop().slideDown(10);
  });
  $('nav .dep1').mouseout(function () {
    $(this).find('.sub').stop().slideUp(10);
  });
  $('nav .dep1').mouseover (function () {
    $(this).find('.nav_under').stop().slideDown(50);
  });
  $('nav .dep1').mouseout(function () {
    $(this).find('.nav_under').stop().slideUp(10);
  });
  
  /* 스와이퍼 배너 */
  const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  /* 슬라이드 배너 */
  var visual = $('#brandVisual>ul>li'); 
  var button = $('#buttonList>li');
  var leftBtn = $('.btnImg .prev');
  var rightBtn = $('.btnImg .next');
  var current = 0;
  var setIntervalId;

  timer();

  function timer(){
      setIntervalId = setInterval(function(){
          var prev = visual.eq(current);
          var pn = button.eq(current);
          move(prev, 0, '-100%');
          pn.removeClass('on');

          current++;

          if(current == visual.size()) {current=0}

          var next = visual.eq(current);
          var pnn = button.eq(current);

          move(next, '100%', 0);
          pnn.addClass('on');

      },3000);
  };

  function move(tg, start, end){
      tg.css('left', start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
  }



  //버튼을 클릭했을 때 해당 배너 보여지도록
  function move1(i){
      if(current == i) return

      var currentEl = visual.eq(current);
      var nextEl = visual.eq(i);

      currentEl.css({left:0}).stop().animate({left:'-100%'},500);
      nextEl.css({left:'100%'}).stop().animate({left:0},500);

      current = i; 
  }

  //호버시 멈추게
  $('#wrap').on({
      mouseover: function(){
          clearInterval(setIntervalId);
      }, mouseout: function(){
          timer();
      }
  })


  /* 화살표 클릭 */
  rightBtn.click(function(){ 
      var prev = visual.eq(current);
      var pn = button.eq(current);

      move(prev, 0 , '-100%');
      pn.removeClass('on');

      current++;

      if(current == visual.size()){current=0}

      var next = visual.eq(current);
      var pnn = button.eq(current);

      move(next, '100%', 0);
      pnn.addClass('on');

      return;

  })


  leftBtn.click(function(){ 
      var prev = visual.eq(current);
      var pn = button.eq(current);

      move(prev, 0 , '100%');
      pn.removeClass('on');

      current--;

      if(current == -visual.size()){current=0}

      var next = visual.eq(current);
      var pnn = button.eq(current);

      move(next, '-100%', 0);
      pnn.addClass('on');

      return;

  })

  /* 텍스트 롤링 */
    var current1 = 0;
    var subtext = $('.sub_text>li');
    var tim;

    function set(){
        tim = setInterval(function(){

            var prev1 = subtext.eq(current1);
            move1(prev1,0,'-100%');
            current1++;
            if(current1 == subtext.size()){current1=0}
            var next1 = subtext.eq(current1)
            move1(next1,'100%',0);
        },2000);
    }

    set();

    function move1(tgg,start,end){
        tgg.css('top',start).stop().animate({top:end},800);
    }

    $('.sub_text').hover(function(){
        clearInterval(tim); 
    }, function(){
        set();
    });



});