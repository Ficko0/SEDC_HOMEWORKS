			-- Homework 3 --

-- 1. Calculate the count of all the songs
SELECT COUNT(*) AS total_songs FROM song;

-- 2. Calculate the count of al the songs per artist
SELECT a.name, COUNT(s.id) AS songs_per_artist FROM song s
JOIN
artist a ON a.id = s.artist_id
GROUP BY a.name;

-- 3. Calculate the count of all the songs per artist for the first 10 albums (ID < 10)
SELECT a.name, COUNT(s.id) AS total_songs FROM artist a
JOIN
album al ON al.artist_id = a.id
JOIN 
song s ON s.album_id = al.id
GROUP BY a.name
HAVING COUNT (s.id) < 10;

-- 4. Find the max and avg duration of a song per artist
SELECT a.name, MAX(s.duration) AS max_duration, AVG(s.duration) AS avg_duration FROM artist a
JOIN
song s ON s.artist_id = a.id
GROUP BY a.name;

-- 5. Calculate the count of all songs per artist in the system and filter only song count greater than 10
SELECT a.name AS total_songs FROM artist a
JOIN
song s ON s.artist_id = a.id
GROUP BY a.name
HAVING COUNT(s.id) > 10;

-- 6. Calculate the count of all songs per artist for the first 10 albums, and filter artists with more than 10 songs
SELECT a.name, COUNT(s.id) AS total_songs FROM artist a
JOIN
album al ON al.artist_id = a.id
JOIN
song s ON s.album_id = al.id
WHERE s.album_id < 100
GROUP BY a.name
HAVING COUNT(s.id) > 10;

-- 7. Find song count, max duration and avg duration per artist on all songs.
--    Filter only records where the max duration is more than the avg duration
SELECT a.name, COUNT(s.id) AS total_songs, MAX(s.duration) AS max_duration, AVG(s.duration) AS avg_duration FROM artist a
JOIN
song s ON s.artist_id = a.id
GROUP BY a.name;

-- 8. Create a view that will list all artist IDs and count songs per artist
CREATE VIEW vw_ArtistSongCounts
AS
SELECT a.id AS artist_id, COUNT(s.id) AS songs_per_artist FROM artist a
JOIN
song s ON s.artist_id = a.id
GROUP BY a.id;

SELECT * FROM vw_artistSongCounts;

-- 9. Change the view to show artist names instead of IDs
CREATE VIEW vw_ArtistSongCounts2
AS
SELECT a.name AS artist_name, COUNT(s.id) AS songs_per_artist FROM artist a
JOIN
song s ON s.artist_id = a.id
GROUP BY a.name;

SELECT * FROM vw_artistSongCounts2;

SELECT * FROM vw_artistsongcounts2;

-- 10. Create a new view that will list all artists and count the albums they have
CREATE VIEW vw_ArtistAlbumDetails
AS
SELECT a.name, COUNT(al.id) AS albums_per_artist FROM artist a
JOIN
album al ON al.artist_id = a.id
GROUP BY a.name;

SELECT * FROM vw_ArtistAlbumDetails;














