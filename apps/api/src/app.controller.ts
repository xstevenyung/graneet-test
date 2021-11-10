import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { City } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async index(): Promise<{ metropolis: City[]; overseas: City[] }> {
    const cities = await this.prismaService.city.findMany({
      take: 100,
      orderBy: {
        municipalityName: 'asc',
      },
    });

    const metropolis = [];
    const overseas = [];

    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];

      parseInt(city.zipCode) < 97000
        ? metropolis.push(city)
        : overseas.push(city);
    }

    return { metropolis, overseas };
  }

  @Get('/count')
  count(): Promise<number> {
    return this.prismaService.city.count();
  }
}
