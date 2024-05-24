-- *** Grouping Functions (MIN, MAX, AVG, SUM, COUNT, STRING_AGG) *** --

-- JOIN = INNER JOIN
-- LEFT JOIN = LEFT OUTER JOIN
-- RIGHT JOIN = RIGHT OUTER JOIN
-- FULL JOIN = FULL OUTER JOIN

-- 1. Select songs with the MIN duration in each playlist --
SELECT p.title, MIN(s.duration) AS min_duration FROM playlist p
JOIN
playlists_songs ps ON ps.playlist_id = p.id
JOIN
song s ON ps.song_id = s.id
GROUP BY p.title;

-- 2. Calculate the total duration of songs in each playlist --
SELECT p.title, SUM(s.duration) AS total_duration FROM playlist p
JOIN
playlists_songs ps ON ps.playlist_id = p.id
JOIN
song s ON s.id = ps.song_id
GROUP BY p.title;

-- 3. Count the number of songs in each album --
SELECT al.name, COUNT(s.id) AS total FROM album al
JOIN 
song s ON al.id = s.album_id
GROUP BY al.name;


-- 4. Find the average duraion of songs for each artist --
SELECT ar.name, AVG(s.duration) as avg_duration FROM artist ar
JOIN 
song s ON a.id = s.artist_id
GROUP BY ar.name;

-- 5. Find the total number of songs in each album
SELECT s.album_id, COUNT(*) AS total_songs FROM song s
GROUP BY s.album_id;

-- 6. Count the number of explicit songs for each artist --
SELECT s.artist_id, COUNT(*) AS total_explicit_songs FROM song s
WHERE s.explicit = true
GROUP BY s.artist_id;

-- 7. Find the number of songs in each genre --
SELECT g.name, COUNT(sg.song_id) AS total_songs FROM song s
JOIN 
songs_genres sg ON s.id = sg.song_id
JOIN 
genres g ON g.id = sg.genre_id
GROUP BY g.name;

-- 8. Find the total number of songs in each playlist --
SELECT p.title, COUNT(ps.song_id) AS total FROM playlist p
LEFT JOIN
playlists_songs ps ON p.id = ps.playlist_id
GROUP BY p.title;

-- 9. Find the sum of all song durations for each artist --
SELECT s.artist_id, SUM(s.duration) AS total_sum_duration FROM song s
GROUP BY s.artist_id;

-- 10. Count the number of artists in each country --
SELECT ad.country, COUNT(ad.artist_id) AS total_artists FROM artist_details ad
GROUP BY ad.country;

-- 11. Find the AVG duration of songs in each genre --
SELECT g.name, AVG(s.duration) AS avg_duration FROM genre g
LEFT JOIN
songs_genres sg ON g.id = sg.genre_id
LEFT JOIN
song s ON sg.song_id = s.id
GROUP BY g.name;

-- 12. Show full artist names and titles of all playlist he has songs in --
SELECT ard.full_name, p.title FROM artist_details ad
JOIN
artist ar ON ar.id = ad.artist_id
JOIN
song s ON s.artist_id = ar.id
JOIN
playlists_songs ps ON ps.song_id = s.id
JOIN
playlist p ON p.id = ps.playlist_id
GROUP BY 


-- 13. Show artist name with all his playlists --
SELECT a.name, STRING_AGG(sl.lyrics, ' / ') FROM artist ar
JOIN 
song s ON s.artist_id = ar.id
JOIN
song_lyrics sl ON s.id = sl.song_id
GROUP BY a.name ;


-- 14. Show number of songs in playlist by genre --
SELECT p.title, g.name, COUNT(s.id) AS total_songs FROM playlist 
JOIN
playlists_songs ps ON p.id = ps.playlist_id
JOIN
song s ON s.id = ps.song_id
JOIN 
songs_genres sg ON sg.song_id = s.id
JOIN
genre g ON g.id = sg.genre_id
GROUP BY p.title, g.name
ORDER BY p.title, g.name;


-- 15. Show full artist names and album names without duplicates
-- using DISTINCT --
SELECT DISTINCT ad.full_name, al.name FROM artist_details ad
JOIN
artist ar ON ar.id = ad.artist_id
JOIN
song s ON s.artist_id = ar.id
JOIN
album al ON al.id = s.album_id
ORDER BY al.name
-- using GROUP BY --
SELECT ad.full_name, al.name FROM artist_details ad
JOIN
artist ar ON ar.id = ad.artist_id
JOIN
song s ON s.artist_id = ar.id
JOIN
album al ON al.id = s.album_id
ORDER BY al.name
GROUP BY ad.full_name, al.name

-- HAVING Operator --

-- Find total number of songs in each genre with atleast 5 songs --
SELECT g.name, COUNT(s.id) as total_songs FROM song s
LEFT JOIN
songs_genres sg ON sg.song_id = s.id
RIGHT JOIN
genre g ON sg.genre_id = g.id
GROUP BY g.name
HAVING COUNT(s.id) >= 5;

-- Find total number of songs in each genre with atleast 5 songs for explicit songs --
SELECT g.name, COUNT(s.id) as total_songs FROM song s
LEFT JOIN
songs_genres sg ON sg.song_id = s.id
RIGHT JOIN
genre g ON sg.genre_id = g.id
WHERE s.explicit = true
GROUP BY g.name
HAVING COUNT(s.id) >= 5;

-- Count the number of playlists containing at least 2 songs --
SELECT p.title, COUNT(ps.song_id) AS total_count FROM playlist p
LEFT JOIN
playlists_songs ps ON ps.song_id = p.id
GROUP BY p.title
HAVING COUNT(ps.song_id) >= 2;








