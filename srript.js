// Sample blog posts array
let posts = [
  {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog post. It's very exciting to start blogging!",
      author: "John Doe"
  },
  {
      id: 2,
      title: "Another Day, Another Post",
      content: "Blogging is fun! In this post, I'll share my thoughts on learning new things.",
      author: "Jane Smith"
  }
];

// Function to display the blog posts on the homepage
function displayPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>by ${post.author}</p>
          <button onclick="viewPost(${post.id})">Read More</button>
      `;

      postList.appendChild(postDiv);
  });
}

// Function to view a single post
function viewPost(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
      localStorage.setItem('currentPost', JSON.stringify(post));
      window.location.href = 'post.html';
  }
}

// Call the function to display posts when the page loads
window.onload = displayPosts;
