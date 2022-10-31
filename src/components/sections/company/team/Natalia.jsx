import { Link } from 'react-router-dom'
const paddingBottom = {
	paddingBottom: "15px"
}
function Natalia() {

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
										Natalia Fugate
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

													<img src="/assets/images/team/natalia_big.png" alt="" />
												</div>
												<div className="text-box left">
													<div className="text-box" >
														<h2 style={{ color: "#2691e4" }}> Natalia Fugate</h2>
														<p>
															Freight Development
														</p>
													</div>
													<h2 style={{ fontSize: "1.1rem" }}></h2>
													<p style={paddingBottom}>
														Natalia holds a bachelor’s degree in Sociology from Appalachian State University. Before joining TF Logistics LLC, she held an inside sales position where she got introduced to sales techniques and providing marketing services. A year into this job, she relocated to Tampa Bay and accepted a position in recruiting. Natalia found herself familiarized with many skills used in recruiting that were also seen in Logistics. Given this similarity in her skills, she became confident in her new role. A positive customer service experience will likely encourage repeat business and strengthen customer loyalty.
													</p>
													<p style={paddingBottom}>
														After meeting Trent, CEO of TF Logistics LLC, and relocating yet again to the state of Kentucky, he introduced her to Logistics which is a field she never thought she be in and was overwhelmed at first. Immediately wanting to learn more, she focused on Sales and marketing with an emphasis on social media. She also helps Trent with accountings and tax filing deadlines.
													</p>
													<p style={paddingBottom}>
														TF Logistics LLC’s focus is customer service. To ensure our customers are getting the best experience with us, we implemented a 24/7 GPS tracking on all our loads where customers can track each load, they do with us. Natalia’s role is to make sure all our loads are being tracked.
													</p>
													<p style={paddingBottom}>
														Natalia absolutely loves her job. It has allowed her the freedom to volunteer at New Day, equine therapy farm and spend more time at home with her pups and husband Trent.
													</p>
													<p style={paddingBottom}>
														In her free time, you can find Natalia throwing down in the gym or whipping it in the kitchen learning how to cook healthy foods.
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
export default Natalia