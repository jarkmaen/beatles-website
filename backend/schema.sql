CREATE TABLE song_ratings (
    id SERIAL PRIMARY KEY,
    song_id INT REFERENCES songs(id),
    bassline SMALLINT,
    chord_progression SMALLINT,
    cultural_significance SMALLINT,
    full_instrumentation SMALLINT,
    lyrics SMALLINT,
    originality_innovation SMALLINT,
    percentage NUMERIC(5,2),
    percussion SMALLINT,
    solo SMALLINT,
    vocals SMALLINT
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    album TEXT NOT NULL,
    commentary TEXT NOT NULL,
    commentary_landing TEXT,
    rank INT NOT NULL,
    title TEXT NOT NULL
);
