export function renderParagraphs(text?: string) {
    if (!text) {
        return null;
    } else {
        return text.split(/\n\s*\n/).map((paragraph) => <p>{paragraph}</p>);
    }
}
