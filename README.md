# fab.two - Beatles Website

## Overview

A full stack web application for sharing a systematic ranking of every Beatles song. My friend and I rated every track based on multiple categories (like instrumentation, vocals and lyrics) to create an objective as possible ranking of their entire discography. Our rating data and a write up for each song can be found on the site. The home page also has a daily changing "Beatles Song of the Day" feature. Link to the live website coming soon...

```mermaid
graph LR
    CF{{"Cloudflare Edge<br/>(fabtwo.net)"}}
    Developer((Developer))
    User((User))

    subgraph AWS [AWS EC2]
        Deploy[deploy.sh]

        subgraph Docker [Docker]
            subgraph AppContainer [App Container]
                Frontend[React<br/>Frontend]
                Backend[NodeJS +<br/>Express]
            end

            subgraph DBContainer [DB Container]
                DB[(PostgreSQL<br/>Database)]
            end

            subgraph TunnelContainer [Cloudflare Container]
                Tunnel[Cloudflare Tunnel]
            end
        end
    end

    subgraph DevOps [DevOps]
        Repository[GitHub Repository]
        Actions[GitHub Actions]
    end

    Developer -- "git push" --> Repository
    Repository -- "triggers" --> Actions
    Actions -- "SSH" --> Deploy
    Deploy -- "git pull" --> Repository
    Deploy -- "compose" --> Docker

    Frontend <-- REST API --> Backend
    Backend <--> DB

    User <-- "HTTPS" --> CF
    Tunnel <-- "outbound connection" --> CF
    Tunnel <-- "port 3000" --> AppContainer
```

## Tech stack

- **Frontend:** React, Redux, Tailwind
- **Backend:** Node.js, Express, REST API
- **Database:** PostgreSQL
- **Other:** TypeScript, AWS

## Screenshots

| Home page                                       | Blog post                              | Rating data                                  |
| ----------------------------------------------- | -------------------------------------- | -------------------------------------------- |
| ![Home page](documentation/images/homepage.png) | ![Blog](documentation/images/blog.png) | ![Ratings](documentation/images/ratings.png) |
