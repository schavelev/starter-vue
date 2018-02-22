// ClientApp/components/AppHello.ts
import Vue from "vue";
import HelloComponent from "./Hello.vue";

export default Vue.extend({
    data() {
        return {
            name: "World"
        }
    },
    components: {
        HelloComponent
    }
});