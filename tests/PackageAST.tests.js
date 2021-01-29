/* global beforeEach afterEach */
import { describe, it } from 'mocha'
import { expect } from 'chai'
import PackageAST from '../lib/PackageAST'

describe('PackageAST', function () {
  let ast

  beforeEach(function () {
    ast = new PaskageAST(packageData)
  })

  afterEach(function () {
    ast = null
  })

//   describe('convert to string', function () {
//     it('keeps file formatting', function () {
//       const toString = jsonString => {
//         const fn = () => (new PackageAST(jsonString)).stringify();
//         expect(fn).to.equal(`${value}`)
//       }
//       toString('  "123"');
//       toString(' [ 1,   2,  3]');
//       toString(' {"to": \n   "be"\n   }')
//       toString(' {"to": \n   ["be",    "OR"\n]  \n   }')
//       toString('   "hello"  ')
//       toString(' true ')
//     })

//     it('returns nothing on a valid state', function () {
//     })
//   })

//   describe('constructor', function () {
//     it('is created with default state', function () {
//       //expect(tool.state()).to.equal(SuperTool.states.great)
//     })

//     it('create a sub element', function () {
//       //const toolExplicit = new SuperTool({ state: SuperTool.states.awesome })
//       //expect(toolExplicit.state()).to.equal(SuperTool.states.awesome)
//     })
//   })

//   describe('path', function () {
//     it('returns the current state if no value is given', function () {
//       // before call
//         //expect(tool._state).to.equal(SuperTool.states.great)
//       // call
//         //expect(tool.state()).to.equal(SuperTool.states.great)
//       // after call
//         //expect(tool._state).to.equal(SuperTool.states.great)
//     })

//     it('sets the current state if the state is a valid state value', function () {
//       // before call
//          //expect(tool._state).to.equal(SuperTool.states.great)
//       // call
//          //expect(tool.state(SuperTool.states.awesome)).to.equal(SuperTool.states.awesome)
//       // after call
//          //expect(tool._state).to.equal(SuperTool.states.awesome)
//     })
//   })

//     describe('edit operation', function () {
//     it('executes the current state', function () {
// //       expect(tool.execute()).to.equal(`I feel ${SuperTool.states.great}!`)
// //       tool.state(SuperTool.states.swag)
// //       expect(tool.execute()).to.equal(`I feel ${SuperTool.states.swag}!`)
//     })
//   })

})
