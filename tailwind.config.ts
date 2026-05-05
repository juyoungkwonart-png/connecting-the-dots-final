import type { Config } from "tailwindcss";

const easeResolve = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Apple-story design system — tokens mirror `app/globals.css` `:root`.
 * Single accent — neon green. Motion uses `--ease-resolve` only (see globals).
 */
export default {
  theme: {
    extend: {
      colors: {
        /** Page background (warm off-white) */
        background: "#FAF8F5",
        /** Alias — same hex */
        canvas: "#FAF8F5",
        paper: "#FAF8F5",
        primary: "#1A1A1A",
        /** Single accent — dot + interactive emphasis */
        accent: "#39FF14",
        dot: "#39FF14",
        /** Constellation + dark beats (deep brown) */
        navy: "#2C1B16",
        surface: "#F0EEEB",
        footerMuted: "#575757",
        /** Legacy aliases */
        ink: "#1A1A1A",
        signal: "#39FF14",
        charcoal: "#2C1B16",
        "charcoal-elevated": "#2C1B16",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif-display)",
          "Georgia",
          "serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "monospace",
        ],
      },
      /**
       * Raised type scale — `text-sm`/`text-base`/`text-lg` align to 16 / 18 / 20 px
       * at the default root. Pair layout body with `text-sm lg:text-base` for 16→18 copy.
       */
      fontSize: {
        sm: ["16px", { lineHeight: "1.6" }],
        base: ["18px", { lineHeight: "1.6" }],
        lg: ["20px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        caption: [
          "16px",
          {
            lineHeight: "1.6",
            letterSpacing: "0.07em",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        /** 8px grid extensions for generous section rhythm */
        18: "144px",
        20: "160px",
        24: "192px",
      },
      transitionTimingFunction: {
        resolve: easeResolve,
        ds: easeResolve,
        editorial: easeResolve,
      },
      transitionDuration: {
        fast: "300ms",
        medium: "600ms",
        slow: "1200ms",
      },
      keyframes: {
        reveal: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 0.75rem, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "pulse-accent": {
          "0%, 100%": { opacity: "0.72" },
          "50%": { opacity: "1" },
        },
        /** Unmute control: 1 → 1.15 scale, 2s, editorial ease in CSS */
        "pulse-unmute": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        reveal: `reveal 1.4s ${easeResolve} both`,
        "pulse-signal": `pulse-accent 3.6s ${easeResolve} infinite`,
        "pulse-unmute": `pulse-unmute 2s ${easeResolve} infinite`,
      },
    },
  },
} satisfies Config;
