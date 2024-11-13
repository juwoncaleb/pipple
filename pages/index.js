import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import LandingPage from "./LandingPage";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div className=" whole">
      <LandingPage/>
      
    </div>
  );
}
