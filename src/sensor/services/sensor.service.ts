import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sensor, SensorDocument } from './../../schemas/sensor.schema';
import { SensorDto } from './../dtos/sensor-data.dto';

@Injectable()
export class SensorService {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
  ) {}

  async handleSensorData(data: SensorDto): Promise<void> {
    const createdSensorData = new this.sensorModel({
      ...data,
      timestamp: new Date(),
    });
    await createdSensorData.save();
  }
}
