# Scripts

Instructions for preparing the data and initializing the database. The preprocess_data.py script processes the spreadsheet and commentary data into CSV files that can be inserted into the PostgreSQL database. Input files are stored in the data folder and the generated output files will be written to the output folder.

## Setup

To run the following commands below, you'll need to have both [PostgreSQL](https://www.postgresql.org/) and [Python](https://www.python.org/) installed on your computer. Open your terminal in this directory and run:

```
# Create a virtual environment
$ python -m venv venv

# Activate the virtual environment
$ source venv/bin/activate

# Install dependencies
$ pip install pandas

# Run data preprocessing script
$ python preprocess_data.py
```

This will create the output folder with three CSV files inside it. Then, connect to your PostgreSQL server using psql and run the following commands:

```
# Create database
postgres=# CREATE DATABASE db_name;

# Connect to database
postgres=# \c db_name

# Load schema
db_name=# \i /absolute/path/to/fab-two/backend/schema.sql

# Load data from CSVs
db_name=# \COPY song(album, commentary, commentary_landing, rank, title) FROM /absolute/path/to/fab-two/scripts/output/song.csv WITH CSV HEADER;
db_name=# \COPY song_rating(song_id, bassline, chord_progression, cultural_significance, full_instrumentation, lyrics, originality_innovation, percentage, percussion, solo, vocals) FROM /absolute/path/to/fab-two/scripts/output/song_rating.csv WITH CSV HEADER;
```

And finally, create a .env file in the backend directory with the following:

```
PORT=3000
POSTGRESQL_URL=postgresql://<username>:<password>@<host>:<port>/<db_name>
```
