export default {
    watch: {
        loadSetInterval() {
            this.init();
        },
        allParams: {
            handler() {
                this.init();
            },
            deep: true

        }
    },
    computed: {
        loadSetInterval() {
            return this.$store.state.loadSetInterval
        }
        ,
        allParams() {
            return this.$store.state.allParams
        }
    }
}
