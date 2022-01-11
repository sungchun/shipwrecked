import items from "./items"

class Player {
    constructor() {
        this.inventory = []
    }

    pickUp(thing) {
        object = items[thing]
        if (object.canPickUp) {
            this.inventory.push(thing)
        } else {
            console.log(object.pickUp)
        }
    }

    combine(command) {
        canCombine = true
        const things = command.split(' ')
        things.splice(0, 1)
        const firstItem = items[things.splice(0, 1).toLowerCase()]
        things.forEach(thing => {
            if (!firstItem.combinesWith.includes(thing)) {
                canCombine = false
                console.log('won\'t combine')
                break
            }
        })
        if (canCombine) {
            this.inventory.push(firstItem.creates)
            this.inventory = this.inventory.filter(thing => {
                if (!thing === firstItem || !things.includes(thing)) {
                    return thing
                }
            })
        }
    }
}