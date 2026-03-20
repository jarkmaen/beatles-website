# Blog posts

Adding new blog posts to the application is done through SQL commands. This document defines the blog content types and gives example SQL inserts for each.

There are currently three supported types:

- `default_ranking`: Reserved for the application's main Beatles discography ranking blog post.
- `manual_ranking`: Custom ranking lists with own commentary.
- `markdown`: Standard text based articles with Markdown support.

## Default ranking

Automated template that pulls the ranking data from the database.

```sql
INSERT INTO blog_post (author, intro, content, slug, title)
VALUES (
    'Author Name',
    'Intro text here...',
    '{"type": "default_ranking"}'::jsonb,
    'my-slug-url',
    'Post Title'
);
```

## Manual ranking

For custom ranking lists such as "Top 10 George Harrison Tracks". Each item requires a commentary, a rank and a title.

```sql
INSERT INTO blog_post (author, intro, content, slug, title)
VALUES (
    'Author Name',
    'Intro text here...',
    '{
        "type": "manual_ranking",
        "items": [
            { "commentary": "Why it is #3...", "rank": 3, "title": "Song Title" },
            { "commentary": "Why it is #2...", "rank": 2, "title": "Song Title" },
            { "commentary": "Why it is #1...", "rank": 1, "title": "Song Title" }
        ]
    }'::jsonb,
    'my-slug-url',
    'Post Title'
);
```

## Markdown

For standard text based articles. Markdown syntax is used to structure the page content.

```sql
INSERT INTO blog_post (author, intro, content, slug, title)
VALUES (
    'Author Name',
    'Intro text here...',
    '{
        "type": "markdown",
        "text": "## Section Header\n\nThis is a paragraph with **bold** text."
    }'::jsonb,
    'my-slug-url',
    'Post Title'
);
```
