type Data = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
};

interface ItemProps {
  item: Data;
  updateItem: (id: number, updatedData: Partial<Data>) => void;
}
