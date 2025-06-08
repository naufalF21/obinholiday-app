import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
