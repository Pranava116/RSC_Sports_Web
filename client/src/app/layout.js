export const metadata = {
    title: 'My App',
    description: 'My App is a...',
  }
   
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body  style={{
            backgroundRepeat : "no-repeat",
            backgroundImage: "radial-gradient(80% 80% at 50% 0%, #020617, #001380)"
        }}  className="bg-[#001380]  w-screen h-screen overflow-x-hidden" >
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }


//   "background-repeat: no-repeat; background-image: radial-gradient(80% 80% at 50% 0%, #020617, #001380);