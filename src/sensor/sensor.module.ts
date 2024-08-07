import { Module } from '@nestjs/common';
import { SensorService } from './services/sensor.service';
import { SensorGateway } from './gateways/sensor.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from 'src/schemas/sensor.schema';
import { SensorController } from './controllers/sensor.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  providers: [SensorService, SensorGateway],
  controllers: [SensorController],
})
export class SensorModule {}
