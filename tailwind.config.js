/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateRows: {
        footer: '200px 400px',
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        softBeige: '#F5F5DC',
        richGreen: '#264F0B',
        brightYellow: '#FFD700',
        lightGrey: '#E5E5E5',
      },
      backgroundImage: {
        'hero-pattern': "url('assets/pexels-gabby-k-5273676.jpg')",
        men_collection: "url('assets/men_collection_photo.jpg')",
      },
    },
  },
  plugins: [],
};
