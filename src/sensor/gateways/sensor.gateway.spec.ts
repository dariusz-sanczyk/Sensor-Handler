import { Test, TestingModule } from '@nestjs/testing';
import { SensorGateway } from './sensor.gateway';
import { SensorService } from './../services/sensor.service';
import { SensorDto } from './../dtos/sensor-data.dto';

describe('SensorGateway', () => {
  let gateway: SensorGateway;
  let service: SensorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SensorGateway,
        {
          provide: SensorService,
          useValue: {
            handleSensorData: jest.fn(),
          },
        },
      ],
    }).compile();

    gateway = module.get<SensorGateway>(SensorGateway);
    service = module.get<SensorService>(SensorService);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should call handleSensorData on receiving sensorData', () => {
    const data: SensorDto = { temperature: 25, humidity: 60 };
    gateway.handleSensorData(data);
    expect(service.handleSensorData).toHaveBeenCalledWith(data);
  });
});
