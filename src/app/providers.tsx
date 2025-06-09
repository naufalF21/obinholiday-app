"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProgressProvider
			height="3px"
			color="#134B70"
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</ProgressProvider>
	);
};

export default Providers;
