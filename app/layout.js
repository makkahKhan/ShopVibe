import { Philosopher, Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/Redux/Provider";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Toaster } from "react-hot-toast";


const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${philosopher.variable} ${poppins.variable} min-h-screen flex flex-col `}>
         <ReduxProvider>
         <Navbar/>   
            {children} 
             <Toaster/>   
        <Footer/>

          </ReduxProvider>
      </body>
    </html>
  );
}



{/* <body className="min-h-screen flex flex-col">
  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body> */}