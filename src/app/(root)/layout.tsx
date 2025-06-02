import { Navbar } from "@/components/ui/navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
