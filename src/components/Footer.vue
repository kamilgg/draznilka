<template>
    <div class="footer">
        <div class="sup-footer-text" id="left-footer-text" @click="showAbout">О ПРОЕКТЕ</div>
        <div class="sup-footer-text" id="right-footer-text">2020</div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            showAbout: function() {
                let aboutWindow = document.getElementById('about');
                let btn = document.getElementById('left-footer-text');
                // this.data.isActive = !this.data.isActive;
                btn.classList.toggle('active');
                aboutWindow.classList.toggle('active');
            }
        }
    }
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
    }
    .sup-footer-text {
        color: white;
        font-family: Montserrat;
        font-size: 0.9em;
        letter-spacing: 0.01em;
    }

    #left-footer-text {
        position: absolute;
        left: 10%;
        cursor: pointer;
    }
    #right-footer-text {
        position: absolute;
        right: 10%;
    }
    .sup-footer-text.active {
        color: rgba(255,135,129,1);
    }
</style>