import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

function Contact() {

	return (
		<div>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">Contact</h1>
								<ul className="trail-items">
									<li>You are here:</li>
									<li className="trail-item">
										<Link to="/">
											<span title="">Home</span>
										</Link>
										<span>></span>
									</li>
									<li className="trail-end">
										Contact
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-contact">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="contact-info">
								<div className="contact-item">
									<h4 style={{ color: "#2691e4" }}>TF LOGISTICS LLC</h4>
								</div>
								<div className="height35"></div>
								<div className="contact-item">
									<h4>Phone number</h4>
									<p><a href="tel:9137210079">Call us: +913 721 00 79 Ext 836</a></p>
								</div>
								<div className="height35"></div>
								<div className="contact-item">
									<h4>E-mail address</h4>
									<p><a href="mailto:tfugate@tallgrassfreight.com">tfugate@tallgrassfreight.com </a></p>
								</div>
							</div>
						</div>
						<Form />
					</div>
				</div>
			</section>
		</div>
	)
}
export default Contact