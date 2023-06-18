



const playlist = [
    { title: 'Ill Have To Say I Love You In A Song', artist: 'Jim Croce', path: 'jim.mp3' },
    { title: 'Operator', artist: 'Jim Croce', path: 'op.mp3' },
    { title: 'Ive Got A Name', artist: 'Jim Croce', path: 'ive.mp3' },
    { title: 'Alabama Rain', artist: 'Jim Croce', path: 'ala.mp3' },
    { title: 'Photographs And Memories', artist: 'Jim Croce', path: 'photoghps.mp3' }
  ];
  
  const playlistElement = document.getElementById('playlist');
  const audioPlayer = document.getElementById('audio-player');
  
  // Create playlist
  playlist.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${song.title}</span> - <span>${song.artist}</span>`;
    li.addEventListener('click', () => playSong(index));
    playlistElement.appendChild(li);
  });
  
  // Play selected song
  function playSong(index) {
    const song = playlist[index];
    audioPlayer.src = song.path;
    audioPlayer.load();
    audioPlayer.play();
  
    // Update active song in playlist
    const playlistItems = document.querySelectorAll('#playlist li');
    playlistItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }