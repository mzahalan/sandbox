const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: "The Way of Kings", author: "Brandon Sanderson", img: 'assets/way_of_kings.jpeg', isFav: true },
                { title: "The Last Wish", author: "Andrzej Sapkowski", img: 'assets/last_wish.jpeg', isFav: false },
                { title: "The Rise of Skywalker", author: "J. J. Abrams", img: 'assets/rise_of_skywalker.jpeg', isFav: false},
                { title: "The Fellowship of the Ring", author: "JRR Tolkien", img: 'assets/fellowship.jpeg', isFav: true }
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
        toggleFav(book) {
            book.isFav =!book.isFav
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }

})

app.mount('#app')

// challenge - toggle isFav on click