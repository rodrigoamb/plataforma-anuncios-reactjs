import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

export default function Inicio() {
  return (
    <div>
      <Navbar />
      <Card texto={"Todos os anúncios"} />
    </div>
  );
}
