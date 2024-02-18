interface Person {
    name: String;
    age: number;
}

interface Address {
    city: String;
    zipCode: String;
}

type PersonWithAddress = Person & Address;

let personWithAddress: PersonWithAddress = {
    name: " 松茸マン ",
    age: 30,
    city: " もっこりひょうたん島 ",
    zipCode: " 6996969 "
}

console.log(personWithAddress);
