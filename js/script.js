// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "swing"
  );

  e.preventDefault();
});

// paralax

// about
$(window).on("load", function () {
  $(".kiri").addClass("muncul");
  $(".kanan").addClass("muncul");
});

$(window).scroll(function () {
  var ws = $(this).scrollTop();

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + ws / 4 + "%) ",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + ws / 2 + "%) ",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + ws / 1.2 + "%) ",
  });

  // portfolio
  if (ws > $(".portfolio").offset().top - 250) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
