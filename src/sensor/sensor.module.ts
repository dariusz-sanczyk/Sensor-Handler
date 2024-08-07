import { Module } from '@nestjs/common';
import { SensorService } from './services/sensor.service';
import { SensorGateway } from './gateways/sensor.gateway';
@Module({
  providers: [SensorService, SensorGateway],
})
export class SensorModule {}
