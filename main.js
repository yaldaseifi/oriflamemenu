let flag = true;
$("div.menu>div.l>div.left").on({
  click: function () {
    $("div.menu>div.l>div.left>div.i:nth-of-type(1)").css({
      transform: "rotate(45deg)",
      top: "calc(50% - 1px)",
      transition: "500ms",
    });
    $("div.menu>div.l>div.left>div.i:nth-of-type(3)").css({
      transform: "rotate(-45deg)",
      top: "calc(50% - 1px)",
      transition: "500ms",
    });
    $("div.menu>div.l>div.left>div.i:nth-of-type(2)").css({
      transform: "translatex(50px)",
      top: "calc(50% - 1px)",
      transition: "500ms",
      opacity: "0",
    });

    if (flag == true) {
      $("div.menu>div.l>div.smenu").css({
        display: "block",
        transition: "500ms",
      });
      flag = false;
    } else {
      $("div.menu>div.l>div.left>div.i:nth-of-type(1)").css({
        transform: "rotate(0)",
        top: "25px",
        transition: "500ms",
      });
      $("div.menu>div.l>div.left>div.i:nth-of-type(3)").css({
        transform: "rotate(0)",
        top: "45px",
        transition: "500ms",
      });
      $("div.menu>div.l>div.left>div.i:nth-of-type(2)").css({
        transform: "translatex(0px)",
        top: "35px",
        transition: "500ms",
        opacity: "1",
      });
      $("div.menu>div.l>div.smenu").css({
        display: "none",
        transition: "500ms",
      });

      flag = true;
    }
  },
});

let flag2 = true;
$("div.menu2>div.l").on({
  click: function () {
    $("div.menu2>div.l>div.i:nth-of-type(1)").css({
      transform: "rotate(45deg)",
      top: "calc(50% - 47%)",
      transition: "500ms",
    });
    $("div.menu2>div.l>div.i:nth-of-type(3)").css({
      transform: "rotate(-45deg)",
      top: "calc(50% - 47%)",
      transition: "500ms",
    });
    $("div.menu2>div.l>div.i:nth-of-type(2)").css({
      transform: "translatex(50px)",
      top: "calc(50% - 47%)",
      transition: "500ms",
      opacity: "0",
    });
    if (flag2 == true) {
      $("div.menu2>div.smenu").css({
        left: "0",
        transition: "500ms",
      });
      flag2 = false;
    } else {
      $("div.menu2>div.l>div.i:nth-of-type(1)").css({
        transform: "rotate(0)",
        top: "15px",
        transition: "500ms",
      });
      $("div.menu2>div.l>div.i:nth-of-type(3)").css({
        transform: "rotate(0)",
        top: "35px",
        transition: "500ms",
      });
      $("div.menu2>div.l>div.i:nth-of-type(2)").css({
        transform: "translatex(0px)",
        top: "25px",
        transition: "500ms",
        opacity: "1",
      });
      $("div.menu2>div.smenu").css({
        left: "-500px",
        transition: "500ms",
      });
      flag2 = true;
    }
  },
});
