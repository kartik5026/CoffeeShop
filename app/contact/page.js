function Contact() {
    return (
        <>
            <h1 className="heading"> Contact </h1>
            <div className="container contactDiv">
                <div>
                    <h1>
                        Get in touch
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                    <li>929-242-6868</li>
                    <li>contact@info.com</li>
                    <li>123 Fifth Avenue, New York, NY 10160</li>
                </div>
                <div className="contact-form">
                    <form action="https://formspree.io/f/manwqqpn" method="post">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" Name"
                                            required
                                            className="input"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            className="input"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            required
                                            className="input"
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="submit" className="btn">Send Message</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
            </div>
        </>

    )
}
export default Contact;