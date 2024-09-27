import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from './domain.service';

describe('DomainService', () => {
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainService],
    }).compile();

    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { ISubject } from './isubject.interface';
import { IObserver } from './iobserver.interface';

export class ConcreteSubject implements ISubject {
    private observers: IObserver[] = [];
    private state: any;

    attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    detach(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    setState(state: any): void {
        this.state = state;
        this.notify();
    }
}

