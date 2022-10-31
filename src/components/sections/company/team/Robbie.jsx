import { Link } from 'react-router-dom'
const paddingBottom = {
	paddingBottom: "15px"
}
function Robbie() {

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
										Robbie Fletcher
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
											<div className="box-item" >

											</div>
											<div className="height18"></div>
											<div className="box-item float">
												<div className="img-box">

													<img src="/assets/images/team/Robbie_big.png" alt="" />
												</div>
												<div className="text-box left">
													<div className="text-box" >
														<h2 style={{ color: "#2691e4" }}> Robbie Fletcher</h2>
														<p>
															Logistics Specialist
														</p>
													</div>
													<h2 style={{ fontSize: "1.1rem" }}></h2>
													<p style={paddingBottom}>
														Robbie has been in the trucking industry since 2009. She has dedicated 13 years of her life to this industry, and it’s because she loves her job. Logistics is one Robbie never thought she’d end up doing, however, this has allowed Robbie to have the flexibility to work from home and spend time with family.
													</p>
													<p style={paddingBottom}>
														Before Robbie joined TF logistics LLC, she was a dispatcher for a good friend/driver that Trent, Owner, of TF Logistics LLC used Daily. Jose. the driver said she was looking for work. At the time, Trent needed a weekend dispatcher to cover all the emails and calls that came during the weekend. Eventually, Robbie moved into a full-time position with the company.
													</p>
													<p style={paddingBottom}>
														Robbie absolutely loves her job because it keeps her busy. She has met a lot of people through this industry and has made a lot of new connections. This job also allows Robbie to take care of her mom when needed.
													</p>
													<p style={paddingBottom}>
														In her free time, Robbie enjoys cooking. Her favorite dish to cook is beefaroni and different types of casseroles. She looks forward to hosting Sunday dinners with her family especially her grand babies.
													</p>
													<p style={paddingBottom}>
														Robbie is a good example of hard work and dedication. We are so lucky to have her.
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
export default Robbie