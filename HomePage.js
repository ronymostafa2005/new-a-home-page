// MUI
import { Box, Button, Typography, IconButton } from "@mui/material"; // أضف Typography و IconButton هنا
import Facebook from '@mui/icons-material/Facebook'; // استيراد أيقونات الشبكات الاجتماعية
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

// recoil
import { useSetRecoilState } from "recoil";
import alertAtom from "../recoil/atoms/alertAtom";
// react-router-dom
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "../routes/paths";
// images
import docimg from './images/about4.png';
//icon
import icon from './images/stethoscope.png';
//video
import vid from "./images/istockphoto-860443522-640_adpp_is.mp4";
import { useEffect, useRef } from "react";

// img hero team
import hero2 from './images/hero2.png';

// Footer Component
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "20px",
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          Medical Clinic
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "500px", margin: "0 auto" }}>
          Providing high-quality medical care with a team of global experts, ensuring your health and well-being are our top priority.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: "#fff" }}>
          <Facebook />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: "#fff" }}>
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: "#fff" }}>
          <Instagram />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: "#fff" }}>
          <LinkedIn />
        </IconButton>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="body2">
          <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "none", marginRight: "15px" }}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" style={{ color: "#fff", textDecoration: "none" }}>
            Terms of Service
          </a>
        </Typography>
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Medical Clinic. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

function HomePage() {
  const triggerAlert = useSetRecoilState(alertAtom);
  const navigate = useNavigate();

  // المراجع للأقسام وأشرطة التقدم
  const sectionRef = useRef(null); // قسم شرائط التقدم
  const spansRef = useRef([]); // مراجع جميع الـ spans

  const animatedCounter = (elementId, start, end, duration) => {
    const element = document.getElementById(elementId);
    const increment = end > start ? 1 : -1;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, duration);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= sectionRef.current.offsetTop) {
        spansRef.current.forEach((span) => {
          span.style.width = span.getAttribute("data-width");
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    animatedCounter("count1", 1, 100, 30);
    animatedCounter("count2", 1, 300, 50);
    animatedCounter("count3", 1, 500, 100);
  }, []);

  const openAlert = () => {
    triggerAlert({
      isOpen: true,
      isSuccess: false,
      message: "Something went wrong",
    });
    navigate(PATH_AUTH.login);
  };

  return (
    <>
      <div className="images">
        <div>
          <h3>Welcome To Medical Clinic</h3>
          <img src={icon} alt="icon1" className="icon1" />
          <h1 className="h1">The Care You Deserve, from experts you trust</h1>
          <h4>A specialized medical team with global expertise to assist you every step of the way. Your health is our priority</h4>
          <button className="but1">Read More</button>
          <button className="but2">Appointment</button>
        </div>
        <img src={docimg} alt="hero img2" className='image2' />
      </div>

      <div className="technology">
        <div className="main-technology">
          <div className="inner-technology1">
            <i></i>
            <h2>Quality & Safety</h2>
            <p>A specialized medical team with global expertise to assist you every step of the way. Your health is our priority</p>
          </div>
          <div className="inner-technology2">
            <i></i>
            <h2>Quality & Safety</h2>
            <p>A specialized medical team with global expertise to assist you every step of the way. Your health is our priority</p>
          </div>
          <div className="inner-technology3">
            <i></i>
            <h2>Quality & Safety</h2>
            <p>A specialized medical team with global expertise to assist you every step of the way. Your health is our priority</p>
          </div>
        </div>
      </div>

      <video width="800" autoPlay muted className="vid1">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="h2-vid1">Our equipment is prepared with the highest quality, precision, and cleanliness because your health is our top priority 💊</h2>

      {/* قسم العدادات وأشرطة التقدم */}
      <section className="three" ref={sectionRef}>
        <div className="skills">
          <div className="progress" >
            <span
              ref={(el) => spansRef.current[0] = el}
              data-width="80%"
              style={{ width: "0%" }}
            ></span>
          </div>
          <h3></h3>
          <div className="progress">
            <span
              ref={(el) => spansRef.current[1] = el}
              data-width="90%"
              style={{ width: "0%" }}
            ></span>
          </div>
          <div className="progress">
            <span
              ref={(el) => spansRef.current[2] = el}
              data-width="50%"
              style={{ width: "0%" }}
            ></span>
          </div>
        </div>
      </section>

      <div className="section4">
        <div className="box1">
          <h3>Patients Treated Daily</h3>
          <span id="count1">1</span>
        </div>

        <div className="box2">
          <h3>Experts Checking Devices Daily</h3>
          <span id="count2">1</span>
        </div>

        <div className="box3">
          <h3>Staff Keeping Clinic Clean</h3>
          <span id="count3">1</span>
        </div>
        <img src={hero2} alt="photo" className="photo" />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
