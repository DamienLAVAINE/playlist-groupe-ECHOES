const tracks = [
  { name: "Echoes (tu nous connais pas)", file: "audio/ZOOM0140 - Echoes - Echoes (tu nous connais pas) remixée.mp3" },
  { name: "Echoes - Aya", file: "audio/ZOOM0144 - Echoes - Aya - remixée + fin net bla" },
  { name: "Echoes - Cause toujours", file: "audio/ZOOM0236 - Cause toujours 26.05 remixé v1.mp3" },

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
