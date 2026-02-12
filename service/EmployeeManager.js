const Employee = require("../model/Employee");
const employees = require("../data/EmployeeData");

/**
 * Service class to manage Employee CRUD operations
 */
class EmployeeManager {

    /**
     * Create new employee
     * @param {number} id
     * @param {string} name
     * @param {number} salary
     */
    createEmployee(id, name, salary) {

        // Check if employee already exists
        if (this.getEmployeeById(id)) {
            throw new Error("Employee with this ID already exists");
        }

        const emp = new Employee(id, name, salary);
        employees.push(emp);

        return emp;
    }

    /**
     * Get employee by ID
     * @param {number} id
     */
    getEmployeeById(id) {
        return employees.find(emp => emp.id === id);
    }

    /**
     * Update employee details
     * @param {number} id
     * @param {object} updatedData
     */
    updateEmployee(id, updatedData) {

        const emp = this.getEmployeeById(id);

        if (!emp) {
            throw new Error("Employee not found");
        }

        // Update only provided fields
        if (updatedData.name !== undefined) {
            emp.name = updatedData.name;
        }

        if (updatedData.salary !== undefined) {
            emp.salary = updatedData.salary;
        }

        return emp;
    }
}

module.exports = EmployeeManager;
