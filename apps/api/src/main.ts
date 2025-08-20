import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT || 3002);
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`API a escutar em http://localhost:${port}`);
}
bootstrap();
