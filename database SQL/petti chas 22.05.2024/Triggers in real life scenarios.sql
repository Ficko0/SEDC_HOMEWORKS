-- Triggers pt. 2 --

CREATE TABLE IF NOT EXISTS song_audit (
	id SERIAL PRIMARY KEY,
	action VARCHAR(10) NOT NULL, -- UPDATE, DELETE OR INSERT
	song_id INT,
	name VARCHAR(100) NOT NULL,
	duration INTERVAL NOT NULL,
	explicit BOOLEAN NOT NULL
);

select * from song_audit;

CREATE OR REPLACE FUNCTION log_song_changes ()
returns TRIGGER 
language plpgsql
AS
$$
BEGIN
	IF TG_OP = 'INSERT' THEN
		INSERT INTO song_audit (action, song_id, name, duration, explicit)
		VALUES('INSERT', NEW.id, NEW.name, NEW.duration, NEW.explicit);
	ELSEIF TG_OP = 'UPDATE' THEN
		INSERT INTO song_audit (action, song_id, name, duration, explicit)
		VALUES('UPDATE', NEW.id, NEW.name, NEW.duration, NEW.explicit);
	ELSEIF TG_OP = 'DELETE' THEN
		INSERT INTO song_audit (action, song_id, name, duration, explicit)
		VALUES('DELETE', OLD.id, OLD.name, OLD.duration, OLD.explicit);
	END IF;
	RETURN NEW;
END;
$$;

-- Creating a trigger function --

CREATE TRIGGER song_changes_trigger
AFTER INSERT OR UPDATE OR DELETE ON song
FOR EACH ROW 
EXECUTE FUNCTION log_song_changes();

select * from song;
INSERT INTO song (name, duration, artist_id, explicit)
VALUES ('IDIDID', '3min', 1, false);









