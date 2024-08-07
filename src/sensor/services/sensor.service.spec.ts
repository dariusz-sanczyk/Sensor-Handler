import { Test, TestingModule } from '@nestjs/testing';
import { SensorService } from './sensor.service';
import { getModelToken } from '@nestjs/mongoose';
import { Sensor } from './../../schemas/sensor.schema';

describe('SensorService', () => {
  let service: SensorService;
  const mockSensorModel = {
    save: jest.fn().mockResolvedValue(true),
    new: jest.fn().mockReturnThis(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SensorService,
        { provide: getModelToken(Sensor.name), useValue: mockSensorModel },
      ],
    }).compile();

    service = module.get<SensorService>(SensorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save valid sensor data', async () => {
    const validData = { temperature: 25, humidity: 60 };
    await expect(service.handleSensorData(validData)).resolves.not.toThrow();
  });

  it('should throw an error for invalid data', async () => {
    const invalidData = { temperature: 'invalid', humidity: 60 };
    await expect(service.handleSensorData(invalidData)).rejects.toThrow(
      'Invalid data format',
    );
  });
});
