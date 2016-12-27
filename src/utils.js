import { Left, Right } from './either'

// != checks for undefined aswell
export const fromNullable = x =>
  x != null ? Right(x) : Left(x)
