# Blog posts

This document tracks the different formats for the content column in the blog_post table and shows example SQL inserts for each. All content is stored as JSONB.

There are currently 3 supported types:

- `default_ranking`: Uses the main systematic ranking data.
- `manual_ranking`: Custom lists with own commentary.
- `text`: Standard articles with headings and paragraphs.

## Default ranking

Automated template that pulls the systematic ranking data directly from the database/logic. No manual item entry required.

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

Used for custom lists (e.g., "Top 10 George Harrison Tracks"). Each item requires a commentary, a rank and a title.

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

## Text

The standard format for long-form articles or essays. The items array supports alternating heading and paragraph types to structure the page.

```sql
INSERT INTO blog_post (author, intro, content, slug, title)
VALUES (
    'Author Name',
    'Intro text here...',
    '{
        "type": "text",
        "items": [
            { "text": "Section Header", "type": "heading" },
            { "text": "Body text goes here.", "type": "paragraph" },
            { "text": "More body text.", "type": "paragraph" },
            { "text": "Second Section Header", "type": "heading" },
            { "text": "Body text for the second section.", "type": "paragraph" }
        ]
    }'::jsonb,
    'my-slug-url',
    'Post Title'
);
```
