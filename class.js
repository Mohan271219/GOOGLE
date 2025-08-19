class Info{
    name="mohan"
    age=22
    job_role="QA Analyst"
    details(){
        console.log("My name is",this.name,"My age is",this.age,"My job_role is",this.job_role)
    }
}

const detail=new Info
console.log(detail.name)
detail.details()



class flower{
    constructor(name,colour,fragrance,season){
        this.name=name;
        this.colour=colour;
        this.fragrance=fragrance;
        this.season=season;
    }

fdetails(){
    console.log("My name is",this.name)
    console.log("My colour is",this.colour)
    console.log("My fragrance is",this.fragrance)
    console.log("My season is",this.season)
}
}
let rose=new flower("rose","red","mild","all season")
rose.fdetails()




