import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  words?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDelay?: number;
  emptyDelay?: number;
};

// Rotating typewriter: types a word, holds, erases, moves to next.
export function useTypewriter({
  words = ["Software", "Backend", "Full-Stack"],
  typeSpeed = 100,
  deleteSpeed = 50,
  holdDelay = 1500,
  emptyDelay = 500,
}: UseTypewriterOptions = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setText(words[0] ?? "");
      return;
    }
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length] ?? "";
    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && text === currentWord) {
      delay = holdDelay;
    } else if (isDeleting && text === "") {
      delay = emptyDelay;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }

      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      setText(currentWord.slice(0, nextLength));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, holdDelay, emptyDelay]);

  return text;
}
