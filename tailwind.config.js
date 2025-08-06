module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "General Sans",
          // "ui-sans-serif",
          // "system-ui",
          // "sans-serif",
          // '"Apple Color Emoji"',
          // '"Segoe UI Emoji"',
          // '"Segoe UI Symbol"',
          // '"Noto Color Emoji"',
        ],
        noodle: ["BigNoodleTitling", "sans-serif"],
        mikoena: ["Mikoena-Regular", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
   animation: {
        marquee: 'marquee 5s linear infinite',  //  speed
        marquee2: 'marquee2 5s linear infinite 3s',  //  3s delay for divs 2 and 4
        marquee3: 'marquee3 10s linear infinite ',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },  //direction (left to right)
          '100%': { transform: 'translateX(200%)' }, 
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },  // direction (left to right)
          '100%': { transform: 'translateX(200%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(-100%)' },  // direction (left to right)
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
