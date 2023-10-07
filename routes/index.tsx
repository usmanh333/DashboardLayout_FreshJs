import Cards from "../components/Cards.tsx";
import Card2 from "../components/Cards2.tsx";
import Table from "../components/Table.tsx";
import Table2 from "../components/Table2.tsx";

export default function Home() {
  return (
    <div className="flex flex-col no-wrap pt-10 ml-52  ">
      <Cards />
      <Card2 />
      <Table />
      <Table2 />
    </div>
  );
}
