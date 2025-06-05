function trackInteraction(action, songName) {
    gtag('event', action, {
        'event_category': 'Music',
        'event_label': songName,
        'value': 1
    });
}

let songs = [
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/yalın.mp3", name: "Sonsuz Ol - Yalın"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/madrigal1.mp3", name: "Dip - Madrigal"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/fırtına.mp3", name: "Umbrella - Rihanna - JAY-Z"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/loganroy.mp3", name: "Succession - Nicholas Britell"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/die.mp3", name: "Die With A Smile - Lady Gaga - Bruno Mars"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/madaboutyou.mp3", name: "Mad About You - Hooverphonic"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/arcade.mp3", name: "Arcade - Duncan Laurence"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/dua.mp3", name: "Trainin Season - Dua Lipa"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/yankı.mp3", name: "Yankı - Simge"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/falling.mp3", name: "Falling - Trevor Daniel"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/kafe.mp3", name: "Gupse Kafe - Berkay Şengül"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/özünle.mp3", name: "Özünle Apar - Fahree - İlkin Dövletov"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/gandagana.mp3", name: "Gandagana - Baisani Ensemble"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/hawaii.mp3", name: "Harleys in Hawaii - Katty Perry"},
    {src: "https://raw.githubusercontent.com/EmreCanberk/Martianli/main/evgeny.mp3", name: "Once Upon A Time - Evgeny Grinko"},
];

let currentSongIndex = 0;

function loadSong(index) {
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");
    const songName = document.getElementById("song-name");
    source.src = songs[index].src;
    songName.textContent = songs[index].name;
    player.load();
    player.play();
    updatePlayPauseButton();
}

document.getElementById("audio-player").addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

document.getElementById('pause-btn').addEventListener('click', function() {
    const player = document.getElementById('audio-player');
    const pauseButton = document.getElementById('pause-btn');
    if (player.paused) {
        player.play();
        pauseButton.classList.remove('paused');
        pauseButton.classList.add('playing');
    } else {
        player.pause();
        pauseButton.classList.remove('playing');
        pauseButton.classList.add('paused');
    }
});

document.getElementById('next-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

window.onload = function() {
    loadSong(currentSongIndex);
};

function updatePlayPauseButton() {
    const pauseButton = document.getElementById('pause-btn');
    const player = document.getElementById('audio-player');
    if (player.paused) {
        pauseButton.classList.remove('playing');
        pauseButton.classList.add('paused');
    } else {
        pauseButton.classList.remove('paused');
        pauseButton.classList.add('playing');
    }
}

