import { Given, Then, When } from "@cucumber/cucumber";
import { Helper } from "../../pages/support/helper";
import { MakeMyTripPagePage } from "../../pages/MakeMytrip/makeMyTripPage";

Given("Navigate to {string}", async function(url:string){
    const helperObj = new Helper(this.page!);
    await helperObj.navigateTo(url);
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
Then('Search trains from {string} to {string} on date {string}', async function(fromCity:string, toCity:string, date:string){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.searchTrains(fromCity, toCity, date);
});
When('Click on search button', async function(){
   const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.clickSearch();
});
Then('Validate search results displays train number {string}', async function(trainNumber:string){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.validateTrainNumber(trainNumber);
});
Then('Minimize bot popup', async function(){
    const makeMyTripObj = new MakeMyTripPagePage(this.page!);
    await makeMyTripObj.minimizeBot();
})