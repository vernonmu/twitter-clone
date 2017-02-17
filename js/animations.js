$(document).ready(function() {

  jQuery("time.timeago").timeago();

  var maxCharacters = 140;

  $('#count').text(maxCharacters);

  $('textarea').bind('keyup', function(e) {
      var count = $('#count');
      var characters = $(this).val().length;


      if (characters > 140) {
        $("#tweet-submit").attr("disabled","disabled");
        $("#char-count").addClass('over');
      }

      if (characters < 140) {
        $("#tweet-submit").removeAttr("disabled")
      }

      if (characters >= 130) {
          $("#char-count").addClass('over');

      }

      else if (characters < 130){
          $("#char-count").removeClass('over');

      }

      count.text(maxCharacters - characters);

      if(e.key === "Enter") {
        postTweet();

      }
  });

      //   $(function(){
      //
      //     $article.find('.photoname').text('something');
      //     masonryWallWrapper.append($article);
      // });

  function hoverTweet() {
    $(this).find('.stats').css("display", "block")
    $(this).find('.reply').css("display", "block")
  };

  function hoverOffTweet() {
    $(this).find('.stats').css("display", "none")
    $(this).find('.reply').css("display", "none")
  };

  $('.content').click(function() {
    $(this).find('.stats').css("display", "block")
    $(this).find('.reply').css("display", "block")
  });

  $('.content').mouseleave(function() {
    $(this).find('.stats').css("display", "none")
    $(this).find('.reply').css("display", "none")
  });

  var $timeNow = jQuery.timeago(new Date());

  function postTweet(event) {
      var html = $('.tweet-compose').val();
      console.log(html)
      var $newTweet = $('.template').clone().removeClass('template');

       $newTweet.prependTo("#stream").find('.tweet-text').text(html);
       $newTweet.find('.timeago').text(jQuery.timeago(new Date()));
       $newTweet.find('.username').text('@vernonmullen');
       $newTweet.find('.fullname').text("Vernon Mullen");
       $newTweet.find('.avatar').attr("src", "img/alagoon.jpg");
       $('.tweet-compose').val('');
       $newTweet.click(hoverTweet).mouseleave(hoverOffTweet);
       $newTweet.mouseenter(function() {
         $(this).find('.tweet-actions').show();
       });
       $newTweet.mouseleave(function() {
         $(this).find('.tweet-actions').hide();
       });

  }

  $('button').click(postTweet);


  $('#tweet-content > .tweet-compose').focus(function() {
    $('#tweet-controls').removeClass("hide")
    $('#tweet-content > .tweet-compose').css("height", "4em")
  });

  $('.reply > .tweet-compose').focus(function() {
    $('.reply > .tweet-compose').css("height", "4em")
  });


  $("#tweet-content > .tweet-compose").keyup(function() {
    $("#char-count").text((140 - $(this).val().length));
  });

  $('.tweet-actions').hide();

  $('.content').mouseenter(function() {
    $(this).find('.tweet-actions').show();
  });
  $('.content').mouseleave(function() {
    $(this).find('.tweet-actions').hide();
  });






  // document ready end
})
