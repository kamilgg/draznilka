<template>
    <div class="inputs">
        <textarea class="text-input" id="text-input" type="text" placeholder="Тут фраза, которую нужно передразнить"/>
        <div class="btn-wrap">
            <button class="btn" v-on:click="tease"><span>подразнить</span></button>
        </div>
        <textarea class="text-output" id="text-output" type="text" readonly="true" placeholder="Тють фрязя, катёрёй мёжнё перидрязнить"/>
        <div class="copy-wrap" @click="copyTease">
            <span class="copy-span" id="copy-span">СКОПИРОВАТЬ</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input",
        methods: {
            tease: function() {
                let input = document.getElementById('text-input');
                let output = document.getElementById('text-output');
                let inputText = input.value;

                inputText = inputText
                    //a
                .replace(/а/g, 'я')
                .replace(/А/g, 'Я')
                    //o
                .replace(/ о/g, ' а')
                .replace(/(?=.)о(?=.)/g, 'ё')
                .replace(/ О/g, ' О')
                .replace(/(?=.)О(?=.)/g, 'Ё')
                    //у
                .replace(/(?!\s)у(?!\s)/g, 'ю')
                    //ы
                .replace(/(?=.)ы(?=.)/g, 'и')
                    //в
                .replace(/(?=.)в(?=е)/g, 'вь');


                output.value = inputText;
            },
            copyTease: function() {
                let copyText = document.getElementById('text-output');
                let copySpan = document.getElementById('copy-span');
                copyText.select();
                copyText.setSelectionRange(0, 99999);
                document.execCommand("copy");
                copySpan.innerText = 'СКОПИРОВАНО'
                setTimeout(function () {
                    copySpan.innerText = 'СКОПИРОВАТЬ'
                }, 1000);
            }
          }
    }
</script>

<style scoped>
    textarea {
        display: block;
        width: 40%;
        height: 60px;
        background-color: #000;
        border-width: 1px;
        border-style: solid;
        border-color: #fff2;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 160%;
        /*border-image: linear-gradient(27deg, rgba(90,37,95,1) 3%, rgba(116,56,255,1) 73%, rgba(255,135,129,1) 99%);*/
        /*border-image-slice: 1;*/
        color: #fff6;
        resize: none;
        padding: 40px;
    }
    textarea:focus {
        outline: none;
    }
    .btn-wrap{
        margin-top: 25px;
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn {
        position: relative;
        width: 300px;
        height: 60px;
        border: none;
        outline: none;
        cursor: pointer;
        background: white;
        color: black;
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-align: center;
        text-transform: uppercase;
        transition: all .3s;
    }
    .btn span {
        position: relative;
        z-index: 2;
    }
    .btn:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(27deg, rgba(255,135,129,1) 1%, rgba(116,56,255,1) 53%, rgba(90,37,95,1) 93%);
        transition: all .3s;
    }
    .btn:hover {
        color: white;
    }
    .btn:hover:after {
        width: 100%;
    }

    #text-input {
        position: absolute;
        left: 27%;
        top: 30%;
    }
    .text-input:focus {
        border-color: #fff4;
        color: #fff;
    }
    .copy-wrap {
        z-index: 2;
        width: calc(40% + 80px);
        height: 140px;
        position: absolute;
        left: 27%;
        top: 70%;
    }
    #text-output {
        z-index: 1;
        width: 100%;
        overflow: hidden;
        color: #fff;
    }
    .copy-span {
        display: none;
        font-family: Montserrat;
        z-index: 3;
        position: absolute;
        left: 0;
        width: 100%;
        height: 70px;
        padding-top: 70px;
        color: white;
        letter-spacing: 0.14em;
        background-color: rgba(255, 255, 255, .2);
        cursor: pointer;
    }
    .copy-wrap:hover > .copy-span {
        display: block;
    }
    #text-output {
        width: 40%;
        height: 60px;
        position: absolute;
        left: 27%;
        top: 70%;
    }
    #text-output:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1299px) {
        .btn-wrap {
            top: 56%;
        }
        .btn {
            width: 220px;
            height: 50px;
        }
    }
    @media screen and (max-width: 899px) {
        textarea {
            width: 63%;
            height: 50px;
            font-size: 13px;
        }
        #text-input {
            position: absolute;
            left: 8%;
            top: 30%;
        }
        #text-output {
            position: absolute;
            left: 8%;
            top: 65%;
            width: 63%;
            height: 50px;
        }
        .copy-wrap {
            position: absolute;
            left: 8%;
            top: 65%;
            width: calc(63% + 80px);
            height: 130px;
        }
        .copy-span {
            padding-top: 60px;
            height: 70px;
            color: white;
            background-color: rgba(135, 135, 135, .8);
        }
        .btn-wrap {
            position: absolute;
            top: 54%;
        }
        .btn {
            font-size: 11px;
            width: 21em;
            height: 4em;
            letter-spacing: 0.12em;
        }
    }
</style>