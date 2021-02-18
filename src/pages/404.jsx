import Head from 'next/head'

export default function Custom404() {
  return (
    <div>
      <Head>
      <title>NEKOO - 404</title>
      </Head>
      <div className="notfound">
        <p id="title">404</p>
        <p>This page could not be found.</p>
      </div>

      <style jsx>{`
        .notfound {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
          text-align: center;
        }

        #title {
          font-size: 6vmin;
        }
      `}</style>

    </div>
  )
}