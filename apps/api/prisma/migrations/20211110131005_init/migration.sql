-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "zipCode" TEXT NOT NULL,
    "municipalityCode" TEXT NOT NULL,
    "municipalityName" TEXT NOT NULL,
    "routingLabel" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);
