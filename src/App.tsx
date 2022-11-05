import Table from "./components/Table";

export default function App() {
  return (
    <>
      <Table
        // Pass array of anything - it's GENERIC 'TItem'!
        items={[{ id: "1", name: "Burke" }]}
        renderItem={(item) => null}
      />
      <Table
        items={[{ id: "1", name: "Bandit" }]}
        renderItem={(item) => null}
      />
      <Table
        items={[
          { id: "1", name: "Uma", age: 2 },
          { id: "2", name: "Bella", age: 3 },
        ]}
        renderItem={(item) => null}
      />
    </>
  );
}
