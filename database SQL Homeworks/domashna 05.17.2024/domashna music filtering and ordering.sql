-- HOMEWORK 2 --

-- 1. Select details for artists born before 01-04.1992
SELECT * FROM artist_details WHERE date_of_birth <= '01-04-1992';

-- 2. Select artists born in Germany
SELECT * FROM artist_details WHERE country = 'Germany';

-- 3. Select songs longer than 4 minutes
SELECT * FROM song WHERE duration >= '4min';

-- 4. Select all explicit songs
SELECT * FROM song WHERE explicit = true;

-- 5. Select genres containing the letter O
SELECT * FROM genre WHERE name ILIKE '%o%';

-- 6. Select lyrics that contain the word 'that'
SELECT * FROM song_lyrics WHERE lyrics ILIKE '%that%';

-- 7. Show artists that have 'e' in their name, order by date of birth from oldest to youngest
SELECT * FROM artist_details WHERE full_name ILIKE '%e%' ORDER BY date_of_birth ASC;

-- 8. Show all non-explicit songs sorted by duration from shortest to longest
SELECT * FROM song WHERE explicit = false ORDER BY duration ASC;

-- 9. Show albums that contain the letter 'u' sorted by rating from worst to best
SELECT * FROM album WHERE name ILIKE '%u%' ORDER BY rating ASC;

-- 10. Show artists and artist full names without duplicates
SELECT name FROM artist
UNION
SELECT full_name FROM artist_details;

-- 11. Select artists and artist full names with duplicates
SELECT name FROM artist
UNION ALL
SELECT full_name FROM artist_details;

-- 12. Select common artist names and artist full names
SELECT * FROM album;

-- 13. Show all album names and their ratings
SELECT album.name as album_name, album.rating as album_rating FROM album;

-- 14. Select all artists with their name and full name side by side
SELECT * FROM playlist;

-- 15. Select songs with their lyrics side by side
SELECT song.name AS song_name, song_lyrics.lyrics AS song_lyrics FROM song INNER JOIN song_lyrics ON song.id = song_lyrics.song_id;

-- 16. Show artists with album names side by side
SELECT artist.name AS artist_name, album.name AS album_name FROM artist INNER JOIN album ON artist.id = album.artist_id;

-- 17. Show artist names and their spouse names for all artists including the ones that don't have details
SELECT artist_details.full_name, artist_details.spouse_name FROM artist_details;

-- 18. Show artist names and countries for all including missing artists and missing info
SELECT artist_details.full_name, artist_details.country FROM artist_details;

-- 19. Show song names with genre names
SELECT song.name AS song_name, genre.name AS genre_name FROM song
INNER JOIN
songs_genres ON song.id = songs_genres.song_id
INNER JOIN
genre ON genre.id = songs_genres.genre_id;

-- 20. Show song names with playlist names
SELECT song.name AS song_name, playlist.title AS playlist_name FROM song
INNER JOIN
playlists_songs ON song.id = playlists_songs.song_id
INNER JOIN
playlist ON playlist.id = playlists_songs.playlist_id;

-- 21. Show album names and rating above 4 with the artist name

SELECT album.name AS album_name, album.rating AS album_rating, artist.name AS artist_name
FROM album
JOIN
artist ON album.artist_id = artist.id
WHERE album.rating >= 4;

-- 22. List all explicit song names and artist names without missing data
SELECT song.name AS song_name, song.explicit AS explicit, artist.name AS artist_name
FROM song
JOIN
artist ON artist.id = song.artist_id
WHERE song.explicit = true;





