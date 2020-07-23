<template>
    <div v-show="true" class="about" id="about">
        <a target="_blank" rel="noopener noreferrer" href="https://davaypodrazni.ru/">Проект</a> — бесполезный.
        <br>
        <a target="_blank" rel="noopener noreferrer" href="https://vk.com/kamilgg">Автор</a> — дурак.
        <br>
        <a target="_blank" rel="noopener noreferrer" href="https://vk.com/kislyakovv">Дизайнер</a> — бездарность.
        <div class="social">
            <div class="social-logo">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kamil.gatin/">
                    <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"/><path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"/><path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"/></svg>
                </a>
            </div>
            <div class="social-logo">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kam_gatin">
                    <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-102.1875 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"/></svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .about {
        display: none;
        position: absolute;
        bottom: 10%;
        left: 5%;
        width: 200px;
        height: 100px;
        padding: 20px;
        text-align: left;
        line-height: 1.3em;
        background: #fff;
        color: black;
        border-bottom: 4px solid;
        border-image: linear-gradient(27deg, rgba(255,135,129,1) 1%, rgba(116,56,255,1) 53%, rgba(90,37,95,1) 93%);
        border-image-slice: 1;
        z-index: 4;
    }
    .about.active {
        display: block;
    }
    a {
        color: rgba(255,135,129,1);
    }

    .social {
        display: block;
    }
    .social-logo {
        display: inline-block;
        margin-top: 18px;
        margin-right: 10px;
    }
    .social-logo a svg {
        fill: rgba(0,0,0,0.7);
    }
    .social-logo a:hover svg {
        fill: rgba(0,0,0,0.7);;
    }

    @media screen and (max-width: 1299px) {
        .about {
            width: 200px;
            height: 100px;
        }
    }
</style>