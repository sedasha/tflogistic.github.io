import React from 'react'
import { Link } from 'react-router-dom'

function Quote() {

	return (
		<div>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">Request Quote</h1>
								<ul className="trail-items">
									<li>You are here:</li>
									<li className="trail-item">
										<Link to="/">
											<span title=""> Home</span>
										</Link>
										<span> > </span>
									</li>
									<li className="trail-end">
										Quote
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="main-about page-wrap">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="content-area">
								<div className="post-wrap">
									<article className="about-post style4">
										<div className="entry-content">
											<form action="#" method="get" acceptCharset="utf-8">
												<div className="flat-form-quote style1">
													<div className="title-quote">
														Quotation request
													</div>
													<p>Thank you for your interest in TF Logistics LLC. We are excited to help you with your 3PL needs. Please complete the form below and a member of our team will reach out to you as soon as possible. </p>
													<p>
														<label>
															Your name *
															<span>
																<input type="text" name="your name" placeholder="You Name" />
															</span>
														</label>
														<label>
															Company name *
															<span>
																<input type="text" name="Company name" placeholder="Company name" />
															</span>
														</label>
														<label>
															Phone number *
															<span>
																<input type="text" name="phone number" placeholder="123-456-7890" />
															</span>
														</label>
														<label>
															Your email *
															<span>
																<input type="text" name="your name" placeholder="You email" />
															</span>
														</label>
														<label>
															Pick-up address information
															<span>Country, City, Postal code *</span>
															<span>
																<input type="text" name="phone number" placeholder="Country" />
															</span>
														</label>
														<label>
															Delivery address information
															<span>Country, City, Postal code *</span>
															<span>
																<input type="text" name="your name" placeholder="Country" />
															</span>
														</label>
														<label>
															What mode of transport do you require?
															<span>
																<select name="select quote">
																	<option value="" disabled selected hidden>Trailer type</option>
																	<option defaultValue="LTL">LTL</option>
																	<option defaultValue="Partial">Partial</option>
																	<option defaultValue="Van">Van</option>
																	<option defaultValue="Reefer">Reefer</option>
																	<option defaultValue="Flatbed">Flatbed</option>
																</select>
															</span>
														</label>
													</p>
													<div className="title-form">Description of the goods</div>
													<p>
														Please supply us with information about the goods you want to ship. Number of pallets / packages, dimensions, weight. Also if possible information on the desired loading and unloading date and time or any other requests which we need to take into account.
													</p>
													<div className="title-form">Goods information *</div>
													<p>
														<span>
															<textarea name="your-message" cols="40" rows="10"></textarea>
														</span>
														<button type="submit" className="button-form-quote">Send Reuqest</button>
													</p>
												</div>
											</form>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div >
			</section >
		</div >
	)
}
export default Quote