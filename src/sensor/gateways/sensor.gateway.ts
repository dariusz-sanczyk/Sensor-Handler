import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SensorService } from '../services/sensor.service';
import { SensorDto } from '../dtos/sensor-data.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SensorGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly sensorService: SensorService) {}

  @SubscribeMessage('data')
  handleSensorData(@MessageBody() data: SensorDto): void {
    this.sensorService.handleSensorData(data);
  }
}
