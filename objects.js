playlist = { Eminem : 'Lose YourSelf' };

function updatePlaylist(playlist, artist, title) {
  return Object.assign({}, playlist, {artist: title})
}

function removeFromPlaylist()