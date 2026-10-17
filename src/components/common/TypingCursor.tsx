interface TypingCursorProps {
  color: string;
}

export function TypingCursor({ color }: TypingCursorProps) {
  return (
    <span
      style={{
        display: "inline-block",
        width: "3px",
        height: "1em",
        background: color,
        marginLeft: "3px",
        verticalAlign: "-2px",
        borderRadius: "2px",
        animation: "blink 0.75s step-end infinite",
      }}
    />
  );
}
