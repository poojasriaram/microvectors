const puppeteer = require('puppeteer');

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Go to the target URL, wait for DOM, not idle
        await page.goto('https://sm-associates-isvu.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 15000 });
        
        // Extract text from the navigation bar or header
        const navText = await page.evaluate(() => {
            const header = document.querySelector('header') || document.querySelector('nav');
            if (!header) return 'No header or nav found';
            return header.innerText;
        });
        
        console.log("NAV_STRUCTURE_START");
        console.log(navText);
        console.log("NAV_STRUCTURE_END");
    } catch (e) {
        console.error("ERROR:", e);
    } finally {
        if (browser) await browser.close();
    }
})();
