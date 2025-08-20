import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const valideValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Senha e a confirmação da senha deve ser iguais");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });
      
      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  }; 

  return (
    <section className="w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className="font-semibold">Formulário de cadastros</p>
        <form className="grid gap-4 mt-6" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              autoFocus
              className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-100"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Digite seu nome..."
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-100"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail..."
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password">Senha:</label>
            <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-100">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="flex-1 bg-transparent outline-none"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Digite sua senha..."
              />
              <div
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer ml-auto"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-100">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="flex-1 bg-transparent outline-none"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme sua senha..."
              />
              <div
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="cursor-pointer ml-auto"
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}                
              </div>
            </div>
          </div>

          <button
          disabled={!valideValue}
          className={` ${
            valideValue ? "bg-secondary-100 hover:bg-primary-100" : "bg-gray-500"
          } text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Cadastrar
          </button>
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-secondary-100 hover:text-primary-100"
          >
            Faça login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
