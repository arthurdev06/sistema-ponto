import Link from "next/link";

export default function BemVindo() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col items-center justify-center text-center m-auto p-5 gap-3">
        <h1 className="text-5xl font-bold">Bem-vindo!</h1>
        <div className="flex flex-col gap-2 big-box p-3 m-2 rounded-lg outline outline-2 outline-offset-2 outline-border">
          <p>Começe por aqui</p>
          <Link 
            href="/informacoes" 
            className="transition-all duration-300 ease-in-out hover:text-primary hover:scale-105 hover:font-semibold"
          >
            Informações
          </Link>
        </div>
      </div>
    </div>
  );
}
