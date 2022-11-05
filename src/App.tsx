import Table from "./components/Table"

export default function App() {
  return (
    <Table items={[{id: "1"}]} renderItem={(item) => null}/>
  )
}