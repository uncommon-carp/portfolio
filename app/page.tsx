import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      {/* Name and skills */}
      <div className="flex flex-col items-center justify-center mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold border-b-2 border-black tracking-tighter text-center">
          <span className="md:hidden">
            CORY<br />SOREL
          </span>
          <span className="hidden md:inline">CORY SOREL</span>
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end mt-2">
          <p className="mr-6 tracking-widest">NODE</p>
          <p className="mr-6 tracking-widest">AWS</p>
          <p className="mr-6 tracking-widest">GRAPHQL</p>
          <p className="tracking-widest">REACT</p>
        </div>
      </div>

      {/* Bio section */}
      <div className="flex flex-col md:min-h-screen justify-center md:justify-end w-60 mt-12 md:mt-0 md:pb-40 md:ml-20">
        <h3 className="text-xl tracking-widest">Software Engineer:</h3>
        <p className="text-justify hyphens-auto">
          Four years of experience. Node.js and TS expert. Backend and
          full stack focused. Austin, TX and Oaxaca, MX
        </p>
      </div>
    </PageLayout>
  );
}
