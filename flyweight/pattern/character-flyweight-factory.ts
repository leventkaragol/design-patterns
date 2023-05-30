import {CharacterProperties} from "./character-properties";
import {Character} from "./character";

export class CharacterFlyweightFactory {

    private characterPropertiesTable: { [key: string]: CharacterProperties } = {};

    public createCharacter(fontSize: number, fontColor: string, backgroundColor: string, fontFamily: string, style: string, effect: string, value: string): Character {

        const key = `${fontSize}-${fontColor}-${backgroundColor}-${fontFamily}-${style}-${effect}`;

        if (!(key in this.characterPropertiesTable)) {
            this.characterPropertiesTable[key] = new CharacterProperties(fontSize, fontColor, backgroundColor, fontFamily, style, effect);
        }

        return new Character(this.characterPropertiesTable[key], value);
    }
}