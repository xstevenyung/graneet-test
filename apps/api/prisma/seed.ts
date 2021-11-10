import { PrismaClient } from '@prisma/client';

const rawData = require('./data.json');

const prisma = new PrismaClient();

type RawCityData = {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
};

async function main() {
  console.log(`${rawData.length} rows to process...`);

  const data = rawData.map((city: RawCityData) => {
    return {
      zipCode: city.codePostal,
      municipalityCode: city.codeCommune,
      municipalityName: city.nomCommune,
      routingLabel: city.libelleAcheminement,
    };
  });

  await prisma.city.createMany({ data });

  console.log(`${data.length} rows processed!`);
}

main();
