#!/bin/sh

cp .env.example .env
pnpx prisma migrate dev
pnpx prisma generate
