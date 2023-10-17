<template>
  <!-- Header section -->
  <div id="header">
    <div class="container">

      <nav>
        <img src="../assets/logo.png" alt="logo" class="logo">
        <ul v-show="menuOpen">
          <li> <a href="#"> Home</a> </li>
          <li> <a href="#"> About</a> </li>
          <li> <a href="#"> Proficiencies</a> </li>
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

  <!------------------ About Section ----------------------------->
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
          <img src="../assets/myphoto.jpg">
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
            <p class="tab-links" :class="{ 'active-link': activeTab === 'skills' }" @click="activeTab = 'skills'"> Skills </p>
            <p class="tab-links" :class="{ 'active-link': activeTab === 'experience' }" @click="activeTab = 'experience'"> Experience </p>
            <p class="tab-links" :class="{ 'active-link': activeTab === 'education' }" @click="activeTab = 'education'"> Education </p>
          </div>

          <div class="tab-contents" v-show="activeTab === 'skills'">
            <ul>
              <li> <span> Programming Languages </span> <br> Python - JavaScript - Ruby - C </li>
              <li> <span> Back-end Frameworks </span> <br> Django - Rails - Laravel </li>
              <li> <span> Front-end Frameworks </span> <br> Vue.js - React.js - Stimulus.js </li>
            </ul>
          </div>

          <div class="tab-contents" v-show="activeTab === 'experience'">
            <ul>
              <li> <span> 08/2023 - Present </span> <br> Web Developer Intern </li>
              <li> <span> 01/2023 - 06/2023 </span> <br> Customer Support Representative </li>
              <li> <span> 07/2021 - 12/2022 </span> <br> Technical Support Agent  </li>
              <li> <span> 12/2015 - 07/2021 </span> <br> Data Analysis Controller </li>

            </ul>
          </div>

          <div class="tab-contents" v-show="activeTab === 'education'">
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

  <!----------------------------------------- Services Section ----------------------------------------------->


  <div id="services">
    <div class="container">
      <h1 class="sub-title"> My Proficiencies </h1>
      <div class="services-list">
        <div>
          <font-awesome-icon icon="code" class="large-icon"/>
          <h2>Web Development</h2>
          <p>
            Specializing in crafting interactive and dynamic web applications,
            my expertise in web development covers everything from front-end to back-end development.
            With a strong grasp of languages including Python, Ruby, JavaScript, HTML, and CSS.
          </p>
        </div>

        <div>
          <font-awesome-icon icon="crop" class="large-icon"/>
          <h2>Data Analysis & AI </h2>
          <p>Leveraging a solid foundation in Electrical and Electronics Engineering combined with a diploma in Artificial Intelligence and Data Science,
            I offer data-driven solutions to business challenges.
            I ensure businesses stay ahead of the curve.
            I focus on fast query performance.
          </p>

        </div>

        <div>
          <font-awesome-icon :icon="['fab', 'app-store']" class="large-icon"/>
          <h2> Database Management </h2>
          <p>In today's data-driven era, efficient data storage and retrieval are paramount for business operations.
            Leveraging my comprehensive, hands-on experience in effectively managing, maintaining, and meticulously optimizing extensive, large-scale databases.
          </p>
        </div>

      </div>
    </div>
  </div>

  <!----------- Portfolio ---------------->

  <div id="portfolio">
    <div class="container">
      <h1 class="sub-title"> My Work </h1>
      <div class="work-list">
        <div class="work">
          <a href="https://github.com/mehdi-ayoub/EcoWheels"> <img src="../assets/EcoWheels.png" > </a>
          <div class="layer">
            <h3> CO2 Emission Calculator App </h3>
            <p> Developed using Rails, this application automatically detects and
              captures user location through geolocation services.
              It then computes the CO2 emissions between two specified distances,
              providing users with insights into their environmental footprint.
            </p>

          </div>
        </div>
        <div class="work">
          <a href="https://github.com/mehdi-ayoub/React-Project-1">  <img src="../assets/React.png" > </a>
          <div class="layer">
            <h3> Delivery App </h3>
            <p> Built with Rails on the back-end and React on the front-end,
              this delivery application supports comprehensive CRUD actions.
              Users can effortlessly tally the items in each delivery.
              Additionally, a convenient icon enables users to seamlessly mark a delivery as "delivered."
            </p>
          </div>
        </div>
        <div class="work">
          <a href="https://github.com/mehdi-ayoub/portfolio-vue"> <img src="../assets/Vue.png" > </a>
          <div class="layer">
            <h3> Personal Portfolio App </h3>
            <p> My portfolio, meticulously crafted using Vue.js, showcases my professional journey, achievements, and personal details. It serves as a reflection of my dedication to excellence and provides a comprehensive view of my skills and experiences in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="contact">
    <div class="container">
      <div class="row">
        <div class="contact-left">
          <h1 class="sub-title"> Contact Me </h1>
          <p> <font-awesome-icon :icon="['far', 'paper-plane']" class="contact-icon"/> ayoub.mehdi@outlook.com </p>
          <p> <font-awesome-icon :icon="['fas', 'mobile']" class="contact-icon" />00971527175267 </p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/mehdi-ayoub-6b1485243/"> <font-awesome-icon :icon="['fab', 'linkedin']" /> </a>
            <a href="https://github.com/mehdi-ayoub"><font-awesome-icon :icon="['fab', 'github']" /></a>
          </div>
          <a href="/MehdiAyoubResume.pdf" download class="btn btn2">Download CV</a>
        </div>

        <div class="contact-right"></div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeTab: 'skills',
      menuOpen: true
    }
  },

  methods: {
    openMenu() {
      this.menuOpen = true;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
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
    height: 60vh;
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

 /* --------------Services Section ----------------*/

 #services {
  padding: 30px 0;
 }

 .services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
 }

 .services-list div {
  background: #262626;
  padding: 40px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 13px;
  transition: background 0.5s, transform 0.5s;
 }

 .services-list div h2 {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
 }

 .services-list div:hover {
  background: #ff004f;
  transform: translateY(-10px);
 }

 .large-icon {
  font-size: 30px;
  margin-bottom: 20px;
 }

