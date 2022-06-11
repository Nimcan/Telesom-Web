module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        brand:{
            green:"#219e2f",
            lightGreen:"#97D700",
            yellow:"#ffff00"
        }
      },
      background:{
      bgImage: "src('./images/bg.jpg')"
      }
    },
    
  },
  plugins: [],
}
