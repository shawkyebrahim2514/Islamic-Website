function nextAyah() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah == null) return;
  if (activeAyah.nextElementSibling) {
    let nextAyahElement = getNextAyahElement(activeAyah);
    nextAyahElement.click();
  } else {
    document
      .querySelector(".quran-player .controllers .prev-next-controller .next")
      .dispatchEvent(new Event("click"));
    document
      .querySelector(".quran-player .quran-text")
      .setAttribute("data-continue-playing", "true");
  }
}

function getNextAyahElement(activeAyah) {
  activeAyah = activeAyah.nextElementSibling;
  while (
    activeAyah.classList.contains("basmala") ||
    activeAyah.classList.contains("surah-name")
  ) {
    activeAyah = activeAyah.nextElementSibling;
  }
  return activeAyah;
}

const audioPlayer = document.querySelector(".audio-player");
const playBtn = audioPlayer.querySelector(".controls .toggle-play");

let audio = new Audio(
  "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
);

function changeAudio(url) {
  audio.pause();
  audio.src = url;
  playBtn.dispatchEvent(new Event("click"));
}

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = 0.75;
  },
  false
);

// add event when the audio end
audio.addEventListener("ended", function () {
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  nextAyah();
});

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener(
  "click",
  (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width =
      newVolume * 100 + "%";
  },
  false
);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
      audio.play();
    } else {
      playBtn.classList.remove("fa-pause");
      playBtn.classList.add("fa-play");
      audio.pause();
    }
  },
  false
);

// add event listener to toggle button when press space
document.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    playBtn.click();
  }
});

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("fa-volume-high");
    volumeEl.classList.add("fa-volume-xmark");
  } else {
    volumeEl.classList.add("fa-volume-high");
    volumeEl.classList.remove("fa-volume-xmark");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

export { changeAudio };