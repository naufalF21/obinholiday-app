import { Navbar } from "@/components/ui/navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="text-sm">
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
