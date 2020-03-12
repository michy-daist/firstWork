$(function(){
  //Q$Aのアコーディオンメニュー
  $('.qa-list-item').click(function(){
    var $answer=$(this).find('.answer');
    if($answer.hasClass('open')){
      //閉じる処理
      $answer.removeClass('open');
      $answer.slideUp();

      $(this).find('span').text('＋');
    }else{
      //開ける処理
      $answer.addClass('open');
      $answer.slideDown();

      $(this).find('span').text('－');
    }

  });
  //ヘッダーのメニュー・スマホ版
  $('#i-ber').click(function(){
    //メニュー表示
    $('#i-slide').fadeIn();
  });

  $('#close').click(function(){
    //メニュー閉じる
    $('#i-slide').fadeOut();

  });
  $('#i-slide a').click(function(){
    $('#i-slide').hide();
  })
  $('#top-btn').click(function(){

    $('html,body').animate({
      //一番上に戻る
      'scrollTop':0
    },500);
  });

  $('header a').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;

    $('html,body').animate({
      //指定した場所へ
      'scrollTop':position-50
    },500);
  });

  //トップメッセージ
  $('#top-message').fadeIn(1500);
 //スクロールイベント

 $(window).scroll(function(){
   $('.fade-in').each(function(){
     //対象の位置
     var target=$(this).offset().top;
     //スクロール位置
     var scroll=$(window).scrollTop();
     //ウィンドウの高さ
     var windowHeight=$(window).height();

     if(scroll>target-windowHeight+150){
       $(this).css('opacity','1');
       $(this).css('transform','translateY(0)');
          }
      });
    });

 });
