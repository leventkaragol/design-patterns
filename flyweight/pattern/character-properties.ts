import {ICharacterProperties} from "./icharacter-properties";

export class CharacterProperties implements ICharacterProperties {
    constructor(public fontSize: number,
                public fontColor: string,
                public backgroundColor: string,
                public fontFamily: string,
                public style: string,
                public effect: string) {
    }
}