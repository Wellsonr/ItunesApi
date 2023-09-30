const audio = document.querySelector('#audioplayers');
const title = document.querySelector('#songtitle');
const names = document.querySelector('#songartist');
const songImgs = document.getElementById('songimg');
const prevBtn = document.querySelector('#prevButton');
const playBtn = document.getElementById('play-pause-button');
const nextBtn = document.querySelector('#nextButton');
const searchBtn = document.getElementById('searchTermBtn')
const backgroundBlur = document.querySelector('.backgroundblur');
const categorieWarn = document.querySelector('#placeholder');
const loadingSpinner = document.querySelector("#spinner");


// Search Term //
let term = '';
categorieWarn.innerHTML = "Please search something";
const updateTerm = () => {
    term = document.getElementById('searchTerm').value;
    if (!term || term === '' ){
        alert('Please Enter a search Term')
    } else {
        categorieWarn.innerHTML = "";

        // fetch itunes api //
        const url = `https://itunes.apple.com/search?term=${term}&limit=10`;
        const songContainer = document.getElementById('dropdown');
        while(songContainer.firstChild){
            songContainer.removeChild(songContainer.firstChild);
        };
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const artistResults = data.results;
                loadingSpinner.style.display = 'none';
                // Map the iTunes API results to your audioFiles format
                const mergedAudioFiles = artistResults.map(result => ({
                    title: result.trackName,
                    artist: result.artistName,
                    img: result.artworkUrl100,
                    file: result.previewUrl,
                }));


                // Add Navbar Artist to the dropdown menu
                artistResults.forEach((result, index) => {
                    const artistsMenu = document.createElement('a');
                    artistsMenu.classList.add('dropdown-item');
                    artistsMenu.textContent = result.artistName;

                    artistsMenu.addEventListener('click', () => {
                        loadTrack(index);
                        changeBackground(index);
                    });
                    songContainer.appendChild(artistsMenu);
                });
                let currentTrackIndex = Math.floor(Math.random() * mergedAudioFiles.length);


                loadTrack(currentTrackIndex);
                // Main Function //
                function loadTrack(index) {
                    audio.src = mergedAudioFiles[index].file;
                    audio.load();
                    audio.play();
                    title.textContent = mergedAudioFiles[index].title;
                    names.textContent = mergedAudioFiles[index].artist;
                    songImgs.innerHTML = `
                        <img src="${mergedAudioFiles[index].img}" />
                    `
                };


                prevBtn.addEventListener('click', () => {
                    isPlaying = true;
                    currentTrackIndex = (currentTrackIndex - 1 + mergedAudioFiles.length) % mergedAudioFiles.length;
                    loadTrack(currentTrackIndex);
                    checkIsPlaying();
                    changeBackground(currentTrackIndex);
                });


                nextBtn.addEventListener('click', () => {
                    isPlaying = false;
                    currentTrackIndex = (currentTrackIndex + 1) % mergedAudioFiles.length;
                    loadTrack(currentTrackIndex);
                    checkIsPlaying();
                    changeBackground(currentTrackIndex);
                });


                audio.addEventListener('ended', () => {
                    currentTrackIndex = (currentTrackIndex + 1) % mergedAudioFiles.length;
                    loadTrack(currentTrackIndex);
                    changeBackground(currentTrackIndex);
                });

                function changeBackground(songIndex) {
                    const song = mergedAudioFiles[songIndex];
                    if (song) {
                        backgroundBlur.style.backgroundImage = `url("${song.img}")`;
                    }
                };

                let isPlaying = true;
                function checkIsPlaying() {
                    if (isPlaying) {
                        audio.pause();
                        playBtn.innerHTML = `
                        <div class="playStopIcons">
                            <ion-icon name='play'> </ion-icon> 
                        </div>
                        `;
                    } else {
                        audio.play();
                        playBtn.innerHTML = `
                        <div class='playStopIcons'> 
                            <ion-icon name='pause'> </ion-icon>        
                        </div>
                        `;
                    }
                    isPlaying = !isPlaying;
                };

                checkIsPlaying();

                playBtn.addEventListener('click', () => {
                    checkIsPlaying();
                });

                const progressBar = document.querySelector('.audiobars');
                const progress = document.querySelector('.progress');

                audio.addEventListener('timeupdate', () => {
                    const currentTime = audio.currentTime;
                    const duration = audio.duration;
                    const progressWidth = (currentTime / duration) * 100 + '%';
                    progress.style.width = progressWidth;
                });

                progressBar.addEventListener('click', (e) => {
                    const progressBarRect = progressBar.getBoundingClientRect();
                    const clickX = e.clientX - progressBarRect.left;
                    const progressBarWidth = progressBarRect.width;
                    const seekTime = (clickX / progressBarWidth) * audio.duration;
                    audio.currentTime = seekTime;
                });

                audio.addEventListener('ended', () => {
                    playBtn.innerHTML = `
                        <div class="playStopIcons">
                            <ion-icon name="pause"></ion-icon>
                        </div>
                    `
                    isPlaying = false;
                });
            })
            .catch(error => {
                alert('Request failed: ', error)
                loadingSpinner.style.display = 'none';
            });
    }
}

searchBtn.addEventListener('click', updateTerm);