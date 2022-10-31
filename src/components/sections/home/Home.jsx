import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
	const togglle1 = () => {
		document.querySelector('.toggle-title1').classList.toggle('active')
		document.querySelector('.toggle-content1').classList.toggle('toggle-contents')
	}
	const togglle2 = () => {
		document.querySelector('.toggle-title2').classList.toggle('active')
		document.querySelector('.toggle-content2').classList.toggle('toggle-contents')
	}
	const togglle3 = () => {
		document.querySelector('.toggle-title3').classList.toggle('active')
		document.querySelector('.toggle-content3').classList.toggle('toggle-contents')
	}

	const testimonial = [
		{
			name: "Mark McDonnell Jr",
			text: "Three main factors are considered when choosing a partner to work with: reliability, communication, and trust. Over the years, Tallgrass Freight has ticked all the boxes consistently. Time again, I've reached out to their professional and knowledgeable team for support and received unparalleled follow-through and dedicated service.",
			position: "",
			info: "KLB EAST LLC"
		},
		{
			name: "Feyisa T",
			text: "TIt's been a great experience working with Tall Grass Freight for over 2 years. We've been able to create smooth operations together to get the work done effectively. Our drivers love moving with them. Our whole team can depend on them. ",
			position: "Vice President",
			info: "Shalom Trans LLC"
		},
		{
			name: "Jeremy Slotterback",
			text: "TF Logistics LLC has been a great company to work with/for. I have hauled many loads locally and a few loads over the road. Trent and Courtney are very easy to work with and understand the industry and work hard to get a fair rate. I look forward to working with them in the future.",
			position: "",
			info: "H. B. R. Transportation "
		},
	]
	const services = [
		{
			service: "LTL Shipping",
			description: "Less than truckload freight shipping (LTL) is used for the transportation of small freight or when freight doesn’t require the use of an entire trailer",
			icon: "fa fa-truck"
		},
		{
			service: "FTL Shipping",
			description: "Direct transit from point to point, with no stops unless you dictate. The freight is not touched once it is loaded on the truck. No reweighs or reclasses.",
			icon: "fa fa-rss"
		},
		{
			service: "Temperature-Controlled Shipping",
			description: "Sealed, enclosed trailers, also called reefers, are equipped to keep shipments at their ideal temperatures, both in cold and hot weather.",
			icon: "fa fa-cogs"
		},
		{
			service: "Expedited Shipping",
			description: "It is a method of shipping freight that ensures goods arrive faster than regular transit times",
			icon: "fa fa-cogs"
		}

	]
	return (
		<div>
			<section className="tp-banner">
				<div className="homepage-seda" style={{ position: "relative" }}>
				</div>
				<img src="assets/images/slider/01.jpg" alt="" width="1920" height="740" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg slider-img-animation" data-no-retina />
				<div className="slider-text-animation1">
					<h1 className="slider-text-animation1">Transport Trucking Services
					</h1>
				</div>

				<div className="slider-text-animation2">
					<h2 className="slider-text-animation2">
						We are powered by Tallgrass Freight </h2>
				</div>
				<Link to="/company/">
					<div className="tp-caption button-slide rev-btn btn-animation1"><p>Our Company</p> </div>
				</Link>
				<a href="#quote">
					<div className="tp-caption button-slide-color rev-btn  btn-animation2" style={{ backgroundColor: "#18364a" }}><p>Request Quote</p></div>
				</a>
			</section>
			<section className="flat-row flat-iconbox">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="flat-row-title center">
								<h2>Our Services</h2>
							</div>
						</div>
					</div>
					<div className="row" >
						{services.map((el, ind) => (
							<div className="col-sm-3" key={ind} style={{ alignSelf: "flex-start" }}>
								<div className="iconbox style1" >
									<div className="iconbox-icon truck">
										<span className={`${el.icon}`}></span>
									</div>
									<div className="iconbox-content">
										<h3 className="iconbox-title">{el.service}</h3>
										<div className="iconbox-desc">
											{el.description}
										</div>
									</div>
								</div>
								<div className="clearfix">

								</div>
								<div className="col-md-12">
									<div className="height45"></div>
								</div>

							</div>

						))}

					</div>

				</div>
			</section>
			<section className="flat-row flat-form-qoute parallax parallax1" id="quote">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<form action="./contact/contact-process.php" method="get" acceptCharset="utf-8">
								<div className="form-qoute">
									<div className="form-qoute-title center">
										Request For Quote
									</div>
									<div className="desc-qoute">
										Request your shipment quote and we will be in touch with you in the shortest time possible. 
									</div>
									<div className="flat-wrap-form">
										<div className="flat-wrap-input">
											<input type="text" name="yourname" size="40" aria-required="true" aria-invalid="false" placeholder="You Name" />
										</div>
										<div className="flat-wrap-input">
											<input type="email" name="youremail" size="40" aria-required="true" aria-invalid="false" placeholder="You Email" />
										</div>
										<div className="flat-wrap-input">
											<input type="text" name="yourphone" size="40" aria-invalid="false" placeholder="You phone number" />
										</div>
										<div className="flat-wrap-input">
											<input type="text" name="YouDeparture" size="40" aria-invalid="false" placeholder="Departure" />
										</div>
										<div className="flat-wrap-input">
											<input type="text" name="YouArrival" size="40" aria-invalid="false" placeholder="Arrival" />
										</div>
										<div className="flat-wrap-input" id="flat-color">
											<select name="yourrecipient" aria-invalid="false" placeholder="trailer type">
												<option value="" disabled selected hidden>Trailer type</option>
												<option defaultValue="LTL">LTL</option>
												<option defaultValue="Partial">Partial</option>
												<option defaultValue="Van">Van</option>
												<option defaultValue="Reefer">Reefer</option>
												<option defaultValue="Flatbed">Flatbed</option>
											</select>
										</div>
									</div>
									<p className="center">
										<button type="submit" className="button-form-qoute">Get A Quote</button>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="overlay"></div>
			</section>
			<section className="flat-row flat-accordion">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="text-box">
								<div className="title-box">
									<h4>Why Choose us</h4>
									<h2> Our company is built on the foundation of providing 100% customer satisfaction.  </h2>
								</div>
								<div className="text">
									<p>
										Our company is built on the foundation of providing 100% customer satisfaction. We strive in all areas to provide not only an exceptional customer experience but on-time results. We are offering solutions that are both reliable and efficient.We are offering solutions that are both reliable and efficient.
									</p>
								</div>
								{/* <div className="btn-box">
								<a href="#" title="">Learn More</a>
							</div> */}
							</div>
						</div>
						<div className="col-sm-6">
							<div className="accordion" >
								<div className="accordion-toggle" onClick={togglle1}>
									<div className="toggle-title toggle-title1">
										Relationships
									</div>
									<div className="toggle-content toggle-content1 toggle-contents">
										<p>
											Our customers are what measure our success. They are our number one priority. It begins by developing collaborative relationships with our customers, listening, to and understanding the changing requirements of their supply chains, and continually delivering solutions that drive positive results. Cargo delivery is at the required time. With a 24/7 GPS tracking system, we provide information about where the shipment is at any time. This has been essential in building trust and comfort for our clients.
										</p>
										<div className="clearfix"></div>
									</div>
								</div>
								<div className="accordion-toggle" onClick={togglle2}>
									<div className="toggle-title toggle-title2" >
										Availability & Commitment
									</div>
									<div className="toggle-content toggle-content2 toggle-contents">
										<p>
											Our working schedule is always built around the needs of clients. At no time will we not be available for service delivery because we know how inconvenience affects business.
										</p>
									</div>
								</div>
								<div className="accordion-toggle" onClick={togglle3}>
									<div className="toggle-title toggle-title3 ">
										We want to save you money
									</div>
									<div className="toggle-content toggle-content3 toggle-contents">
										<p>
											We work with you to strategize and identify the best ways to lower your transportation costs and provide better service. We stick to the current market rate that corresponds to weight, quantity, and the value of the shipment.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-testimonial parallax parallax2">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="flat-row-title center">
								<h2>Our Testimonials</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12" >
							<div className="owl-carousel" style={{ display: "flex" }}>
								{testimonial.map((el, ind) => (
									<div className="testimonial-item" key={ind} >
										<blockquote>
											{el.text}
										</blockquote>
										<div className="testimonial-content">
											<div className="testimonial-image">
												<img src="/assets/images/team/icon.jpg" alt="" />
											</div>
											<div className="testimonial-author">
												<h6 className="name">
													<a href="#" title="">{el.name}</a>
												</h6>
												<div className="author-info">{el.position} <span> - {el.info}</span></div>
											</div>
										</div>
									</div>
								))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="overlay"></div>
			</section>

		</div>

	)
}
export default Home