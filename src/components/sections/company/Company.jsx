import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const paddingBottom = {
	paddingBottom: "15px"
}

function Company() {
	const [offsetY, setOffsetY] = useState(0)
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("Scroll", handleScroll);
	}, [])

	return (
		<div>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">About Us</h1>
								<ul className="trail-items">
									<li>You are here: </li>
									<li className="trail-item">
										<Link to="/"> Home</Link>
										<span>></span>
									</li>
									<li className="trail-end">
										Our Company
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-counter style2">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="counter-box">
								<div className="flat-text-box">
									<h2>Supply Chain Solutions<br /> Customs, Security & Insurance</h2>
									<p style={paddingBottom}>"TF Logistics LLC, headquartered in Verona, Kentucky is a 3rd Party Logistics provider. We provide solutions for general products by specializing in FTL, LTL, flatbeds, and expediated shipping.
										TF Logistics LLC excels as a transportation provider by offering solutions that are both reliable and efficient. To maintain our success, we focus on understanding our customers needs by tailoring our solutions to create an exceptional customer experience including 24/7 GPS tracking system."
									</p>
									<p>
										We try to set ourselves apart from other logistics providers by having exceptional communication and responding to all phone calls/emails within a 30-minute time frame.
									</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="counter-slider">
								<div className="flexslider">
									<img src="assets/images/gallery/img-sm01.jpg" alt="" />
									{/* <ul className="slides">
									<li>
										<a href="#" title="">
											<img src="assets/images/gallery/img-sm01.jpg" alt="" />
										</a>
									</li>
									<li>
										<a href="#" title="">
											<img src="assets/images/gallery/img-sm01.png" alt="" />
										</a>
									</li>
								</ul> */}
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			<section className="flat-row flat-introduce parallax parallax4">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="introduce center">
								<div className="height35"></div>
								<h1>TF Logistics LLC is powered by Tallgrass Freight Co.
								</h1>
								<img src="/assets/images/tfg.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="overlay"></div>
			</section>
		</div>
		// 
	)
}

export default Company