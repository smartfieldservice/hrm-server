const userRoute = require("./userRoute");
const concernRoute = require("../routes/concernRoute");
const departmentRoute = require("../routes/departmentRoute");
const leaveRoute = require("../routes/leaveRoutes");
const leavePerYearRoute = require("../routes/leavePerYearRoute");
const expenseRoute = require("../routes/expenseRoute");
const documentRoute = require("../routes/documentRoute");

//@exports
module.exports = {  userRoute,
                    concernRoute,
                    departmentRoute,
                    leaveRoute,
                    leavePerYearRoute,
                    expenseRoute,
                    documentRoute
                }