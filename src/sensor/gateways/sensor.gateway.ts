import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SensorService } from '../services/sensor.service';
import { SensorDto } from '../dtos/sensor-data.dto';

@WebSocketGateway()
export class SensorGateway {
  @WebSocketServer() server;

  constructor(private readonly sensorService: SensorService) {}

  @SubscribeMessage('message')
  handleSensorData(@MessageBody() data: SensorDto): void {
    this.sensorService.handleSensorData(data);
  }
}
