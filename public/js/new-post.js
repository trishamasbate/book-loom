// Create new post public/js/new-post.js
const newBookPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-book-post').value.trim();
    const author = document.querySelector('#author-new-book-post').value.trim();
    const synopsis = document.querySelector('#synopsis-new-book-post').value.trim();
  
    if (title && author && synopsis) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, author, synopsis }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new post.'); // When unsuccessful, show alert
      }
    }
  };
  
  // Event listeners
  const newBookPostForm = document.querySelector('.new-book-post-form');
  if (newBookPostForm) {
    newBookPostForm.addEventListener('submit', newBookPostFormHandler);
  }
  