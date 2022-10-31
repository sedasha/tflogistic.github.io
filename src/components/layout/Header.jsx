import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Header() {
	const [state, setState] = useState({ active: "active" })
	const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);
	const [menu, setMenu] = useState(true)
	const [mobilemenu, setMobilemenu] = useState(false)


	useEffect(() => {
		const handleScroll = () => {
			setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll);
	}, [])
	const active = (event) => {
		let li = document.querySelectorAll("a");
		li.forEach(el => {
			el.classList.remove(state.active);
		})
		setState({ active: "active" })
		event.target.classList.add(state.active);
	}


	const mobile = (event) => {
		event.target.classList.toggle('active')
		setMenu(prevMenu => !prevMenu)
		if (mobilemenu === false) {
			setMobilemenu(prevMobilemenu => !prevMobilemenu)
		}
	}
	return (
		<>
			{/* <div className="preloader">
			<div className="clear-loading loading-effect-2">
				<span></span>
			</div>
		</div> */}

			<div className="top header-style">
				<div className="container">
					<div className="content-left">
						<ul className="flat-infomation">
							<li className="phone">
								<i className="fa fa-phone"></i>
								<a href="tel:9137210079">Call us: 9137210079 Ext 836 </a>
							</li>
							<li className="email">
								<i className="fa fa-envelope"></i>
								<a href="mailto:tfugate@tallgrassfreight.com" title="">Email: tfugate@tallgrassfreight.com</a>
							</li>
						</ul>
					</div>
					<div className="content-right">
						<ul className="flat-social">
							<li className="facebook">
								<a href="https://www.facebook.com/profile.php?id=100085025820212" target="_blank" title=""><i className="fa fa-facebook"></i></a>
							</li>
							<li className="twitter">
								<a href="https://www.instagram.com/tflogisticsllc20/" target="_blank" title=""><i className="fa fa-instagram"></i></a>
							</li>
						</ul>
						<div className="info-top-right">
							<Link to="/quote/" onClick={active} className={window.location.pathname === "/quote/" ? "active" : " "}>
								<span className="appoinment" title="">REQUEST A QUOTE</span>
							</Link>
						</div>
					</div>

				</div>
			</div>
			<section className={isScrollValueMoreThanHeaderHeight ? "header-fixed" : " "} >
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="header-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
								<div id="logo" className="logo" style={{ display: "inline" }}>
									<Link to="/" onClick={active} className={window.location.pathname === "/" ? "active" : " "}>
										<img src="assets/images/logo.png" alt="" />
									</Link>
								</div>
								<div className="nav-wrap">
									<div className="btn-menu" onClick={mobile}>
										<span></span>
									</div>
									<nav id={window.innerWidth < 991 ? "#mainnav-mobi-click" : "mainnav"} className={menu ? "mainnav" : " mainnav-mobi mainnav"} style={{ display: menu & mobilemenu ? "none" : "" }}>
										<ul className="menu">
											<li onClick={active} className={window.location.pathname === "/" ? "active" : " "}>
												<Link to="/"><span title="">Home</span></Link>
											</li>
											<li onClick={active} className={window.location.pathname === "/company/" || window.location.pathname === "/company/ourteam/" || window.location.pathname === "/company/aboutus/" ? "active" : " "} >
												<Link to="/company/"><span title="">Company</span></Link>
												<ul className="submenu" >
													<li>
														<Link to="/company/aboutus/"><span>About Us</span></Link>
													</li>
													<li>
														<Link to="/company/ourteam/"><span>Our Team</span></Link>
													</li>
												</ul>
											</li>
											<li onClick={active} className={window.location.pathname === "/our-services/" ? "active" : " "}>
												<Link to="/our-services/"><span title="">Our Services</span></Link>
											</li>
											<li onClick={active} className={window.location.pathname === "/quote/" ? "active" : " "}>
												<Link to="/quote/"><span title="">Request Quote</span></Link>
											</li>
											<li onClick={active} className={window.location.pathname === "/contact/" ? "active" : " "}>
												<Link to="/contact/"><span title="">Contact </span></Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Header