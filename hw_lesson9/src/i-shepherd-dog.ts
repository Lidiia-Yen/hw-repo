// Interface segregation principle (ISP) states that clients should not be forced to depend on interfaces they do not use.
// This means that a class should not be forced to implement methods that it does not need or use.
// In the context of the ShepherdDog class, it should only implement methods that are relevant to its specific behavior and characteristics,
// rather than being forced to implement methods that are not applicable to it.
// This allows for a more modular and flexible design, where classes can focus on their specific responsibilities without being burdened
// by unnecessary methods.

export interface IShepherdDog  {
    search(): void;
    guardHouse(): void;
    herdSheep(): void;
    trackSmell(): void;
    protectOwner(): void;
    findMissingPerson(): void;
}
