export const Right = x => ({
  chain: f => f(x),
  fold: (f, g) => g(x),
  map: f => Right(f(x)),
  inspect: () => `Right(${x})`
})

export const Left = x => ({
  chain: f => Left(x),
  fold: (f, g) => f(x),
  map: f => Left(x),
  inspect: () => `Left(${x})`
})
