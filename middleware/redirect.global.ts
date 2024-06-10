export default defineNuxtRouteMiddleware((to, _from) => {
    const path = to.fullPath || '';
    const pattern = /\/index$/;
    if (pattern.test(path)) {
        const newPath = path.replace(pattern, '/');
        return newPath;
    }
})