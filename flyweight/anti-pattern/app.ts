import {Character} from "./character";

const writeMemoryUsage = function (time: string) {

    console.log(time);
    console.log("--------------------------------------------------------------");

    const usedBefore = process.memoryUsage();

    for (let key in usedBefore) {
        console.log(`${key}: ${Math.round((usedBefore[key as keyof NodeJS.MemoryUsage] / 1024 / 1024) * 100) / 100} MB`);
    }

    console.log();
};

let characterList: Character[] = [];

writeMemoryUsage("Before");

for (let i = 0; i < 5000000; i++) {

    characterList.push(new Character(12, "black", "none", "Arial, sans-serif", "italic, bold", "none", "A"));
    characterList.push(new Character(12, "black", "none", "Arial, sans-serif", "bold", "superscript", "B"));
    characterList.push(new Character(14, "red", "yellow", "Times New Roman, serif", "italic", "none", "C"));
    characterList.push(new Character(16, "red", "none", "Times New Roman, serif", "italic, bold", "subscript", "D"));
    characterList.push(new Character(18, "red", "none", "Arial, sans-serif", "regular", "none", "E"));
    characterList.push(new Character(20, "white", "black", "Times New Roman, serif", "bold", "none", "F"));
}

writeMemoryUsage("After");
