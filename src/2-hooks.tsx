import React, { useState, useRef } from "react";

// Interface
interface Todo {
  id: number;
  text: string; //
}
// Hanle Click Properties
interface AddItemProps {
  handleClick: (tetx: Todo["text"]) => void;
}
function AddItem({ handleClick }: AddItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="what do you need to do" />
      <button
        onClick={() => {
          if (inputRef.current && inputRef.current.value) {
            handleClick(inputRef.current.value);

            inputRef.current.value = "";
          }
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}

function App() {
  const [item, setItems] = useState<Todo[]>([]);

  function handleClick(text: Todo["text"]) {
    return setItems([...item, { text, id: setItems.length + 1 }]);
  }

  function remove(id: Todo["id"]) {
    console.log(id);
  }

  return (
    <div className="App">
      <h1>You have {item.length} todos. </h1>

      <AddItem handleClick={handleClick} />
      <ul>
        {item.map((item) => {
          return (
            <li>
              <span>{item.text}</span>
              <button onClick={() => remove(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
