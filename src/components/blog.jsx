function Blog_div({posts}){
    return (
        <div className="container my-5">
      <h1 className="text-center mb-5">Travel Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100">
                <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.excerpt}</p>
                </div>
                <div className="card-footer bg-transparent">
                    <small className="text-muted">
                    <i className="bi bi-calendar me-1"></i>
                    {post.date} • <i className="bi bi-person ms-2 me-1"></i>
                    {post.author}
                    </small>
                    <button className="btn btn-link p-0 mt-2">
                    Read More →
                    </button>
                </div>
                </div>
            </div>
            ))}
      </div>
    </div>
            
    )
}

export default Blog_div;