/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchBlogs } from './fetch-utils.js';

/* Get DOM Elements */
const blogList = document.getElementById('blog-list');
/* State */

/* Events */
async function loadBlogs() {
    const blogs = await fetchBlogs();
    for (let blog of blogs) {
        const div = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.textContent = blog.title;
        const p = document.createElement('p');
        p.textContent = blog.body;
        div.append(h3, p);
        blogList.append(div);
    }
}
loadBlogs();

/* Display Functions */
