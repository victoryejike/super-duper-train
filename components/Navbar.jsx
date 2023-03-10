import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import Link from "next/link";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Headphones</Link>
			</p>
			<button className="cart-icon" type="button">
				<AiOutlineShopping />
				<span className="cart-item-qty">1</span>
			</button>
		</div>
	);
};

export default Navbar;
