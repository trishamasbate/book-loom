const newSkinCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = parseInt(window.location.pathname.split('/').pop());
  
    const content = document.querySelector('#content-new-skin-comment').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text: content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload(); // When successful, reload the same page
      } else {
        console.log('Response status:', response.status);
        console.log('Response text:', await response.text());
        alert('Failed to create a comment.'); // When unsuccessful, show alert
      }
    }
  };
  
  
  
  // Event listeners
  const newSkinCommentForm = document.querySelector('.new-skin-comment-form');
  if (newSkinCommentForm) {
    newSkinCommentForm.addEventListener('submit', newSkinCommentFormHandler);
  }
  