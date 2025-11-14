interface GameSetProps<T extends string> {
  items: {id: T; txt: string;}[];
  setItem: (id: T) => void;
  selected: T;
}

const GameSet = <T extends string>({ items, setItem, selected }: GameSetProps<T>) => {
  return (
    <div className="flex justify-center items-center gap-5">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => setItem(item.id)}
          className={selected === item.id ? 'bg-blue-500' : ''}
        >
          {item.txt}
        </button>
      ))}
    </div>
  );
}

export default GameSet;