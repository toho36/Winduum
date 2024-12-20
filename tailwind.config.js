/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      rounded: {
        'none': 'var(--rounded-none)',
        'base': 'var(--rounded-base)',
        'sm': 'var(--rounded-sm)',
        'md': 'var(--rounded-md)',
        'lg': 'var(--rounded-lg)',
        'xl': 'var(--rounded-xl)',
        '2xl': 'var(--rounded-2xl)',
        '3xl': 'var(--rounded-3xl)',
        'full': 'var(--rounded-full)',
        'xs': 'var(--rounded-xs)',
        '4xl': 'var(--rounded-4xl)',
        '5xl': 'var(--rounded-5xl)',
        '6xl': 'var(--rounded-6xl)',
      },
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
        '9xl': 'var(--text-9xl)',
      },
      maxWidth: {
        '0': 'var(--max-width-0)',
        'xs': 'var(--max-width-xs)',
        'sm': 'var(--max-width-sm)',
        'md': 'var(--max-width-md)',
        'lg': 'var(--max-width-lg)',
        'xl': 'var(--max-width-xl)',
        '2xl': 'var(--max-width-2xl)',
        '3xl': 'var(--max-width-3xl)',
        '4xl': 'var(--max-width-4xl)',
        '5xl': 'var(--max-width-5xl)',
        '6xl': 'var(--max-width-6xl)',
        '7xl': 'var(--max-width-7xl)',
        'default': '1312px',
      },
      opacity: {
        0: 'var(--opacity-0)',
        5: 'var(--opacity-5)',
        10: 'var(--opacity-10)',
        20: 'var(--opacity-20)',
        25: 'var(--opacity-25)',
        30: 'var(--opacity-30)',
        40: 'var(--opacity-40)',
        50: 'var(--opacity-50)',
        60: 'var(--opacity-60)',
        70: 'var(--opacity-70)',
        75: 'var(--opacity-75)',
        80: 'var(--opacity-80)',
        90: 'var(--opacity-90)',
        95: 'var(--opacity-95)',
        100: 'var(--opacity-100)',
      },
      spacing: {
        0: 'var(--spacing-0)',
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
        6: 'var(--spacing-6)',
        7: 'var(--spacing-7)',
        8: 'var(--spacing-8)',
        9: 'var(--spacing-9)',
        10: 'var(--spacing-10)',
        11: 'var(--spacing-11)',
        12: 'var(--spacing-12)',
        14: 'var(--spacing-14)',
        16: 'var(--spacing-16)',
        20: 'var(--spacing-20)',
        24: 'var(--spacing-24)',
        28: 'var(--spacing-28)',
        32: 'var(--spacing-32)',
        36: 'var(--spacing-36)',
        40: 'var(--spacing-40)',
        44: 'var(--spacing-44)',
        48: 'var(--spacing-48)',
        52: 'var(--spacing-52)',
        56: 'var(--spacing-56)',
        60: 'var(--spacing-60)',
        64: 'var(--spacing-64)',
        72: 'var(--spacing-72)',
        80: 'var(--spacing-80)',
        96: 'var(--spacing-96)',
        0.5: 'var(--spacing-0-5)',
        1.5: 'var(--spacing-1-5)',
        2.5: 'var(--spacing-2-5)',
        3.5: 'var(--spacing-3-5)',
      },
      skew: {
        0: 'var(--skew-0)',
        1: 'var(--skew-1)',
        2: 'var(--skew-2)',
        3: 'var(--skew-3)',
        6: 'var(--skew-6)',
        12: 'var(--skew-12)',
      },
      borderWidth: {
        0: 'var(--border-0)',
        1: 'var(--border-1)',
        1.5: '1.5px',
        2: 'var(--border-2)',
        4: 'var(--border-4)',
        8: 'var(--border-8)',
      },
      blur: {
        'none': 'var(--blur-none)',
        'sm': 'var(--blur-sm)',
        'base': 'var(--blur-base)',
        'md': 'var(--blur-md)',
        'lg': 'var(--blur-lg)',
        'xl': 'var(--blur-xl)',
        '2xl': 'var(--blur-2xl)',
        '3xl': 'var(--blur-3xl)',
      },

      spacing: {
        'px': 'var(--spacing-px)',
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
      },
      colors: {
        'black': 'var(--color-black)',
        'white': 'var(--color-white)',
        'slate': {
          50: 'var(--color-slate-50)',
          100: 'var(--color-slate-100)',
          200: 'var(--color-slate-200)',
          300: 'var(--color-slate-300)',
          400: 'var(--color-slate-400)',
          500: 'var(--color-slate-500)',
          600: 'var(--color-slate-600)',
          700: 'var(--color-slate-700)',
          800: 'var(--color-slate-800)',
          900: 'var(--color-slate-900)',
          950: 'var(--color-slate-950)',
        },
        'gray': {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
        'zinc': {
          50: 'var(--color-zinc-50)',
          100: 'var(--color-zinc-100)',
          200: 'var(--color-zinc-200)',
          300: 'var(--color-zinc-300)',
          400: 'var(--color-zinc-400)',
          500: 'var(--color-zinc-500)',
          600: 'var(--color-zinc-600)',
          700: 'var(--color-zinc-700)',
          800: 'var(--color-zinc-800)',
          900: 'var(--color-zinc-900)',
          950: 'var(--color-zinc-950)',
        },
        'neutral': {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
        },
        'stone': {
          50: 'var(--color-stone-50)',
          100: 'var(--color-stone-100)',
          200: 'var(--color-stone-200)',
          300: 'var(--color-stone-300)',
          400: 'var(--color-stone-400)',
          500: 'var(--color-stone-500)',
          600: 'var(--color-stone-600)',
          700: 'var(--color-stone-700)',
          800: 'var(--color-stone-800)',
          900: 'var(--color-stone-900)',
          950: 'var(--color-stone-950)',
        },
        'red': {
          50: 'var(--color-red-50)',
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)',
          950: 'var(--color-red-950)',
        },
        'orange': {
          50: 'var(--color-orange-50)',
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
          950: 'var(--color-orange-950)',
        },
        'amber': {
          50: 'var(--color-amber-50)',
          100: 'var(--color-amber-100)',
          200: 'var(--color-amber-200)',
          300: 'var(--color-amber-300)',
          400: 'var(--color-amber-400)',
          500: 'var(--color-amber-500)',
          600: 'var(--color-amber-600)',
          700: 'var(--color-amber-700)',
          800: 'var(--color-amber-800)',
          900: 'var(--color-amber-900)',
          950: 'var(--color-amber-950)',
        },
        'yellow': {
          50: 'var(--color-yellow-50)',
          100: 'var(--color-yellow-100)',
          200: 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
          500: 'var(--color-yellow-500)',
          600: 'var(--color-yellow-600)',
          700: 'var(--color-yellow-700)',
          800: 'var(--color-yellow-800)',
          900: 'var(--color-yellow-900)',
          950: 'var(--color-yellow-950)',
        },
        'green': {
          50: 'var(--color-green-50)',
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
          800: 'var(--color-green-800)',
          900: 'var(--color-green-900)',
          950: 'var(--color-green-950)',
        },
        'teal': {
          50: 'var(--color-teal-50)',
          100: 'var(--color-teal-100)',
          200: 'var(--color-teal-200)',
          300: 'var(--color-teal-300)',
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          600: 'var(--color-teal-600)',
          700: 'var(--color-teal-700)',
          800: 'var(--color-teal-800)',
          900: 'var(--color-teal-900)',
          950: 'var(--color-teal-950)',
        },
        'cyan': {
          50: 'var(--color-cyan-50)',
          100: 'var(--color-cyan-100)',
          200: 'var(--color-cyan-200)',
          300: 'var(--color-cyan-300)',
          400: 'var(--color-cyan-400)',
          500: 'var(--color-cyan-500)',
          600: 'var(--color-cyan-600)',
          700: 'var(--color-cyan-700)',
          800: 'var(--color-cyan-800)',
          900: 'var(--color-cyan-900)',
          950: 'var(--color-cyan-950)',
        },
        'sky': {
          50: 'var(--color-sky-50)',
          100: 'var(--color-sky-100)',
          200: 'var(--color-sky-200)',
          300: 'var(--color-sky-300)',
          400: 'var(--color-sky-400)',
          500: 'var(--color-sky-500)',
          600: 'var(--color-sky-600)',
          700: 'var(--color-sky-700)',
          800: 'var(--color-sky-800)',
          900: 'var(--color-sky-900)',
          950: 'var(--color-sky-950)',
        },
        'blue': {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
          950: 'var(--color-blue-950)',
        },
        'indigo': {
          50: 'var(--color-indigo-50)',
          100: 'var(--color-indigo-100)',
          200: 'var(--color-indigo-200)',
          300: 'var(--color-indigo-300)',
          400: 'var(--color-indigo-400)',
          500: 'var(--color-indigo-500)',
          600: 'var(--color-indigo-600)',
          700: 'var(--color-indigo-700)',
          800: 'var(--color-indigo-800)',
          900: 'var(--color-indigo-900)',
          950: 'var(--color-indigo-950)',
        },
        'violet': {
          50: 'var(--color-violet-50)',
          100: 'var(--color-violet-100)',
          200: 'var(--color-violet-200)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
          500: 'var(--color-violet-500)',
          600: 'var(--color-violet-600)',
          700: 'var(--color-violet-700)',
          800: 'var(--color-violet-800)',
          900: 'var(--color-violet-900)',
          950: 'var(--color-violet-950)',
        },
        'purple': {
          50: 'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
          950: 'var(--color-purple-950)',
        },
        'fuchsia': {
          50: 'var(--color-fuchsia-50)',
          100: 'var(--color-fuchsia-100)',
          200: 'var(--color-fuchsia-200)',
          300: 'var(--color-fuchsia-300)',
          400: 'var(--color-fuchsia-400)',
          500: 'var(--color-fuchsia-500)',
          600: 'var(--color-fuchsia-600)',
          700: 'var(--color-fuchsia-700)',
          800: 'var(--color-fuchsia-800)',
          900: 'var(--color-fuchsia-900)',
          950: 'var(--color-fuchsia-950)',
        },
        'pink': {
          50: 'var(--color-pink-50)',
          100: 'var(--color-pink-100)',
          200: 'var(--color-pink-200)',
          300: 'var(--color-pink-300)',
          400: 'var(--color-pink-400)',
          500: 'var(--color-pink-500)',
          600: 'var(--color-pink-600)',
          700: 'var(--color-pink-700)',
          800: 'var(--color-pink-800)',
          900: 'var(--color-pink-900)',
          950: 'var(--color-pink-950)',
        },
        'rose': {
          50: 'var(--color-rose-50)',
          100: 'var(--color-rose-100)',
          200: 'var(--color-rose-200)',
          300: 'var(--color-rose-300)',
          400: 'var(--color-rose-400)',
          500: 'var(--color-rose-500)',
          600: 'var(--color-rose-600)',
          700: 'var(--color-rose-700)',
          800: 'var(--color-rose-800)',
          900: 'var(--color-rose-900)',
          950: 'var(--color-rose-950)',
        },
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'main': {
          DEFAULT: 'var(--color-main)',
          primary: 'var(--color-main-primary)',
          secondary: 'var(--color-main-secondary)',
          tertiary: 'var(--color-main-tertiary)',
        },
        'body': {
          body: 'var(--color-body)',
          primary: 'var(--color-body-primary)',
          secondary: 'var(--color-body-secondary)',
          tertiary: 'var(--color-body-tertiary)',
        },
        'success': 'var(--color-success)',
        'error': 'var(--color-error)',
        'warning': 'var(--color-warning)',
        'info': 'var(--color-info)',
        'dark': 'var(--color-dark)',
        'light': 'var(--color-light)',
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'chart': {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
