import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";

export default function Inicio() {
  const [dataAnuncios, setDataAnuncios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAnuncios() {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
          <Card texto={"Todos os anúncios"} dataAnuncios={dataAnuncios} />
        </>
      )}
    </div>
  );
}
