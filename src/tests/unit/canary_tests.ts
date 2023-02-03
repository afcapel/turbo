import { expect } from '@esm-bundle/chai'
// import * as Turbo from "../../core"
import { sum, TimingData  } from "../../core/sum"
import { TurboBeforeCacheEvent } from "./canary"

let t: TurboBeforeCacheEvent

test('sums up 2 numbers', () => {
  expect(sum(1, 1)).to.equal(2)
  expect(sum(4, 3)).to.equal(t)
})
