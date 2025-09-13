


//Task 1
class Person{
    constructor(name,age,gender,address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        
    }
    personRecord(){
        console.log("------Person Information------");
        console.log("Name:",this.name,"Age:",this.age,"Gender:",this.gender,"Address:",this.address);
    }
}
class Student{
    constructor(name,reg_no,program,cgpa){
        this.name = name;
        this.reg_no = reg_no;
        this.program = program;
        this.cgpa = cgpa;
           }
        studRecord(){
            console.log("-----Student Information------");
            console.log("Name:",this.name,"Reg_no:",this.reg_no,"Program:",this.program,"CGPA:",this.cgpa);
        }
}
class Employee {
    constructor(name,designation,department,salary,experience){
        this.name = name;
        this.designation = designation;
        this.department = department;
        this.salary = salary;
        this.experience = experience;
    }
    empRecord(){
       console.log("-----Employee Information------");
    console.log("Name:",this.name,"Designation:",this.designation,"Department:",this.department,"Salary:",this.salary,"Experience:",this.experience,"years");
    }
}


class Teacher {
    constructor(name,scale,advisor) {
        this.name = name;
        this.scale = scale;
        this.advisor = advisor;      
       }
       techRecord(){
        console.log("-----Teacher Information------");
        console.log("Name:",this.name,"Scale:",this.scale,"Program:",this.advisor,"CGPA:",this.advisor);
       }
}


class Staff {
    constructor(hire_date,salary,status){
        this.hire_date = hire_date;
         this.salary = salary;
        this.status = status;
    }
    staffRecord(){
        console.log("-----Staff Information------");
       console.log("Hire-date:",this.hire_date,"Salary:",this.salary,"Status:",this.status);

    }
}


const per1 = new Person("Shahan Waheed",21,"Male","VPO Attock");
per1.personRecord();
const stud1 = new Student("Ahmed Raza","SP23-BCS-056","CS",3.67);
stud1.studRecord();
const emp1 = new Employee("Mehreen Wahab","HOD","CS",90000,10)
emp1.empRecord();
const teach1 = new Teacher("M.Ayyaz",18,"SP23-BSE");
teach1.techRecord();
const st1 = new Staff("23-4-2024",50000,"Co-worker");
st1.staffRecord();

//Task 2


