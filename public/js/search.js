document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
  
    if (searchInput) {
      searchInput.addEventListener('input', async function(event) {
        const query = event.target.value;
        let url = '/api/posts'; // Default URL to get all posts
  
        if (query) {
          // If there is input, search posts
          url = `/api/posts/search?q=${query}`;
        }
  
        const response = await fetch(url);
        const posts = await response.json();
        const postsContainer = document.getElementById('posts-container');
        
        postsContainer.innerHTML = ''; // Clear previous results
  
        posts.forEach(post => {
          const postHtml = `
            <div class="col-md-4">
              <div class="card mb-3">
                <div class="card-header bg-custom">
                  <h2 class="card-title">
                    <a href="/post/${post.id}" class="text-dark text-decoration-none">${post.title}</a>
                  </h2>
                </div>
                <div class="card-body text-dark">
                  <p>Book Owner: ${post.user.username} Date: ${new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          `;
          postsContainer.insertAdjacentHTML('beforeend', postHtml);
        });
      });
    }
  });
  