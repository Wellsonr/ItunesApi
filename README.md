# ItunesApi
A website for take itunes api and use it in dev site

* Start of the WorkFlow*
    Converting Data: Data obtained from the iTunes API is then processed. Artist and song search results from the API are converted into a format suitable for use in this project. 
    Each search result is converted into an object with the attributes title, artist, img (for album images), and file (for audio files).

    Dropdown Menu: Once the data has been processed, you create artist links to display in the dropdown menu. 
    Each artist becomes a clickable link. When the link is clicked, the song from the artist in question will be loaded and played.

    Load Track Function: The loadTrack function is used to load the selected song.   
    This converts the audio source (audio.src) into a suitable audio file, loads the audio, and plays it. 
    Apart from that, it also changes the title text and artist name displayed on the screen, as well as the song album image.

    Event Listeners: There are several event listeners added for various user interactions. 
    These include "Prev" and "Next" buttons to switch songs, play/pause buttons, and clicking the progress bar to change playback position.

    Change Background function: This function is used to change the background with the album image of the song being played.

    Music Playback: There is a checkIsPlaying function that controls music playback. When the user clicks the play/pause button, this function changes the playback state and updates the button icon according to the current playback state.

    Progress Bar Updates: Progress bar updates occur while the song is playing. This lets users see how far a song has been played in percentage terms.

    Completed Song Listener Event: When the song finishes playing, this event listener will update the play/pause button display.

    Error Handling: There is error handling if there is a problem retrieving data from the iTunes API. This error will be printed to the console.

    "Search" Button Event Listener: This event listener connects the updateTerm function to the "Search" button. When this button is clicked, a song search will start according to the keywords entered by the user.

  * End of the workflow *
