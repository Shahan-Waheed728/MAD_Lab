//Task 2
class Employee{
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


class Manager{
    constructor(name,gender,department,salary,hire_date){
        this.name = name;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
        this.hire_date = hire_date;
    }
    manRecord(){
        console.log("-----Manager Information-----");
        console.log("Name:",this.name,"Gender:",this.gender,"Dept:",this.department,"Salary:",this.salary,"Hire_date:",this.hire_date);
    }
}

class WorkerBee{
    constructor(name,age,gender,projects,hire_date){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.projects = projects;
        this.hire_date = hire_date;   

    }
    workerRecord(){
        console.log("-----Worker Record-----");
        console.log("Name:",this.name,"Age:",this.age,"Gender:",this.gender,"Projects:",this.projects,"Hire_date:",this.hire_date);
    }
}

class SalesPerson{
      constructor(name,order_received,deliveries,salary){
        this.name = name;
        this.order_received = order_received;
        this.deliveries = deliveries;
        this.salary = salary;
      }
      salesRecord(){
        console.log("-----Sales Person Record----")
        console.log("Name:",this.name,"Order_rec:",this.order_received,"Deliveries:",this.deliveries,"Salary:",this.salary);
      }
}

class Engineer{
    constructor(name,id,salary,field){
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.field = field;
    }
    engRecord(){
        console.log("-----Engineer Information----- ");
        console.log("Name:",this.name,"ID:",this.id,"Salary:",this.salary,"Field:",this.field);
    }
}
const emp = new Employee("Zain Abbasi","Internee","HR",25000,1);
emp.empRecord();
const man = new Manager("Shahan Waheed","male","HR",90000,"23-4-2024");
man.manRecord();
const work = new WorkerBee("Haroon Riaz",21,"male",25,"23-09-2022");
work.workerRecord();
const sp = new SalesPerson("Atif Ali",25,20,45000 );
sp.salesRecord();
const eng = new Engineer("Faria Khan",101,95000,"Artificial Intelligence");
eng.engRecord();