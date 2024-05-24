			-- Built-in Functions in SQL --


-- Concat => connects the strings with a dash(-) -- 
SELECT CONCAT(a.name, ' - ', s.name) AS artist_song_name FROM artist a
JOIN
song s ON s.artist_id = a.id;

-- Upper => converts the names to uppercase --
SELECT UPPER(name) AS upper_album_name FROM album;

-- Lower => converts the names to lowercase --
SELECT LOWER(name) AS lower_album_name FROM album;

-- Left => returns the 5 left chars --
SELECT LEFT(s.name, 5) FROM song s;

-- Right => returns the 5 right chars --
SELECT RIGHT(s.name, 5) FROM song s;

-- Length => returns the length of the chars for the artist full name --
SELECT ad.full_name, LENGth(ad.full_name) AS artist_fullname_length FROM artist_details ad;

-- Substring => takes a piece from the chars and return the value we provide --
SELECT SUBSTRING(s.name FROM 1 FOR 5) AS cutted_name FROM song s;

-- Trim => removes empty strings --
SELECT TRIM(s.name) AS trimmed_names FROM song s;

-- Coalesce --
SELECT ad.full_name, COALESCE(ad.spouse_name, 'Unknown') AS spouse_names FROM artist_details ad;

-- Replace --
SELECT ad.full_name, REPLACE(ad.country, 'USA', 'United States Of America') FROM artist_details ad;


			-- Temporary Tables --


-- Create a temprary table to store the details of songs in a specific genre --
CREATE TEMP TABLE temp_pop_genre_songs AS
SELECT s.id as song_id, s.name as song_name, s.duration as song_durarion FROM song s
JOIN
songs_genres sg ON sg.song_id = s.id
JOIN
genre g ON g.id = sg.genre_id
WHERE g.name = 'Pop';

SELECT * FROM temp_pop_genre_songs;

























