import { useMemo } from "react";

function ComplexCalculation({ numbers }) {
  const sum = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Only recalculate if 'numbers' changes

  return <p>Sum: {sum}</p>;
}
