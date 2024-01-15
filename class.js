class Profile {
    name;
    school;
    location;
    constructor(name, school, location) {
        this.name = name;
        this.school = school;
        this.location = location;
    };
    schoolStarts(time) {
        console.log(`School will be start at ${time}`);
    }
    hi() {
        console.log('hi');
    }
}

const shakib = new Profile('Shakib', 'Chehelgazi shikkha niketon');
console.log(shakib);
shakib.schoolStarts('9:00');



class FbProfile {
    profileName;
    nickName;
    constructor(profileName, nickName) {
        this.profileName = profileName;
        this.nickName = nickName;
    }
    hi(time) {
        console.log(`The time is ${time}`);
    }
}


const himu = new FbProfile("Hasnat Hasan", 'himu');
himu.hi(4.00);