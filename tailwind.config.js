/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            sans: ['Gilroy', 'sans-serif'],
        },
        extend: {
            colors: {
                'black': '#161A1A',
                'orange': '#F39600',
                'smoky': '#F0F0F3',
                'light-gray': '#8C8C8C',
                'black2': '#1E2222',
                'gray2':'#c8c8c8'
            },
            boxShadow: {
                1: '-6px -6px 18px #FFFFFF, 9px 9px 18px rgba(174, 174, 192, 0.4)',
                2: '-14px -14px 41px #ffffff, 21px 21px 41px rgba(174, 174, 192, 0.4)',
                3: '0px 0px 75px 20px rgba(0, 0, 0, 0.35)',
                4: 'inset -12.6667px -12.6667px 12.6667px rgba(255, 255, 255, 0.7), inset 12.6667px 12.6667px 25.3333px rgba(174, 174, 192, 0.2)',
                5: 'inset -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2)',
                6: '-7.08531px -7.08531px 21.2559px #FFFFFF, 10.628px 10.628px 21.2559px rgba(174, 174, 192, 0.4)',
                7: 'inset -12.6667px -12.6667px 12.6667px rgba(33, 35, 35, 0.7), inset 12.6667px 12.6667px 25.3333px rgba(11, 13, 13, 0.2)',
                8: '-4.82236px -4.82236px 14.4671px #FFFFFF, 7.23354px 7.23354px 14.4671px rgba(174, 174, 192, 0.4)',
                9: 'inset 0px -200px 80px rgba(0, 0, 0, 0.5)',
                10:'inset -5px -5px 10px rgba(255, 255, 255, 0.7), inset 5px 5px 25px rgba(174, 174, 192, 0.2)',
                11:'-5.20833px -5.20833px 15.625px #FFFFFF, 7.8125px 7.8125px 10.4167px rgba(174, 174, 192, 0.4)',
                12:'-3.33333px -3.33333px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.4)',
                13: '-2px -2px 6px #262929, 3px 3px 6px #0B0D0D'
            },
            padding: {
                '70px': '70px',
            },
            content: {
                'triangle': 'url("@images/icons/triangle.svg")',
            },
            backgroundImage: {
                'bg-main': "url('@images/bg-main.svg')",
            }

        },

        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
            'xs': {'max':'374px'}
        },
        container: {
            center: true,
            padding: '20px',
        },


    },
  plugins: [],
}

