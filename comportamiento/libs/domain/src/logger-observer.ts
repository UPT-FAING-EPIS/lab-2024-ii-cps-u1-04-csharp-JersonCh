import { IObserver } from "./iobserver.interface";


export class LoggerObserver implements IObserver {
    update(data: any): void {
        console.log(`Log: State updated to: ${data}`);
    }
}
