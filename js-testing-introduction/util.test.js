const puppeteer=require('puppeteer');
const {generateText,checkAndGenerate}=require('./util');

/*
test('Should output name and age',()=>{
    const text=generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
})
//jest   one time test
//jest --watch     keep watching test

test('Should output name and age',()=>{
    const text=generateText('',null);
    expect(text).toBe(' (null years old)');
})
//expect many argument falsy also/opposite
test('Should output name and age',()=>{
    const text=generateText();
    expect(text).toBe('undefined (undefined years old)');
})

test('Should generate a valid text output',()=>{
    const text = checkAndGenerate("Max",29);
    expect(text).toBe('Max (29 years old)');
});
*/

test('Should create an element with text',async()=>{
    
    const browser=await puppeteer.launch({
        headless:false, //mean true = do not run browser, false = run browser
        //slowMo:80,   //mean slow down browser to what happening 
        //args:['--window--size=1920,1080']   //to show or not show window
    });
    const page = await browser.newPage();   //crete a new page 
    await page.goto(
        'file:///home/nikhom/HomeWork2/TestProject/js-testing-introduction/index.html'
    );
    
    await page.click('input#name');         //just click input
    await page.type('input#name','Anna');   //just type input
    await page.click('input#age');          //just click input
    await page.type('input#age','28');      //just type 28 
    await page.click('#btnAddUser');        //click btn 
    const finalText=await page.$eval('.user-item',el=>el.textContent);  //to get value of an element
    expect(finalText).toBe('Anna (28 years old)');     

},10000);
//npm start to compile code 
//npm run test
//start with headless : true => it will fail for first time
//headless : false at seconde time
//10000 = 10 sec is time out set for jest,