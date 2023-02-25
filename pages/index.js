import { Inter } from "@next/font/google";
import { Product, HeroBanner, FooterBanner } from "@/components";
import { client } from "@/lib/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, bannerData }) {
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<div className="products-heading">
				<h2>Best selling products</h2>
				<p>Speaker of many variation</p>
			</div>
			<div className="products-container">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<FooterBanner footerBanner={bannerData[0]} />
		</>
	);
}

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	if (!(bannerData || products)) return { props: null, notFound: true };
	// console.log(bannerData, products);

	return { props: { products, bannerData } };
};
