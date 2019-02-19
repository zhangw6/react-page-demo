export function classNames(...classes: Array<string | undefined>) {
  return classes.filter((name) => name !== undefined).join(' ');
}
