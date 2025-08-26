import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { estadosBrasil } from "../utils/estadosBrasil";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Cadastro() {
  const [usuarioData, setUsuarioData] = useState({});

  const navigate = useNavigate();

  async function handleSubmitCadastro(event) {
    event.preventDefault();

    const dataUser = {
      ...usuarioData,
      telefone: Number(usuarioData.telefone),
    };

    console.log(dataUser);

    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataUser),
        }
      );

      const dataRes = await response.json();

      if (response.ok) {
        console.log(dataRes);
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar usuário. Tente novamente");
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUsuarioData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
          />
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Crie anúncios e venda seu produto rapidamente
            </h3>
            <p className="text-gray-300">
              Crie uma conta e aproveite 30 dias grátis
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Junte-se a +5.000 usuários
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Cadastre-se
              </h3>
              <p className="">
                Você já tem uma conta?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Faça o Login
                </Link>
              </p>
            </div>
          </div>
          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              ou continue com
            </p>
          </div>
          <form onSubmit={handleSubmitCadastro} className="space-y-5">
            <div>
              <label className="font-medium">Nome</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="nome"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Senha</label>
              <input
                onChange={handleInputChange}
                type="password"
                name="senha"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Telefone</label>
              <input
                onChange={handleInputChange}
                type="number"
                name="telefone"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Cidade</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="cidade"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Estado</label>
              <select
                onChange={handleInputChange}
                name="estado"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              >
                <option value="">Selecione um estado</option>
                {estadosBrasil.map((item, index) => (
                  <option key={index} value={item.sigla}>
                    {item.estado}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