/* ---- portfolio ---- */

#portfolio {
  padding: 50px 0;
}

.work-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.work {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.work img {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
}



.layer{
  width: 100%;
  height: 0;
  background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}

.layer h3 {
  font-weight: 500;
  margin-bottom: 20px;
}

.work:hover img {
  transform: scale(1.1);
}

.work:hover .layer {
  height: 100%;
}


/* ------- Contact ---- */

.contact-left {
  flex-basis: 35%;
}

.contact-right {
  flex-basis: 60%;
}

.contact-left p {
  margin-top: 30px;

}

.contact-icon {
  color:#ff004f;
  margin-right: 15px;
  font-size: 25px;
}

.social-icons {
  margin-top: 30px;
}

.social-icons a {
  text-decoration: none;
  font-size: 30px;
  margin-right: 15px;
  color: #ababab;
  display: inline-block;
  transition: transform 0.5s;
}

.social-icons a:hover {
  color: #ff004f;
  transform: translateY(-5px);
}

.btn {
  display: block;
  margin: 50px auto;
  width: fit-content;
  border: 1px solid #ff004f;
  padding: 14px 50px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  transition: background 0.5s;
}

.btn:hover {
  background: #ff004f;

}

.btn.btn2 {
  display: inline-block;
  background: #ff004f;
}

nav .fas {
  display: none;
}

/* ---------------CSS FOR SMALL SCREEN-------- */
@media only screen and (max-width: 600px) {
  * {
    margin: -1px;
  }
  .header-text {
    margin-top: 20%;
    font-size: 16px;
  }

  .header-text h1 {
    font-size: 30px;
  }

  nav .fas {
    display: block;
    font-size: 25px;
  }

  nav ul {
    background: #ff004f;
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100vh;
    padding-top: 50px;
    z-index: 2;
  }

  nav ul li {
    display: block;
    margin: 25px;
  }

  nav ul .fas {
    position: absolute;
    top: 25px;
    left: 25px;
    cursor: pointer;
  }

  .work img {
    width: 76%;
    height: 220px;
  }

  .sub-title {
    font-size: 30px;
  }

  .services-list div {
    padding: 8px;
    font-size: 13px;
    width: 235px

  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .about-col-1 img {
    width: 235px;
  }

  #about {
    padding: 0px 0;
  }

  .about-col-2 {
    width: 250px;
  }

  .tab-titles {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .tab-links {
    margin-bottom: 10px;
  }

  .tab-links.active-link::after {
    width: 20%;
  }
}

</style>
