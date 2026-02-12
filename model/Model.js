/**
 * Employee Model Class
 * Represents a single employee entity
 */
class Employee {
    /**
     * Constructor to create employee object
     * @param {number} id
     * @param {string} name
     * @param {number} salary
     */
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

module.exports = Employee;
