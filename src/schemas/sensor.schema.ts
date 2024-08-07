import { Document } from 'mongoose';
import {
  Prop,
  SchemaFactory,
  Schema as MongooseSchema,
} from '@nestjs/mongoose';

@MongooseSchema()
export class Sensor {
  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  humidity: number;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export type SensorDocument = Sensor & Document;
export const SensorSchema = SchemaFactory.createForClass(Sensor);
