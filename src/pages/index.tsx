import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <h1>Bem Vindo ao Metalhead</h1>
            <Image src="/img/Gif-Metalhead.gif" alt="Gif Metalhead"
            width={502} height={670}/>
          </div>
        </>
      )}
    </>
  );
}
