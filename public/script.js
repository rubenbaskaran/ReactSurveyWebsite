var tag = document.createElement("script");
tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  const player = new YT.Player("existing-iframe-example", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data == 0) {
    document
      .getElementById("nextButton")
      .setAttribute(
        "class",
        "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-2 MuiButton-containedPrimary"
      );
  }
}
