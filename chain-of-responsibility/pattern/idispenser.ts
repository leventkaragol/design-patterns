export interface IDispenser {
    setNext(dispenser: IDispenser): IDispenser;
    dispense(amount: number): number;
}