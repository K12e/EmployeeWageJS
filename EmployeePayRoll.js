 class EmployeePayRollData{
     //property
     id;
     salary;
     gender;
     startDate;

     //constructor
     constructor(...params){
         this.id=params[0];
         this.name=params[1];
         this.salary=params[2];
         this.gender=params[3];
         this.startDate=params[4];
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
         const options={year:'numeric',month:'long',day:'numeric'};
         const empdate=this.startDate===undefined ? "undefined":
                        this.startDate.toLocalDateString("en-US",options);
        return "id=" + this.id +", name='" +this.name +", salary=" +this.salary +", "+ "gender=" +this.gender + ", startDate=" +empdate;
     }
    }
    let employeePayRollData= new EmployeePayRollData(1,"Kalyani",20000);
    console.log(employeePayRollData.toString());
    employeePayRollData.id=2;
    employeePayRollData.name="Ayansh";
    employeePayRollData.salary=30000;
    console.log(employeePayRollData.toString());
    let employeePayRollData1=new EmployeePayRollData(1,"Swati",30000,"F",new Date());
    console.log(employeePayRollData.toString());