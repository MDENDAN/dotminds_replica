$(document).ready(function () {
  $("#submit").click(function () {
    $.ajax({
      url: "./phpmailer-test/mailer.php",
      data: 'user_name=' + $("#user_name").val() + '&user_email=' +
        $("#user_email").val() + '&mail_subject=' +
        $("#mail_subject").val() + '&mail_message=' +
        $("#mail_message").val(),
      type: "POST",
      success: function (data) {
        console.log("sucess");
      },
      error: function () { }
    });
  });

  $("#mycarousel").carousel({ interval: 1000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children("span").removeClass('fa-pause');
      $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children("span").removeClass('fa-play');
      $("#carouselButton").children("span").addClass('fa-pause');
    }
  }),
    $('#reserve_table').click(function () {
      $('#reserveModal').modal('show');
    }),
    $('#reserveClose').click(function () {
      $('#reserveModal').modal('hide');
    }),
    $('#reserve_Close').click(function () {
      $('#reserveModal').modal('hide');
    }),

    $('#login').click(function () {
      $('#loginModal').modal('show');
    }),
    $('#loginClose').click(function () {
      $('#loginModal').modal('hide');
    }),
    $('#login_Close').click(function () {
      $('#loginModal').modal('hide');
    })
  $(".card-custom").css("height", ($(".col-desktop").height()) - 40);
  if (window.innerWidth > 991) {
    $(".imgtxt-img").css("margin-top", (-$(".imgtxt-row").height()));
  }
  else {
    $(".imgtxt-img").css("margin-top", "0px");
  }
  if (window.innerWidth <= 991) {
    $(".imgtxt-img").css("width", "60%");
    $(".imgtxt-top-level-text").css("text-align", "justify");
  } else {
    $(".imgtxt-img").css("width", "100%");
    $(".imgtxt-top-level-text").css("text-align", "justify");
  }
  // console.log('$(window).width()',($(window).height()))
  // if($(window).width() <= 768)
  // {
  // $(".img-fluid").css("height", $(window).height()*0.2);
  // $(".img-fluid").css("width", "auto");

  // }


});


$(window).resize(function () {
  // $(".card-custom").height($(".col-desktop").height());
  // $(".card-custom").css("height", $(".col-desktop").height());
  // console.log($(".col-desktop").height());
  $(".card-custom").css("height", ($(".col-desktop").height()) - 40);
  if (window.innerWidth > 991) {
    $(".imgtxt-img").css("margin-top", (-$(".imgtxt-row").height()));
  }
  else {
    $(".imgtxt-img").css("margin-top", "0px");
  }
  if (window.innerWidth <= 991) {
    $(".imgtxt-img").css("width", "60%");
    $(".imgtxt-top-level-text").css("text-align", "justify");
  } else {
    $(".imgtxt-img").css("width", "100%");
    $(".imgtxt-top-level-text").css("text-align", "justify");
  }

});
