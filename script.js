document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `<a href="user-detail.html?id=${user.id}">${user.name}</a>`;
          userList.appendChild(userDiv);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  });
  