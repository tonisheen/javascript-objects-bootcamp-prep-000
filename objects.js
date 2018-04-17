playlist = { Eminem : 'Lose YourSelf' };

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
  return playlist
  
  //return Object.assign({}, playlist, {artist: title})
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist];
    return playlist
}