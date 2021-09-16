class Marker {
    constructor(size, color, remainingInk) {
        this.size = size
        this.color = color
        this.remainingInk = remainingInk
    }

    write(whatToWrite) {
        let whatIwrote = ""
        for (let letter of whatToWrite) {
            if (letter === " ") {
                whatIwrote += " "
            } else {
                if (this.remainingInk > 0) {
                    this.remainingInk -= 1
                    whatIwrote += letter
                }
            }
        }
        return whatIwrote
    }
}

module.exports = Marker
