-- *** Inner Join *** --
-- Select all artists with their coresponding artist details -- 

SELECT * FROM artist
INNER JOIN
artist_details ON artist.id = artist_details.artist_id;

-- List all songs with their coresponding albums --

SELECT * FROM songs
INNER JOIN
album ON song.album_id = album.id;

-- List all playlists with their songs --

SELECT song.name AS song_name FROM song
INNER JOIN playlists_songs ON playlists_songs.song_id = song.id
INNER JOIN playlist ON playlist.id = playlists_songs.playlist_id;

-- *** Left (OUTER) Join *** --
-- Gi vrakja bez duplikati i so null vrednost za vtorata tabela --

SELECT * FROM artist
LEFT JOIN
artist_details ON artist.id = artist_details.artist_id;

SELECT * FROM song
LEFT JOIN 
album ON song.album_id = album.id;

SELECT playlist.title, song.name FROM playlist
INNER JOIN
playlists_songs ON playlist.id = playlists_songs.playlist_id
LEFT JOIN song ON playlists_songs.song_id = song.id;

-- *** Right (OUTER) Join *** --
-- Dava null vrednosti za prvata tabela -- 

SELECT artist.name, artist_details.full_name FROM artist
RIGHT JOIN 
artist_details ON artist.id = artist_details.artist_id;

SELECT song.name AS song_name, album.name AS album_name FROM song
RIGHT JOIN
album ON song.album_id = album.id;

SELECT * FROM playlist
RIGHT JOIN 
playlists_songs ON playlists_songs.playlist_id = playlist.id
RIGHT JOIN
song ON playlists_songs.song_id = song.id;

-- *** Full (OUTER) Join *** --

SELECT artist.name, artist_details.full_name FROM artist
FULL JOIN
artist_details ON artist.id = artist_details.artist_id;

SELECT song.name AS song_name, album.name AS album_name FROM song
FULL JOIN
album ON song.album_id = album.id;

SELECT song.name, playlist.title FROM playlist
FULL JOIN
playlists_songs ON playlists_songs.playlist_id = playlist.id
FULL JOIN
song ON playlists_songs.song_id = song.id;

-- *** Cross Join *** --
-- Gi dava site kombinacii pomegju nekolku tabeli ili tabela sama so sebe --

SELECT album.name AS album_name, artist.name AS artist_name FROM artist
CROSS JOIN album;

SELECT song.name AS song_name, genre.name AS genre_name FROM song
CROSS JOIN genre;

SELECT playlist.title, song.name FROM playlist
CROSS JOIN song;

-- *** Self Join *** --

SELECT s1.name AS first_song_name, s2.name AS second_song_name FROM song s1
INNER JOIN
song s2 ON s1.duration = s2.duration
WHERE s1.id != s2.id;


SELECT a1.name AS album1_name, a2.name AS album2_name FROM album a1
INNER JOIN
album a2 ON a1.rating = a2.rating
WHERE a1.rating != a2.rating;


SELECT ar1.name AS first_artist, ad1.country, ar2.name AS second_artist, ad2.country FROM artist ar1
INNER JOIN
artist_details ad ON ar1.id = ad1.artist_id
INNER JOIN
artist ar2 ON ad1.country = (SELECT ad2.country FROM artist_details ad2 WHERE ad2.artist_id = ar2.id)
WHERE ar1.id != ar2.id;



