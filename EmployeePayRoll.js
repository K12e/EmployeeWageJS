 class EmployeePayRollData{
     //property
     id;
     salary;
     gender;
     startDate;

     //constructor
     constructor(id, name,salary){
         this.id=id;
         this.name=name;
         this.salary=salary;
     }
     //getter setter method
     get name()
     {
         return this._name;
     }
     set name(name){
         this._name=name;
         console.log("Setting: "+name);
     }
     //method
     toString(){
        return "id=" + this.id +", name='" +this.name +", salary=" +this.salary; 
     }
    }
    let employeePayRollData= new EmployeePayRollData(1,"Kalyani",20000);
    console.log(employeePayRollData.toString());
    employeePayRollData.id=2;
    employeePayRollData.name="Ayansh";
    employeePayRollData.salary=30000;
    console.log(employeePayRollData.toString());