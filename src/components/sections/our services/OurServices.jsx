import React from 'react'
import { Link } from 'react-router-dom'

function OurServices() {
	const services = [
		{
			title: "LTL Shipping",
			question: "What is LTL",
			description: "Less than truckload freight shipping (LTL) is used for the transportation of small freight or when freight doesn’t require the use of an entire trailer",
			longdec: "Less than truckload freight shipping (LTL) is used for the transportation of small freight or when freight doesn’t require the use of an entire trailer. This shipping method can be used when freight weighs between 150 and 15,000 pounds. When shipping LTL, the shipper pays for the portion of a standard truck trailer their freight occupies, while other shippers and their shipments fill the unoccupied space. ",
			benefits: "There are a number of benefits to shipping via LTL.",
			list: <><li>Never pay for unused space.</li>
				<li>Reduce warehouse costs</li>
				<li>Get better shipping rates</li>
				<li>Achieve quicker delivery times</li>
				<li>Reduce your environmental impact</li>
			</>,
			image: "ltl",
			bigimage: "ltlbig",
			id: 'ltl'
		},
		{
			title: "FTL Shipping",
			question: "What is FTL",
			description: "FTL or a truckload–most often a dry van or reefer–with a dedicated shipment from a single shipper to a single location.",
			longdec: "FTL or a truckload–most often a dry van or reefer–with a dedicated shipment from a single shipper to a single location. ",
			benefits: "Full Truckload (FTL) shipping boasts a number of benefits",
			list: <><li>Direct transit from point to point, with no stops unless you dictate.  </li>
				<li>The freight is not touched once it is loaded on the truck.  </li>
				<li>No reweighs or reclasses</li>
				<li>Pick up and delivery times can be set with no extra costs.  </li>
				<li>FTL is the only way to move oversized or overweight freight.  </li>
				<li>Reliable, expedited and time-sensitive service.  </li>
				<li>Wide ranges of modes from standard dry vans (48 or 53) to flatbeds, stepdecks, refrigerated equipment and with specialty equipment to handle oversize freight.</li>
				<li>Expanded, extended insurance coverage available.  </li>
				<li>A lot of work goes into finding the right FTL shipping carrier to get your shipments where they need to be, when they need to be there.</li>
			</>,
			image: "ftl",
			bigimage: "ftlbig",
			id: 'ftl'
		},
		{
			title: "Temperature-Controlled Shipping",
			question: "What is Temperature-Controlled",
			description: "Sealed, enclosed trailers, also called reefers, are equipped to keep shipments at their ideal temperatures, both in cold and hot weather. ",
			longdec: "Sealed, enclosed trailers, also called reefers, are equipped to keep shipments at their ideal temperatures, both in cold and hot weather. When you need to move temperature-sensitive or perishable goods, trust our unparalleled service to get your crucial shipment to its destination. Temperature-controlled shipping delivers crucial goods: groceries, fresh produce, medical supplies, flowers, consumer packaged goods and other critical products depend on refrigerated shipping services. Some commonly shipped goods are seasonal, which makes reefers highly in-demand equipment.Precise tracking and monitoring are other important elements in temperature-controlled shipping. Because it’s time sensitive, transit time and trailer conditions play a key role in successful temperature-controlled freight delivery.",
			benefits: "The benefits of temperature-controlled shipping include:",
			list: <><li>Safely transport perishable products.  </li>
				<li>Deliver dry or refrigerated goods.  </li>
				<li>Protect freight from theft, spoilage, damage and weather conditions.  </li>
				<li>Protect deliveries from freezing in the winter.  </li>
				<li>Control against seasonal temperature fluctuations, no matter what the elements bring.  </li>
			</>,
			image: "temperature",
			bigimage: "temperaturebig",
			id: 'temperature'
		},
		{
			title: "Expedited Shipping",
			question: "What is Expedited",
			description: "Expedited shipping is a method of shipping freight that ensures goods arrive faster than regular transit times",
			longdec: "Expedited shipping is a method of shipping freight that ensures goods arrive faster than regular transit times. To fast-track the process, trucks carrying expedited goods rarely stop along the way. Expedited shipments move directly from pickup to delivery. Whether you need your shipment moved across town or across the country, TF Logistics LLC has the resources to make sure your freight is delivered on time.",
			benefits: "We offer a wide-range of expedited options to find the service you need",
			list: <><li>24 hour availability while your shipment is in transit  </li>
				<li>Consistent updates given on the schedule you require  </li>
				<li>Immediate notification of any problems or delays  </li>
				<li>Copy of the Proof of Delivery (POD) on arrival  </li>
				<li>Expanded, extended insurance coverage available  </li>
			</>,
			image: "expedited",
			bigimage: "expeditedbig",
			id: 'expedited'
		}
	]

	return (
		<>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">Our Services</h1>
								<ul className="trail-items">
									<li>You are here: </li>
									<li className="trail-item">
										<Link to="/"> Home</Link>
										<span>></span>
									</li>
									<li className="trail-end">
										Our Services
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-imagebox style3">
				<div className="container">
					<div className="row">
						{services.map((el, ind) => (
							<div className="col-sm-3" key={ind}>
								<div className="imagebox style3">
									<div className="imagebox-image">
										<a href={`#${el.id}`} title="">
											<img src={`/assets/images/page/${el.image}.png`} alt="" />
											<i className="fa fa-link" aria-hidden="true"></i>
											<div className="overlay"></div>
										</a>
									</div>
									<div className="imagebox-header">
										<h3 className="imagebox-title">
											<a href={`#${el.id}`} title="">{el.title}</a>
										</h3>
									</div>
									<div className="imagebox-content">
										<div className="imagebox-desc">
											{el.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="content-area">
							<div className="post-wrap">
								<article className="about-post">
									<div className="entry-content">
										<div className="content-text">
											{services.map((item, ind) => (
												<div key={ind}>
													<div className="box-item" style={{ paddingTop: "30px" }} id={item.id} >
														<div className="text-box" >
															<h2 style={{ color: "#2691e4" }}>{item.question} Shipping?</h2>
															<p>
																{item.longdec}
															</p>
														</div>
													</div>
													<div className="height18"></div>
													<div className="box-item float">
														<div className="text-box left">
															<h2 style={{ fontSize: "1.1rem" }}>{item.benefits}</h2>
															<p></p>
															<ul style={{ paddingLeft: "20px" }}>
																{item.list}
															</ul>
														</div>
														<div className="col-sm-6">
															<div className="counter-slider">
																<div className="flexslider">
																	<img src={`/assets/images/gallery/${item.bigimage}.jpg`} alt="" />
																</div>
															</div>
														</div>
														<div className="clearfix"></div>
													</div>
												</div>
											))}
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default OurServices