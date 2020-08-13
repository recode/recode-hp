$(document).ready(function () {
  t_sw = 0;
  $(".menu-trigger").click(function () {
    if (t_sw == 1) {
      t_sw = 0;
      t_str = "-";
      $(".m_b_1").css("width", "30px");
      $(".m_b_3").css("width", "30px");
      $(".m_b_1").css({
        transform: "translate(0px,0px) rotate(0deg)",
        "-webkit-transform": "translate(0px,0px) rotate(0deg)",
      });
      $(".m_b_3").css({
        transform: "translate(0px,0px) rotate(0deg)",
        "-webkit-transform": "translate(0px,0px) rotate(0deg)",
      });
    } else {
      t_sw = 1;
      t_str = "+";
      $(".m_b_1").css("width", "15px");
      $(".m_b_3").css("width", "15px");
      $(".m_b_1").css({
        transform: "translate(-2px,6px) rotate(-45deg)",
        "-webkit-transform": "translate(-2px,6px) rotate(-45deg)",
      });
      $(".m_b_3").css({
        transform: "translate(-2px,-6px) rotate(45deg)",
        "-webkit-transform": "translate(-2px,-6px) rotate(45deg)",
      });
    }
    $("#page").animate({ "margin-left": t_str + "=220px" }, 200);
    $("#side_menu").animate({ "margin-left": t_str + "=220px" }, 200);
    $("#page").css("box-shadow", "0px 0px 2px 0px #555");
  });
});
