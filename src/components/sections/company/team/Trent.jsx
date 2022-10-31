import { Link } from 'react-router-dom'
const paddingBottom = {
	paddingBottom: "15px"
}

function Trent() {

	return (
		<>
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
									<li className="trail-item">
										<Link to="/company/ourteam/">
											<span>Our Team</span>
											<span>></span>
										</Link>
									</li>
									<li className="trail-end">
										Trent Fugate
									</li>
								</ul>
							</div>
						</div>
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
											<div className="box-item" style={{ paddingTop: "100px" }} >

											</div>
											<div className="height18"></div>
											<div className="box-item float">
												<div className="img-box">

													<img src="/assets/images/team/trent_big.png" alt="" />
												</div>
												<div className="text-box left">
													<div className="text-box" >
														<h2 style={{ color: "#2691e4" }}> Trent Fugate</h2>
														<p>
															CEO & Founder
														</p>
													</div>
													<h2 style={{ fontSize: "1.1rem" }}></h2>
													<p style={paddingBottom}>Trent Fugate, CEO of TF Logistics LLC has 6 years of experience under his belt. Coming from a competitive background in sports and weightlifting,
														he was able to transfer that competitiveness over into the logistics world. Always striving to be the best version of himself,
														he has been able to easily adapt to the fast pace environment along with having a passion for building strong relationships
														with customers and drivers.
													</p>
													<p style={paddingBottom}>
														Before Trent found his home in logistics, he held a Sports Program Coordinator position at his local
														YMCA in Kentucky and eventually worked his way to becoming the Central Kentucky Regional YMCA program director.
														While he loved what he did, Trent was ready for a new challenge which led him into the Logistics world.
													</p>
													<p style={paddingBottom}>	When he’s not building his book of business, Trent enjoys spending time at his CrossFit gym. He also enjoys spending time with his family and his fur babies,
														Blue, Brody, Kali & Skyler. Trent is the definition of hard work and dedication.
													</p>
													<p style={paddingBottom}>
														A fun fact about Trent is he enjoys nerding out on Marvel movies, Strategy games, and random facts on YouTube.
													</p>
													<ul style={{ paddingLeft: "20px" }}>

													</ul>
												</div>
												<div className="clearfix"></div>
											</div>
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
export default Trent