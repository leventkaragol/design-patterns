import {ICharacterProperties} from "./icharacter-properties";

export class Character {
    constructor(public characterProperties: ICharacterProperties, public value: string) {
    }
}