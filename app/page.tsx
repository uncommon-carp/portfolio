import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mr-40 min-h-screen">
        <ul className="pb-50">
          <li className="mb-15 italic tracking-widest">WORK</li>
          <li className="mb-15 italic tracking-widest">RESUME</li>
          <li className="mb-15 italic tracking-widest">CONTACT</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold border-b-2 border-black tracking-tighter">CORY SOREL</h1>
        <div className="flex justify-end mt-2">
          <p className="mr-6 tracking-widest">NODE</p>
          <p className="mr-6 tracking-widest">AWS</p>
          <p className="mr-6 tracking-widest">GRAPHQL</p>
          <p className="tracking-widest">REACT</p>
        </div>
      </div>
      <div className="flex flex-col min-h-screen justify-end w-60 pb-40">
        <h3 className="text-xl tracking-widest">Software Engineer:</h3>
        <p className="text-justify hyphens-auto">
          Four years of experience. Node.js and TS expert. Backend and
          full stack focused. Austin, TX and Oaxaca, MX
        </p>
      </div>
    </div>
  );
}
