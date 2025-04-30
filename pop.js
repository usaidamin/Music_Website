// Music Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio();
    const playBtn = document.querySelector('.play-btn i');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const playlistItems = document.querySelectorAll('.playlist-item');
    const songTitle = document.querySelector('.song-title');
    const songArtist = document.querySelector('.song-artist');
    const albumArt = document.querySelector('.album-art');
    const prevBtn = document.querySelector('.fa-step-backward');
    const nextBtn = document.querySelector('.fa-step-forward');
    const chartPlays = document.querySelectorAll('.chart-play');
    
    let isPlaying = false;
    let currentSongIndex = 0;
    
    // Play/Pause functionality
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
        } else {
            audio.play();
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    }
    
    // Update progress bar
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Update time display
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
        
        // Avoid NaN display
        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
    
    // Set progress when clicked
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }
    
    // Load song
    function loadSong(index) {
        const song = playlistItems[index];
        const songSrc = song.getAttribute('data-src');
        const songImg = song.getAttribute('data-img');
        const songName = song.querySelector('.song-name').textContent;
        const artistName = song.querySelector('.artist-name').textContent;
        
        audio.src = songSrc;
        albumArt.src = songImg;
        songTitle.textContent = songName;
        songArtist.textContent = artistName;
        
        // Reset active class
        playlistItems.forEach(item => item.classList.remove('active'));
        song.classList.add('active');
        
        if (isPlaying) audio.play();
    }
    
    // Next song
    function nextSong() {
        currentSongIndex++;
        if (currentSongIndex > playlistItems.length - 1) {
            currentSongIndex = 0;
        }
        loadSong(currentSongIndex);
        if (isPlaying) audio.play();
    }
    
    // Previous song
    function prevSong() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlistItems.length - 1;
        }
        loadSong(currentSongIndex);
        if (isPlaying) audio.play();
    }
    
    // Event listeners
    playBtn.addEventListener('click', togglePlay);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);
    document.querySelector('.progress-container').addEventListener('click', setProgress);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    
    // Click on playlist item
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            isPlaying = true;
            audio.play();
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        });
    });
    
    // Click on chart play buttons
    chartPlays.forEach((playBtn, index) => {
        playBtn.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            isPlaying = true;
            audio.play();
            document.querySelector('.play-btn i').classList.remove('fa-play');
            document.querySelector('.play-btn i').classList.add('fa-pause');
        });
    });
    
    // Load first song
    loadSong(0);
    
    // Newsletter form submission
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        alert(`Thanks for subscribing with ${email}! Welcome to our pop community.`);
        this.reset();
    });
});