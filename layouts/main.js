import Meta from '../components/meta'
import Link from 'next/link'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link prefetch href="/"><a>roberto vecilla</a></Link>
      {' '}
      (<a href={`https://github.com/robecilla`} target="_blank">src</a>)
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .logo {
        padding-bottom: 50px;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)