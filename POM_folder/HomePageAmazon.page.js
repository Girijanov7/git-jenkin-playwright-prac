export class HomePage{
    constructor(page){
        this.page=page
        this.searchBox=page.getByPlaceholder("Search Amazon.in")
        this.searchBtn=page.locator('//input[@id="nav-search-submit-button"]')

    }
    async goto(){
        this.page.goto('https://www.amazon.in/')
    }

    async HomePage(searchBox,searchBtn){
    await this.searchBox.fill(phones)
    await this.searchBtn.click()
 }
}