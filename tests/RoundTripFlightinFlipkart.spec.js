// tests/roundTripBooking.spec.js
import{test,expect} from '@playwright/test'
import { HomePage} from '../POM_folder/HomepageFlight.page';
import { SearchResultsPage } from '../POM_folder/SearchResultPage.page';
import flights from '../tests/Fetching_data/Flightdata.json';

for (const data of flights){
    test(`Round Trip Booking: ${data.from} to ${data.to}`,async({page})=>{

        const home=new HomePage(page)
        const results=new SearchResultsPage(page)
        await home.goto();
        await home.searchRoundTrip(data);
        await results.waitForResults()
        await results.logAllFlights()
        await expect(page).toHaveURL('https://www.flipkart.com/travel/flights/search?trips=BOM-HYD-04102025,HYD-BOM-06102025&travellers=1-0-0&class=e&tripType=ROUND_TRIP&isIntl=false&source=Search%20Form')

    })
}
























