import { Module } from '@nestjs/common';
import { SensorService } from './services/sensor.service';
import { SensorGateway } from './gateways/sensor.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from 'src/schemas/sensor.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  providers: [SensorService, SensorGateway],
})
export class SensorModule {}
