import Link from "next/link";

export default function BemVindo() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col items-center justify-center text-center m-auto p-5 gap-3">
        <h1 className="text-5xl font-bold">Bem-vindo!</h1>
        <div className="flex flex-col gap-2 big-box ">
          <p>Começe por <Link 
            href="/informacoes" 
            className=" p-2 bg-primary text-secondary rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold"
          >
            aqui
          </Link></p>
          
        </div>
      </div>
    </div>
  );
}
