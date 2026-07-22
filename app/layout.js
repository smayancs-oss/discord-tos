import './globals.css';

export const metadata = {
  title: 'Donut Designer | Terms & Privacy',
  description: 'Terms of Service and Privacy Policy for Donut Designer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/" className="brand">
            <span className="brand-mark">D</span>
            <span>Donut Designer</span>
          </a>
          <div className="nav-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <p>© 2026 Donut Designer. All rights reserved.</p>
          <div>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
