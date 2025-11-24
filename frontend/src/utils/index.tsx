export function renderParagraphs(text: string) {
    return text.split(/\n\s*\n/).map((paragraph) => <p>{paragraph}</p>);
}
