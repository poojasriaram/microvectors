const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Go to the target URL
    await page.goto('https://sm-associates-isvu.vercel.app/', { waitUntil: 'networkidle0' });
    
    // Extract text from the navigation bar or header
    const navText = await page.evaluate(() => {
        // Try to find header or nav
        const header = document.querySelector('header') || document.querySelector('nav');
        if (!header) return 'No header or nav found';
        
        // Return innerText of header
        return header.innerText;
    });
    
    console.log("NAV_STRUCTURE_START");
    console.log(navText);
    console.log("NAV_STRUCTURE_END");
    
    await browser.close();
})();
