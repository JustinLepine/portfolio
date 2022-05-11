export default class Typewriter {
    queue = []

    constructor(parent, { loop = false, typingSpeed = 100, deletingSpeed = 100 } = {}) {
        // setInterval(() => {

            this.element = document.createElement("p")
            // this.element = document.getElementById('#type')
            // this.element = document.querySelector('.type')        
            parent.append(this.element)
            this.loop = loop
            this.typingSpeed = typingSpeed
            this.deletingSpeed = deletingSpeed

        // }, 1000)

    }

    typeString(string) {
        this.addToQueue(resolve => {
            let i = 0
            const interval = setInterval(() => {
                this.element.append(string[i])
                i++
                if (i >= string.length) {
                    clearInterval(interval)
                    resolve()
                }
            }, this.typingSpeed)
        })
        return this
    }

    deleteChars(number) {
        this.addToQueue(resolve => {
            let i = 0
            const interval = setInterval(() => {
                this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1)
                i++
                if (i >= number) {
                    clearInterval(interval)
                    resolve()
                }
            }, this.deletingSpeed)
        })
        return this
    }

    deleteAll(deleteSpeed = this.deletingSpeed) {
        this.addToQueue(resolve => {
            const interval = setInterval(() => {
                this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1)
                if (this.element.innerText.length === 0) {
                    clearInterval(interval)
                    resolve()
                }
            }, this.deletingSpeed)
        })
        return this
    }

    pauseFor(duration) {
        this.addToQueue(resolve => {
            setTimeout(resolve, duration)
        })
        return this
    }

    async start() {
        let callback = this.queue.shift()
        while (callback != null) {
            await callback()
            if (this.loop) this.queue.push(callback)
            callback = this.queue.shift()
        }
        return this
    }

    addToQueue(callback) {
        this.queue.push(() => new Promise(callback))
    }
}