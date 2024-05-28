type WithChildren = { children: React.ReactNode };

type Data = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
};

interface RecommendationProps {
  list: Data[];
}

interface ItemProps {
  item: Data;
  updateItem: (id: number, updatedData: Partial<Data>) => void;
}

interface StorageContext {
  starredItems: Record<string, boolean>;
  updateStarredItems: (id: number, isStarred: boolean) => void;
}
