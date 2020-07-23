<template>
    <div class="header-logo">
        <div class="sup-text" id="left-sup-text">ДАВАЙ, ПОДРАЗНИ</div>
        <div id="main-logo">
            <img id="main-pic" src="../assets/icons/MaskGroup.png">
            <div class="main-text" id="main-text">ДРАЗНИЛКА</div>
        </div>
        <div class="sup-text" id="right-sup-text">КАК В ДЕТСТВЕ</div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    @font-face {
        font-family: "Lobster Regular";
        src: url("../assets/fonts/Lobster-Regular.ttf") format("woff2");
    }
    @font-face {
        font-family: "Misto";
        src: url("../assets/fonts/misto.ttf") format("woff2");
    }
    @font-face {
        font-family: "Montserrat Regular";
        src: url("../assets/fonts/Montserrat-Regular.ttf") format("woff2");
    }
    .main-text {
        font-family: Misto;
        font-style: normal;
        font-weight: normal;
        font-size: 4em;
        color: white;
        line-height: 80px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    .sup-text {
      font-family: Montserrat Regular;
      color: white;
      font-size: 1.2em;
    }
    .header-logo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 170px;
        padding-top: 30px;
        padding-bottom: 10px;
    }


    #left-sup-text {
        position: absolute;
        left: 10%;
        top: 60px;
    }
    #right-sup-text {
        position: absolute;
        right: 10%;
        top: 60px;
    }
    #main-logo {
        position: relative;
        margin: auto;
    }
    #main-pic {
        position: absolute;
        z-index: 1;
        left: 40%;
        top: -40px;
    }
    #main-text {
        position: absolute;
        z-index: 2;
        left: 35%;
    }

    @media screen and (max-width: 1299px) {
        .main-text {
            font-family: Misto;
            font-style: normal;
            font-weight: normal;
            font-size: 3em;
            color: white;
            line-height: 80px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
        .sup-text {
          font-family: Montserrat Regular;
          color: white;
          font-size: 1em;
        }

        #left-sup-text {
            position: absolute;
            left: 5%;
            top: 25px;
        }
        #right-sup-text {
            position: absolute;
            right: 5%;
            top: 25px;
        }
        #main-pic {
            position: absolute;
            z-index: 1;
            left: 35%;
            top: -10px;
            width: 30%;
        }
        #main-text {
            position: absolute;
            z-index: 2;
            left: 30%;
            top: 30px;
        }
    }
    @media screen and (max-width: 899px) {
        .main-text {
            font-family: Misto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5em;
            color: white;
            line-height: 80px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
        .sup-text {
          font-family: Montserrat Regular;
          color: white;
          font-size: 0.5em;
        }

        #left-sup-text {
            position: absolute;
            left: 5%;
            top: 25px;
        }
        #right-sup-text {
            position: absolute;
            right: 5%;
            top: 25px;
        }
        #main-pic {
            position: absolute;
            z-index: 1;
            left: 35%;
            top: 25px;
            width: 40%;
        }
        #main-text {
            position: absolute;
            z-index: 2;
            left: 30%;
            top: 30px;
        }
    }
</style>