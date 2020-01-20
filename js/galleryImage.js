$(document).ready(function(){
           $(".flex-container2 .flex-item2").hover(function(){
                $(this).find('img').stop().fadeOut('fast');
           }, function(){
                $(this).find('img').stop().fadeIn('slow');
                $(this).find('img').show();
           })
      })