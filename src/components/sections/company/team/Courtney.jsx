
import { Link } from 'react-router-dom'
const paddingBottom = {
	paddingBottom: "15px"
}
function Courtney() {

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
										Courtney Fuller
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
											<div className="box-item">

											</div>
											<div className="height18"></div>
											<div className="box-item float">
												<div className="img-box">

													<img src="/assets/images/team/courtney_big.png" alt="" />
												</div>
												<div className="text-box left">
													<div className="text-box" >
														<h2 style={{ color: "#2691e4" }}> Courtney Fuller</h2>
														<p>
															Logistics Specialist
														</p>
													</div>
													<h2 style={{ fontSize: "1.1rem" }}></h2>
													<p style={paddingBottom}>After graduating with a Bachelor’s degree in Exercise Science from Northern Kentucky University, Courtney found herself working in different areas where she wasn’t using her degree. Over the past decade, she has worked as an Insurance Agent, Dental Assistant and registered Behavioral Therapist. However, none of these jobs allowed Courtney to have the flexibility she was looking for to be able to spend more time at home with her family.

													</p>
													<p style={paddingBottom}>	The logistics industry is one Courtney never really gave much thought to, and knew little to nothing about, prior to joining the TF Logistics LLC team.

													</p>
													<p style={paddingBottom}>
														One evening during “family dinner” with Trent, Owner of TF Logistics LLC, a discussion about Trent looking for an extra hand came up. During this time, Courtney was unhappy with her career and was looking for a change. Trent said he thought she would be a good fit for his newly developing team. A few weeks and discussions later, she jumped right in and never looked back.

													</p>
													<p style={paddingBottom}>	What Courtney loves about this job is the flexibility. This has allowed her to spend more time at home with her kids Lux and Hawkson, and husband Kyle.

													</p>
													<p style={paddingBottom}>	Most people think having your close friend as your boss would be a recipe for disaster, but it’s been quite the opposite for Courtney. This has allowed Courtney and Trent to have a better understanding and openness in the professional relationship. She absolutely loves working for TF Logistics LLC and excited to continue to grow with the company.

													</p>
													<p style={paddingBottom}>	In her free time, you can find Courtney on a comfy couch with a warm blanket and a book in hand or watching Harry Potter and Star Wars series.

													</p>
													<p style={paddingBottom}>	She is a good example of work life balance. We are so happy to have her on the team!

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
export default Courtney