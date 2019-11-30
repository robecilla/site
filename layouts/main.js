import { useState, useEffect } from 'react'
import Meta from '../components/meta'
import Link from 'next/link'

const DEFAULT_THEME = 'light'

export default ({ children }) => {
  const [theme, changeTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  })

  const getTheme = () => theme === 'light' ? 'dark' : 'light'

  return <div className="main">
    <div className="header">
      <div className="logo">
        <Link prefetch href="/"><a>site</a></Link>
        {' '}
        (<a href={`https://github.com/robecilla/site`} target="_blank">src</a>)
      </div>
      <div className="theme">
        <a onClick={()=> changeTheme(getTheme())}>{getTheme()}</a>
      </div>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .header {
        display: flex;
      }

      .theme {
        margin-left: auto;
      }

      .theme > a {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }
      }
    `}</style>
  </div>
}
