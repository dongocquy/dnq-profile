import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-light': '#ffd700',
        'gold-dark': '#b8860b',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
        'ombre-shift': 'ombreShift 3s ease-in-out infinite',
        'color-shift': 'colorShift 4s linear infinite',
        'ombre-color-shift': 'ombreColorShift 2s ease-in-out infinite',
        'ripple-wave': 'rippleWave 0.8s ease-out',
        'mobile-bounce': 'mobileBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)',
          },
        },
        ripple: {
          '0%': {
            width: '0',
            height: '0',
            opacity: '1',
          },
          '100%': {
            width: '300px',
            height: '300px',
            opacity: '0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        badgePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
        ombreShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        colorShift: {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            filter: 'hue-rotate(180deg)',
          },
          '100%': {
            filter: 'hue-rotate(360deg)',
          },
        },
        ombreColorShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(30deg)',
          },
        },
        rippleWave: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        mobileBounce: {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
          '70%': {
            transform: 'scale(0.9)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #d4af37 100%)',
        'gradient-luxury': 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
        'gradient-gold-purple': 'linear-gradient(135deg, #d4af37 0%, #9333ea 50%, #ec4899 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.6)',
        'glow-strong': '0 0 30px rgba(212, 175, 55, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)',
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.5)',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
}

export default config
