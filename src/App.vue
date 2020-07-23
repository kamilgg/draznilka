<template>
  <div id="app">
    <Header/>
    <Input/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Input from "@/components/Input";
import Footer from "@/components/Footer";
import About from "@/components/About";


export default {
  name: 'App',
  components: {
    About,
    Footer,
    Input,
    Header
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255,135,129,1);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(123, 50, 193);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(90,37,95,1);
  }

  Input {
    margin-top: 10%;
  }


  @media screen and (max-width: 899px) {
        Input {
          margin-top: 35%;
        }
  }
</style>
