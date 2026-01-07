import { Given, Then, When } from "@cucumber/cucumber";
import { Helper } from "../../pages/support/helper";
import { MakeMyTripPagePage } from "../../pages/MakeMytrip/makeMyTripPage";

Given("Navigate to {string}", async function(url:string){
    const helperObj = new Helper(this.page!);
    await helperObj.navigateTo(url);
})
When('Search for {string}', async function(searchText:string){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.searchFor(searchText);
})
Then('Validate option {string} is select from menu', async function(resultText:string){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.validateSearhResults(resultText);
})
When('Close the Login window', async function(){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.closeLoginWindow()
})
When('Click on {string} options', async function(optionName:string){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.clickOnOption(optionName);
});