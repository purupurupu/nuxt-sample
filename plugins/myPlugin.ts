export default defineNuxtPlugin(() => {
    return {
        provide: {
            sayHello: (msg:string) => {
                console.log(`Hello ${msg}`);
            },
            sayGoodbye: (msg:string) => {
                console.log(`Goodbye ${msg}`);
            }
        }
    }
})