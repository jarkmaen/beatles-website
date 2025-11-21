CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    author TEXT NOT NULL,
    content JSONB NOT NULL,
    intro TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

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
