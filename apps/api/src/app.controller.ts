import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';
import { PrismaService } from './prisma.service';
import { City } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async index(
    @Req() req: Request,
  ): Promise<{ metropolis: City[]; overseas: City[] }> {
    const cities = await this.prismaService.city.findMany({
      where: {
        ...(req.query.q
          ? {
              municipalityName: {
                contains: `${req.query.q}`,
                mode: 'insensitive',
              },
            }
          : {}),
      },
      take: 100,
      orderBy: {
        municipalityName: 'asc',
      },
    });

    const metropolis = [];
    const overseas = [];

    // https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
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
