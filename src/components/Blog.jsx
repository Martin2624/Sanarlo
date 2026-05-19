import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  return (
    <section className="block" id="blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <div className="eyebrow">Recursos</div>
            <h2 className="section-title">Lecturas para <em>el camino</em>.</h2>
          </div>
          <a href="#" className="btn btn-ghost">Ver todas las entradas</a>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="post">
              <a href={`/blog/${post.slug}`} className="post-link">
                <div
                  className="post-image"
                  style={{
                    backgroundImage: `url(${post.image}), ${post.gradient}`,
                  }}
                  role="img"
                  aria-label={`Imagen del artículo: ${post.title}`}
                />
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span className="post-meta-dot">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
