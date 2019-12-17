export default {
    watch: {
        loadSetInterval() {
            this.init();
        },
        allParams() {
            this.init();
        }
    },
    computed: {
        loadSetInterval() {
            return this.$store.state.loadSetInterval
        },
        allParams() {
            return this.$store.state.allParams
        }
    },
    props: {
        loadData: {}
    },
}
