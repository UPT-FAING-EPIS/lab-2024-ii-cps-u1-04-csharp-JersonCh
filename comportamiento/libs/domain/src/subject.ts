import { ISubject } from "./isubject.interface"; // Asegúrate de que la ruta sea correcta
import { IObserver } from "./iobserver.interface"; // Importa la interfaz IObserver

export class Subject implements ISubject {
    private observers: IObserver[] = [];

    attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    detach(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data: any): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}
