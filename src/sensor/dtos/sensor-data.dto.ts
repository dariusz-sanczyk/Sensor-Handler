import { IsNumber } from 'class-validator';

export class SensorDto {
  @IsNumber()
  temperature: number;

  @IsNumber()
  humidity: number;
}
