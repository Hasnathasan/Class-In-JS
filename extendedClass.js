class common {
    name;
    id;
    location;
    constructor(name, id, location) {
        this.name = name;
        this.id = id;
        this.location = location;
    }
    feedBack(name) {
        console.log(`Hi ${name}. Thanks for your feedback`);
    }
};
class ProgrammingHero extends common {
    ceo = 'Jhankar Mahbub';
    post;
    constructor(name, id, location, post) {
        super(name, id, location);
        this.post = post;
    }
};
const biri = new ProgrammingHero('Biri', 0012, 'Dinajpur', 'Ceo');
console.log(biri);
biri.feedBack('Biri');



