import React from 'react'


function Footer() {

	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="footer-widgets">
						<div className="col-md-4 col-sm-6">
							<div className="widget widget_text">
								<h4 className="widget-title">About Us</h4>
								<div className="textwidget">
									<img src="assets/images/whitelogo.png" alt="images" />
									<p>
										"TF Logistics LLC, headquartered in Verona, Kentucky is a 3rd Party Logistics provider. We provide solutions for general products by specializing in FTL, LTL, flatbeds, and expediated shipping.
									</p>
								</div>
								<div className="widget widget_socials">
									<div className="socials">
										<a className="facebook" target="_blank" href="https://www.facebook.com/profile.php?id=100085025820212"><i className="fa fa-facebook"></i></a>
										<a className="twitter" target="_blank" href="https://www.instagram.com/tflogisticsllc20/"><i className="fa fa-instagram"></i></a>

									</div>
								</div>

							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="widget widget_text">
								<h4 className="widget-title">Powered by</h4>
								<div className="textwidget">
									<img src="/assets/images/TGFlogotransp.png" alt="images" />
									<p>
										"TF Logistics LLC is powered by Tallgrass Freight co. We are proud to be a part of Tallgrass Freight co.
									</p>
								</div>


							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="widget widget-contact">
								<h4 className="widget-title">Contact From</h4>
								<form action="#" method="get" acceptCharset="utf-8">
									<div className="form-ft">
										<div className="flat-wrap-field">
											<div className="flat-one-half">
												<input type="text" name="your name" placeholder="Name" required="" />
											</div>
											<div className="flat-one-half">
												<input type="email" name="your email" placeholder="Email" required="" />
											</div>
										</div>
										<p>
											<textarea name="your-message" cols="40" rows="10" placeholder="Message"></textarea>
										</p>
										<p>
											<button type="button" className="btn-contact-ft">Send Message</button>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer