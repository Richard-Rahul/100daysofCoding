// User object literal
const user = {
    username: "john_doe",
    email: "john@example.com",
    fullName: "John Doe",
    age: 30,
    isAdmin: false,
  };
  

  
  // Post object literal
  const post1 = {
    title: "Introduction to Object Literals",
    content: "Object literals are a way to create objects in JavaScript.",
    author: user,
    datePosted: new Date(),
  };
  
  const post2 = {
    title: "Using Arrays of Objects",
    content: "Arrays can hold multiple objects, useful for managing collections of data.",
    author: user,
    datePosted: new Date(),
  };
  
  const posts = [post1, post2];
  

  
  
  // Function to get post details
  function getPostDetails(post) {
    return `
      Title: ${post.title}
      Content: ${post.content}
      Author: ${post.author.fullName}
      Date Posted: ${post.datePosted.toDateString()}
    `;
  }
  
  // Displaying post details
  posts.forEach((post, index) => {
    console.log(`Post ${index + 1}:`);
    console.log(getPostDetails(post));
  });
  
 
  
  // Generate random integer between 1 and 100
  const randomInteger = Math.floor(Math.random() * 100) + 1;
  console.log("Random Integer:", randomInteger);
  
  console.log("2"+"2"-"2");