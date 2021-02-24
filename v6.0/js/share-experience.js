const shareButton = document.querySelector(".share-button");
shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        text: document.title,
        url: $(location).attr("href"),
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    var $temp = $("<input>");
    var $url = $(location).attr('href');

    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();

    $(".volv-browser-notif").addClass("active"),
      setTimeout(function () {
        $(".volv-browser-notif").removeClass("active");
      }, 2000);
  }
});
