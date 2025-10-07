// pages/SearchResultsPage.js

export class SearchResultsPage{
constructor(page){
this.page=page
this.departFlights=page.locator('//div[@class="savun-"]').first()
this.priceLocator=page.locator('//div[@class="_44X-Hx"]')
this.bookBtns=page.getByRole('button',{name:'Book'})

}
async waitForResults(){
    await this.page.waitForLoadState('networkidle')
    await this.page.locator('//div[@class="_44X-Hx"]').first()
    waitFor({state:'visible',timeout:20000})
}
async logAllFlights(){
    const flight=await this.page.locator('//div[@class="savun-"]').all();
    console.log(`found ${flight.length}flights:`);

    for(const flight of flights){

        const name=await flight.locator('.flight-name,.airline-name').textContent().catch(()=>'')
        const price=await flight.locator('.price,.fare-amount').textContent().catch(()=>'')
    }
    
}


}































































