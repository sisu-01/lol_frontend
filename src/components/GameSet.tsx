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
          className={`rounded-sm transition ${selected === item.id ? 'bg-green-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
        >
          {item.txt}
        </button>
      ))}
    </div>
  );
}

export default GameSet;