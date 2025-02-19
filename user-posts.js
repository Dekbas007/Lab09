document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const userName = urlParams.get('name');
    
    document.getElementById('user-name').innerText = userName;
  
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(posts => {
        const postsList = document.getElementById('posts-list');
        posts.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.classList.add('post');
          postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
          postsList.appendChild(postDiv);
        });
      })
      .catch(error => console.error('Error fetching posts:', error));
  });
  