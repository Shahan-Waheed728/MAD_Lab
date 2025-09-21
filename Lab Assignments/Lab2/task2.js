//Task 2
class Employee{
    constructor(name=" ",department ="general"){
        this.name = name;        
        this.department = department;       
    }
    empRecord(){
        console.log("----Employee Record----");
        console.log("Name:",this.name,"Dept:",this.department);
    }
}


class Manager extends Employee{
    constructor(name =" ",department ="general",reports=[]){
        super(name,department);
        this.reports = reports;
       
    }
    managerRecord(){
        console.log("-----Manager Information-----");
        console.log("Name:",this.name,"Dept:",this.department);
        if(this.reports === 0){
            console.log("None");
        }else{
            console.log("Reports")
            this.reports.forEach((r, i) => {
            console.log(`${i + 1}. ${r.name || r}`);
         });

        }
    }
}

class WorkerBee extends Employee{
    constructor(name =" ",department="general",projects=[]){
       super(name,department)
        this.projects = projects; 
    }
    workerRecord(){
        console.log("-----Worker Record-----");
        console.log("Name:",this.name,"Dept:",this.department);
        console.log("Projects:", this.projects.length ? this.projects.join(", ") : "None");
    }
}

class SalesPerson extends WorkerBee{
      constructor(name=" ",projects =[],quota=100){
        super(name,"Sales",projects)
        this.quota = quota;
      }
      salesRecord(){
        console.log("-----Sales Person Record----")
        console.log("Name:",this.name,"Dept:",this.department,"Quota:",this.quota);
        console.log("Projects:", this.projects.length ? this.projects.join(", ") : "None");  
    }
}

class Engineer extends WorkerBee{
    constructor(name =" ",projects,machine=" "){
        super(name,"Engineering",projects);
        this.machine = machine;
    }
    engRecord(){
        console.log("-----Engineer Information----- ");
        console.log("Name:",this.name,"Dept:",this.department,"Projects:",this.projects,"Machine:",this.machine);
        console.log("Projects:", this.projects.length ? this.projects.join(", ") : "None");
    }
}
//employee objects
const e1 = new Employee("Sheryar khan");
const e2 = new Employee("Talha Raiq");
//manager objects
const m1 = new Manager("Shahan Waheed","Sales",[e1]);
const m2 = new Manager("Muhammad Fahad","Engineering",[e2]);
//workerbee objects
const wb1 = new WorkerBee("Niha Khan","Sales",["Proj A"]);
const wb2 = new WorkerBee("Asma Batool","Engineering",["Project B"]);
//salesperson objects
const s1 = new SalesPerson("Sameer Ali",["Module 1"],120);
const s2 = new SalesPerson("Sidra Bibi",["Module 2"],115);
//Engineer objects
const eng1 = new Engineer("Hamza Ahmed",[],"Lathe-200");
const eng2 = new Engineer("Saman Parveen",["Module 1"],"Fax-111");
e1.empRecord();
e2.empRecord();
m1.managerRecord();
m2.managerRecord();
wb1.workerRecord();
wb2.workerRecord();
s1.salesRecord();
s2.salesRecord();
eng1.engRecord();
eng2.engRecord();
