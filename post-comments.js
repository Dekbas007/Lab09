document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        const commentsList = document.getElementById('comments-list');
        comments.forEach(comment => {
          const commentDiv = document.createElement('div');
          commentDiv.classList.add('comment');
          commentDiv.innerHTML = `
            <h4>${comment.name}</h4>
            <p>${comment.body}</p>
            <p><strong>By:</strong> ${comment.email}</p>
          `;
          commentsList.appendChild(commentDiv);
        });
      })
      .catch(error => console.error('Error fetching comments:', error));
  });
  