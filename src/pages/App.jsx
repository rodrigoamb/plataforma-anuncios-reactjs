import { useState, useEffect } from "react";
import Card from "../components/Card/Card.jsx";
import Drawer from "../components/Drawer/Drawer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import Modal from "../components/Modal/Modal.jsx";
import FormAddAnuncios from "../components/FormAddAnuncios/FormAddAnuncios.jsx";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataAnuncios, setDataAnuncios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAnuncios() {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/getAllMyAnuncios?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setDataAnuncios(data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao buscar anúncios");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAnuncios();
  }, []);

  console.log(dataAnuncios);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <SectionHeader setOpen={setOpen} />
          <Card
            texto={"Meus anúncios"}
            setOpenModal={setOpenModal}
            dataAnuncios={dataAnuncios}
          />

          <Drawer
            open={open}
            setOpen={setOpen}
            drawerTitle={"Adicionar anúncio"}
          >
            <FormAddAnuncios setOpen={setOpen} getAnuncios={getAnuncios} />
          </Drawer>
          <Modal open={openModal} setOpen={setOpenModal} />
        </>
      )}
    </div>
  );
}
