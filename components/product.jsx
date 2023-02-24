import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const product = ({ image, name, slug, price }) => {
	return (
		<div>
			<Link href={`/product/${slug}`}>
				<div className="product-card">
					<img
						src={urlFor(image && image[0])}
						alt="product-img"
						width={250}
						height={250}
						className="product-image"
					/>
				</div>
			</Link>
		</div>
	);
};

export default product;
