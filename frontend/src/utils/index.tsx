export const renderParagraphs = (text: string) => {
    return text
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter((paragraph) => paragraph !== "")
        .map((paragraph, i) => <p key={i}>{paragraph}</p>);
};
