module.exports = {
    beforeScenario: function(){
        driver.launchApp();
    },
    beforeSession: function () {
        global.users = JSON.parse(process.env.USERS)
    },
    afterScenario: function () {
        driver.reset();
    },
    // afterStep: function () {
    //     driver.takeScreenshot();
    // }
}
