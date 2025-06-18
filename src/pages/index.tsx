import { meta } from '../data/meta';
import { blogPosts } from '../data/blog';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem' }}>{meta.title}</h1>
      <p>{meta.description}</p>
      <h2 style={{ marginTop: '2rem' }}>About</h2>
      <p>I'm a writer who believes in the magic of simplicity, emotion, and expression. Through my writings, I hope to inspire, heal, and connect.</p>
      <h2 style={{ marginTop: '2rem' }}>Writings</h2>
      <ul>
        {blogPosts.map((post, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p><i>{post.date}</i></p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
