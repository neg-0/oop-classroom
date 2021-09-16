class Student {
    constructor(name, skillLevel) {
        this.name = name
        this.skillLevel = skillLevel

        this.assignments = []
    }

    study() {
        if (this.skillLevel < 100) {
            this.skillLevel += 1
        }
        return this;
    }

    doHomework(homework = null) {
        if (homework === null) {
            for (let assignment of this.assignments) {
                if (assignment.skillLevel <= this.skillLevel) {
                    assignment.completed = true
                }
            }
            return
        }

        if (!homework.skillLevel || homework.skillLevel < 1 || homework.skillLevel > 100) {
            return
        }

        homework.completed = homework.skillLevel <= this.skillLevel
        this.assignments.push(homework)
    }
}

module.exports = Student
