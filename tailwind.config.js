/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        darkCol: "#111827",
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        darkBlue: "#0379FF",
        navCol: "#1E2837",
        darkLight: "#2F3649",
        lightDark: "#E2E8F0",
        Abuabu: "#F9FAFB",
        BgInput: "#374051",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        darkBlue: "#0379FF",
        textDark: "#9CA3AF",
        greyLight: "#6A7281",
        Abuabu: "#F9FAFB",
        primary: "#F7F9FF",
        secondary: "var(--color-text-secondary)",
        lightDark: "#F7F9FF",
      },
    },
  },
  plugins: [],
};
