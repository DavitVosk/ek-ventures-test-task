interface CountFormat {
  letter: string;
  limit: number;
}

const COUNT_FORMATS: CountFormat[] = [
  {
    // 0 - 999
    letter: "",
    limit: 1e3,
  },
  {
    // 1,000 - 999,999
    letter: "k",
    limit: 1e6,
  },
  {
    // 1,000,000 - 999,999,999
    letter: "m",
    limit: 1e9,
  },
  {
    // 1,000,000,000 - 999,999,999,999
    letter: "b",
    limit: 1e12,
  },
  {
    // 1,000,000,000,000 - 999,999,999,999,999
    letter: "t",
    limit: 1e15,
  },
];

export const formatCount = (count: number) => {
  let formattedNumber = 0;
  const format = COUNT_FORMATS.find(
    (format) => count < format.limit
  ) as CountFormat;

  formattedNumber = (1000 * count) / format.limit;
  // to keep only one decimal number
  formattedNumber = Math.round(formattedNumber * 10) / 10;

  return `${formattedNumber} ${format.letter}`;
};
