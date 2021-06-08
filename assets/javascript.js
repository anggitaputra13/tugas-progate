var a = -100;
setInterval(function () {
  if (a != 0) {
    slide = document.getElementById("slide");
    slide2 = document.getElementById("slide2");
    slide.style = "margin-left:" + a + "%;transition: 1s ease-in;";
    slide2.style = "margin-left:" + a + "%;transition: 1s ease-in;";
    if (a == -300) {
      a = 0;
    } else {
      a = a + -100;
    }
    return a;
  } else {
    slide = document.getElementById("slide");
    slide2 = document.getElementById("slide2");
    slide.style = "margin-left:" + a + "%;";
    slide2.style = "margin-left:" + a + "%;";
    if (a == -300) {
      a = 0;
    } else {
      a = a + -100;
    }
    return a;
  }
}, 2000);
