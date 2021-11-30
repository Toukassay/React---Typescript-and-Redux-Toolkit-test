import React, { useState } from "react";

interface Person {
  name: string;
  lastName: string;
}

interface Props {
  nice?: boolean;
  person: Person;
}

const TestComponent: React.FC<Props> = ({ nice, person }) => {
  let [count, setcount] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setcount(count + 1);
  };

  return (
    <div>
      I'm {person.name} {person.lastName}, nice to meet you !
      {nice ? " You're a nice person :)" : " You're very mean..."}
      <br />
      count is {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default TestComponent;
