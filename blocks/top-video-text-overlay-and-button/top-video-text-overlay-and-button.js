export default function decorate(block) {
  const container = document.querySelector(
    ".top-video-text-overlay-and-button-container"
  );

  const script = document.createElement("script");

  script.src =
    "https://players.brightcove.net/1852113022001/g2OtgoAoBs_default/index.min.js";

  container.append(script);
  container.style.padding = "0px";
  let desktopVideo = videoInit(container.dataset.videoId, 'desktop-video')
  container.appendChild(desktopVideo);

}

function videoInit(videoId, classes) {

  const videoWrapper = document.createElement("div");
  videoWrapper.classList.add('video-wrapper')
  videoWrapper.classList.add(classes)
  const video = document.createElement("video-js");

  video.setAttribute("data-account", "1852113022001");
  video.setAttribute("data-player", "g2OtgoAoBs");
  video.setAttribute("data-embed", "default");
  video.setAttribute("controls", "");
  video.setAttribute("autoplay", false);
  video.setAttribute("loop", false);
  video.setAttribute("muted", false);
  video.setAttribute("preload", true);
  video.setAttribute("data-video-id", videoId);
  video.setAttribute("data-playlist-id", "");
  video.setAttribute("data-application-id", "");

  // video.style.width = "100%";
  // video.style.height = "550px";
  // video.style.objectFit = "cover";

  videoWrapper.appendChild(video);

  return videoWrapper;
}
