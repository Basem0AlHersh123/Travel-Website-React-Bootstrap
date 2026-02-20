import { blogs } from './posts.js';
import Blog_div from './blog.jsx';
function Blogs() {
  // Sample blog Blogs
//   const blogs=Blogs.posts;
  return (
    <Blog_div posts={blogs} />
  );
}

export default Blogs;