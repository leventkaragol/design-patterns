import {Project} from "./project";
import {Task} from "./task";
import {Resource} from "./resource";

export class ProjectCloner {

    static cloneProject(project: Project): Project {

        let copyProject = new Project(project.projectName);

        for (let task of project.tasks) {

            let copyTask = new Task(task.taskName, task.startDate, task.endDate);

            for (let resource of task.resources) {
                copyTask.addResource(new Resource(resource.resourceName, resource.quantity));
            }

            copyProject.addTask(copyTask);
        }

        return project;
    }
}