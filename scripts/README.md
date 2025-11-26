# Scripts

Instructions for preparing the data and initializing the database. The generate_data.py script processes the spreadsheet and commentary data into CSV files that can be inserted into the PostgreSQL database. Input files are stored in the data folder and the generated output files will be written to the output folder.

## Setup

To run the commands below, you'll need to have both [PostgreSQL](https://www.postgresql.org/) and [Python](https://www.python.org/) installed on your computer. Run the following commands after opening your terminal in this directory:

```
# Create virtual environment
$ python -m venv venv

# Activate venv
$ source venv/bin/activate

# Install pandas
$ pip install pandas

# Run data generation script
$ python generate_data.py
```

This will create the output folder with three CSV files inside it. Then, connect to your PostgreSQL server using psql and run the following commands:

```
# Create database
postgres=# CREATE DATABASE dbname;

# Connect to database
postgres=# \c dbname

# Load schema
dbname=# \i /absolute/path/to/beatles-website/backend/schema.sql

# Load data from CSVs
dbname=# \COPY songs(album, commentary, commentary_landing, rank, title) FROM /absolute/path/to/beatles-website/scripts/output/songs.csv WITH CSV HEADER;
dbname=# \COPY song_ratings(song_id, bassline, chord_progression, cultural_significance, full_instrumentation, lyrics, originality_innovation, percentage, percussion, solo, vocals) FROM /absolute/path/to/beatles-website/scripts/output/song_ratings.csv WITH CSV HEADER;
```

Finally, create a .env file in the backend folder and add the PostgreSQL connection URL there like this:

```
POSTGRESQL_URL=postgresql://<username>:<password>@<host>:<port>/<dbname>
```
