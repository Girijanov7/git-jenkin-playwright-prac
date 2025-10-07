//pages/Homepage.js

export class HomePage{

    constructor(page){
        this.page=page;
        this.fromInput=page.locator('//input[@class="v2VFa- rLGgLC g9KxuM smJZop ZjUTQC z2D4XG"]')
        this.toInput=page.locator('//input[@class="v2VFa- rLGgLC g9KxuM smJZop G+rzy6 z2D4XG"]')
        this.departCalender=page.locator('//button[@class="pl8ttv paxEPa ZFO-pc"]').click()
        this.returnClaender=page.locator('//button[@class="pl8ttv paxEPa FC89rO"]').click()
        this.roundTripOption=page.locator('//input[@id="ROUND_TRIP"]')
        this.searchBtn=page.getByRole("button",{name:'SEARCH'})
        // this.loginClose=page.locator
    }

    async goto(){
        await this.page.goto('https://www.flipkart.com/travel/flights?param=bsd-2025-booknow&fm=neo%2Fmerchandising&iid=M_91a5caf6-cdda-4aaa-851e-468da2a38d53_1_X1NCR146KC29_MC.LE8A9JOLY9F3&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_LE8A9JOLY9F3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=LE8A9JOLY9F3')
    }


async searchRoundTrip({ from, to, departDate, returnDate }) {
    // await this.acceptPopup();


//select roundTrip

if (await this.roundTripOption.isVisible()){
    await this.roundTripOption.click();
}

//Enter Locations

await this.fromInput.fill(from);
await this.page.keyboard.press("Enter")
await this.toInput.fill(to);
await this.page.keyboard.press("Enter");

//select DepartureDate
await this.departCalender.click()
await this.selectDate(departDate);

//select Return Date

await this.returnClaender.click();
await this.selectDate(returnDate);
await this.searchBtn.click()
}
async selectDate(dateString){

    //expects format yyyy-mm-dd
    const[year,month,day]=dateString.split('-')
    const monthName=new Date(dateString).toLocaleString('default',{month:'long'})

    const selector=this.page.locator(`//div[@class="R9kzST"]"${monthName} ${day}, ${year}")]`)
    await selector.first().click();
}
}

