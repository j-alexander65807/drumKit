(() => {
  let keys = Array.from(document.querySelectorAll('.keys'));

  keys.forEach(key => key.addEventListener('transitioned', resetKey));

  function resetKey() {
    this.classList.remove('playing');
  }

  function playSound(event) {
    //debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audioElement) { return }
    //if we have a match, then play
    audioElement.currentTime = 0;
    audioElement.play();

    key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound);
})();
