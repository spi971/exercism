export function decodedValue(colors: string[]): number {
  let value: string = "" ;
  colors.forEach((element: string, index: number) => {
    index < 2 ?  value += COLORS.indexOf(element) : "";
  });
  return Number(value);
}
const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
