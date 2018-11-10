const { FizzBuzz } = require('../spec/spec.helper.js')
const BrowserHelpers = require('e2e_training_wheels')
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

  it('should display a number in the display_number paragraph', async () => {
    await browser.fillIn("input[id='display_number']", { with: '5' })
    let number = await browser.getContent("[id='display_number']")
    expect(number).to.eql('5')
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