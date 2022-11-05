export default interface TableProps {
  items: {id: string}[];
  renderItem: (item: {id: string}) => React.ReactNode;
}