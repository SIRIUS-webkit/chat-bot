import ChatBot from "@/components/ChatBot";
import AboutUs from "@/components/aboutus";
import MaxWrapper from "@/components/common/MaxWrapper";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import { ChatProvider } from "@/context/ChatContext";

export default function Main() {
  return (
    <main className="">
      <Navbar />
      <MaxWrapper>
        <Home />
        <AboutUs />
      </MaxWrapper>

      <Footer />
    </main>
  );
}
