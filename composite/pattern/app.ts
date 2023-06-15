import {Employee} from "./employee";
import {Department} from "./department";

// Departman tanımları
const department1 = new Department();
const department2 = new Department();
const department3 = new Department();

// Çalışan tanımları
const employee1 = new Employee(1000);
const employee2 = new Employee(2000);
const employee3 = new Employee(3000);

// Çalışanları departmanlara bağlıyoruz
department1.add(employee1);
department2.add(employee2);
department3.add(employee3);

// Departmanları da departmanlara bağlıyoruz
department1.add(department2);
department2.add(department3);


// Tüm departmanların bileşik maaşlarını yazdıralım
console.log("Departman 1: ", department1.getSalary()); // 6000
console.log("Departman 2: ", department2.getSalary()); // 5000
console.log("Departman 3: ", department3.getSalary()); // 3000
