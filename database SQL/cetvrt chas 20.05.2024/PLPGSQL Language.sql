	-- PL / pgSQL => Superset of the traditional TSQL Language --


				-- Functions using the plpgsql language --

-- 1. Create a function for getting AVG song duration from all songs --
create function get_avg_song_duration ()
returns INTERVAL
language plpgsql
AS
$$
DECLARE	
	avg_duration INTERVAL;
BEGIN
	select AVG(s.duration)
	into avg_duration
	from song s;
	
	return avg_duration;
END;
$$

select get_avg_song_duration();

-- 2. Create a function for getting song count by artist --
create function get_song_count_by_artist (artist_name VARCHAR)
returns INTEGER
language plpgsql
AS
$$
DECLARE
	v_artist_id integer;
	song_count integer;
BEGIN
	select id
	into v_artist_id
	from artist
	where name = artist_name;
	
	select COUNT(*)
	into song_count
	from song 
	where artist_id = v_artist_id;
	
	return song_count;
END;
$$

			-- Table valued functions --

-- 1. Provide all songs by artist --
create or replace function get_all_songs (artist_name VARCHAR)
returns table (
	song_name VARCHAR,
	duration INTERVAL,
	explicit BOOLEAN
)
language plpgsql
AS
$$
BEGIN
	return query
	select s.name, s.duration, s.explicit
	from song s
	join
	artist a on s.artist_id = a.id
	where a.name = artist_name;
END;
$$

select get_all_songs('Tose Proeski');


		-- Control Structures (if-else, if-then-else, ...) --

				-- Triggers --

ALTER TABLE song
ADD COLUMN rating DECIMAL(2, 1) CHECK(rating >= 1 AND rating <= 5);

-- 1. Add a random rating for every song in the database --
create or replace function add_random_ratin_to_songs()
returns void
language plpgsql
AS
$$
BEGIN
	update song
	set rating = FLOOR(RANDOM() * 5 + 1);
END;
$$;

-- Trigger function definition --
create or replace function update_album_rating()
returns TRIGGER
language plpgsql
AS
$$
BEGIN
	update album
	set rating = (
		select AVG(s.rating)
		from song s
		where s.album_id = NEW.id
	)
	where id = NEW.id;
	return NEW;
END;
$$;

-- Creating a trigger --
create trigger album_rating_update
AFTER INSERT OR UPDATE ON song
FOR EACH ROW
EXECUTE FUNCTION update_album_rating();

select id, name, rating from album where id = 1;

insert into song (id, name, duration, explicit, artist_id, rating)
values ('Candyshop', '4min20sec', true, 1, 1);

















