import { useEffect, useState } from 'react'
import heroImg from './assets/hero.jpg'
import card1Img from './assets/card1.jpg'
import card2Img from './assets/card2.jpg'
import card3Img from './assets/card3.jpg'
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import './App.css'

const menuItems = [
  {
    title: 'Classic Shortcake',
    description:
      'Layers of fluffy sponge cake, fresh macerated berries, and organic Madagascar vanilla bean whipped cream.',
    price: '$8.50',
    image: card1Img,
  },
  {
    title: 'Artisanal Macarons',
    description:
      'Crisp almond shells stuffed with a bright, house-simmered dark chocolate and wild strawberry ganache injection.',
    price: '$14.00',
    image: card2Img,
  },
  {
    title: 'The Daily Harvest',
    description:
      'A hand-sorted, one-pound basket of our sweetest jewel strawberries, picked at sunrise for perfect sugar balance.',
    price: '$9.00',
    image: card3Img,
  },
]

function App() {
  const [customerName, setCustomerName] = useState('')
  const [selectedItem, setSelectedItem] = useState('Classic Shortcake ($8.50)')
  const [stock, setStock] = useState(120)
  const [selectedDevice, setSelectedDevice] = useState('default')
  const [page, setPage] = useState('home')

  const deviceOptions = [
    { id: 'default', label: 'Default', icon: '↔' },
    { id: 'desktop', label: 'Desktop', icon: '🖥️' },
    { id: 'tablet', label: 'Tablet', icon: '📟' },
    { id: 'mobile', label: 'Mobile', icon: '📱' },
    
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStock((currentStock) => {
        if (currentStock > 8) {
          return currentStock - (Math.floor(Math.random() * 3) + 1)
        }
        clearInterval(interval)
        return currentStock
      })
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!customerName.trim()) {
      alert('Please enter your name to confirm the reservation.')
      return
    }

    alert(
      `Thank you, ${customerName}! Your reservation for [${selectedItem}] is confirmed. Check your email for pickup instructions.`,
    )

    setStock((currentStock) => Math.max(0, currentStock - 1))
    setCustomerName('')
    setSelectedItem('Classic Shortcake ($8.50)')
  }

  return (
    <div className={`app-shell device-${selectedDevice}`}>
      <header className="top-preview-bar">
        <div className="nav-container">
          <div className="preview-controls" aria-label="Responsive preview mode">
            {deviceOptions.map((device) => (
              <button
                key={device.id}
                type="button"
                className={`device-btn ${selectedDevice === device.id ? 'active' : ''}`}
                onClick={() => setSelectedDevice(device.id)}
                aria-label={`${device.label} preview`}
              >
                <span aria-hidden="true">{device.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="preview-frame">
        <header className="main-header">
          <div className="nav-container">
            <ul className="nav-links header-nav-left">
              <li>
                <a
                  href="#hero"
                  onClick={(event) => {
                    event.preventDefault()
                    setPage('home')
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <select
                  id="page-select"
                  className="page-select"
                  value={page === 'home' ? '' : page}
                  onChange={(event) => setPage(event.target.value)}
                  aria-label="Select page"
                >
                  <option value="" disabled>
                    Pages
                  </option>
                  <option value="about">About Us</option>
                  <option value="contact">Contact Us</option>
                </select>
              </li>
              <li>
                <a href="#menu">Harvest</a>
              </li>
              <li>
                <a href="#reserve">Order Now</a>
              </li>
              
            </ul>

            <a href="#hero" className="logo">
              Berry<span>Fields.</span>
            </a>

            <div className="header-actions">
              <button type="button" className="icon-btn" aria-label="Search">
                <span aria-hidden>🔍</span>
              </button>
              <button type="button" className="icon-btn" aria-label="Cart">
                <span aria-hidden>🛒</span>
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </header>

        <main>
          {page === 'home' ? (
            <>
              <section id="hero" className="hero-section">
                <div className="hero-container">
                  <div className="hero-content">
                    <span className="sub-badge">Fresh From NYC Farms</span>
                    <h1>
                      Sweet. Juicy. <br />
                      <em>Hand-Picked</em> Daily.
                    </h1>
                    <p>
                      Experience the finest organic strawberry creations in New York. From
                      signature tarts to field-fresh baskets, we celebrate the pure essence
                      of the ruby berry.
                    </p>
                    <div className="hero-buttons">
                      <a href="#menu" className="btn btn-primary">
                        Explore Menu
                      </a>
                      <a href="#reserve" className="btn btn-secondary">
                        Reserve Batch
                      </a>
                    </div>
                  </div>

                  <div className="hero-image-wrapper">
                    <img src={heroImg} alt="Fresh Strawberries" className="hero-img" />
                  </div>
                </div>
              </section>

              <section id="menu" className="menu-section">
                <div className="section-header">
                  <h2>Our Strawberry Signature Picks</h2>
                  <p>
                    Crafted fresh every single morning using local, sustainable ingredients.
                  </p>
                </div>

                <div className="grid-container">
                  {menuItems.map((item) => (
                    <div key={item.title} className="menu-card">
                      <div className="card-img-holder">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="reserve" className="reserve-section">
                <div className="reserve-box">
                  <div className="reserve-text">
                    <h2>Secure Your Fresh Batch</h2>
                    <p>
                      Due to high demand and seasonal availability, our specialty strawberry
                      pastries sell out rapidly. Lock in your pickup order today.
                    </p>

                    <div className="counter-widget">
                      <span className="counter-number">{stock}</span>
                      <span className="counter-label">Baskets Remaining for Today</span>
                    </div>
                  </div>

                  <form className="reserve-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        value={customerName}
                        onChange={(event) => setCustomerName(event.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="item">Select Creation</label>
                      <select
                        id="item"
                        value={selectedItem}
                        onChange={(event) => setSelectedItem(event.target.value)}
                      >
                        <option value="Classic Shortcake ($8.50)">Classic Shortcake ($8.50)</option>
                        <option value="Artisanal Macarons ($14.00)">Artisanal Macarons ($14.00)</option>
                        <option value="The Daily Harvest ($9.00)">The Daily Harvest ($9.00)</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-submit">
                      Confirm Reservation
                    </button>
                  </form>
                </div>
              </section>
            </>
          ) : page === 'about' ? (
            <AboutPage onNavigateHome={() => setPage('home')} />
          ) : (
            <ContactPage onNavigateHome={() => setPage('home')} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
