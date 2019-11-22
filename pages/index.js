import { useState } from 'react'
import Main from '../layouts/main'

const Arrow = () => (
  <div>
    <svg width="21px" height="11px" viewBox="0 0 11 7" aria-label="dropdown">
      <g fill="none" fillRule="evenodd" strokeLinecap="square" stroke="#000">
        <path d="M1.5 1.5L5.5 5.59119M9.74261 1.5L5.82163 5.58057"></path>
      </g>
    </svg>
    <style jsx>{`
      div {
        position: fixed;
        bottom: 24px;
        left: 0;
        right: 0;
        animation: MoveUpDown 2s linear infinite;
      }
      @keyframes MoveUpDown {
        0%, 100% {
          bottom: 24px;
        }
        50% {
          bottom: 30px;
        }
      }
    `}</style>
  </div>
)
const Home = props => {
  const [show, setShow] = useState(false)
  return <Main>
    <div className="home">
      <div className="main">
        <h1>Roberto Vecilla</h1>
        <h3>Software Engineer</h3>
        <nav>
          <a target="_blank" href="https://github.com/robecilla">Github</a>
          <a href="mailto:roberto.vecilla@gmail.com">Email</a>
        </nav>
        <Arrow />
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      .main {
        width: 500px;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        font-weight: normal;
        animation: fadein 2s;
      }
      h3 {
        animation: fadein 3s;
      }
      nav {
        margin-top: 24px;
        animation: fadein 4s;
      }
      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @media (max-width: 524px) {
        .main {
          width: auto;
        }
      }
    `}</style>
  </Main>
}

export default Home;
