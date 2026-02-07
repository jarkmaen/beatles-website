CREATE TABLE blog_post (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author TEXT NOT NULL,
    content JSONB NOT NULL,
    intro TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_message (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE song (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    album TEXT NOT NULL,
    commentary TEXT NOT NULL,
    commentary_landing TEXT,
    rank INT NOT NULL,
    title TEXT NOT NULL
);

CREATE TABLE song_rating (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    song_id INT REFERENCES song(id),
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
