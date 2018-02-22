System.register("components/Hello", ["vue"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var vue_1;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.default.extend({
                template: '#hello-template',
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
            }));
        }
    };
});
System.register("components/AppHello", ["vue", "components/Hello"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var vue_2, Hello_1;
    return {
        setters: [
            function (vue_2_1) {
                vue_2 = vue_2_1;
            },
            function (Hello_1_1) {
                Hello_1 = Hello_1_1;
            }
        ],
        execute: function () {
            exports_2("default", vue_2.default.extend({
                template: '#app-hello-template',
                data: function () {
                    return {
                        name: "World"
                    };
                },
                components: {
                    HelloComponent: Hello_1.default
                }
            }));
        }
    };
});
System.register("index", ["vue", "components/AppHello"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var vue_3, AppHello_1, v;
    return {
        setters: [
            function (vue_3_1) {
                vue_3 = vue_3_1;
            },
            function (AppHello_1_1) {
                AppHello_1 = AppHello_1_1;
            }
        ],
        execute: function () {
            v = new vue_3.default({
                el: "#app-root",
                template: '<AppHelloComponent />',
                //render: h => h(AppHelloComponent),
                components: {
                    AppHelloComponent: AppHello_1.default
                }
            });
        }
    };
});
//# sourceMappingURL=main.js.map