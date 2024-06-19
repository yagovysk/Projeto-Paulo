import { Sobre } from "../../Components/About/Sobre";
import { Menu } from "../../Components/Menu/Menu";
import { Orçamento } from "../../Components/Orçamento/Orçamento";
import { Photos } from "../../Components/Photos/Photos";
import { Services } from "../../Components/Services/Services";
import { Start } from "../../Components/Start/Start";
import "./Home.css";

export function Home() {
  return (
    <main className="main-home">
      <section className="section-menu-start">
        <Menu />
        <Start />
      </section>
      <Services />
      <Sobre />
      <Orçamento />
      <Photos />
    </main>
  );
}
