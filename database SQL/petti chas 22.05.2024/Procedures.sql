				-- Procedure --

-- 1. Stored procedure to Insert a new artist and their details --
CREATE OR REPLACE PROCEDURE add_artist_with_details(
	p_name VARCHAR,
	p_date_of_birth DATE,
	p_full_name VARCHAR,
	p_country VARCHAR,
	p_city VARCHAR,
	p_is_married BOOLEAN,
	p_spouse_name VARCHAR
)
language plpgsql
AS
$$
DECLARE
	v_artist_id INT;
BEGIN
	INSERT INTO artist (name) VALUES (p_name) RETURNING id INTO v_artist_id;
	
	INSERT INTO artist_details (
		date_of_birth,
		full_name,
		country,
		city,
		is_married,
		spouse_name,
		artist_id
	) VALUES (
		p_date_of_birth,
		p_full_name,
		p_country,
		p_city,
		p_is_married,
		p_spouse_name,
		v_artist_id
	);
	
	COMMIT;
END;
$$;

-- Calling the procedure --

CALL add_artist_with_details('Nekoj', '2020-01-01', 'Nekoj nekoj', 'Macedonia', 'Skopje', true, 'zhena mu');

-- Transaction 2. Procedure that will create a new playlist and insert a list of songs --
CREATE OR REPLACE PROCEDURE create_playlist_with_songs(
	p_playlist_title VARCHAR,
	p_song_ids INT[] -- example: [1, 2, 3]
)
language plpgsql
AS
$$
DECLARE
	v_playlist_id INT;
	v_song_id INT;
BEGIN
	INSERT INTO playlist (title) VALUES (p_playlist_title) RETURNING id INTO v_playlist_id;
	
	FOREACH v_song_id IN ARRAY p_song_ids
	LOOP
		INSERT INTO playlists_songs(playlist_id, song_id) VALUES (v_playlist_id, v_song_id);
	END LOOP;
	
EXCEPTION 
	WHEN OTHERS THEN 
		ROLLBACK;
		RAISE;
END;
$$;

CALL create_playlist_with_songs ('My Favoutrite Songs', ARRAY[1, 2, 3, 4, 5, 6, 7, 8]);














