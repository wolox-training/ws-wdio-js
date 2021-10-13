module.exports = {
    afterScenario: function () {
        driver.reset();
        driver.close();
    }
}