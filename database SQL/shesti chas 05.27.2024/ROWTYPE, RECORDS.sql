				-- ROW TYPE --
DO
$$
DECLARE
	album_record album%ROWTYPE;
BEGIN
	SELECT * INTO album_record FROM album
	WHERE id = 5;
	
	RAISE NOTICE 'Album Name: %, Rating: %', album_record.name, album_record.rating;
END;
$$;


-- RECORD --
DO
$$
DECLARE
	song_genre_record RECORD;
BEGIN
	SELECT s.id AS song_id, s.name AS song_name, g.name AS genre_name
	INTO song_genre_record FROM song s
	JOIN
	songs_genres sg ON sg.song_id = s.id
	JOIN
	genre g ON g.id = sg.genre_id
	WHERE s.id = 4;
	
	RAISE NOTICE 'Song ID: %, Song Name: %, Genre Name: %', song_genre_record.song_id, song_genre_record.song_name, song_genre_record.genre_name;
END;
$$;














