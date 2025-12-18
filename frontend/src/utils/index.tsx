export function renderParagraphs(text?: string) {
    if (!text) {
        return null;
    } else {
        return text
            .split(/\n\s*\n/)
            .map((paragraph, i) => <p key={i}>{paragraph}</p>);
    }
}
