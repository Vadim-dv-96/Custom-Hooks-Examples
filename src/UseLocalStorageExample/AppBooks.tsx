import { useLocalStorage } from '../hooks/useLocalStorage';
import { Books } from './components/Books';
import { books } from './state/state';

function AppBooks() {
  const { value, setValue } = useLocalStorage([], 'order');
  const order = value;
  const setOrder = setValue;
  const addToOrder = (id: number) => {
    const newItem = books.find((books) => books.id === id);
    if (newItem) {
      setOrder([...order, newItem]);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Books books={books} addToOrder={addToOrder} />
    </div>
  );
}
export default AppBooks;
