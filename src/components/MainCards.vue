<template>
  <div id="header">
    <div class="container">

      <nav>
        <img src="../assets/logo.png" alt="logo" class="logo">
        <ul>
          <li> <a href="#"> Home</a> </li>
          <li> <a href="#"> About</a> </li>
          <li> <a href="#"> Services</a> </li>
          <li> <a href="#"> Portfolio </a> </li>
          <li> <a href="#"> Contact </a> </li>
        </ul>
      </nav>

      <div class="header-text">
        <p> Full Stack Developer </p>
        <h1> Hello, I'm Mehdi Ayoub </h1>
      </div>


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  body {
    background: #080808;
    color: #fff;
  }

  #header {
    width: 100%;
    height: 100vh;
    /* background-image: url(../assets/photo-new.png); */
    background-size: cover;
    background-position: center;
  }

  .container {
    padding: 10px 10%;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }


  .logo {
    width: 260px;
    height: 150px;
  }

  nav ul li{
    display: inline-block;
    /* display: flex; */
    list-style: none;
    margin: 10px 20px;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
  }

  nav ul li a::after {
    content: '';
    width: 0%;
    height: 3px;
    background: #ff004f;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.3s;
  }

  nav ul li a:hover::after {
    width: 100%;
  }

  .header-text {
    margin-top: 20px;
    font-size: 30px;
    color: #fff;
  }

  .header-text h1 {
    font-size: 60px;
    margin-top: 20px;
  }


</style>
