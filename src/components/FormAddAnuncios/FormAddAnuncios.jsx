export default function FormAddAnuncios() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="font-medium">Título anúncio:</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Preço:</label>
        <input
          type="number"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição curta:</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição completa:</label>
        <textarea
          required
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
      </div>

      <div>
        <label className="font-medium">Link da imagem:</label>
        <input
          type="text"
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
