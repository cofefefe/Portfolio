import react from 'react'

function ContactForm(){
    return(
        <div className="sendmail">
            <form name="sendmail" method="post" data-netlify="true">
                <input type="hidden" name="form-name" value="sendmail" />
                <p>
                    <label for="name">Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                    <label for="email">Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                    <label for="message">Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default ContactForm