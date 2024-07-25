// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the post
  const updateBookPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-book-post").value.trim();
    const author = document.querySelector("#author-update-book-post").value.trim();
    const synopsis = document.querySelector("#synopsis-update-book-post").value.trim();
  
    if (title && author && synopsis) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, author, synopsis}),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
      } else {
        alert("Failed to update a post."); // When unsuccessful, show alert
      }
    }
  };
  
  // Delete the post
  const deleteBookPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to delete a post."); // When unsuccessful, show alert
    }
  };
  
  // Event listeners
  const updateBookPostButton = document.querySelector("#update-book-post");
  
  if (updateBookPostButton) {
    updateBookPostButton.addEventListener("click", updateBookPostFormHandler);
  }
  
  const deleteBookPostButton = document.querySelector("#delete-book-post");
  
  if (deleteBookPostButton) {
    deleteBookPostButton.addEventListener("click", deleteBookPostFormHandler);
  }
  