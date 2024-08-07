CREATE TABLE IF NOT EXISTS artist (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS artist_details (
	id SERIAL PRIMARY KEY,
	date_of_birth TIMESTAMP NOT NULL,
	full_name VARCHAR(100) NOT NULL,
	country VARCHAR(100) NOT NULL,
	city VARCHAR(100) NULL,
	is_married BOOL(100) NULL,
	spouse_name VARCHAR(100) NULL
);

CREATE TABLE IF NOT EXISTS song (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	duration INTERVAL NOT NULL,
	explicit BOOL DEFAULT false NOT NULL
);

CREATE TABLE IF NOT EXISTS playlist (
	id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS genre (
	id SERIAL PRIMARY KEY,
	genre VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS album (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	rating FLOAT NULL
);