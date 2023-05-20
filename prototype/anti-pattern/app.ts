import {Project} from "./project";
import {Task} from "./task";
import {Resource} from "./resource";

// İlk projenin tanımlanması

let birthdateProject = new Project("Doğum Günü Etkinliği");

let placePreparationTask = new Task("Mekanın Hazırlanması", new Date(2023, 5, 7), new Date(2023, 5, 8));

placePreparationTask.addResource(new Resource("Masa", 100));
placePreparationTask.addResource(new Resource("Sandalye", 400));
placePreparationTask.addResource(new Resource("Müzik Sistemi", 1));

birthdateProject.addTask(placePreparationTask);

let mealPreparationTask = new Task("Yemeklerin Hazırlanması", new Date(2023, 5, 7), new Date(2023, 5, 8));

mealPreparationTask.addResource(new Resource("Ana Yemek", 400));
mealPreparationTask.addResource(new Resource("Doğum Günü Pastası", 1));

birthdateProject.addTask(mealPreparationTask);

console.log("Asıl Proje Nesnesi");
console.log("------------------------------------------------------------");
console.dir(birthdateProject, {depth: null});


// Projenin kopyalanması

let copyProject = new Project(birthdateProject.projectName);

for (let task of birthdateProject.tasks) {

    let copyTask = new Task(task.taskName, task.startDate, task.endDate);

    for (let resource of task.resources) {
        copyTask.addResource(new Resource(resource.resourceName, resource.quantity));
    }

    copyProject.addTask(copyTask);
}

console.log();
console.log("Kopya Proje Nesnesi");
console.log("------------------------------------------------------------");
console.dir(copyProject, {depth: null});