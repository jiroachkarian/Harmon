import Navbar from "./component/navbar";
export default function Home() {
  return (
    <>
      <main>
        <h1 style={{ color: "white" }}>Components</h1>
        <div className="containers">
          <Navbar
            logoContent="LogoZ"
            homeContent="Home Page"
            aboutContent="About Us"
            contactContent="Get in Touch"></Navbar>
          <pre>
            <code>{"<Navbar></Navbar>"}</code>
          </pre>
        </div>
      </main>
    </>
  );
}
