import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const phase=process.argv[2]||'current';
const base=process.env.QA_URL||'http://localhost:3000';
const browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const report={phase,base,checks:[],errors};
for(const route of ['/','/design-system']){
 await page.goto(base+route,{waitUntil:'networkidle'});await page.screenshot({path:`docs/evidence/${phase}-${route==='/'?'home':'system'}-desktop.png`,fullPage:true});
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 report.checks.push({route,axe:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
}
for(const width of [375,390,768,1280,1920]){
 await page.setViewportSize({width,height:900});await page.goto(base,{waitUntil:'networkidle'});
 report.checks.push({width,overflow:await page.evaluate(()=>({viewport:innerWidth,content:document.documentElement.scrollWidth})),h1:await page.locator('h1').innerText()});
 if([390,1920].includes(width))await page.screenshot({path:`docs/evidence/${phase}-home-${width}.png`,fullPage:true});
}
await fs.writeFile(`docs/evidence/${phase}-qa.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));await browser.close();
