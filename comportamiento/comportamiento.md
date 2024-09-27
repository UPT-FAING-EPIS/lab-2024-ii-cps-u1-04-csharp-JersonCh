```mermaid
classDiagram

class ConcreteObserver{
            -name: string
            +update() void
        }
IObserver<|..ConcreteObserver
class ConcreteSubject{
            -observers: IObserver[]
-state: any
            +attach() void
+detach() void
+notify() void
+setState() void
        }
ISubject<|..ConcreteSubject
class DomainModule{
            
            
        }
class ConcreteSubject{
            -observers: IObserver[]
-state: any
            +attach() void
+detach() void
+notify() void
+setState() void
        }
ISubject<|..ConcreteSubject
class DomainService{
            
            
        }
class IObserver {
            <<interface>>
            
            +update() void
        }
class ISubject {
            <<interface>>
            
            +attach() void
+detach() void
+notify() void
        }
class LoggerObserver{
            
            +update() void
        }
IObserver<|..LoggerObserver
class LoggerObserver{
            
            +update() void
        }
IObserver<|..LoggerObserver
class Subject{
            -observers: IObserver[]
            +attach() void
+detach() void
+notify() void
        }
ISubject<|..Subject```
