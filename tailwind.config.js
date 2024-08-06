/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        softBeige: '#F5F5DC',
        richGreen: '#264F0B',
        brightYellow: '#FFD700',
      },
      backgroundImage: {
        'hero-pattern': "url('assets/pexels-gabby-k-5273676.jpg')",
      },
    },
  },
  plugins: [],
};
