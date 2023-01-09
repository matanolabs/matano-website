import React from "react";

export function createEmojiAlt(text: string, alt: string) {
    return () => <EmojiAlt text={text} alt={alt} />;
}

export function EmojiAlt({ text, alt }: any) {
  return (
    <span role="img" aria-label={alt}>
        {text}
    </span>
  );
}

export const AltYes = createEmojiAlt("✅", "Yes");
export const AltNo = createEmojiAlt("❌", "No");
export const AltMeh = createEmojiAlt("⚠️", "Meh");