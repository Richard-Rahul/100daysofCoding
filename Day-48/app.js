const student = {
    name:"Rahul",
    age:24,
    marks:640,
    isPass:true,
};

console.log(student);

const emp = {
    name:"Geeta",
    age:24,
    marks:660,
    isPass:true,
};

console.log(emp)
console.log(student["name"]);

student["age"] = student["age"] + 5;
console.log(student["age"]);

student["name"] = "Geeta Verma";
console.log(student["name"]);


// Q1 - create a const object called "product" to store information.

const product = {
    title: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4.5,
    offer: "5% off",
    price: 270,
    remark: "Deal of the Day",
}

console.log(product);

// Q2 Create a const object called "profile" to store information.

const profile = {
    userName: "richardrahul",
    isFollow: true,
    isMessage: false,
    post: "195 Posts",
    followers: "500k followers",
    following: "120 following",
    fullName: "Richard Rahul",
    isTag: "richard_rahul",
    info: "Founder of Programmerfect | Content Creator",
}

console.log(profile);

