import {Employee} from "./employee";
import {Department} from "./department";

const departmentList: Department[] = [];
const employeeList: Employee[] = [];

// Üst ve alt departman tanımları
departmentList.push(new Department(1));
departmentList.push(new Department(2, 1));
departmentList.push(new Department(3, 2));

// Departmanlara bağlı çalışanlar
employeeList.push(new Employee(1, 1000));
employeeList.push(new Employee(2, 2000));
employeeList.push(new Employee(3, 3000));


// Bir departmanın ve alt departmanlarının tüm çalışanlarının maaşını toplayan fonksiyon
function getDepartmentSalary(departmentId: number): number {
    let totalSalary = 0;

    // İlgili departmandaki çalışanların maaşını toplar
    for (let employee of employeeList) {
        if (employee.parentId === departmentId) {
            totalSalary += employee.getSalary();
        }
    }

    // İlgili departmanın alt departmanlarını bulur ve recursive çağrımla onların maaşını da toplar
    for (let department of departmentList) {
        if (department.parentId === departmentId) {
            totalSalary += getDepartmentSalary(department.id);
        }
    }

    return totalSalary;
}


// Tüm departmanların bileşik maaşlarını yazdıralım
console.log("Departman 1: ", getDepartmentSalary(1)); // 6000
console.log("Departman 2: ", getDepartmentSalary(2)); // 5000
console.log("Departman 3: ", getDepartmentSalary(3)); // 3000
