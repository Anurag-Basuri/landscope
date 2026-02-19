import Link from "next/link";
import Image from "next/image";

const categories = [
  "Land classification",
  "Agricultural techniques",
  "Soil health",
  "Sustainable Practices",
  "Case Studies",
  "Educational Resources",
  "Fertility management",
  "Farming",
  "Success stories",
  "Sustainable techniques",
  "Policies",
  "News and updates",
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <Image
                  src="/Landscope.png"
                  width={119}
                  height={37}
                  alt="Landscope logo"
                  loading="lazy"
                />
              </Link>

              <p className="footer-text">
                Guiding Our Journey Towards Sustainable Land Management and
                Environmental Stewardship, Together.
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                123 Main Street <br />
                New York, NY 10001
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Categories</p>
              <ul>
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link href="#" className="footer-link hover-2">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>
              <p className="footer-text">
                Sign up to be first to receive the latest news about land
                resources, case studies, and new Policies.
              </p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autoComplete="off"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email address"
                  required
                  className="input-field"
                  autoComplete="off"
                />
              </div>

              <button className="btn btn-primary">
                <span className="span">Subscribe</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <span className="span">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <span className="span">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <span className="span">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
