export const asA = <T extends unknown>(typeLike: unknown) => {
  return typeLike as T;
};
