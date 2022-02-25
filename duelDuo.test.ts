
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   await driver.get('http://localhost:3000/')
})

afterAll(async () => {
   await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

//------- My Tests Below --------//

test('Draw button displays the div with id = "choices"', async () => {
    const drawButton = await driver.findElement(By.id('draw'));
    await drawButton.click();
    const choicesDiv = await driver.findElement(By.id('choices'));
    const displayed = await choicesDiv.isDisplayed();
    expect(displayed).toBe(true);
});

test('Add to Duo button displays div with id = "player-duo"', async () => {
    const drawButton = await driver.findElement(By.id('draw'));
    await drawButton.click();
    const addDuo =  await driver.findElement(By.className('bot-btn'));
    await addDuo.click();
    const playerDuoDiv = await driver.findElement(By.id('player-duo'));
    const displayed = await playerDuoDiv.isDisplayed();
    expect(displayed).toBe(true);
});