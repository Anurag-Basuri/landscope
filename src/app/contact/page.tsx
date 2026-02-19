export const metadata = {
  title: "Contact Us — Landscope",
  description: "Get in touch with the Landscope team.",
};

export default function ContactPage() {
  return (
    <section className="contactUs">
      <div className="title">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-box">
        {/* Form */}
        <div className="contact-section contact-form">
          <h3>Send a message</h3>
          <form>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" placeholder="Bhoomi" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" placeholder="Yadav" />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="text" placeholder="Bhoomiyadav@gmail.com" />
                </div>
                <div className="inputBox">
                  <span>Mobile</span>
                  <input type="text" placeholder="+91 0123 456 789" />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea placeholder="Write your message here..." />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="contact-section contact-info-card">
          <h3>Contact Information</h3>
          <div className="infoBox">
            <div>
              <span>📍</span>
              <p>123 Main Street, New York, NY 10001</p>
            </div>
            <div>
              <span>📧</span>
              <p>
                <a href="mailto:info@landscope.com">info@landscope.com</a>
              </p>
            </div>
            <div>
              <span>📞</span>
              <p>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </p>
            </div>
          </div>

          <ul className="sci">
            <li>
              <a href="#">🐦</a>
            </li>
            <li>
              <a href="#">💼</a>
            </li>
            <li>
              <a href="#">📸</a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="contact-section contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796622434!2d77.04417355!3d28.52758355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </section>
  );
}
