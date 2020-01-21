import { joinWithOr } from "./join-with-or";

export function getCliRegex(sortedTokenArr: string[], flags = 'gm'): RegExp {
  return new RegExp(`(\\s)(${joinWithOr(sortedTokenArr)})`, flags);
}
