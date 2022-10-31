import React from 'react'

function Form() {
    return (
        <div className="col-sm-8">
            <div className="contact-form">
                <form id="contactform" method="POST" action="../../../../public/assets/contact/contact-process.php">
                    <div className="flat-one-half">
                        <div className="input-name">
                            <input type="text" tabIndex="1" placeholder="Name" name="name" id="name" required="" />
                        </div>
                        <div className="input-email">
                            <input type="email" tabIndex="2" placeholder="Email" name="email" id="email" required="" />
                        </div>
                        <div className="input-subject">
                            <input type="text" placeholder="Subject" name="subject" id="subject" required="" />
                        </div>
                        <div className="input-submit">
                            <button type="submit" className="btn-contact-form">Send Message</button>
                        </div>
                    </div>
                    <div className="flat-one-half">
                        <textarea name="message" id="message" placeholder="Message" required=""></textarea>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
    )
}
export default Form