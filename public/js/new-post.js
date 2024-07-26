// Function to get a random book cover image from the 'book-covers' folder
function getRandomBookCover() {
  const covers = [
    '/images/book-covers/icon1.png',
    '/images/book-covers/icon2.png',
    '/images/book-covers/icon3.png',
    '/images/book-covers/icon4.png',
    '/images/book-covers/icon5.png',
    '/images/book-covers/icon6.png',
    '/images/book-covers/icon7.png',
    '/images/book-covers/icon8.png',
    '/images/book-covers/icon9.png',
    '/images/book-covers/icon10.png',
    '/images/book-covers/icon11.png',
    '/images/book-covers/icon12.png',
    '/images/book-covers/icon13.png',
    '/images/book-covers/icon14.png',
    '/images/book-covers/icon15.png',
    '/images/book-covers/icon16.png',
  ];
  const randomIndex = Math.floor(Math.random() * covers.length);
  return covers[randomIndex];
}

// Create new post with book cover
const newBookPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-book-post').value.trim();
  const author = document.querySelector('#author-new-book-post').value.trim();
  const synopsis = document.querySelector('#synopsis-new-book-post').value.trim();
  const cover = getRandomBookCover(); // Get a random cover image

  if (title && author && synopsis) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, author, synopsis }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Save the cover image URL to localStorage
      const postId = (await response.json()).id;
      localStorage.setItem(`post-${postId}-cover`, cover);

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
