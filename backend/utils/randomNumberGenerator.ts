const random = (count: number, offset: number = 0): number => {
    const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

    const increment = 11;
    const modulus = Math.pow(2, 48);
    const multiplier = 25214903917;

    const hash = (multiplier * (seed + offset) + increment) % modulus;

    return (hash % count) + 1;
};

export { random };
