


//Task 1
function Person(name = "Faizan Akram",age = 21,gender = "male",address = "Street no 4, main line,Gulberg Green,Lahore"){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        
    }

function Employee(name,age,gender,address,designation,department,salary){
       Person.call(this,name,age,gender,address)
        this.designation = designation;
        this.department = department;
        this.salary = salary;
       
    }

    Employee.prototype = Object.create(Person.prototype); 
    Employee.prototype.constructor = Employee;

    Employee.prototype.empRecord = function(){
       console.log("-----Employee Information------");
    console.log("Name:",this.name,"Age:",this.age,"Gender:",this.gender,"Designation:",this.designation,"Department:",this.department,"Salary:",this.salary,"Address:",this.address);
    }


function Staff(name,age,gender,address,designation,department,salary,hire_date,working_hours){
        Employee.call(this,name,age,gender,address,designation,department,salary);
        this.hire_date = hire_date;
        this.working_hours = working_hours;
       
    }
    Staff.prototype = Object.create(Employee.prototype); 
    Staff.prototype.constructor = Staff;
    Staff.prototype.staffRecord = function(){
        console.log("-----Staff Information------");
       console.log("Name:",this.name,"Hire-date:",this.hire_date,"Salary:",this.salary,"Working_hours:",this.working_hours);

    }


function Courses(course_id,course_name,credit_hours){
        this.course_id = course_id;
        this.course_name = course_name;
        this.credit_hours = credit_hours;
    }


function Student(name,age,gender,address,reg_no,program,cgpa){
        Person.call(this,name,age,gender,address);
        this.reg_no = reg_no;
        this.program = program;
        this.cgpa = cgpa;
        this.courses = []; //this is aggregation
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
   Student.prototype.studRecord =function() {
    console.log("-----Student Information------");
    console.log("Name:", this.name, "Reg_no:", this.reg_no, "Program:", this.program, "CGPA:", this.cgpa);
}
     Student.prototype.addCourse = function(course) {
        this.courses.push(course);
    }
    Student.prototype.showCourses = function() {
        console.log(this.name,"Courses:");
        this.courses.forEach(c => {
            console.log(c.course_name,c.credit_hours," hrs");
        });
}


function Teacher(name,age,gender,address,designation,department,salary,experience,advisor){
        Employee.call(this,name,age,gender,address,designation,department,salary);
        this.experience = experience;
        this.advisor = advisor;
        this.courses = [];
    }
    Teacher.prototype = Object.create(Employee.prototype);
    Teacher.prototype.constructor = Teacher;

    Teacher.prototype.techRecord =function() {
    console.log("-----Teacher Information------");
    console.log("Name:", this.name, "Department:", this.department, "Advisor:", this.advisor, "Experience:", this.experience);
}
     Teacher.prototype.assignCourse = function(course){
        this.courses.push(course);
    }
    Teacher.prototype.showCourses = function() {
        console.log(this.name,"is teaching.");
        this.courses.forEach(c => {
            console.log(c.course_name,c.credit_hours,"hrs");
        });
}

//object declaration
//student objects
const s1 = new Student("Haroon Riaz",21,"male","Attock","SP24-BCS-011","CS",3.45);
const s2 = new Student("Niha Khan",22,"female","Islamabad","SP22-BSE-010","SE",3.67);
//teacher objects
const t1 = new Teacher("Ayaz Khan",32,"male","Attock","Assistent Professor","CS",75000,"8 years","SP23-BSE");
const t2 = new Teacher("Dr. Muntaha",38,"female","Islamabad","Professor","CS",90000,"12 years","SP23-BCS");
//staff objects
const st1 = new Staff("Tayyab Tahir",54,"male","Attock","Assistent Professor","EE",78000,"23-5-2015",15);
const st2 = new Staff("Hammad Haider",43,"male","Attock","Lecturer","EE",50000,"23-11-2022",22);

s1.studRecord();
s2.studRecord();
t1.techRecord();
t2.techRecord();
st1.staffRecord();
st2.staffRecord();

// create some courses
const c1 = new Courses("CS101","Programming Fundamentals",3);
const c2 = new Courses("CS201","Data Structures",4);
const c3 = new Courses("CS301","Database Systems",3);
s1.addCourse(c1);
s1.addCourse(c2);
s2.addCourse(c2);
s2.addCourse(c3);
t1.assignCourse(c1);
t1.assignCourse(c3);
t2.assignCourse(c2);
s1.showCourses();
s2.showCourses();
t1.showCourses();
t2.showCourses();





