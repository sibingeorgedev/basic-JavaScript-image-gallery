$(document).ready(function () {
  // preloads the images for the gallery
  $("#image_list a").each(function () {
    var imageURL = $(this).attr("href");
    var caption = $(this).attr("title");

    var preloadedImage = new Image();
    preloadedImage.src = imageURL;
  });

  // event handler for click() event method of each link
  $("#image_list a").click(function (evt) {
    // displays the image and caption for the link that was clicked
    var imageURL = $(this).attr("href");
    var caption = $(this).attr("title");
    changeImageWithSlide(imageURL, caption);

    // cancel the default action of the link.
    evt.preventDefault();
  });

  // moves the focus to the first link on the page when the page is loaded.
  $("#image_list a:first").focus();

  // function for image changes with sliding motion
  function changeImageWithSlide(imageURL, caption) {
    // slide up the caption and image over two seconds
    $("#caption, #image").slideUp(2000, function () {
      // change the image
      $("#image").attr("src", imageURL).attr("alt", caption);
      // change the image caption
      $("#caption").text(caption);
    });

    // slide down the new caption and image over two seconds
    $("#caption, #image").slideDown(2000);
  }
});
