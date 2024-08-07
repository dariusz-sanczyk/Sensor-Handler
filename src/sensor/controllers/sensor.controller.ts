import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SensorService } from './../services/sensor.service';
import { Sensor } from './../../schemas/sensor.schema';
import { SensorDto } from './../dtos/sensor-data.dto';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSensorData(@Body() sensorDto: SensorDto): Promise<Sensor> {
    return this.sensorService.createSensorData(sensorDto);
  }

  @Get()
  async getAllSensorData(): Promise<Sensor[]> {
    return this.sensorService.getAllSensorData();
  }

  @Get(':id')
  async getSensorDataById(@Param('id') id: string): Promise<Sensor> {
    return this.sensorService.getSensorDataById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSensorData(
    @Param('id') id: string,
    @Body() sensorDto: SensorDto,
  ): Promise<Sensor> {
    return this.sensorService.updateSensorData(id, sensorDto);
  }

  @Delete(':id')
  async deleteSensorData(@Param('id') id: string): Promise<Sensor> {
    return this.sensorService.deleteSensorData(id);
  }
}
