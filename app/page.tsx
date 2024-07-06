import Header from '../components/Header';
import Banner from '../components/Banner';
import Video from '../components/Video';
import Learn from '../components/Learn';
import Includes from '../components/Includes';
import For from '../components/For';
import About from '../components/About';
import JoinUs from '../components/JoinUs';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main className="main-bg min-h-screen text-white">
      <Header />
      <Banner />
      <Video />
      <Learn />
      <Includes />
      <For />
      <About />
      <JoinUs />
      <Gallery />
      <Footer />
    </main>
  );
}
