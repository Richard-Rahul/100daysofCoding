// Creating an object literal for a user
const user = {
    firstName: "Richard Rahul",
    lastName: "Verma",
    age: 24,
    email: "richard.rahul@example.com",
    isAdmin: false
  };
  
  // Creating a post object
  const post = {
    title: "JavaScript Basics",
    content: "This is a beginner's guide to JavaScript programming.",
    author: user,
    datePosted: new Date(),
    likes: 10,
    comments: [
      {
        user: {
          firstName: "Geeta",
          lastName: "Verma"
        },
        comment: "Great tutorial!"
      },
      {
        user: {
          firstName: "Buggu",
          lastName: "Verma"
        },
        comment: "Very helpful, thanks!"
      }
    ]
  };
  
  // Getting values from the user object
  console.log(`User's first name: ${user.firstName}`);
  console.log(`User's age: ${user.age}`);
  
  // Conversion in getting values
  console.log(`User's age as string: ${String(user.age)}`);
  
  // Accessing nested objects
  console.log(`First comment by ${post.comments[0].user.firstName}: "${post.comments[0].comment}"`);
  
  // Array of objects
  const students = [
    { name: "Rahul", grade: 85 },
    { name: "Geeta", grade: 90 },
    { name: "Suggu", grade: 95 }
  ];
  
  // Math objects
  console.log(`Maximum grade: ${Math.max(...students.map(student => student.grade))}`);
  
  // Generating a random integer between 1 and 100
  const randomInteger = Math.floor(Math.random() * 100) + 1;
  console.log(`Random integer between 1 and 100: ${randomInteger}`);
  