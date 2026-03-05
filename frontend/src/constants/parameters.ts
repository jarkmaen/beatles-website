export const PARAMETERS = {
    bassline: { label: "Bassline", maxPoints: 5 },
    chordProgression: { label: "Chord Progression", maxPoints: 4 },
    culturalSignificance: { label: "Cultural Significance", maxPoints: 1 },
    fullInstrumentation: { label: "Full Instrumentation", maxPoints: 10 },
    lyrics: { label: "Lyrics", maxPoints: 8 },
    originalityInnovation: { label: "Originality/Innovation", maxPoints: 8 },
    percussion: { label: "Percussion", maxPoints: 5 },
    solo: { label: "Solo", maxPoints: 4 },
    vocals: { label: "Vocals", maxPoints: 10 }
} as const;

export type Parameter = keyof typeof PARAMETERS;
