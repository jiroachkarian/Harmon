import Navbar from "./component/navbar";
export default function Home() {
  return (
    <>
      <main>
        <h1>KAK</h1>
        <div className="containers">
          <Navbar
            logoContent="LogoZ"
            homeContent="Home Page"
            aboutContent="About Us"
            contactContent="Get in Touch"></Navbar>
        </div>
      </main>
    </>
  );
}
