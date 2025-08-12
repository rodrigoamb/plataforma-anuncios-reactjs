import { useState } from "react";
import Card from "../components/Card/Card.jsx";
import Drawer from "../components/Drawer/Drawer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <SectionHeader setOpen={setOpen} />
      <Card texto={"Meus anúncios"} />

      <Drawer open={open} setOpen={setOpen} />
    </div>
  );
}
