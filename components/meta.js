import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/atom" type="application/atom+xml" rel="alternate" title="Roberto Vecilla" />
    </Head>
    <style jsx global>{`
      :root {
        --font-color: black;
        --bg-color: white;
      }
      [data-theme="dark"] {
        --font-color: white;
        --bg-color: black;
      }    
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        color: var(--font-color);
        background-color: var(--bg-color);
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }
      a {
        color: var(--font-color);
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a:hover {
        color: var(--bg-color);
        background: var(--font-color);
        text-decoration: none;
      }
      ::selection {
        color: var(--bg-color);
        background: var(--font-color);
      }
      /* Text and background color for dark mode */
      // @media (prefers-color-scheme: dark) {
      //   body {
      //     color: var(--bg-color);
      //     background-color: #222;
      //   }
      //   a {
      //     color: var(--bg-color);
      //     -webkit-tap-highlight-color: rgba(0,0,0,0);
      //   }
      //   a:hover {
      //     color: var(--font-color);
      //     background: var(--bg-color);
      //     text-decoration: none;
      //   }
      //   ::selection {
      //     color: var(--font-color);
      //     background: var(--bg-color);
      //   }
      //   .arrow > svg > g{
      //       stroke: var(--bg-color);
      //   }
      // }
    `}</style>
  </div>
)
