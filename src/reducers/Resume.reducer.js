import ReactHtmlParser from "react-html-parser";

export default () => ({
  information: {
    "Full name": "Nguyen Quang Khai",
    "Day of birth": "November 10, 1998",
    "Phone number": "0325575111",
    Email: "nguyenquangkhai2210@gmail.com",
    Github: "nguyenquangkhai2210",
    Skype: "live:nguyenquangkhai2210",
    Address: "Truong Tho Ward, Thu Duc District, Ho Chi Minh City"
  },
  objective: [
    '<p style="margin-bottom: 10px" >Short-term goal: <strong>Front-end Developer</strong> </p>',
    '<p style="margin-bottom: 10px" >Long-term goal: <strong>Project Manager</strong> </p>'
  ],
  skill_front_end: ["HTML5/CSS/JS", "ReactJS", "Redux", "AngularJS"],
  skill_back_end: [
    "JavaEE/Servlets",
    "Struts 2"
  ],
  skill_others: [
    "Google API",
    "Paypal API",
    "Json Web Token",
    "Firebase",
  ],
  tool_others: [
    "Git/Github",
    "MSSQL",
    "Insomnia",
    "Terminal/Zsh",
  ],
  education: {
    "2016 - 2020": "Software Engineering at FPT University, Ho Chi Minh",
    "2013 - 2016": "Class of Science at Phu Bai High School, Thua Thien Hue"
  },
  projects: {
    "<a target='_blank' href='https://github.com/nguyenquangkhai2210/booking_tour'>Tour booking</a> - Mar 2019":
    ReactHtmlParser('<p style="margin-top: 10px"><b>Build shopping cart</b></p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Team size: 1</p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Task role: Full-stack</p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Technologies used: ReactJS/Redux, Firebase, JavaEE/Servlets, JSON Web Token</p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Description: Build shopping cart with front-end react run on node server, back-end by JavaEE/Servlets run on tomcat server combined JWT to encrypted to also provide secrecy userID and Role between parties, and use firebase store to save image. Build Front-end based on template material-ui and template ant design </p>'),
    "<a target='_blank' href='https://github.com/nguyenquangkhai2210/fcode-fe'>F-Code Club Managerment</a> - Dec 2018":
    ReactHtmlParser('<p style="margin-top: 10px"><b>Frontend for website Managerment</b></p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Team size: 2</p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Task role: Front-end</p>' + 
                    '<p style=" margin-left: 20px"> &#8728; Technologies used: ReactJS</p>' +
                    '<p style=" margin-left: 20px"> &#8728; Description:  Build Front-end based on template ant design and run on node server </p>'),
    "<a target='_blank' href='https://github.com/nguyenquangkhai2210/the-AVN-coffee'>The AVN Coffee</a> - Mar 2018":
      ReactHtmlParser('<p style="margin-top: 10px"><b>Project for Front-end subject</b></p>' + 
      '<p style=" margin-left: 20px"> &#8728; Team size: 1</p>' + 
      '<p style=" margin-left: 20px"> &#8728; Task role: Front-end</p>' + 
      '<p style=" margin-left: 20px"> &#8728; Technologies used: HTML, CSS, JS</p>' + 
      '<p style=" margin-left: 20px"> &#8728; Description:  Build Front-end to describe the coffee shop with base HTML, CSS, and JS </p>'),
      
  },
  activities: {
    "<a href='#'>Trainer of C Course - Sep 2017 - Mar 2018 </a>": "FPT University – F-Code Club",
    "<a href='#'>Organizer of Alice Programming Contest - Jan 2018 - Feb 20188 </a>": "FPT University – F-Code Club"
  }
});
