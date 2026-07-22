export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="eyebrow">DISCORD BOT LEGAL INFORMATION</div>
        <h1>Donut <span>Designer</span></h1>
        <p className="lead">
          A Discord bot built to help communities manage their servers,
          support users, and provide designer-focused tools.
        </p>
        <div className="actions">
          <a className="button primary" href="/terms">Terms of Service</a>
          <a className="button secondary" href="/privacy">Privacy Policy</a>
        </div>
      </section>

      <section className="cards">
        <a className="card" href="/terms">
          <div className="icon">§</div>
          <h2>Terms of Service</h2>
          <p>Rules and conditions for using Donut Designer and its services.</p>
          <span>Read terms →</span>
        </a>
        <a className="card" href="/privacy">
          <div className="icon">◈</div>
          <h2>Privacy Policy</h2>
          <p>How information may be collected, used, stored, and processed.</p>
          <span>Read privacy policy →</span>
        </a>
      </section>

      <section className="notice">
        <strong>Need help?</strong>
        <p>
          For support regarding Donut Designer, please contact the server
          staff or the official support channels associated with the bot.
        </p>
      </section>
    </div>
  );
}
