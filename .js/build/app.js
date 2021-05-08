System.register("const", [], function (exports_1, context_1) {
    "use strict";
    var HelloMessagesCollection, iPhoneMessagesCollection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HelloMessagesCollection = (function () {
                function HelloMessagesCollection() {
                    this.hello = "Welcome to my page!";
                    this.butWait = "but wait... this is just like a github-hosted server... nevermind.";
                    this.lurk = "You just want to deal with my skills isn't it?";
                    this.haveFun = "So have fun.";
                    this.rxjsText = 'So probably you just wanna know my RXJS experience?';
                    this.rxjsInfo = "Honestly this is my first time, when I used this standalone.";
                    this.rxjsContinue = "At first, maybe some funny iPhone Message-like box? Why not!";
                }
                return HelloMessagesCollection;
            }());
            exports_1("HelloMessagesCollection", HelloMessagesCollection);
            iPhoneMessagesCollection = (function () {
                function iPhoneMessagesCollection() {
                    this.firstPersonHi = "Hi!";
                }
                return iPhoneMessagesCollection;
            }());
            exports_1("iPhoneMessagesCollection", iPhoneMessagesCollection);
        }
    };
});
System.register("message", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
document.querySelector('div.content');
//# sourceMappingURL=app.js.map