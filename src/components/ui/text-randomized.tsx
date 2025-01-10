"use client";

import React, { useEffect, useState, useCallback } from "react";

const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

interface AnimatedTextProps {
  text: string;
}

export function RandomizedTextEffect({ text }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState<string[]>([]);
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x); // Value between 0 and 1
  };

  const getRandomChar = useCallback(
    (seed: number) => {
      const randomIndex = Math.floor(
        seededRandom(seed) * lettersAndSymbols.length
      );
      return lettersAndSymbols[randomIndex];
    },
    [lettersAndSymbols]
  );

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 80;
    const initialRandomDuration = 300;

    // Tách văn bản thành nhiều dòng
    const lines = text.split("<br>");
    const randomTextLines = lines.map((line) =>
      line
        .split("")
        .map(() => getRandomChar())
        .join("")
    );

    setAnimatedText(randomTextLines);

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(
        lines.map((line) =>
          line
            .split("")
            .map(() => getRandomChar())
            .join("")
        )
      );
    }

    for (let i = 0; i < Math.max(...lines.map((line) => line.length)); i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText((prevLines) => {
        const newLines = [...prevLines];
        lines.forEach((line, lineIndex) => {
          if (i < line.length) {
            newLines[lineIndex] =
              line.slice(0, i + 1) +
              prevLines[lineIndex]
                .slice(i + 1)
                .split("")
                .map(() => getRandomChar())
                .join("");
          }
        });
        return newLines;
      });
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    animateText();
  }, [text, animateText]);

  return (
    <div className="relative inline-block text-5xl font-semibold">
      {animatedText.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}
