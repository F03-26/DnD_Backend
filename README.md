# DnD_Backend

This repository has the code for the backend of a Dungeons & Dragons character creator and database I am making as a personal project with Express.js. It uses data from the official Dungeons & Dragons Player's Handbook 5th Edition 2024, translated to Spanish and with a few additions from older versions. This backend acts as an API for the frontend client in https://github.com/F03-26/DnD-Frontend

## Project Overview

- Create and customize D&D characters.
- Interact with a digital character sheet to track your stats and change them.
- Intuitive step-by-step way of creating your character.
- Database to consult data of spells, classes, items, weapons and armor with all their stats and effects.
- Currently in development to include class features and spells in the character creator.

## Tech Stack

- **Frontend:** React, Vite, Axios, deployed on Netlify
- **Backend:** Node.js, Express, Sequelize, deployed on Render
- **Database:** PostgreSQL, deployed on Render

## Status

- Character creator working without class Features and Spells.
- Database working with spells, weapons, armor and items to consult information.
- Planned to include more class information, options to update character data, level up.
- Planned to include an AI assistant to help with ideas for character backstory, personality, name, etc.

## How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/F03-26/DnD_Backend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a postgreSQL database:
   - Install postgreSQL: https://www.postgresql.org/download
   - Start the service:
      ```bash
      sudo service postgresql start
      ```
   - Create user:
     ```bash
     sudo -u postgres createuser --superuser {username}
     ```
   - Change user password:
     ```bash
     sudo -u postgres psql
     ALTER USER {username} WITH PASSWORD '{password}';
     \q
     ```
   - Create database:
     ```bash
     sudo -u postgres createdb {db_name};
     ```
  4. Create .env file with the following variables:
     - DB_USERNAME
     - DB_PASSWORD
     - DB_NAME
     - DB_HOST ('localhost' to run locally)
     - PORT
     - JWT_SECRET
      
  5. Start server:
  ```bash
  npm run dev
  ```
**Note: To see the actual website, it is necessary to run the Frontend and connect to its server. Consult the DnD-Frontend repository to get instruccions on how to run its server locally: https://github.com/F03-26/DnD-Frontend**

## Author

Fernando Arévalo

Software Engineering Student @ Pontificia Universidad Católica de Chile
