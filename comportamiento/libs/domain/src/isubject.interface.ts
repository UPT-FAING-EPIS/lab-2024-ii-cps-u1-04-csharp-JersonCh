import { IObserver } from "./iobserver.interface"; // Asegúrate de que la ruta sea correcta

export interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data: any): void;
}
