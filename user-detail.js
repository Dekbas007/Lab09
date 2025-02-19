document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        const userDetailDiv = document.getElementById('user-detail');
        userDetailDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}">${user.website}</a></p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;
  
        // เมื่อกดปุ่มดูโพสต์ทั้งหมด ให้ไปที่หน้าโพสต์ของ user
        document.getElementById('view-posts').addEventListener('click', () => {
          window.location.href = `user-posts.html?userId=${userId}&name=${user.name}`;
        });
      })
      .catch(error => console.error('Error fetching user details:', error));
  });
  