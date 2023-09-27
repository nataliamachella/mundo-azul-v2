import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="home">
      <div className="flex mx-10 items-center ">
        <Sidebar />
        <div className="flex flex-col items-center text-white pl-16">
          <h1 className="font-semibold text-[60px] ">Guía para Padres</h1>
          <p className="text-lg"> de niños con autismo. </p>
        </div>
      </div>
    </main>
  );
}
