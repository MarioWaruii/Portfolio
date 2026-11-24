export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <span>© {year} Chukwuma Mario Chuks-Ajemba</span>
        <span>Frontend Developer · UI/UX Designer · Power Platform</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="signature">chukwuma mario.</p>
    </footer>
  )
}
