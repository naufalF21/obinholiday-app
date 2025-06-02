export const mobileNavAnimation = {
	transition: {
		menu: {
			duration: 0.3,
			type: "tween",
		},
	},

	menuVariants: {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: {
			y: "100%",
			transition: {
				duration: 0.3,
			},
		},
	},
};
