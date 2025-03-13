// topLink
$(function () {
  const topbtn = $(".top-link");
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 100) {
      topbtn.addClass("show-link");
    } else {
      topbtn.removeClass("show-link");
    }
  });
});

//nav
$(".navbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $(".circle-bg").toggleClass("circleactive");
});

$("#g-nav a").click(function () {
  $(".navbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
  $(".circle-bg").removeClass("circleactive");
});

//scroll-animation
$(function () {
  $(window).on("load scroll", function () {
    $(".animation").each(function () {
      const target = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass("active");
      }
    });
  });
});

//slider-animation
$(function () {
  $(".slider").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2, // 画面幅750px以下でスライド3枚表示
        },
      },
    ],
  });
});

//tab
$(function () {
  $(".tab").on("click", function () {
    const idx = $(this).index();
    $(".tab").removeClass("tab-active").eq(idx).addClass("tab-active");
    $(".tab-img").removeClass("active").eq(idx).addClass("active");
    $(".tab-text").removeClass("active").eq(idx).addClass("active");
  });
});

//accordion
const $questions = $(".question");

$questions.each(function () {
  const $question = $(this);
  const $btn = $question.find(".question-btn");

  $btn.on("click", function () {
    $questions.not($question).removeClass("show-text");
    $question.toggleClass("show-text");
  });
});

$(window).on("load", function () {});

// // preloader
$(window).on("load", function () {
  const $preloader = $(".preloader");
  $preloader.addClass("hide-preloader");

  if (!$preloader.hasClass("hide-preloader")) {
    $preloader.addClass("hide-preloader");
  }
});
