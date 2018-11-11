const { FizzBuzz } = require('../spec/spec.helper.js')
const BrowserHelpers = require('e2e_training_wheels')
const js = require('../src/js/fizz-buzz.js')
const browser = new BrowserHelpers()

const { expect } = require('chai');

describe('sample UI test', () => {
  before( async () => {
    await browser.init();
    await browser.visitPage('http://localhost:8080/')
  })

  beforeEach(async () => {
    await browser.page.reload();
  })

  after(async () => {
    await browser.close();
  })

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: '3' })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz')
  })
})

describe ('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    })

    beforeEach(async () => {
        await browser.page.reload()
    })

    after(async () => {
        await browser.close()
    })

    it('should display "FizzBuzz" from number 15 in input', async () => {
      await browser.fillIn("input[id='value']", { with: '15' })
      await browser.clickOnButton("input[value='Check']")
      let content = await browser.getContent("[id='display_answer']")
      expect(content).to.eql('FizzBuzz')
    })
})

