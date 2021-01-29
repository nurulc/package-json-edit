import { describe, it } from 'mocha'
import { expect } from 'chai'
import { lineStart, search,LEN, cons }  from '../lib/utils'

describe('lineStart', function () {
  it('returns index to last whitespace before the index', function () {
    const expectTrue = (str, offset, pos) => expect(lineStart()).to.equal(0)
    expectTrue('',0,0)
    //          012345678901
    expectTrue('   "a": "bc"',3,0);
    expectTrue('   "a":  "bc" ;',9,7);
    //          0 12345678901
    expectTrue(' \n   "a":  "bc" ;',5,2);
  })
describe('cons', function () {
  it('cons - construct a list', function () {
//     const expectTrue = (str, offset, pos) => expect(lineStart()).to.equal(0)
//     expectTrue('',0,0)
//     //          012345678901
//     expectTrue('   "a": "bc"',3,0);
//     expectTrue('   "a":  "bc" ;',9,7);
//     //          0 12345678901
//     expectTrue(' \n   "a":  "bc" ;',5,2);
  }) 
})
