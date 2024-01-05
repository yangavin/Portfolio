import { useEffect, useState } from "react";

function JokeQuestion({ question }: { question: string; key: string }) {
  const [index, setIndex] = useState(0);
  const displayedQuestion = question.slice(0, index);
  useEffect(() => {
    if (index < question.length) {
      const timeout = setTimeout(() => {
        setIndex((oldIndex) => oldIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <h1 className="w-3/4 text-center text-2xl md:text-3xl lg:text-7xl lg:leading-snug">
      <span>{displayedQuestion}</span>
      <span>{index < question.length && "|"}</span>
    </h1>
  );
}

export default JokeQuestion;
