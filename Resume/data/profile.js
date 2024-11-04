const profileData = {
  title: "Resume",
  name: "Larbi Gloria",
  sub_title: "DevOps Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am an aspiring DevOps engineer with a passion for learning and refining my skills in cloud infrastructure, automation, bash scripting, and CI/CD pipelines. I am committed to continuous learning and growth in this dynamic field and eager to take on new challenges and improve my expertise in the DevOps Engineering.`,
    contact: {
      email: "glolarbi1234@gmail.com",
      phone: "+233-502902214",
      address: "Eastern Region, Ghana",
    },
  },
  links: [
    {
      title: "www.linkedin.com/in/glorialarbi",
      src: "",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://https://github.com/Miss-Gloria",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux, Windows",
    },
    {
      title: "Languages",
      value: "Bash Scripting",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana",
    },
    {
      title: "Cloud Computing",
      value: "AWS",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [
    {
      organization: "JJ",
      title: "Admin",
      date: "July 2024 --",
      details: [
        `As part of the <strong>RummyCulture App</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Initiated the standardization of a React-Native <strong>custom UI library</strong>, encompassing reusable components, utilities, higher-order components, hooks, and animations for versatile project needs.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    
      organization: "Company AB",
      title: `Devops Engineer`,
      date: "April 2024",
      details: [
        `Nginx: Set up and configured Nginx as a web server to efficiently serve static content and handle traffic routing. Improved server performance and reliability through load balancing and reverse proxy`,
        ,
      ],
    },
    
    
  ],
  projects: [
    {
      title: "Nagios Setup",
      duration: "August 2024",
      link: "https://10.100.100.1/nagios",
      desc: `Successfully installed and configured **Nagios** to monitor system performance, including CPU, memory, and disk usage. Set up alert notifications via email to ensure quick responses to potential issues. This project improved overall infrastructure reliability and proactive issue detection.`,
    },
  ]
}
