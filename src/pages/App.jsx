import { useState } from "react";
import Card from "../components/Card/Card.jsx";
import Drawer from "../components/Drawer/Drawer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import Modal from "../components/Modal/Modal.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Navbar />
      <SectionHeader setOpen={setOpen} />
      <Card texto={"Meus anúncios"} setOpenModal={setOpenModal} />

      <Drawer open={open} setOpen={setOpen} />
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
