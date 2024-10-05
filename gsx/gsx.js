var audioPlayer = document.getElementById('audioPlayer')
var playButton = document.getElementById('playButton')
playButton.addEventListener('click',function() {
    if(audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = '';
    }else{
        audioPlayer.pause();
        playButton.textContent = ''
    }
});
