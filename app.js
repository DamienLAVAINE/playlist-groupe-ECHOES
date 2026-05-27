const tracks = [
  { name: "Time is running out", file: "audio/time_is_running_out.mp3" },
  { name: "Use somebody", file: "audio/use_somebody.mp3" },
  { name: "Creep", file: "audio/creep.mp3" },
  { name: "Plug in baby", file: "audio/plug_in_baby.mp3" },
  { name: "Can't stop", file: "audio/cant_stop.mp3" }
];

let current = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playlistDiv = document.getElementById("playlist");

// build playlist
tracks.forEach((t, i) => {
  const div = document.createElement("div");
  div.className = "track";
  div.innerText = t.name;
  div.onclick = () => playTrack(i);
  playlistDiv.appendChild(div);
});

function playTrack(i) {
  current = i;
  audio.src = tracks[i].file;
  title.innerText = tracks[i].name;
  audio.play();
}

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextTrack() {
  current = (current + 1) % tracks.length;
  playTrack(current);
}

function prevTrack() {
  current = (current - 1 + tracks.length) % tracks.length;
  playTrack(current);
}
