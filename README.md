# Test Graneet by Steven Yung

## Requirements

- Node 12+
- NPM
- PNPM (for the monorepo)
- Docker (for the PostgreSQL DB)

## Boot the project

You just need to run `pnpm run boot` and the dependencies will be install and the database container will start.

## Run the project

Run `pnpm run dev` to run the project in development mode (only mode available)

## Extra

- API built with Nest.js and Prisma for the database ORM
- Web app built with React 17+ and Next.js 12 using CSS Module for setup easiness
- DB based on the official PostgreSQL Docker image
