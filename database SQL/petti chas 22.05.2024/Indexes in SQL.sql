-- Indexes in Database --

CREATE INDEX idx_artist_name ON artist(name);
 
CREATE INDEX idx_song_name ON song(name);

CREATE INDEX idx_playlists_songs ON playlists_songs(playlist_id, song_id);

