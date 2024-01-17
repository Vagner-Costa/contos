/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      '14':'14px',
      '16':'16px',
      '18':'18px',
      '20':'20px',
      '22':'22px',
      '24':'24px',
      '30':'30px',
      '35':'35px',
      '40':'40px',
      '50':'50px',
      '60':'60px',
    },
    // #393d42
    colors:{
      preto:"#171718",
      branco:'#fff',
      cinza_e:"#484848",
      cinza_m:"#6a6e73",
      cinza_c:"#808080",
      vermelho:"#c12e1a",
      verde:"#3f7b32"

    },
    borderRadius: {
      "5": "5px",
      "7": "7px",
      "10": "10px",
      "15": "15px",
    },
    screens:{
      'mob':'640px',
      'tab':'768px',
      'lap':'1024px',
      'desk':'1280px'
    },
    spacing:{
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "5": "5px",
      "7": "7px",
      "10": "10px",
      "15": "15px",
      "20": "20px",
      "25": "25px",
      "30": "30px",
      "35": "35px",
      "40": "40px",
      "45": "45px",
      "50": "50px",
      "60": "60px",
      "70": "70px",
      "80": "80px",
      "90": "90px",
      "100": "100px",
    }

  },
  plugins: [],
}

