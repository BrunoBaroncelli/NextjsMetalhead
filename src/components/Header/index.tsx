import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { apiBanda } from "../../api/data";
import { IBanda } from "../../interfaces/Banda.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header = () => {
  const router = useRouter();
  const [bandas, setBandas] = useState<IBanda[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiBanda.index();
      setBandas(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <FaHome onClick={() => router.push("/")} />
        {bandas &&
          bandas.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.nome}
            </Link>
          ))}
        <div>
          <BsPersonSquare
            onClick={() =>
              (window.location.href = "https://react-video-lazarodu.vercel.app")
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;