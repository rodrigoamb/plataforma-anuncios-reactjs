export default function Listas() {
  const tenis = [
    {
      titulo: "Tênis Olympikus Corre 4 50 Anos",
      categoria: "Corrida",
      preco: "R$599,99",
      img: "https://olympikus.vtexassets.com/arquivos/ids/324627-300-300?v=638887941097100000&width=300&height=300&aspect=true",
    },
    {
      titulo: "Tênis Olympikus Corre Supra 2",
      categoria: "Corrida",
      preco: "R$1.299,99",
      img: "https://olympikus.vtexassets.com/arquivos/ids/319202-300-300?v=638826773016630000&width=300&height=300&aspect=true",
    },
    {
      titulo: "Tênis Olympikus Corre Turbo",
      categoria: "Corrida",
      preco: "R$699,99",
      img: "https://olympikus.vtexassets.com/arquivos/ids/322170-300-300?v=638832604277730000&width=300&height=300&aspect=true",
    },
  ];

  return (
    <div>
      <h1>pagina de listas</h1>

      {tenis.map((item, index) => {
        return (
          <div
            key={index}
            className="p-3 rounded-md flex flex-col items-center justify-between gap-4 shadow-2xl w-fit"
          >
            <img src={item.img} alt="tenis" />
            <h1 className="font-bold text-2xl uppercase">{item.titulo}</h1>
            <p className="font-semibold text-lg uppercase text-gray-500">
              {item.categoria}
            </p>
            <p className="font-bold text-3xl uppercase">{item.preco}</p>
          </div>
        );
      })}
    </div>
  );
}
