import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/atom" type="application/atom+xml" rel="alternate" title="Roberto Vecilla" />
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }
      a {
        color: black;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a:hover {
        color: white;
        background: black;
        text-decoration: none;
      }
      ::selection {
        color: white;
        background: black;
      }
    `}</style>
  </div>
)
