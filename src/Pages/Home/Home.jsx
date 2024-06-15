import { Menu } from "../../Components/Menu/Menu";
import { Start } from "../../Components/Start/Start";
import "./Home.css";

export function Home() {
  return (
    <main className="main-home">
      <section className="section-menu-start">
        <Menu />
        <Start />
      </section>
    </main>
  );
}
