import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-hero">
        <div>writing</div>
        <div className="homeimg"><img src="./burger.png" alt=""/></div>
      </div>
    </div>
  );
}
