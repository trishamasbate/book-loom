// Create new post public/js/new-post.js
const newSkinPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-skin-post').value.trim();
    const content = document.querySelector('#content-new-skin-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
  const newSkinPostForm = document.querySelector('.new-skin-post-form');
  if (newSkinPostForm) {
    newSkinPostForm.addEventListener('submit', newSkinPostFormHandler);
  }
  