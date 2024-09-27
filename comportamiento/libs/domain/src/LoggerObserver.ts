import { IObserver } from "./iobserver.interface"; // Verifica que la ruta sea correcta

export class LoggerObserver implements IObserver {
    update(data: any): void {
        console.log(`Log: State updated to: ${data}`);
    }
}
