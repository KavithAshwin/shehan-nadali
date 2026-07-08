import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Heart, c as Calendar, i as MapPin, n as Phone, o as Clock, r as Navigation, s as ChevronDown, t as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CcwjvmC-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var olive_hero_default = "/assets/olive-hero-K_nx2phI.jpg";
var olive_wreath_default = "/assets/olive-wreath-DagMLBVn.png";
var venue_default = "/assets/venue-COewdM9j.jpg";
var wedding_couple_default = "/assets/wedding-couple-BWZwjw2S.jpeg";
var WEDDING_DATE = /* @__PURE__ */ new Date("2026-11-12T10:00:00+05:30");
function useCountdown(target) {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	const diff = Math.max(0, target.getTime() - now.getTime());
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff / 36e5 % 24),
		minutes: Math.floor(diff / 6e4 % 60),
		seconds: Math.floor(diff / 1e3 % 60)
	};
}
function Invitation() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full bg-[oklch(0.9_0.03_95)] flex items-center justify-center p-0 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 hidden sm:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-60",
				style: { background: "radial-gradient(60% 50% at 30% 20%, oklch(0.88 0.05 110 / 0.6), transparent 70%), radial-gradient(50% 40% at 80% 90%, oklch(0.78 0.06 90 / 0.5), transparent 70%)" }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative w-full max-w-[440px] sm:max-w-[400px] sm:rounded-[3rem] sm:border sm:border-beige-deep/40 sm:shadow-[0_40px_120px_-30px_oklch(0.36_0.055_120_/_0.45)] overflow-hidden bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full min-h-screen sm:min-h-0 sm:h-[860px] overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: !opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, { onOpen: () => setOpened(true) }, "env") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {}, "content")
				})
			})
		})]
	});
}
function Envelope({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			scale: 1.05,
			filter: "blur(12px)",
			transition: {
				duration: .9,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		},
		className: "relative w-full min-h-screen sm:h-[860px] hero-bg flex flex-col items-center justify-center px-6 text-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: olive_hero_default,
				alt: "",
				"aria-hidden": true,
				initial: { scale: 1.15 },
				animate: { scale: 1 },
				transition: {
					duration: 6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-multiply"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/10 to-cream/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute -top-24 -left-16 h-80 w-80 rounded-full",
				style: {
					background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.45), transparent 70%)",
					filter: "blur(30px)"
				},
				animate: {
					x: [
						0,
						30,
						0
					],
					y: [
						0,
						20,
						0
					],
					scale: [
						1,
						1.1,
						1
					]
				},
				transition: {
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute -bottom-24 -right-16 h-96 w-96 rounded-full",
				style: {
					background: "radial-gradient(circle, oklch(0.5 0.07 118 / 0.4), transparent 70%)",
					filter: "blur(40px)"
				},
				animate: {
					x: [
						0,
						-25,
						0
					],
					y: [
						0,
						-15,
						0
					],
					scale: [
						1,
						1.15,
						1
					]
				},
				transition: {
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			[...Array(8)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute h-1.5 w-1.5 rounded-full bg-gold/60",
				style: {
					left: `${10 + i * 11}%`,
					top: `${20 + i % 3 * 25}%`,
					boxShadow: "0 0 12px oklch(0.72 0.11 85 / 0.6)"
				},
				animate: {
					y: [
						0,
						-30,
						0
					],
					opacity: [
						.3,
						.9,
						.3
					],
					scale: [
						1,
						1.4,
						1
					]
				},
				transition: {
					duration: 4 + i % 4,
					repeat: Infinity,
					delay: i * .4,
					ease: "easeInOut"
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				animate: "show",
				variants: {
					hidden: {},
					show: { transition: {
						staggerChildren: .18,
						delayChildren: .2
					} }
				},
				className: "relative z-10 flex flex-col items-center gap-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: -12
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									duration: .8,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							}
						},
						className: "glass rounded-full px-5 py-2 flex items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { rotate: [
									0,
									20,
									-20,
									0
								] },
								transition: {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "h-3.5 w-3.5 text-gold",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.4em] text-olive-deep",
								children: "Wedding Invitation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { rotate: [
									0,
									-20,
									20,
									0
								] },
								transition: {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "h-3.5 w-3.5 text-gold",
									strokeWidth: 1.5
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								scale: .85
							},
							show: {
								opacity: 1,
								scale: 1,
								transition: {
									duration: 1.1,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							}
						},
						className: "relative flex items-center justify-center py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: olive_wreath_default,
								alt: "",
								"aria-hidden": true,
								className: "absolute h-72 w-72 object-contain opacity-90",
								animate: { rotate: 360 },
								transition: {
									duration: 140,
									repeat: Infinity,
									ease: "linear"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": true,
								className: "absolute h-56 w-56 rounded-full",
								style: {
									background: "radial-gradient(circle, oklch(1 0 0 / 0.7), oklch(0.94 0.03 90 / 0.3) 60%, transparent 75%)",
									filter: "blur(6px)"
								},
								animate: {
									scale: [
										1,
										1.06,
										1
									],
									opacity: [
										.6,
										.9,
										.6
									]
								},
								transition: {
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass relative z-10 flex flex-col items-center rounded-3xl px-8 py-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-script text-3xl text-olive leading-none",
										children: "you're invited"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display italic text-[44px] leading-[1.05] text-olive-deep mt-2 whitespace-nowrap",
										children: [
											"Shehan",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mx-2 font-script not-italic text-gold text-4xl",
												children: "&"
											}),
											"Nadali"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-6 bg-olive-deep/40" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase tracking-[0.45em] text-olive-deep/70",
												children: "Nov · 12 · 2026"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-6 bg-olive-deep/40" })
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: {
							hidden: {
								opacity: 0,
								y: 10
							},
							show: {
								opacity: 1,
								y: 0,
								transition: { duration: .9 }
							}
						},
						className: "text-[11px] uppercase tracking-[0.4em] text-olive/70 max-w-[240px]",
						children: "A celebration of love · Solis Hotel, Matara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									duration: .9,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							}
						},
						onClick: onOpen,
						whileHover: {
							scale: 1.04,
							y: -2
						},
						whileTap: { scale: .96 },
						className: "glass group relative mt-2 rounded-full px-8 py-3.5 text-olive-deep flex items-center gap-3 text-sm tracking-[0.15em] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								"aria-hidden": true,
								className: "absolute inset-y-0 -left-1/2 w-1/2",
								style: { background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.6), transparent)" },
								animate: { x: ["0%", "400%"] },
								transition: {
									duration: 2.8,
									repeat: Infinity,
									ease: "easeInOut",
									repeatDelay: 1
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								animate: { scale: [
									1,
									1.2,
									1
								] },
								transition: {
									duration: 1.4,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "h-4 w-4 fill-olive-deep",
									strokeWidth: 0
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: "Open Invitation"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: { opacity: 0 },
							show: {
								opacity: 1,
								transition: {
									duration: 1,
									delay: .4
								}
							}
						},
						className: "flex flex-col items-center gap-1.5 text-olive-deep/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] uppercase tracking-[0.4em]",
							children: "tap to reveal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { y: [
								0,
								6,
								0
							] },
							transition: {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
						})]
					})
				]
			})
		]
	});
}
function Content() {
	const scrollRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: scrollRef,
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { duration: .8 }
		},
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CeremonySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VenueSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingSection, {})
		]
	});
}
var EASE = [
	.22,
	1,
	.36,
	1
];
function SplitWord({ word, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex overflow-hidden pb-2",
		children: word.split("").map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				y: "110%",
				opacity: 0,
				filter: "blur(8px)"
			},
			animate: {
				y: "0%",
				opacity: 1,
				filter: "blur(0px)"
			},
			transition: {
				duration: 1.1,
				delay: delay + i * .06,
				ease: EASE
			},
			className: "inline-block",
			children: ch
		}, i))
	});
}
function HeroSection() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const veilOpacity = useTransform(scrollYProgress, [0, 1], [.35, .75]);
	const [tick, setTick] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setTick(/* @__PURE__ */ new Date()), 3e4);
		return () => clearInterval(id);
	}, []);
	const timeStr = tick.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative h-[100svh] w-full snap-start overflow-hidden bg-olive-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: bgY,
					scale: bgScale
				},
				initial: {
					scale: 1.18,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					duration: 2.4,
					ease: EASE
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: wedding_couple_default,
					alt: "",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover object-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: olive_hero_default,
					alt: "",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover mix-blend-soft-light opacity-60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity: veilOpacity },
				className: "absolute inset-0 bg-gradient-to-b from-olive-deep/60 via-olive-deep/10 to-olive-deep/85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,oklch(0.36_0.055_120_/_0.9),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,oklch(0.72_0.11_85_/_0.25),transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none",
				style: { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.85 0 0 0 0 0.7 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute -top-24 -left-16 h-72 w-72 rounded-full",
				style: {
					background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.55), transparent 70%)",
					filter: "blur(50px)"
				},
				animate: {
					x: [
						0,
						40,
						0
					],
					y: [
						0,
						20,
						0
					]
				},
				transition: {
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute -bottom-32 -right-16 h-96 w-96 rounded-full",
				style: {
					background: "radial-gradient(circle, oklch(0.5 0.07 118 / 0.6), transparent 70%)",
					filter: "blur(60px)"
				},
				animate: {
					x: [
						0,
						-30,
						0
					],
					y: [
						0,
						-20,
						0
					]
				},
				transition: {
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			[...Array(14)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				className: "absolute h-1 w-1 rounded-full bg-gold",
				style: {
					left: `${i * 37 % 100}%`,
					top: `${i * 53 % 100}%`,
					boxShadow: "0 0 10px oklch(0.72 0.11 85 / 0.9)"
				},
				animate: {
					y: [
						0,
						-40,
						0
					],
					opacity: [
						0,
						.9,
						0
					]
				},
				transition: {
					duration: 5 + i % 5,
					repeat: Infinity,
					delay: i * .35 % 6,
					ease: "easeInOut"
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: -30,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: 1,
					delay: .4,
					ease: EASE
				},
				className: "absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-dark rounded-full px-3 py-1.5 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[9px] uppercase tracking-[0.35em] text-cream/90",
						children: ["live · ", timeStr]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-dark rounded-full px-3 py-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] uppercase tracking-[0.35em] text-cream/90",
						children: "S · N \xA0·\xA0 MMXXVI"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				"aria-hidden": true,
				className: "absolute top-16 left-4 h-16 w-16 text-gold/70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M2 2 L2 22 M2 2 L22 2",
					stroke: "currentColor",
					strokeWidth: "1",
					initial: { pathLength: 0 },
					animate: { pathLength: 1 },
					transition: {
						duration: 1.4,
						delay: .6,
						ease: EASE
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "2",
					cy: "2",
					r: "2",
					fill: "currentColor",
					initial: { scale: 0 },
					animate: { scale: 1 },
					transition: { delay: 1.6 }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				"aria-hidden": true,
				className: "absolute top-16 right-4 h-16 w-16 text-gold/70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M62 2 L62 22 M62 2 L42 2",
					stroke: "currentColor",
					strokeWidth: "1",
					initial: { pathLength: 0 },
					animate: { pathLength: 1 },
					transition: {
						duration: 1.4,
						delay: .6,
						ease: EASE
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "62",
					cy: "2",
					r: "2",
					fill: "currentColor",
					initial: { scale: 0 },
					animate: { scale: 1 },
					transition: { delay: 1.6 }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					opacity,
					y: contentY
				},
				className: "relative z-10 flex h-full flex-col items-center justify-end pb-16 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .6,
							rotate: -20
						},
						animate: {
							opacity: 1,
							scale: 1,
							rotate: 0
						},
						transition: {
							duration: 1.4,
							delay: .2,
							ease: EASE
						},
						className: "relative mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "absolute -inset-2 rounded-full",
							style: {
								background: "conic-gradient(from 0deg, transparent, oklch(0.72 0.11 85 / 0.9), transparent 30%, transparent 60%, oklch(0.72 0.11 85 / 0.6), transparent 90%)",
								filter: "blur(2px)"
							},
							animate: { rotate: 360 },
							transition: {
								duration: 12,
								repeat: Infinity,
								ease: "linear"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-dark relative h-16 w-16 rounded-full flex items-center justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display italic text-2xl text-cream",
									children: "S"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-script text-lg text-gold -mx-0.5",
									children: "&"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display italic text-2xl text-cream",
									children: "N"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .4,
							ease: EASE
						},
						className: "font-script text-3xl text-gold",
						children: "forever begins"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display italic text-[64px] leading-[0.95] text-cream mt-3 tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWord, {
							word: "Shehan",
							delay: .55
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							scale: 0
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .8,
							delay: 1,
							ease: EASE
						},
						className: "font-script text-5xl text-gold my-1 drop-shadow-[0_2px_20px_oklch(0.72_0.11_85_/_0.6)]",
						children: "&"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display italic text-[64px] leading-[0.95] text-cream tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWord, {
							word: "Nadali",
							delay: 1.15
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.8,
							ease: EASE
						},
						className: "mt-8 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-dark rounded-full px-4 py-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									className: "h-3 w-3 text-gold",
									strokeWidth: 2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.35em] text-cream",
									children: "12 · Nov · 26"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-dark rounded-full px-4 py-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-3 w-3 text-gold",
									strokeWidth: 2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.35em] text-cream",
									children: "Matara"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 2
						},
						className: "mt-8 w-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "flex gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-cream/50",
							animate: { x: ["0%", "-50%"] },
							transition: {
								duration: 30,
								repeat: Infinity,
								ease: "linear"
							},
							children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-8 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Poruwa Ceremony" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10:00 AM" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Solis Hotel" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "November Twelfth" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Two Thousand Twenty Six" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "✦"
									})
								]
							}, k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 2.4
						},
						className: "mt-8 flex flex-col items-center gap-2 text-cream/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] uppercase tracking-[0.4em]",
							children: "scroll to explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-8 w-5 rounded-full border border-cream/40 flex items-start justify-center pt-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-1.5 w-1 rounded-full bg-gold",
								animate: {
									y: [
										0,
										12,
										0
									],
									opacity: [
										1,
										0,
										1
									]
								},
								transition: {
									duration: 1.8,
									repeat: Infinity,
									ease: "easeInOut"
								}
							})
						})]
					})
				]
			})
		]
	});
}
function PortraitSection() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
	const frameScale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.94,
		1,
		.96
	]);
	const glowOpacity = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.3,
		.8,
		.3
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapSection, {
		className: "relative bg-cream overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "relative px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					style: { opacity: glowOpacity },
					className: "absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full w-full rounded-full",
						style: {
							background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.55), transparent 70%)",
							filter: "blur(40px)"
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-olive/70",
					children: "The beloved couple"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display italic text-4xl text-center text-olive-deep mt-3",
						children: [
							"Shehan",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 font-script text-3xl text-gold",
								children: "&"
							}),
							"Nadali"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { scale: frameScale },
					className: "relative mt-8 mx-auto max-w-[340px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: olive_wreath_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] object-contain opacity-30",
						animate: { rotate: -360 },
						transition: {
							duration: 180,
							repeat: Infinity,
							ease: "linear"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 40,
							rotateX: 8
						},
						whileInView: {
							opacity: 1,
							y: 0,
							rotateX: 0
						},
						viewport: {
							once: true,
							margin: "-15%"
						},
						transition: {
							duration: 1.2,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "glass relative rounded-[2rem] p-3 shadow-[0_30px_80px_-20px_oklch(0.36_0.055_120_/_0.35)]",
						style: { transformPerspective: 1e3 },
						children: [[
							{
								top: "-8px",
								left: "-8px"
							},
							{
								top: "-8px",
								right: "-8px"
							},
							{
								bottom: "-8px",
								left: "-8px"
							},
							{
								bottom: "-8px",
								right: "-8px"
							}
						].map((pos, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "absolute h-3 w-3 rounded-full bg-gold",
							style: {
								...pos,
								boxShadow: "0 0 12px oklch(0.72 0.11 85 / 0.9)"
							},
							animate: {
								scale: [
									1,
									1.5,
									1
								],
								opacity: [
									.6,
									1,
									.6
								]
							},
							transition: {
								duration: 2.5,
								repeat: Infinity,
								delay: i * .3,
								ease: "easeInOut"
							}
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.6rem] aspect-[4/5]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: wedding_couple_default,
									alt: "Shehan and Nadali in traditional wedding attire",
									loading: "lazy",
									style: { y: imgY },
									className: "absolute inset-0 h-full w-full object-cover object-center"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									"aria-hidden": true,
									className: "absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none",
									style: { background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.35), transparent)" },
									animate: { x: ["0%", "500%"] },
									transition: {
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
										repeatDelay: 3
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-olive-deep/50 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-3 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass rounded-full px-4 py-1.5 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
												className: "h-3 w-3 text-gold fill-gold",
												strokeWidth: 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase tracking-[0.4em] text-olive-deep",
												children: "Forever"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
												className: "h-3 w-3 text-gold fill-gold",
												strokeWidth: 0
											})
										]
									})
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .4,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-olive/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-script text-2xl text-olive",
								children: "two souls, one story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-olive/40" })
						]
					})
				})
			]
		})
	});
}
function CoupleSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapSection, {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-8 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-olive/70",
					children: "Two hearts · one journey"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display italic text-4xl text-center text-olive-deep mt-4 leading-tight text-balance",
						children: "\"And in her smile I see something more beautiful than the stars.\""
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-olive/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "h-3 w-3 text-olive fill-olive",
								strokeWidth: 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-olive/40" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass mt-10 rounded-3xl p-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink/80 font-light",
							children: "With hearts full of joy and gratitude, we invite you to share in the beginning of our forever. Your presence will be the greatest blessing of our special day."
						})
					})
				})
			]
		})
	});
}
function CountdownSection() {
	const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SnapSection, {
		className: "relative bg-olive-deep text-cream overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 opacity-30",
			style: { background: "radial-gradient(60% 40% at 30% 20%, oklch(0.6 0.08 118 / 0.6), transparent 70%), radial-gradient(50% 40% at 80% 90%, oklch(0.72 0.11 85 / 0.4), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative px-8 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-cream/60",
					children: "Counting the moments"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display italic text-4xl text-center mt-3",
						children: ["Until we say ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "I do" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-4 gap-3",
					children: [
						{
							label: "Days",
							value: days
						},
						{
							label: "Hours",
							value: hours
						},
						{
							label: "Mins",
							value: minutes
						},
						{
							label: "Secs",
							value: seconds
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .15 + i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-dark rounded-2xl px-2 py-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									y: -6,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								className: "font-display text-3xl leading-none text-cream",
								children: String(it.value).padStart(2, "0")
							}, it.value), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] uppercase tracking-[0.25em] text-cream/60 mt-2",
								children: it.label
							})]
						})
					}, it.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .6,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center justify-center gap-2 text-cream/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-3.5 w-3.5",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.35em]",
							children: "Save the date"
						})]
					})
				})
			]
		})]
	});
}
function CeremonySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapSection, {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-8 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-olive/70",
					children: "The ceremony"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display italic text-4xl text-center text-olive-deep mt-3",
						children: "Poruwa Ceremony"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								}),
								label: "Date",
								value: "Thursday, November 12"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								}),
								label: "Auspicious Time",
								value: "10:00 AM"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
							delay: .4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								}),
								label: "Venue",
								value: "Solis Hotel, Matara"
							})
						})
					]
				})
			]
		})
	});
}
function VenueSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapSection, {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-olive/70",
					children: "The venue"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display italic text-4xl text-center text-olive-deep mt-3",
						children: "Solis Hotel"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 relative rounded-3xl overflow-hidden aspect-[4/5]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: venue_default,
								alt: "Solis Hotel Matara",
								loading: "lazy",
								width: 1216,
								height: 832,
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/10 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-4 bottom-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass rounded-2xl p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-olive-deep",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "h-4 w-4",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: "Matara, Sri Lanka"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://maps.google.com/?q=Solis+Hotel+Matara",
										target: "_blank",
										rel: "noreferrer",
										className: "mt-3 flex items-center justify-center gap-2 rounded-full bg-olive-deep text-cream py-2.5 text-xs uppercase tracking-[0.25em]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.5
										}), "Get Directions"]
									})]
								})
							})
						]
					})
				})
			]
		})
	});
}
function FamilySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapSection, {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-8 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.4em] text-olive/70",
					children: "With the blessings of"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display italic text-4xl text-center text-olive-deep mt-3",
						children: "Our Families"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyCard, {
							side: "Bride's Parents",
							father: "Mr. Nandana Rohan",
							mother: "Mrs. Champa Rajapaksha",
							phone: "077 507 7112"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyCard, {
							side: "Groom's Parents",
							father: "Mr. Suranga Lakmal",
							mother: "Mrs. Ayesha Liyanage",
							phone: "071 481 1715"
						})
					})]
				})
			]
		})
	});
}
function ClosingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SnapSection, {
		className: "relative bg-cream overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: olive_hero_default,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply scale-x-[-1]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/30 to-cream" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-8 py-24 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-script text-3xl text-olive",
						children: "with love"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display italic text-5xl text-olive-deep mt-2 leading-[1]",
							children: "See you there"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass mt-10 rounded-3xl px-8 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.35em] text-olive-deep/70",
								children: "12 · 11"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display italic text-3xl text-olive-deep mt-2",
								children: "Shehan & Nadali"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-2 text-olive/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-olive/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "h-3 w-3 text-olive fill-olive",
									strokeWidth: 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-olive/40" })
							]
						})
					})
				]
			})
		]
	});
}
function SnapSection({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `snap-start w-full ${className}`,
		children
	});
}
function FadeUp({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-10%"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function InfoCard({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-5 flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-12 w-12 rounded-full bg-olive-deep text-cream flex items-center justify-center flex-shrink-0",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.3em] text-olive/70",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display italic text-xl text-olive-deep mt-0.5",
				children: value
			})]
		})]
	});
}
function FamilyCard({ side, father, mother, phone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-3xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.35em] text-olive/70 text-center",
				children: side
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-1 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display italic text-lg text-olive-deep",
						children: father
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-xl text-gold",
						children: "&"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display italic text-lg text-olive-deep",
						children: mother
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:${phone.replace(/\s/g, "")}`,
				className: "mt-5 flex items-center justify-center gap-2 rounded-full bg-cream/60 border border-olive/20 py-2.5 text-olive-deep text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "h-3.5 w-3.5",
					strokeWidth: 1.5
				}), phone]
			})
		]
	});
}
//#endregion
export { Invitation as component };
