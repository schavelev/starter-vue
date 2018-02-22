// ClientApp/components/Hello.ts
import Vue from "vue";
export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data: function () {
        return {
            enthusiasm: this.initialEnthusiasm
        };
    },
    methods: {
        increment: function () { this.enthusiasm++; },
        decrement: function () {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks: function () {
            return Array(this.enthusiasm + 1).join('!');
        }
    }
});
//# sourceMappingURL=Hello.js.map