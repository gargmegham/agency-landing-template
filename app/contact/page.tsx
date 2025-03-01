import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
	title: "ReDesign | Contact",
	canonicalUrlRelative: "/contact"
});

export default function ContactPage() {
	return (
		<>
			<Header />
			<Contact />
			<Footer />
		</>
	);
}
