//slide

$(document).ready(function () {
  $("#carouselExampleFade").on("slide.bs.carousel", function (e) {
    var activeSlide = $(e.relatedTarget).find(".slide-content");
    activeSlide.slideDown();
  });
});

//điều hướng top
$(document).ready(function () {
  var scrollButton = $("#scrollUp");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });

  scrollButton.click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

//bieu do
$(function () {
  const ctx1 = document.getElementById("doughnut-chart-1");
  new Chart(ctx1, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["white", "Transparent"],
          borderWidth: 0.3,
          borderRadius: 60,
        },
      ],
    },
    options: {
      cutout: 83,
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  const ctx2 = document.getElementById("doughnut-chart-2");
  new Chart(ctx2, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [92, 8],
          backgroundColor: ["white", "Transparent"],
          borderWidth: 0.3,
          borderRadius: 60,
        },
      ],
    },
    options: {
      cutout: 83,
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  const ctx3 = document.getElementById("doughnut-chart-3");
  new Chart(ctx3, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [79, 21],
          backgroundColor: ["white", "Transparent"],
          borderWidth: 0.3,
          borderRadius: 60,
        },
      ],
    },
    options: {
      cutout: 83,
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  const ctx4 = document.getElementById("doughnut-chart-4");
  new Chart(ctx4, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [67, 33],
          backgroundColor: ["white", "Transparent"],
          borderWidth: 0.3,
          borderRadius: 60,
        },
      ],
    },
    options: {
      cutout: 83,
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});

$(document).ready(function () {
  $(".knob").focus(function () {
    $(this).addClass("no-border");
  });

  $(".knob").blur(function () {
    $(this).removeClass("no-border");
  });
});

$(document).ready(function () {
  const progressBar = $(".progress-bar");
  let progressValue = 0;

  function updateProgressBar() {
    progressBar.css("width", progressValue + "%");
    progressBar.attr("aria-valuenow", progressValue);
  }

  //progress
  function autoProgress() {
    if (progressValue < 75) {
      progressValue += 1; // Tăng giá trị tiến trình
      updateProgressBar();
      setTimeout(autoProgress, 50); // Gọi lại hàm sau 50ms
    }
  }

  autoProgress(); // Bắt đầu tiến trình tự động
});

$(document).ready(function () {
  $(".mean-expand1").hide();
  $(".mean-expand").show();

  $(".meanmenu-reveal").show();
  $(".meanclose").hide();
  $(".menu-nav").hide();

  $(".mean-menu").click(function () {
    if ($(".menu-nav").is(":visible")) {
      $(".meanmenu-reveal").show();
      $(".meanclose").hide();
      $(".menu-nav").hide();
    } else {
      $(".meanmenu-reveal").hide();
      $(".meanclose").show();
      $(".menu-nav").show();
    }
  });

  $(".mean-expand").click(function (event) {
    event.stopPropagation();

    var $menuNaver = $(this).siblings(".menu-naver");

    if ($menuNaver.is(":visible")) {
      $menuNaver.slideToggle("fast");
      $(this).text("+");
    } else {
      $(this).text("-");
      $menuNaver.slideToggle("fast");
    }
  });
});
