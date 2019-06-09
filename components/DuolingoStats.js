const StatsCard = ({who}) => (
  <div className="card" onClick={() => window.open(`https://www.duolingo.com/${who.username}`, '_blank')}>
    <main>
      <h4>{who.fullname}</h4>
      <div>Learning <span className={`emoji ${who.learning_language}-flag`} /></div>
      <div>{who.rupees} lingots</div>
      <div>{who.points} XP</div>
      <div>{who.site_streak} days streak</div>
    </main>
    <style jsx>{`
        .card {
          width: 50%;
          background-color: rgb(255, 255, 255);
          box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;
          border: 0px none;
          border-radius: 5px;
          cursor: pointer;
        }
        .card:first-child {
          margin-right: 24px;
        }
        .card:last-child {
          margin-left: 24px;
        }
        main {
          border: 0px none;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          padding: 17px 20px 15px;
          text-align: left;
          transition: all 0.2s ease 0s;
        }
        h4 {
          margin-bottom: 5px;
        }
        span.emoji {
          font-size: 24px;
        }
        .fr-flag:before {
          content: "\\1F1EB \\1F1F7";
        }
        .es-flag:before {
          content: "\\1F1EA \\1F1F8";
        }
        @media (max-width: 524px) {
          .card {
            width: auto;
          }
          .card:first-child {
            margin: 0;
          }
          .card:last-child {
            margin: 20px 0;
          }
        }
      `}
      </style>
  </div>
)

export default ({stats, fade}) => {
  const { rob, alixia } = stats;
  return (
    <div>
      <StatsCard who={rob} />
      <StatsCard who={alixia} />
      <style jsx>{`
        div {
          display: flex;
          -moz-box-pack: justify;
          justify-content: space-between;
          margin-top: 24px;
          animation: fadein 1s;
        }
        @keyframes fadein {
          from { opacity: 0; }  
          to   { opacity: 1; }
        }
        @media (max-width: 524px) {
          div {
            display: inline-block;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}