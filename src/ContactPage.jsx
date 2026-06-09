function ContactPage({ onNavigateHome }) {
  return (
    <section className="page-section">
      <div className="page-content">
        <h2>Contact Us</h2>
        <p>
          Have a question about our strawberry baskets, seasonal pastries, or pickup options?
          We’re here to help.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> <a href="mailto:hello@berryfields.com">hello@berryfields.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <strong>Location:</strong> Manhattan, New York City
          </li>
        </ul>
        <div className="page-actions">
          <button type="button" className="btn btn-primary" onClick={onNavigateHome}>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
