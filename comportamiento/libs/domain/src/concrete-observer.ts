import { IObserver } from './iobserver.interface';

export class ConcreteObserver implements IObserver {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(data: any): void {
        console.log(`${this.name} received update: ${data}`);
    }
}
