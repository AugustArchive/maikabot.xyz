export default {
    env: {
        baseURL: "http://127.0.0.1:5000"
    },
    head: {
        title: 'Maika#2363',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, inital-scale=1' }
        ],
        link: [
            { rel: 'icon', href: './assets/Maika.png' }
        ]
    },
    loading: '#E67EDE',
    css: ["~/assets/css/style.css"],
    build: {},
    modules: ["@nuxtjs/axios"],
    axios: {}
};