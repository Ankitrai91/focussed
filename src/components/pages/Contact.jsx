export default function Contact() {
  return (
    <div className="fade-in">
      <h2>Contact Us</h2>

      <div className="contact-layout">
        <div className="contact-info">
          <p>
            <strong>Address:</strong> 27, CB Nagar, Greater Noida, Uttar Pradesh
            201009
          </p>

          <p>
            <strong>Phone:</strong> +91 9217056624
          </p>

          <p>
            <strong>Email:</strong> sales@focussed.co.in <br />
            fcsdsol@gmail.com
          </p>
        </div>

        <form className="big-form">
          <label>Your Name</label>
          <input type="text" className="input-field" />

          <label>Your Message</label>
          <textarea className="input-field" rows="4"></textarea>

          <button className="btn-red">Send Message</button>
        </form>
      </div>
    </div>
  );
}
