$(function () {

  console.log($(".sub_gnb ul"));

  $(".main_gnb li").click(function () {
    $(".main_gnb li").removeClass("active");
    $(this).addClass("active");

    for (let i = 0; i < $(".sub_gnb ul").length; i++) {
      if ($(".main_gnb li").eq(i).hasClass("active")) {
        $(".sub_gnb ul").css('display', 'none');
        $(".sub_gnb ul").eq(i).css('display', 'flex');
      }
    }


  });




});