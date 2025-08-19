class Student {
    constructor(name, section, tamil, english, maths, science, social) {
        this.name = name;
        this.section = section;
        this.tamil = tamil;
        this.english = english;
        this.maths = maths;
        this.science = science;
        this.social = social;
    }

    Student_detail() {
        console.log("Name:", this.name);
        console.log("Section:", this.section);
    }

    Student_percentage() {
        let totalmarks = this.tamil + this.english + this.maths + this.science + this.social;
        let percentage = (totalmarks / 500) * 100;
        console.log("Percentage is", percentage, "%");
    }
}

let details = new Student("Mohan", 'D', 69, 96, 43, 67, 86);
details.Student_detail();
details.Student_percentage();