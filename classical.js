document.addEventListener('DOMContentLoaded', function() {
    // Music Player Functionality
    const playBtn = document.querySelector('.classical-player-btn-play');
    const prevBtn = document.querySelector('.classical-player-btn:nth-of-type(1)');
    const nextBtn = document.querySelector('.classical-player-btn:nth-of-type(3)');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const playerTitle = document.getElementById('playerTitle');
    const playerComposer = document.getElementById('playerComposer');
    const playlistItems = document.querySelectorAll('.classical-playlist-item');
    
    // Mock audio player (in a real app, this would be connected to actual audio)
    let isPlaying = false;
    let currentTrack = 0;
    const tracks = [
        { title: "Clair de Lune", composer: "Claude Debussy", duration: "3:45" },
        { title: "Canon in D", composer: "Johann Pachelbel", duration: "5:10" },
        { title: "Für Elise", composer: "Ludwig van Beethoven", duration: "2:55" },
        { title: "Spring (The Four Seasons)", composer: "Antonio Vivaldi", duration: "9:45" },
        { title: "Nocturne Op. 9 No. 2", composer: "Frédéric Chopin", duration: "4:30" }
    ];
    
    // Update player info
    function updatePlayerInfo() {
        playerTitle.textContent = tracks[currentTrack].title;
        playerComposer.textContent = tracks[currentTrack].composer;
        durationEl.textContent = tracks[currentTrack].duration;
        
        // Update active playlist item
        playlistItems.forEach(item => item.classList.remove('active'));
        playlistItems[currentTrack].classList.add('active');
    }
    
    // Play/pause toggle
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            this.textContent = '❚❚';
            simulatePlayback();
        } else {
            this.textContent = '▶';
            clearInterval(playbackInterval);
        }
    });
    
    // Previous track
    prevBtn.addEventListener('click', function() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        updatePlayerInfo();
        resetProgress();
        if (isPlaying) {
            simulatePlayback();
        }
    });
    
    // Next track
    nextBtn.addEventListener('click', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        updatePlayerInfo();
        resetProgress();
        if (isPlaying) {
            simulatePlayback();
        }
    });
    
    // Click on playlist item
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentTrack = index;
            updatePlayerInfo();
            resetProgress();
            if (isPlaying) {
                playBtn.textContent = '❚❚';
                simulatePlayback();
            }
        });
    });
    
    // Progress bar click
    progressBar.parentElement.addEventListener('click', function(e) {
        const percent = e.offsetX / this.offsetWidth;
        progressBar.style.width = `${percent * 100}%`;
        updateTimeDisplay(percent);
    });
    
    // Simulate playback progress
    let playbackInterval;
    function simulatePlayback() {
        clearInterval(playbackInterval);
        let progress = 0;
        const durationInSeconds = 225; // 3:45 for first track
        
        playbackInterval = setInterval(() => {
            progress += 0.5;
            const percent = Math.min(progress / durationInSeconds, 1);
            progressBar.style.width = `${percent * 100}%`;
            updateTimeDisplay(percent);
            
            if (percent >= 1) {
                clearInterval(playbackInterval);
                isPlaying = false;
                playBtn.textContent = '▶';
                // Auto-play next track
                setTimeout(() => {
                    currentTrack = (currentTrack + 1) % tracks.length;
                    updatePlayerInfo();
                    resetProgress();
                }, 1000);
            }
        }, 500);
    }
    
    function resetProgress() {
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }
    
    function updateTimeDisplay(percent) {
        const durationInSeconds = 225; // 3:45 for first track
        const currentSeconds = Math.floor(percent * durationInSeconds);
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        currentTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.classical-newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.classical-newsletter-input');
        alert(`Thank you for subscribing with ${emailInput.value}!`);
        emailInput.value = '';
    });
    
    // Initialize player
    updatePlayerInfo();
});