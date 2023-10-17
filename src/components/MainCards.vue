<template>
  <!-- Header section -->
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
        <h1> Hello, I'm <br/> <span> Mehdi </span> Ayoub </h1>
      </div>


    </div>
  </div>

  <!-- About Section -->
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
          <img src="../assets/user.png">
        </div>
        <div class="about-col-2">
          <h1 class="sub-title"> About Me </h1>
          <p> As a diligent Full-Stack Developer,
            I'm committed to crafting code that is both transparent and comprehensible.
            My goal is to make my work accessible to a broader audience, encouraging collaboration and constructive critique.
            I firmly believe that ongoing feedback is pivotal for achieving excellence and driving progress.
            I see this philosophy aligning seamlessly with the principles embraced by Spotify,
            and I'm eager to bring my contributions to the table.
          </p>

          <div class="tab-titles">
            <p class="tab-links active-link"> Skills </p>
            <p class="tab-links"> Experience </p>
            <p class="tab-links"> Education </p>
          </div>

          <div class="tab-contents">
            <ul>
              <li> <span> Programming Languages </span> <br> Python - C - Ruby </li>
              <li> <span> Back-end Frameworks </span> <br> Django - Rails - Laravel </li>
              <li> <span> Front-end Frameworks </span> <br> Vue.js - React.js - Stimulus.js </li>
            </ul>
          </div>

          <div class="tab-contents">
            <ul>
              <li> <span> 08/2023 - Present </span> <br> Web Developer Intern </li>
              <li> <span> 01/2023 - 06/2023 </span> <br> Customer Support Representative </li>
              <li> <span> 07/2021 - 12/2022 </span> <br> Technical Support Agent  </li>
              <li> <span> 12/2025 - 07/2021 </span> <br> Data Analysis Controller </li>

            </ul>
          </div>

          <div class="tab-contents">
            <ul>
              <li> <span> Le Wagon </span> <br> Web Development </li>
              <li> <span> American University of Beirut </span> <br> Diploma in AI and Data Science </li>
              <li> <span> Al Ghurair University </span> <br> Bachelor of Science in Electrical and Electronics Engineering </li>
            </ul>
          </div>

        </div>

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
    margin-top: 40px;
  }

  .header-text h1 span {
    color: #ff004f;
  }


/* ---------------------- About section -------------------------- */

#about {
  padding: 80px 0;
  color: #ababab
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.about-col-1 {
  flex-basis: 35%;

 }

 .about-col-1 img {
  width: 100%;
  border-radius: 15px;
 }

 .about-col-2 {
  flex-basis: 60%;
 }

 .sub-title {
  font-size: 60px;
  font-weight: 600;
  color: #fff;
 }

 .tab-titles {
  display: flex;
  margin: 20px 0 40px;
 }

 .tab-links {
  margin-right: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
 }

 .tab-links::after{
  content: '';
  width: 0;
  height: 3px;
  background: #ff004f;
  position: absolute;
  left: 0px;
  bottom: -8px;
  transition: 0.3s;
 }

.tab-links.active-link::after{
  width: 50%;
}

.tab-contents ul li {
  list-style: none;
  margin: 10px 0;
}

.tab-contents ul li span {
  font-size: 14px;
  color: #b54769;
}
</style>
