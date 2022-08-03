import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import {TournamentModule} from "./tournament.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      TournamentModule,
      {
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'tournament',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'tournament-consumer',
          },
        },
      },
  );

  await app.listen();
}

bootstrap();