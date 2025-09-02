import { useState } from "react";
import { toast } from "react-toastify";

export default function FormAddAnuncios({ setOpen }) {
  const [anuncioData, setAnuncioData] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: "",
  });

  function handleChangeInputsAnuncios(event) {
    const { name, value } = event.target;
    setAnuncioData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmitAddNewAnuncio(event) {
    event.preventDefault();

    const anuncio = {
      ...anuncioData,
      preco: Number(anuncioData.preco),
    };

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/addNewAnuncio?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(anuncio),
        }
      );

      if (response.ok) {
        toast.success("Anúncio adicionado com sucesso");
        //preciso recarregar os anuncios
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const caracteres = anuncioData?.descricaoCompleta.length;

  return (
    <form onSubmit={handleSubmitAddNewAnuncio} className="flex flex-col gap-4">
      <div>
        <label className="font-medium">Título anúncio:</label>
        <input
          onChange={handleChangeInputsAnuncios}
          type="text"
          name="titulo"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Preço:</label>
        <input
          onChange={handleChangeInputsAnuncios}
          type="number"
          name="preco"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição curta:</label>
        <input
          onChange={handleChangeInputsAnuncios}
          type="text"
          name="descricaoCurta"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição completa:</label>
        <textarea
          onChange={handleChangeInputsAnuncios}
          required
          maxLength={500}
          name="descricaoCompleta"
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
        <p>Máximo 500 caracteres ({caracteres}/500)</p>
      </div>

      <div>
        <label className="font-medium">Link da imagem:</label>
        <input
          onChange={handleChangeInputsAnuncios}
          type="text"
          name="imagem"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 mt-5 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Adicionar anúncio
      </button>
    </form>
  );
}
