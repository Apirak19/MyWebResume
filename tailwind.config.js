/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        colors: {
            // Grays
            black: "#000000",
            "gray-dark": "#273444",
            "true-gray": "#6b7280",
            "cool-gray": "#95a5a6",
            "warm-gray": "#8e6e53",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
            "light-gray": "#f5f5f5",
            white: "#ffffff",

            // Reds
            "deep-red": "#b71c1c",
            red: "#e74c3c",
            coral: "#ff6f61",
            tomato: "#ff6347",
            orangered: "#ff4500",

            // Oranges
            "deep-orange": "#ff5722",
            orange: "#ffa500",
            amber: "#ffc107",
            "deep-amber": "#ff8f00",
            gold: "#ffd700",
            peachpuff: "#ffdab9",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",

            // Yellows
            yellow: "#ffc82c",
            "light-yellow": "#ffffe0",
            papayawhip: "#ffefd5",
            "light-yellow-accent": "#fff176",
            "yellow-accent": "#ffc400",
            "lime-accent": "#c6ff00",

            // Greens
            "deep-green": "#13ce66",
            green: "#00ff00",
            lime: "#00ff00",
            "light-green": "#8bc34a",
            "green-accent": "#00c853",
            "light-green-accent": "#9bebef",

            // Teals
            teal: "#008080",
            "deep-teal": "#006064",
            "teal-accent": "#1de9b6",
            "deep-teal-accent": "#00474b",

            // Cyans
            cyan: "#00bcd4",
            "deep-cyan": "#0097a7",
            "light-blue-accent": "#00b0ff",
            "cyan-accent": "#00e5ff",
            "deep-cyan-accent": "#00474b",

            // Blues
            blue: "#1fb6ff",
            "deep-blue": "#1f6fff",
            "deep-indigo": "#283593",
            indigo: "#4b0082",
            violet: "#9400d3",
            purple: "#7e5bef",
            "deep-purple": "#673ab7",
            "blue-accent": "#2962ff",
            "deep-indigo-accent": "#2a265f",

            // Pinks & Magentas
            pink: "#ff49db",
            "light-pink": "#ffb6c1",
            hotpink: "#ff69b4",
            rose: "#e91e63",
            fuchsia: "#ff00ff",
            "deep-pink": "#c2185b",
            "rose-accent": "#c2185b",
            "fuchsia-accent": "#d500f9",
            "deep-pink-accent": "#880e4f",

            // Other Colors
            "deep-violet": "#120a8f",
            "deep-purple-accent": "#400080",
            "deep-orange-accent": "#ff3d00",
            "deep-orange-accent": "#ff6e40",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            "mono": ["Roboto Mono", "monospace"],
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            screens: {
                // Small devices like mobile phones
                xs: { max: "575px" },

                sm: { min: "576px", max: "767px" },

                // Tablets
                md: { min: "768px", max: "1023px" },

                // Laptops and small desktops
                lg: { min: "1024px", max: "1279px" },

                // Larger desktops
                xl: { min: "1280px", max: "1535px" },

                // Custom screen size
                "2xl": { min: "1536px" },
            },
        },
    },
};
