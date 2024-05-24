			-- Transactions --

-- Inserting songs into a new playlist called Favourites --

BEGIN;

INSERT INTO playlist (title) VALUES ('Favourites');
	
INSERT INTO playlists_songs (playlist_id, song_id)
VALUES ((SELECT id FROM playlist WHERE title = 'Favourites'), 1);

COMMIT;

SELECT * FROM playlist ps
JOIN playlists_songs ps ON ps.playlist_id = p.id
JOIN song s ON s.id = ps.song_id
WHERE title = 'Favourites';

-- Transaction 2 --

BEGIN;

















