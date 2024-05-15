CREATE TABLE IF NOT EXISTS student (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	enrolled_date TIMESTAMP NOT NULL,
	gender VARCHAR(10) NOT NULL,
	national_id_number INTEGER NOT NULL,
	student_card_number INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS teacher (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	academic_rank VARCHAR(10) NOT NULL,
	hire_date TIMESTAMP NOT NULL
)

CREATE TABLE IF NOT EXISTS grade_details (
	id SERIAL PRIMARY KEY,
	grade_id INTEGER DEFAULT NULL,
	achievement_id INTEGER DEFAULT NULL,
	achievement_points INTEGER NOT NULL,
	achievement_max_points INTEGER NOT NULL,
	achievement_date TIMESTAMP NOT NULL
)

CREATE TABLE IF NOT EXISTS course (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	credit INTEGER NOT NULL,
	academic_year DATE NOT NULL,
	semester INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS grade (
	id SERIAL PRIMARY KEY,
	student_id INTEGER DEFAULT NULL,
	course_id INTEGER DEFAULT NULL,
	teacher_id INTEGER DEFAULT NULL,
	grade SMALLINT NOT NULL,
	comment TEXT DEFAULT NULL,
	created_date TIMESTAMP NOT NULL
)

CREATE TABLE IF NOT EXISTS achievement_type (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description TEXT DEFAULT NULL,
	participation_date TIMESTAMP NOT NULL
)