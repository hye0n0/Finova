/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 다크모드를 class 기반으로 설정
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
              primary: '#76ABAE', // 신뢰감을 주는 파란색
              secondary: '#31363F', // 다크모드 배경색
              mblue: '#76ABAE', // 기본 파란색
              mdark: '#31363F', // 기본 다크모드 배경색
              mlight: '#EEEEEE', // 기본 배경
              mblcak: '#222831' // 기본 블랙
          },
      },
  },
  plugins: [],
}

