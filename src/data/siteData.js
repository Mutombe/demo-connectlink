export const designTokens = {
  heroStyle: "split",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "light",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "circuit",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Connectlink",
    legalName: "Connectlink (Pvt) Ltd",
    tagline: "Connecting Zimbabwe, Powering Progress",
    description:
      "Leading telecommunications and internet service provider delivering fibre, wireless broadband, networking solutions, and managed IT services across Zimbabwe.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@connectlink.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.5,
    ratingRounded: 5,
    reviewCount: 31,
    established: "2012",
    yearsExperience: "12+",
    projectsCompleted: "400+",
    employees: "60+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "connectlink-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Connect",
    logoLine2: "Link",
  },

  hero: {
    badge: "Zimbabwe's Connectivity Partner",
    titleParts: [
      { text: "Connecting " },
      { text: "Zimbabwe", highlight: true },
      { text: ", Powering Progress" },
    ],
    subtitle:
      "Enterprise-grade fibre, wireless broadband, and managed IT services that keep businesses running and communities connected across Zimbabwe.",
    ctaPrimary: "Get Connected",
    ctaSecondary: "Our Solutions",
    trustBadge: "POTRAZ Licensed",
    backgroundImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920",
    backgroundAlt:
      "Modern data center with fibre optic cables and networking equipment",
  },

  stats: [
    { number: "400+", label: "Sites Connected" },
    { number: "4.5", label: "Client Rating" },
    { number: "12+", label: "Years Operating" },
    { number: "99.9%", label: "Uptime SLA" },
  ],

  servicesPreview: [
    {
      iconName: "Wrench",
      title: "Fibre Connectivity",
      desc: "Dedicated and shared fibre-to-the-business connections with speeds up to 1Gbps and guaranteed uptime SLAs.",
    },
    {
      iconName: "NavigationArrow",
      title: "Wireless Broadband",
      desc: "High-speed point-to-point and point-to-multipoint wireless links for areas beyond fibre reach.",
    },
    {
      iconName: "Buildings",
      title: "Network Design",
      desc: "End-to-end enterprise network architecture including LAN, WAN, SD-WAN, and cloud connectivity.",
    },
    {
      iconName: "ShieldCheck",
      title: "Cybersecurity",
      desc: "Firewall management, intrusion detection, endpoint protection, and security audits for businesses.",
    },
    {
      iconName: "ChartLineUp",
      title: "Managed IT Services",
      desc: "24/7 network monitoring, helpdesk support, and proactive infrastructure management for enterprises.",
    },
    {
      iconName: "HardHat",
      title: "Infrastructure Build",
      desc: "Tower construction, fibre trenching, and last-mile infrastructure deployment across Zimbabwe.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      title: "Harare CBD Fibre Ring",
      category: "Fibre Network",
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
      title: "National Bank Branch Network",
      category: "Enterprise",
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      title: "Mining Camp Connectivity",
      category: "Wireless",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Built for " },
      { text: "Reliability", highlight: true },
      { text: ", Designed for Speed" },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    imageAlt: "Fibre optic cables in a server room environment",
    experienceYears: "12+",
    experienceLabel: "Years of Connectivity",
    points: [
      {
        title: "99.9% Uptime Guarantee",
        desc: "Our redundant fibre backbone and 24/7 NOC ensure your connection stays up when it matters most.",
      },
      {
        title: "Own Infrastructure",
        desc: "We own and operate our fibre and wireless network, giving us full control over quality and response times.",
      },
      {
        title: "Rapid Deployment",
        desc: "From order to activation in as little as 5 business days for wireless, 15 days for fibre connections.",
      },
      {
        title: "Local Support Team",
        desc: "Harare-based engineers and technicians who understand Zimbabwe's unique connectivity challenges.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920",
    backgroundAlt: "Network infrastructure and connectivity visualization",
    titleParts: [
      { text: "Ready for " },
      { text: "Faster", highlight: true },
      { text: " Connectivity?" },
    ],
    subtitle:
      "Whether you need fibre, wireless, or a fully managed network, our team will design a solution that fits your business.",
    ctaPrimary: "Request a Quote",
    whatsappText: "Hello Connectlink, I would like to enquire about your internet and networking services.",
  },

  homeTestimonials: [
    {
      name: "Tapiwa Mhizha",
      role: "IT Director, First Mutual Holdings",
      text: "Connectlink's fibre network has been transformative for our operations. 99.9% uptime across all 12 branches. Their NOC team is responsive and proactive.",
      rating: 5,
    },
    {
      name: "Nyasha Chirwa",
      role: "CTO, TelOne Business",
      text: "We engaged Connectlink for our SD-WAN rollout. Their network design expertise and implementation speed were outstanding. Reduced our bandwidth costs by 35%.",
      rating: 5,
    },
    {
      name: "Farai Mupfumira",
      role: "Operations Manager, Zimplats Mining",
      text: "Remote mining camp connectivity is challenging. Connectlink's wireless solution delivers reliable broadband where no one else could. Critical for our daily operations.",
      rating: 4,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Building " },
      { text: "Zimbabwe's", highlight: true },
      { text: " Digital Backbone" },
    ],
    heroSubtitle:
      "For over 12 years, Connectlink has been building the telecommunications infrastructure that powers Zimbabwe's digital economy.",
    storyImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    storyImageAlt: "Connectlink network operations center",
    storyProjectCount: "400+",
    storyProjectLabel: "Sites Connected",
    storyTitle: "From Startup ISP to National Infrastructure Provider",
    storyParagraphs: [
      "Connectlink was founded in 2012 when Zimbabwe's internet landscape was dominated by slow, unreliable connections. We believed businesses and communities deserved better.",
      "Starting with a handful of wireless links in Harare, we systematically invested in infrastructure: fibre backbone, wireless towers, and a state-of-the-art network operations center. Each year we expanded our coverage footprint.",
      "Today Connectlink operates over 200km of metropolitan fibre, 50+ wireless base stations, and connects 400+ corporate sites across Zimbabwe. We are not just an ISP, we are a full-service telecommunications partner.",
    ],
    mission:
      "To connect every business and community in Zimbabwe with reliable, high-speed telecommunications infrastructure, enabling digital transformation and economic growth.",
    vision:
      "To be Southern Africa's most trusted independent telecommunications provider, recognized for network reliability, technical innovation, and customer-centric service.",
    values: [
      { iconName: "ShieldCheck", title: "Reliability", desc: "Our network is engineered for 99.9% uptime because your business depends on it." },
      { iconName: "Trophy", title: "Performance", desc: "We invest in the latest technology to deliver the fastest speeds and lowest latency." },
      { iconName: "Lightbulb", title: "Innovation", desc: "From SD-WAN to IoT connectivity, we stay ahead of the technology curve for our clients." },
      { iconName: "Handshake", title: "Partnership", desc: "We work as an extension of your IT team, understanding your business needs deeply." },
      { iconName: "Heart", title: "Community", desc: "We bridge the digital divide by extending connectivity to underserved areas." },
      { iconName: "Users", title: "Expertise", desc: "Our engineering team holds certifications from Cisco, Juniper, Ubiquiti, and more." },
    ],
    team: [
      { name: "Tinashe Gomera", role: "Managing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Mercy Ndlovu", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Kudakwashe Moyo", role: "Network Operations Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Rutendo Mhizha", role: "Commercial Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2012", title: "Company Founded", desc: "Connectlink launches in Harare as a wireless ISP serving businesses in the CBD." },
      { year: "2014", title: "Fibre Network Launch", desc: "First metropolitan fibre ring deployed in Harare CBD connecting 50 buildings." },
      { year: "2017", title: "100th Corporate Client", desc: "Milestone reached as enterprise client base crosses 100 managed connections." },
      { year: "2019", title: "NOC Operational", desc: "State-of-the-art 24/7 Network Operations Center goes live for proactive monitoring." },
      { year: "2022", title: "SD-WAN Launch", desc: "Software-defined WAN service launched for multi-branch enterprise clients." },
      { year: "2025", title: "400+ Sites Connected", desc: "Network reaches 400+ connected corporate and institutional sites across Zimbabwe." },
    ],
    ctaTitle: "Ready to Upgrade Your Connectivity?",
    ctaSubtitle: "Partner with Connectlink for reliable, high-speed telecommunications solutions.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Complete " },
      { text: "Connectivity", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six core service areas delivering end-to-end telecommunications, networking, and managed IT solutions for Zimbabwe's enterprises.",
    items: [
      {
        iconName: "Wrench",
        title: "Fibre Connectivity",
        slug: "fibre-connectivity",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        desc: "Dedicated and shared fibre-to-the-business connections with speeds from 10Mbps to 1Gbps. Built on our own metropolitan fibre backbone with redundant paths and guaranteed uptime SLAs.",
        features: [
          "Dedicated fibre connections up to 1Gbps",
          "Shared fibre for cost-effective broadband",
          "Redundant fibre paths for critical sites",
          "99.9% uptime Service Level Agreement",
          "Symmetric upload and download speeds",
          "Same-day fault response guarantee",
        ],
      },
      {
        iconName: "NavigationArrow",
        title: "Wireless Broadband",
        slug: "wireless-broadband",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900",
        desc: "High-speed wireless internet using licensed and unlicensed spectrum. Point-to-point links for dedicated connections and point-to-multipoint for broad coverage areas.",
        features: [
          "Point-to-point links up to 500Mbps",
          "Point-to-multipoint coverage networks",
          "Licensed and unlicensed spectrum options",
          "Rapid deployment (5 business days)",
          "Coverage beyond fibre network areas",
          "Backup connectivity for fibre clients",
        ],
      },
      {
        iconName: "Buildings",
        title: "Network Design & Build",
        slug: "network-design",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
        desc: "Enterprise network architecture from campus LAN to multi-site WAN and SD-WAN deployments. Certified engineers design, implement, and optimize your network.",
        features: [
          "Campus LAN design and implementation",
          "WAN and SD-WAN architecture",
          "Cloud connectivity (AWS, Azure, GCP)",
          "Network security architecture",
          "Wi-Fi coverage planning and deployment",
          "Network performance optimization",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Cybersecurity",
        slug: "cybersecurity",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
        desc: "Protect your business from cyber threats with managed firewall services, intrusion detection, endpoint protection, and regular security audits.",
        features: [
          "Managed firewall and UTM services",
          "Intrusion detection and prevention",
          "Endpoint protection management",
          "Security audits and penetration testing",
          "Email security and anti-spam",
          "Security awareness training",
        ],
      },
      {
        iconName: "ChartLineUp",
        title: "Managed IT Services",
        slug: "managed-it",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900",
        desc: "24/7 network monitoring, helpdesk support, and proactive infrastructure management. We become your outsourced IT department, keeping everything running smoothly.",
        features: [
          "24/7 network monitoring from our NOC",
          "IT helpdesk and technical support",
          "Proactive maintenance and patching",
          "Asset management and lifecycle planning",
          "Monthly performance reporting",
          "Vendor management and coordination",
        ],
      },
      {
        iconName: "HardHat",
        title: "Infrastructure Build",
        slug: "infrastructure-build",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
        desc: "Physical telecommunications infrastructure construction including tower builds, fibre trenching, duct installation, and last-mile connectivity deployment.",
        features: [
          "Telecommunications tower construction",
          "Fibre optic cable trenching and splicing",
          "Duct and manhole installation",
          "Last-mile connectivity deployment",
          "Site surveys and route planning",
          "As-built documentation and handover",
        ],
      },
    ],
    ctaTitle: "Need a Custom Connectivity Solution?",
    ctaSubtitle: "Every business has unique requirements. Let us design a solution that fits your needs and budget.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Networks We've " },
      { text: "Built", highlight: true },
    ],
    heroSubtitle: "Explore our portfolio of fibre, wireless, and enterprise network projects across Zimbabwe.",
    categories: ["All", "Fibre Network", "Wireless", "Enterprise", "Infrastructure", "Mining"],
    items: [
      { id: 1, title: "Harare CBD Fibre Ring", category: "Fibre Network", location: "Harare CBD", year: "2024", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800", desc: "120km metropolitan fibre ring connecting 200+ commercial buildings in Harare CBD with redundant paths and 10Gbps backbone capacity.", services: ["Fibre Connectivity", "Infrastructure Build"] },
      { id: 2, title: "First Mutual Branch Network", category: "Enterprise", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800", desc: "SD-WAN deployment connecting 12 branches with centralized management, failover, and application-aware routing. Reduced bandwidth costs by 35%.", services: ["Network Design & Build", "Managed IT Services"] },
      { id: 3, title: "Zimplats Mining Camp WiFi", category: "Mining", location: "Ngezi", year: "2023", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", desc: "Enterprise-grade WiFi and wireless backhaul for remote mining camp serving 2,000 employees. Included VoIP and video conferencing infrastructure.", services: ["Wireless Broadband", "Network Design & Build"] },
      { id: 4, title: "Agricultural Research Network", category: "Enterprise", location: "Multiple Sites", year: "2023", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800", desc: "Connected 8 agricultural research stations across Zimbabwe with point-to-point wireless links and centralized data sharing platform.", services: ["Wireless Broadband", "Managed IT Services"] },
      { id: 5, title: "Bulawayo Industrial Park Fibre", category: "Fibre Network", location: "Bulawayo", year: "2024", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800", desc: "Fibre-to-the-premises deployment across Bulawayo's Kelvin industrial area, connecting 45 manufacturing and warehouse facilities.", services: ["Fibre Connectivity", "Infrastructure Build"] },
      { id: 6, title: "Banking Sector Security Audit", category: "Enterprise", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", desc: "Comprehensive cybersecurity audit and remediation for a major banking group. Implemented managed firewall, IDS, and endpoint protection across all branches.", services: ["Cybersecurity", "Managed IT Services"] },
      { id: 7, title: "Mutare Wireless Coverage", category: "Wireless", location: "Mutare", year: "2022", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800", desc: "Point-to-multipoint wireless broadband network serving 80+ businesses in Mutare CBD where fibre was not yet available.", services: ["Wireless Broadband", "Infrastructure Build"] },
      { id: 8, title: "Victoria Falls Hotel Network", category: "Enterprise", location: "Victoria Falls", year: "2024", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800", desc: "Full network redesign for luxury hotel group. Seamless guest WiFi, back-office LAN, IP CCTV, and VoIP with managed support.", services: ["Network Design & Build", "Managed IT Services"] },
      { id: 9, title: "Government Ministry WAN", category: "Infrastructure", location: "Nationwide", year: "2023", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", desc: "Wide area network connecting 25 government ministry offices across Zimbabwe using a mix of fibre and wireless technologies.", services: ["Fibre Connectivity", "Wireless Broadband", "Network Design & Build"] },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [{ text: "Client " }, { text: "Reviews", highlight: true }],
    heroSubtitle: "Real feedback from businesses across Zimbabwe who trust Connectlink for their critical connectivity needs.",
    ratingBreakdown: { 5: 20, 4: 8, 3: 3, 2: 0, 1: 0 },
    items: [
      { name: "Tapiwa Mhizha", role: "IT Director, First Mutual Holdings", text: "Connectlink's fibre network has been transformative. 99.9% uptime across all 12 branches for two consecutive years. Their NOC team proactively resolves issues before we even notice them.", rating: 5, date: "1 month ago", project: "Enterprise Network" },
      { name: "Nyasha Chirwa", role: "CTO, Econet Business", text: "We engaged Connectlink for our SD-WAN rollout. Their network design expertise and implementation speed were outstanding. Reduced our bandwidth costs by 35% while improving performance.", rating: 5, date: "2 months ago", project: "SD-WAN Deployment" },
      { name: "Farai Mupfumira", role: "Operations Manager, Zimplats", text: "Remote mining camp connectivity is challenging. Connectlink's wireless solution delivers reliable broadband where no one else could. It is critical for our daily operations and employee welfare.", rating: 4, date: "3 months ago", project: "Mining Camp WiFi" },
      { name: "Sandra Makoni", role: "Branch Manager, CBZ Bank", text: "Since switching to Connectlink fibre, our transaction processing times have halved. The dedicated connection gives us the bandwidth and stability our banking systems demand.", rating: 5, date: "4 months ago", project: "Banking Connectivity" },
      { name: "David Nyoni", role: "IT Manager, Delta Beverages", text: "Connectlink manages our entire network across 6 facilities. Their helpdesk response time averages under 15 minutes. They have essentially become our outsourced IT department.", rating: 5, date: "5 months ago", project: "Managed IT" },
      { name: "Chiedza Dube", role: "CISO, Old Mutual Zimbabwe", text: "Their cybersecurity audit was thorough and actionable. Connectlink identified vulnerabilities our internal team had missed and implemented robust protective measures across our network.", rating: 5, date: "6 months ago", project: "Security Audit" },
      { name: "Tinashe Banda", role: "Hotel GM, African Sun Hotels", text: "Guest WiFi that actually works, a corporate network that never drops, and a support team that responds instantly. Connectlink transformed our hotel's digital experience.", rating: 4, date: "7 months ago", project: "Hotel Network" },
      { name: "Maxwell Chirenje", role: "Head of IT, ZIMRA", text: "Connecting 25 offices across Zimbabwe was a massive project. Connectlink delivered on time and within budget using the optimal mix of fibre and wireless technologies.", rating: 5, date: "8 months ago", project: "Government WAN" },
      { name: "Rudo Mapfumo", role: "Procurement Officer, Unilever Zimbabwe", text: "We evaluated three ISPs before choosing Connectlink. The deciding factor was their own infrastructure. When there is a problem, they fix it directly instead of blaming third parties.", rating: 5, date: "9 months ago", project: "Enterprise Fibre" },
      { name: "Peter Zvobgo", role: "School Principal, Peterhouse Group", text: "Reliable internet for 800 students and staff. Connectlink designed a robust campus WiFi network that handles peak loads seamlessly. The content filtering works perfectly.", rating: 4, date: "10 months ago", project: "Campus WiFi" },
      { name: "Blessing Moyo", role: "Farm Manager, Tanganda Tea", text: "Wireless connectivity to our remote tea estates seemed impossible until Connectlink proposed a relay tower solution. Now we have video-capable broadband at every farm.", rating: 5, date: "11 months ago", project: "Agricultural Wireless" },
      { name: "Nyasha Gumbo", role: "Data Center Manager, Liquid Intelligent Technologies", text: "As a peer in the industry, I respect Connectlink's network engineering capability. Their fibre routing and redundancy design for the Harare CBD ring is exemplary.", rating: 5, date: "1 year ago", project: "Fibre Infrastructure" },
    ],
    ctaTitle: "Ready to Experience Better Connectivity?",
    ctaSubtitle: "Join hundreds of businesses who trust Connectlink for reliable, high-speed internet and networking.",
    ctaCta: "Get Connected",
    ctaWhatsappText: "Hello, I read your reviews and would like to discuss connectivity solutions.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [{ text: "Let's Get You " }, { text: "Connected", highlight: true }],
    heroSubtitle: "Need faster internet? A network upgrade? Managed IT support? Reach out and we will design a solution that fits.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [{ text: "Build the " }, { text: "Network", highlight: true }, { text: " With Us" }],
    heroSubtitle: "Join a team of network engineers, technicians, and IT professionals building Zimbabwe's digital infrastructure.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920",
    cultureTitle: "Why Work With Us?",
    cultureItems: [
      { iconName: "Users", title: "Engineering Excellence", desc: "Work with Cisco, Juniper, and Ubiquiti certified engineers on real infrastructure projects." },
      { iconName: "Rocket", title: "Rapid Growth", desc: "As Zimbabwe's connectivity needs grow, so do career opportunities within Connectlink." },
      { iconName: "ShieldCheck", title: "Industry Certifications", desc: "We sponsor professional certifications and continuous technical education." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400",
    cultureImageAlt: "Connectlink engineering team at the network operations center",
    cultureTagline: "More Than a Job. A Mission.",
    cultureTaglineDesc: "Every cable we lay, every tower we build, every network we design connects communities and powers businesses.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Salary", desc: "Market-leading compensation with technical skill premiums." },
      { iconName: "FirstAid", title: "Medical Cover", desc: "Comprehensive medical aid for you and your family." },
      { iconName: "GraduationCap", title: "Certifications", desc: "Sponsored Cisco, Juniper, and vendor-specific certifications." },
      { iconName: "Car", title: "Company Vehicle", desc: "Service vehicles for field engineers and installation technicians." },
      { iconName: "Heart", title: "Work-Life Balance", desc: "Structured on-call rotations and generous leave policies." },
      { iconName: "ShieldCheck", title: "Tools & Equipment", desc: "All field tools, testing equipment, and PPE provided." },
    ],
    positions: [
      { id: 1, title: "Senior Network Engineer", department: "Engineering", type: "Full-Time", location: "Harare", description: "Design and implement enterprise networks for corporate clients. Cisco CCNP or equivalent required.", requirements: ["CCNP or equivalent certification", "5+ years network engineering experience", "SD-WAN and cloud networking knowledge", "Strong troubleshooting methodology", "Customer-facing communication skills"] },
      { id: 2, title: "Fibre Splicing Technician", department: "Infrastructure", type: "Full-Time", location: "Harare / Field", description: "Splice, test, and maintain fibre optic cables across our metropolitan network.", requirements: ["Fibre splicing certification", "3+ years FTTH/FTTB experience", "OTDR testing proficiency", "Valid driver's license", "Willingness to work after hours for maintenance"] },
      { id: 3, title: "NOC Engineer", department: "Operations", type: "Full-Time", location: "Harare", description: "Monitor network health, respond to alerts, and coordinate fault resolution from our 24/7 NOC.", requirements: ["CCNA or equivalent", "2+ years NOC or network operations experience", "Experience with network monitoring tools (PRTG, Zabbix)", "Shift work flexibility (24/7 operation)", "Strong documentation skills"] },
      { id: 4, title: "Cybersecurity Analyst", department: "Security", type: "Full-Time", location: "Harare", description: "Manage client firewall policies, monitor security events, conduct vulnerability assessments.", requirements: ["CompTIA Security+ or CEH", "3+ years cybersecurity experience", "Firewall management (Fortinet, Palo Alto)", "SIEM platform experience", "Incident response knowledge"] },
      { id: 5, title: "IT Helpdesk Technician", department: "Support", type: "Full-Time", location: "Harare", description: "First-line technical support for managed IT service clients. Troubleshoot connectivity, hardware, and software issues.", requirements: ["CompTIA A+ or equivalent", "2+ years IT support experience", "Strong customer service skills", "Windows and basic networking knowledge", "Remote support tool experience"] },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle: "We are always hiring skilled network and IT professionals. Send us your CV.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description: "Connecting Zimbabwe with reliable fibre, wireless broadband, and managed IT services since 2012. POTRAZ licensed.",
    copyright: "Connectlink (Pvt) Ltd",
  },
};

export default siteData;
