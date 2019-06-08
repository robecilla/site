import Main from '../layouts/main'

function Home() {
  return <Main>
    <div className="home">
      <div className="main">
        <h1>Roberto Vecilla</h1>
        <h3>Software Engineer</h3>
        <nav>
          <a target="_blank" href="https://github.com/robecilla">Github</a>
          <a href="mailto:roberto.vecilla@gmail.com">Email</a>
        </nav>
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
        flex: none;
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
        margin-top: 20px;
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

      ::selection {
        color: white;
        background: black;
      }
    `}</style>
  </Main>
   
}

export default Home;
