const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            books: [
                { title: "Return of the Empire", author: "Brandon Sanderson" },
                { title: "The Last Wish", author: "Andrzej Sapkowski" },
                { title: "The Rise of Skywalker", author: "J. J. Abrams" },
                { title: "The Fellowship of the Ring", author: "JRR Tolkien" }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            if(data) {
                console.log(data)
            }
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }

})

app.mount('#app')