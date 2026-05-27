const tracks = [
  { name: "Time is running out/MUSE", file: "audio/MUSE - Time Is Running Out.mp3" },
  { name: "Use somebody/KOL", file: "audio/KINGS OF LEON - Use Somebody.m4a" },
  { name: "Creep(+0.5)/RADIOHEAD", file: "audio/RADIOHEAD - Creep (+0,5 ton).mp3" },
  { name: "Plug in baby/MUSE", file: "audio/MUSE - Plugin baby.mp3" },
  { name: "Can't stop/RHCP", file: "audio/RHCP - Can't Stop.mp3" },
  { name: "Lonely day(+1.5)/SOAD", file: "audio/SOAD - Lonely Day (+1,5 ton)+solo basse.mp3" },
  { name: "Shadow of the day(Version Echoes)/LINKIN PARK", file: "audio/LP - Shadow of the day (version Echoes).m4a_mixed 24.01.mp3" },
  { name: "Help(Version Echoes)/THE BEATLES", file: "audio/ZOOM0125 - THE BEATLS -Help -(Version Echoes).mp3" },
  { name: "Echoes(tu nous connais pas)/ECHOES", file: "audio/ZOOM0140 - Echoes - Echoes (tu nous connais pas) remixée.mp3" },
  { name: "Interlude/MUSE", file: "audio/MUSE - Interlude.mp3" },
  { name: "Hysteria/MUSE", file: "audio/MUSE - Hysteria.mp3" },
  { name: "Battez-vous/BRIGITTE", file: "audio/BRIGITTE - Battez-vous.mp3" },
  { name: "Not an addict(Intro Echoes)/KS CHOICE", file: "audio/K's CHOICE - Not an addict (Démarrage Echoes).mp3" },
  { name: "Supermassive black hole/MUSE", file: "audio/MUSE - Supermassive Black Hole.mp3" },
  { name: "Lola(structure Echoes)/SUPERBUS", file: "audio/SUPERBUS - Lola (structure finale).MP3" },
  { name: "Le Brio/BIG SOUL", file: "audio/BIG SOUL - Le Brio (version Echoes).m4a" },
  { name: "C'est comme ça(Version Echoes)/LES RITA MITSOUKO", file: "audio/ZOOM0135 - LES RITA - Cest comme ça (version Echoes).mp3" },
  { name: "Tout l'amour que j'ai pour toi(Version Echoes)/MORENO", file: "audio/MORENO - Toutt l'amour que j'ai pour toi (Version Echoes).MP3" },
  { name: "Celebrity skin/HOLE", file: "audio/HOLE - Celebrity Skin.mp3" },
  { name: "Sweet dreams/MARILYN MANSON", file: "audio/MARILYN MANSON - Sweet Dreams.mp3" },
  { name: "Nightcall(Version Echoes)/KAVINSKY", file: "audio/KAVINSKI - Nightcall (versin Echoes fin ok).mp3" },
  { name: "Aya/ECHOES", file: "audio/ZOOM0144 - Echoes - Aya - remixée + fin net bla.mp3" }, 
  { name: "In bloom/NIRVANA", file: "audio/NIRVANA - In Bloom.mp3" }, 
  { name: "Banquet/BLOC PARTY", file: "audio/BLOC PARTY - Banquet.m4a" }, 
  { name: "Medley", file: "Audio/MEDLEY - Enter rock to hell.mp3" }, 
  { name: "Song2(+0.5)/BLUR", file: "Audio/BLUR - Song 2 (+ 0,5 ton).mp3" }, 
  { name: "Cause toujours/ECHOES", file: "audio/ZOOM0236 - Cause toujours 26.05 remixé v1.mp3" },
  { name: "The Pretender(avec presentation Echoes)/FOO FIGHTERS", file: "audio/Foo Fighters - The Pretender (avec taxi, another one, présentation...).mp3" },
  { name: "Zombie/THE CRANBERRIES", file: "audio/THE CRANBERRIES - Zombie.mp3" },
  { name: "7 Nation army/THE WHITE STRIPES", file: "audio/THE WHITE STRIPES - 7 Nation army (version Echoes).MP3" },
  { name: "Nothing else matters(-1ton)/METALLICA", file: "audio/METALLICA - Nothing Else Matters (-1 ton).mp3" }
    
   
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
  if (!audio.src) {
    playTrack(current);
    return;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextTrack() {
  current = (current + 1) % tracks.length;
  playTrack(current);
}

function prevTrack() {
  current = (current - 1 + tracks.length) % tracks.length;
  playTrack(current);
}

audio.addEventListener("ended", () => {
  nextTrack();
});
