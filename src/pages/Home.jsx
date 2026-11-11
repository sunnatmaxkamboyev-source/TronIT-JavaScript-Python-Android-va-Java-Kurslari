import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Footer />
    </>
  );
}

export default Home;
