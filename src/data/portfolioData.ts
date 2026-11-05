export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  badge?: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution?: string;
  badge: string;
  type: string;
}

export interface HighlightItem {
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
}

export const personalInfo = {
  name: "S. Peer Mohamed",
  title: "IT Support Engineer | System Administrator",
  headline: "Keeping IT Systems Secure, Connected & Running Smoothly.",
  subheadline:
    "IT Support Engineer & System Administrator with 15+ years of experience in IT infrastructure, network administration, technical support and system management.",
  summary:
    "IT Support Engineer / System Administrator with 15+ years of experience supporting 500+ end users. Skilled in Windows Server, Microsoft 365, Active Directory, DNS, DHCP, networking, remote support, hardware, printers and CCTV. Saudi Arabia experience (2014-2018).",
  location: "Tenkasi, Tamil Nadu, India",
  phone: "+91 9894668866",
  email: "shahul.mohamed@gmail.com",
  whatsappUrl: "https://wa.me/919894668866?text=Hello%20S.%20Peer%20Mohamed,%20I%20reviewed%20your%20IT%20Support%20%26%20System%20Administrator%20portfolio",
  nationality: "Indian",
  availability: "Immediate Joiner",
  cvFileName: "CV_PeerMohamed.pdf",
};

export const statsData = [
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    detail: "Continuous hands-on IT infrastructure & systems expertise",
  },
  {
    value: 500,
    suffix: "+",
    label: "Users Supported",
    detail: "Enterprise-wide technical & desktop end-user support",
  },
  {
    value: 4,
    suffix: " Yrs",
    label: "Saudi Arabia Experience",
    detail: "International multi-cultural IT systems deployment (2014–2018)",
  },
  {
    value: 100,
    suffix: "%",
    label: "Immediate Availability",
    detail: "Ready to join organizations immediately",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "os",
    title: "Operating Systems",
    description: "Enterprise operating systems deployment, policy configuration and lifecycle support.",
    iconName: "Monitor",
    skills: ["Windows 10/11 Administration", "Windows Server"],
  },
  {
    id: "microsoft",
    title: "Microsoft Technologies",
    description: "Cloud identity, directory management, productivity suites and messaging services.",
    iconName: "Cloud",
    skills: ["Active Directory", "Microsoft 365", "Outlook"],
  },
  {
    id: "networking",
    title: "Networking",
    description: "Core IP network infrastructure, routing, domain services and troubleshooting.",
    iconName: "Network",
    skills: ["DNS / DHCP", "LAN/WAN", "TCP/IP", "Network Troubleshooting"],
  },
  {
    id: "it-support",
    title: "IT Support & Systems",
    description: "Comprehensive end-user support, hardware diagnostics, backup protection and security.",
    iconName: "Headphones",
    skills: [
      "Remote Desktop Support",
      "Help Desk Support",
      "Printer Management",
      "Hardware Maintenance",
      "Data Backup & Recovery",
      "Antivirus Management",
    ],
  },
  {
    id: "additional",
    title: "Additional Skills",
    description: "Physical and perimeter security systems implementation.",
    iconName: "ShieldCheck",
    skills: ["CCTV Installation"],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "IT Support Engineer",
    company: "Jaz Computer",
    period: "2018 – Present",
    badge: "Current Role",
    location: "India",
    responsibilities: [
      "Windows Server administration, DNS/DHCP infrastructure maintenance and domain management",
      "Microsoft 365 tenant support, account management, mailbox administration and cloud services",
      "End-user Remote Support and rapid incident resolution for business operations",
      "Printers management, CCTV security systems installation & networking setup",
    ],
  },
  {
    role: "Computer Technician",
    company: "Saudi Arabia",
    period: "2014 – 2018",
    badge: "International Experience",
    location: "Kingdom of Saudi Arabia",
    responsibilities: [
      "Enterprise Desktop Support across diverse departments and multilingual user environments",
      "Windows Installation, system staging, image rollout and operating system updates",
      "Hardware troubleshooting, component replacement, and local network support",
    ],
  },
  {
    role: "Computer Service Engineer",
    company: "The Chennai Computers",
    period: "2005 – 2009",
    badge: "Foundation Years",
    location: "Chennai, Tamil Nadu",
    responsibilities: [
      "Custom PC Assembly, architectural hardware evaluation and performance verification",
      "OS Installation, driver configuration and peripheral interfacing",
      "Hardware Repair, circuit diagnostics, component-level troubleshooting and preventive servicing",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Diploma in Hardware Technology (DCHT)",
    badge: "Technical Diploma",
    type: "Computer Hardware & Networking Specialization",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    badge: "Secondary Education",
    type: "Board of Higher Secondary Examination",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    badge: "School Certification",
    type: "Board of Secondary Education",
  },
];

export const highlightsData: HighlightItem[] = [
  {
    title: "15+ Years Experience",
    subtitle: "Extensive hands-on experience spanning enterprise and service centers",
    iconName: "Briefcase",
    badge: "Veteran",
  },
  {
    title: "500+ Users Supported",
    subtitle: "Demonstrated capacity to maintain uptime and fast support SLAs",
    iconName: "Users",
    badge: "Scale",
  },
  {
    title: "Saudi Arabia Work Experience",
    subtitle: "4 years of overseas IT experience in multicultural business environments",
    iconName: "Globe",
    badge: "International",
  },
  {
    title: "Immediate Joiner",
    subtitle: "Available to start immediately without extended notice delays",
    iconName: "Zap",
    badge: "Ready Now",
  },
  {
    title: "Valid Indian Passport",
    subtitle: "Documentation complete and available for travel or international relocation",
    iconName: "FileCheck",
    badge: "Verified",
  },
  {
    title: "Indian Driving License",
    subtitle: "Fully licensed for regional mobility and on-site client dispatch",
    iconName: "Compass",
    badge: "Active",
  },
];

export const languagesData = [
  {
    name: "Tamil",
    proficiency: "Native / Full Professional",
    flag: "🇮🇳",
  },
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    flag: "🇬🇧",
  },
  {
    name: "Arabic",
    proficiency: "Professional Working (Saudi Arabia Experience)",
    flag: "🇸🇦",
  },
];
