import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createSensorData(sensorDto: SensorDto): Promise<Sensor> {
    const createdSensor = new this.sensorModel(sensorDto);
    return createdSensor.save();
  }

  async getAllSensorData(): Promise<Sensor[]> {
    return this.sensorModel.find().exec();
  }

  async getSensorDataById(id: string): Promise<Sensor> {
    const sensorData = await this.sensorModel.findById(id).exec();
    if (!sensorData) {
      throw new NotFoundException(`Sensor data with ID ${id} not found`);
    }
    return sensorData;
  }

  async updateSensorData(id: string, sensorDto: SensorDto): Promise<Sensor> {
    const updatedSensorData = await this.sensorModel
      .findByIdAndDelete(id, sensorDto)
      .exec();
    if (!updatedSensorData) {
      throw new NotFoundException(`Sensor data with ID ${id} not found`);
    }
    return updatedSensorData;
  }

  async deleteSensorData(id: string): Promise<Sensor> {
    const deletedSensorData = await this.sensorModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedSensorData) {
      throw new NotFoundException(`Sensor data with ID ${id} not found`);
    }
    return deletedSensorData;
  }
}
