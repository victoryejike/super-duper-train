import { Layout } from "@/components";
import "@/styles/globals.css";
import { stateContext } from "@/context/stateContext";

export default function App({ Component, pageProps }) {
	return (
		<stateContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</stateContext>
	);
}
