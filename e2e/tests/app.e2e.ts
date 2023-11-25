
import {setupBrowserHooks, getBrowserState} from './utils';

describe('App test', function () {
  setupBrowserHooks();
  it('is running', async function () {
    const {page} = getBrowserState();
    const element = await page.waitForSelector('text/learning-angular');


    expect(element).not.toBeNull();

  });
});
