/**
 * Main Application Entry
 * Demonstrates usage of EmployeeManager
 */
const EmployeeManager = require("./service/EmployeeManager");


console.log('Employee Wage');

const manager = new EmployeeManager();

try {

    // Create employees
    manager.createEmployee(1, "Ashutosh", 50000);
    manager.createEmployee(2, "Rahul", 60000);
    manager.createEmployee(3, "Neha", 55000);


    // Get employee by ID
    console.log("\nEmployee with ID 2:");
    console.log(manager.getEmployeeById(2));
    
} catch (error) {

    console.error("Error:", error.message);
}