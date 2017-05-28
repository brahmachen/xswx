var SchoolCustome = require("../proxy").SchoolCustome
var School = require("../proxy").School



//SchoolCustome.newAndSave("北京大学", 4.9);

//School.getSchools();

//School.searchByName('大');
//School.searchByName('山农');
School.searchByNamePaged("北京", 10, 20);