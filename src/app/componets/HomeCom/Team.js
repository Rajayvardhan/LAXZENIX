import React from "react";

const teamMembers = [
  {
    id: 1,
    img: "assets/images/team/lucky.jpeg",
    name: "Rajyvardhan Singh",
    position: "Sr. MERN Stack Developer",
    delay: ".10s",
  },
  {
    id: 2,
    img: "assets/images/team/nandini.jpeg",
    name: "Nandini Lodha",
    position: "Sr. Front-end Developer",
    delay: ".15s",
  },
  {
    id: 3,
    img: "assets/images/team/rinku.png",
    name: "Rinku Yadav",
    position: "Server Admin",
    delay: ".20s",
  },
  {
    id: 4,
    img: "assets/images/team/candan.png",
    name: "Chandan Sharma",
    position: "Sr. SEO Executive",
    delay: ".25s",
  },
  {
    id: 5,
    img: "assets/images/team/vijay.jpeg",
    name: "Vijay Singh",
    position: "MERN Stack Developer",
    delay: ".30s",
  },
  {
    id: 6,
    img: "assets/images/team/vinod.png",
    name: "Vinod Sain",
    position: "Flutter developer",
    delay: ".35s",
  },
  {
    id: 7,
    img: "assets/images/team/lucky.jpeg",
    name: "Kartik Sharma",
    position: "Business Analyst",
    delay: ".40s",
  },
  {
    id: 8,
    img: "assets/images/team/devika.png",
    name: "Devika Chhipa",
    position: "Frontend Developer",
    delay: ".45s",
  },
];

const Team = () => {
  return (
    <section className="team-area team-area-v2 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp">
              <span className="sub-title st-one">Meet Our Team</span>
              <h2>Experience Team Members</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-55 wow fadeInUp"
                data-wow-delay={member.delay}
              >
                <div className="img-holder" style={{backgroundColor:"#f7f7f7"}}>
                  <img src={member.img} alt={member.name} height={288}/>
                </div>
                <div className="text text-center">
                  <ul className="social-link">
                    <li>
                      <a href="team.html#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="team.html#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="team.html#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="team-details.html">{member.name}</a>
                  </h4>
                  <p className="position">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="button-box text-center wow fadeInUp">
              <a href="team.html" className="main-btn arrow-btn">
                View All Member
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;