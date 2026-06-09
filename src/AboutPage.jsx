function AboutPage({ onNavigateHome }) {
  return (
    <section className="page-section">
      <div className="page-content">
        <h2>About Berry Fields</h2>
        <p>
          At Berry Fields, we bring the freshest strawberries from local New York farms
          straight to your table. Our artisanal desserts and curated baskets are made from
          seasonal berries picked at their peak for flavor, sweetness, and aroma.
        </p>
        <p>
          Our mission is to celebrate the beauty of small-batch pastry craftsmanship while
          supporting sustainable farming and the communities that grow our fruit.
        </p>
        <div className="page-actions">
          <button type="button" className="btn btn-primary" onClick={onNavigateHome}>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
