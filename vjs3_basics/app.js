const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            title: "Return of the Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }

})

app.mount('#app')