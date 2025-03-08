<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bio Page</title>
    <style>
        body {
            background-color: #802b2b;
            color: #ffffff;
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: rgb(83, 5, 5);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(26, 13, 13, 0.2);
        }
        .logo {
            font-size: 28px;
            font-weight: 500;
            margin-bottom: 18px;
            color: #9c0f0f;
        }
        .bio {
            font-size: 16px;
            margin-bottom: 25px;
            font-weight: 400;
            line-height: 1.5;
        }
        .player {
            margin-top: 30px;
            background: rgba(148, 36, 36, 0.85);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(95, 66, 66, 0.3);
        }
        .controls {
            margin-top: 15px;
        }
        button {
            background: #380909; /* Siyah arka plan */
            border: none;
            color: #e0e0e0;
            font-size: 30px;
            cursor: pointer;
            padding: 12px 18px;
            border-radius: 50%;
            transition: background 0.3s ease, transform 0.2s ease;
        }
        button:hover {
            background: #1e1e1e;
            transform: scale(1.1);
        }

        /* Play/Pause simgesi */
        button#pause-btn.playing::before {
            content: "❚❚"; /* Durdurma simgesi */
        }

        button#pause-btn.paused::before {
            content: "▶"; /* Oynatma simgesi */
        }

        /* İleri butonu (boş iç kısmı olan) */
        button#next-btn::before {
            content: "▷"; /* İleri butonu */
            font-size: 30px;
        }

        /* Geri butonu */
        button#prev-btn::before {
            content: "◁"; /* Geri butonu */
            font-size: 30px;
        }

        /* Sosyal medya linkleri */
        .social-icons a {
            display: inline-block;
            margin: 12px;
            font-size: 20px;
            color: #e0e0e0;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .social-icons a:hover {
            color: #ff8c00;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">MARTİANLİ</div>
        <div class="bio">
            <p>📍 Türkiye</p>
            <p>🎓 Nevsehir University - Computer Science</p>
            <p>💻 Java, JS, Python, C</p>
        </div>
        <div class="player">
            <p>🎵 Currently Playing: <span id="song-name"></span></p>
            <audio id="audio-player" controls>
                <source id="audio-source" src="https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal1.mp3" type="audio/mpeg">
                Tarayıcınız ses çalmayı desteklemiyor.
            </audio>
            <div class="controls">
                <button id="prev-btn"></button> <!-- Geri Butonu -->
                <button id="pause-btn" class="playing"></button> <!-- Play/Pause -->
                <button id="next-btn"></button> <!-- İleri Butonu -->
            </div>
        </div>
        <div class="social-icons">
            <a href="https://github.com/EmreCanberk" target="_blank">🔗 GitHub</a>
            <a href="https://www.linkedin.com/in/martianli" target="_blank">🔗 LinkedIn</a>
        </div>
    </div>

    <script>
        let songs = [
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal1.mp3', name: 'Dip - Madrigal'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/circassian.mp3', name: 'Adyghe Bride '},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/fırtına.mp3', name: 'Umbrella - Rihanna - JAY-Z'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/loganroy.mp3', name: 'Succession - Nicholas Britell'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/die.mp3', name: 'Die With A Smile - Lady Gaga - Bruna Mars'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madaboutyou.mp3', name: 'Mad About You - Hooverphonic'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal7.mp3', name: 'Madrigal 7'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal8.mp3', name: 'Madrigal 8'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal9.mp3', name: 'Madrigal 9'},
            {src: 'https://github.com/kullaniciAdin/my-music-bio/raw/main/muzikler/madrigal10.mp3', name: 'Madrigal 10'}
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
    </script>
</body>
</html>

