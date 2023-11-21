import AnimatedText from "../AnimatedText";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <section className="firstSection">
          <div className="leftSection">
            Hi, My Name is <span className="purple">Yuvraj</span>
            <div> And I am passionate</div>
            <span className="Element">
              <AnimatedText />
            </span>
          </div>

          <div className="rightSection">
            <img className="myimgyuvi" src="yuvrajimg.jpg" alt="" />
          </div>
        </section>
        <hr className="hrtagins" />
        <section className="secondSection">
          <span id="exp" className="text-grey">
            What I have done so far
          </span>
          <h1>Work Experience</h1>
          <div className="box">
            <div className="vertical-box zoom-in-out">
              <img className="image-top" src="Embed.png" alt="" />
              <div className="vertical-box-title">
                Embedded Developer (2019 - 2020)
              </div>
              <div className="vertical-box-desc">
                During 2018 to 2019, I specialized in designing and programming
                embedded systems. My role involved creating software and
                firmware embedded into microcontrollers and other hardware
                devices. I was responsible for developing code to control and
                manage various hardware components, ensuring their proper
                functioning. This experience allowed me to gain expertise in
                low-level programming and working closely with hardware
                components to create efficient and reliable embedded systems.
              </div>
            </div>
            <div className="vertical-box zoom-in-out">
              <img className="image-top" src="iitmombay.png" alt="" />
              <div className="vertical-box-title">
                {" "}
                IIT Mombay Intership(2020 - 2021)
              </div>
              <div className="vertical-box-desc">
                Developed a practical DSP application for real-time vehicle
                number plate detection and recognition. Utilized advanced DSP
                techniques during a 6-month project to design an innovative
                system for automatic number plate detection
              </div>
            </div>
            <div className="vertical-box zoom-in-out">
              <img className="image-top" src="reactjs.png" alt="" />
              <div className="vertical-box-title">
                {" "}
                HTML,CSS,JS,ReactJS Devloper(2021- 2023)
              </div>
              <div className="vertical-box-desc">
                As a HTML, CSS, JavaScript, and ReactJS developer from 2021 to
                2023, I continuously honed my skills and expertise. Throughout
                this period, I undertook numerous projects that allowed me to
                implement cutting-edge web technologies, create stunning user
                interfaces, and develop responsive and dynamic web applications.
                My dedication to staying at the forefront of web development
                trends ensured that I delivered high-quality, modern solutions
                that met clients' needs and exceeded their expectations.
              </div>
            </div>
            <div className="vertical-box zoom-in-out">
              <img className="image-top" src="star1.png" alt="" />
              <div className="vertical-box-title">
                {" "}
                Working in StarHealth (2023)
              </div>
              <div className="vertical-box-desc">
                As a Front-End Developer at StarHealth, I am currently immersed
                in the dynamic world of ReactJS. My role involves crafting
                user-centric web applications with a focus on intuitive user
                interfaces and exceptional user experiences. Working with a team
                of talented professionals, I am constantly pushing the
                boundaries of what's possible in web development. Together, we
                create cutting-edge solutions that align with StarHealth's
                mission and elevate the online presence of the organization. I
                am dedicated to harnessing the power of ReactJS to build
                responsive, efficient, and visually stunning front-end solutions
                that leave a lasting impact on our users.
              </div>
            </div>
            {/* Add more vertical-box items as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
