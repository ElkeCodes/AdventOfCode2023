type FoundMapping = {
  mapping: string;
  value: number;
  index: number;
};

const findMappings = (
  mappings: Record<string, number>,
  line: string
): Array<FoundMapping> => {
  return Object.entries(mappings).reduce((acc, [mapping, value]) => {
    const results = [];
    let index = 0;
    while ((index = line.indexOf(mapping, index)) >= 0) {
      results.push({ mapping, value, index: index + mapping.length });
      index += mapping.length;
    }
    return acc.concat(results);
  }, [] as Array<FoundMapping>);
};

const digitMappings = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
};

const writtenDigitMappings = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

export const part1 = (lines: Array<string>): number => {
  return lines.reduce((acc, line) => {
    const foundMappings = findMappings(digitMappings, line).sort(
      ({ index: index1 }, { index: index2 }) => index1 - index2
    );
    return (
      acc + (foundMappings.at(0)!.value * 10 + foundMappings.at(-1)!.value)
    );
  }, 0);
};

export const part2 = (lines: Array<string>): number => {
  const mappings = { ...digitMappings, ...writtenDigitMappings };
  return lines.reduce((acc, line) => {
    const foundMappings = findMappings(mappings, line).sort(
      ({ index: index1 }, { index: index2 }) => index1 - index2
    );
    return (
      acc + (foundMappings.at(0)!.value * 10 + foundMappings.at(-1)!.value)
    );
  }, 0);
};
