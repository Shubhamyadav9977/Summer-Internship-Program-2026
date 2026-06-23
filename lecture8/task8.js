class Employee
{ 
     constructor(name,id){
        this.name=name;
        this.id=id;
     }
        Worker(){
          console.log(`${this.name} is working as a Devloper`)
        }showDetails(){
          console.log(`And his id is ${this.id} `)
        }
      }
      let d=new Employee("shubham","101");
      d.Worker();
      d.showDetails();
      class Dev extends Employee{
        constructor(name,id,language){
          super(name,id)
          this.language=language;
        }writeCode(){
          console.log(`${this.name} uses ${this.language} to write program`);
        }Worker(){
        console.log(`${this.name} now working as a Tester`)

      }}const d1=new Dev("shubham","id","Javascript")
      d1.Worker();
      d1.writeCode();
       
      class FrontDev extends Dev{
        constructor(name,framework)
        {
         super(name)
         this.framework=framework; 
        }
        buildUI(){
          console.log(`${this.name} uses this ${this.framework}`)
        }Worker()
        {
          console.log(`${this.name } has build UI`);

        }

      }const d2=new FrontDev("shubham","React")
      d2.buildUI();
      d2.Worker();
      class Maneger extends Employee{
        constructor(name,teamsize)
        {
          super(name)
          this.teamsize=teamsize;
        }conductMeeting(){
          console.log(`Meeting is conducted by ${this.name}`)
        }Worker(){
          console.log(`meeting is posponded by ${this.name}`);

        }
      }const d3=new Maneger("shubham","11")
      d3.conductMeeting();
      d3.Worker();
      