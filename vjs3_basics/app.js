const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            title: "Return of the Empire",
            author: "Brandon Sanderson",
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
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