import AboutUs from "@/components/aboutus";
import MaxWrapper from "@/components/common/MaxWrapper";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function Main() {
  return (
    <main>
      <Navbar />
      <MaxWrapper>
        <Home />
        <AboutUs />
      </MaxWrapper>
      <Footer />
    </main>
  );
}
