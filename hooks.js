module.exports = {
    beforeScenario: function(){
        driver.launchApp();
    },
    afterScenario: function () {
        driver.reset();
    }
}