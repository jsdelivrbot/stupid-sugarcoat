let audio = document.createElement("audio");
let source = document.createElement("source");

audio.autoplay = true;

source.src = "https://rawgit.com/jonasjohansson/sugarcoat/master/honey.mp3";
source.type = "audio/mp3";

audio.appendChild(source);

document.appendChild(audio);