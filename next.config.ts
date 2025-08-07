import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.pexels.com" },
			{ protocol: "https", hostname: "storage.googleapis.com" },
			{ protocol: "https", hostname: "kerubpariwisata.id" },
			{ protocol: "https", hostname: "alhdgvtila.ufs.sh" },
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
