const interleave = <TArray, TInterleave>(arr: TArray[], x: TInterleave) =>
   arr.flatMap((e) => [e, x]).slice(0, -1);

export default interleave;
