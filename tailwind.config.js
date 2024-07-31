const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            screens: {
                tablet: {
                    max: "1200px",
                },
                phone: {
                    max: "768px",
                },
                "sm-phone": {
                    max: "500px",
                },
            },

            animation: {
                skeleton: "skeletonframes 1s linear infinite alternate",
                arrowright: "arrowright 0.7s linear infinite alternate",
                arrowleft: "arrowleft 0.7s linear infinite alternate",
                updown1: "updown1 1s linear infinite alternate",
                updown2: "updown2 8s linear infinite alternate",
                "slide-up": "slideUp 1s ease backwards",
            },

            keyframes: {
                slideUp: {
                    "0%": {
                        transform: "translateY(6rem)",
                        opacity: "0",
                    },

                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },

                skeletonframes: {
                    "0%": {
                        "background-color": "hsla(200, 10%, 70%, .8)",
                    },

                    "100%": {
                        "background-color": "hsla(200, 10%, 90%, .8)",
                    },
                },
                arrowright: {
                    "0%": {
                        transform: "translateX(0px)",
                    },

                    "100%": {
                        transform: "translateX(18px)",
                    },
                },
                arrowleft: {
                    "0%": {
                        transform: "translateX(0px)",
                    },

                    "100%": {
                        transform: "translateX(-18px)",
                    },
                },
                updown1: {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "100%": {
                        transform: "translateY(15px)",
                    },
                },
                updown2: {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "25%": {
                        transform: "translateY(-35px)",
                    },
                    "50%": {
                        transform: "translateY(0px)",
                    },
                    "75%": {
                        transform: "translateY(35px)",
                    },

                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
            },

            colors: {
                accent: {
                    DEFAULT: "#DC0032",
                    100: "#84001E",
                    200: "#84001E",
                    300: "#B00028",
                    400: "#DC0032",
                    500: "#E01A47",
                    600: "#E3335B",
                    700: "#E74D70",
                    800: "#F5B3C2",
                    900: "#FCE6EB",
                    950: "#fdf2f5",
                },

                primary: {
                    DEFAULT: "#FBAE3C",
                    100: "#976824",
                    200: "#C98B30",
                    300: "#E29D36",
                    400: "#FBAE3C",
                    500: "#FCBE63",
                    600: "#FDCE8A",
                    700: "#FDD79E",
                    800: "#fee7c5",
                    900: "#fff7ec",
                },

                "cs-dark": {
                    DEFAULT: "#0A2540",
                    100: "#061626",
                    200: "#081E33",
                    300: "#09213A",
                    400: "#0A2540",
                    500: "#233B53",
                },

                "cs-white": {
                    200: "#F6F9FC",
                    100: "#EFEFEF",
                },
            },
        },
    },
    plugins: [],
};
