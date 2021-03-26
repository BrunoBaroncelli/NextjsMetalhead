import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { apiMusica } from "../api/data";
import { IMusica } from "../interfaces/Musica.interface";
import { Table } from "../styles";
import { toast } from "react-toastify";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [musicas, setMusicas] = useState<IMusica[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiMusica.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não há musicas desta banda registradas!");
        }
        setMusicas(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <Table>
              <thead>
                <tr>
                  <th>Musica</th>
                  <th>Genero</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {musicas && musicas.map((item) => (
                    <tr key={item.id}>
                      <td>{item.musica_nome}</td>
                      <td>{item.genero}</td>
                      <td>{item.album}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}