"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./button";
import { Icon } from "@iconify/react/dist/iconify.js";

const ShareBtn = () => {
	const [isCopied, setIsCopied] = useState<boolean>(false);
	const [shareUrl, setShareUrl] = useState<string>("");

	React.useEffect(() => {
		setShareUrl(window.location.href);
	}, []);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};
	return (
		<ul className="flex gap-5">
			<li>
				<Link
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						shareUrl
					)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="w-fit"
				>
					<Button variant="outline">
						<Icon icon="mage:facebook" width="24" height="24" />
						<span className="hidden md:block">Facebook</span>
					</Button>
				</Link>
			</li>
			<li>
				<Link
					href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="w-fit"
				>
					<Button variant="outline">
						<Icon icon="mage:whatsapp" width="24" height="24" />
						<span className="hidden md:block">Whatsapp</span>
					</Button>
				</Link>
			</li>
			<li>
				<Button variant="outline" onClick={handleCopy}>
					<Icon icon="mage:link" width="24" height="24" />
					<span className="hidden md:block">
						{isCopied ? "Link berhasil disalin!" : "Salin link"}
					</span>
				</Button>
			</li>
		</ul>
	);
};

export { ShareBtn };
