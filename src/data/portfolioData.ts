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
  cvFileName: "CV_PeerMohamed.pdf",
};

export const statsData = [
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    detail: "Hands-on IT infrastructure, systems administration, and technical support",
  },
  {
    value: 500,
    suffix: "+",
    label: "Users Supported",
    detail: "End-to-end technical, desktop, and remote user support",
  },
  {
    value: 4,
    suffix: " Yrs",
    label: "Saudi Arabia Experience",
    detail: "International enterprise IT systems and technical support (2014–2018)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "os",
    title: "Operating Systems",
    description: "Enterprise operating systems deployment, policy configuration, and maintenance.",
    iconName: "Monitor",
    skills: ["Windows 10/11 Administration", "Windows Server"],
  },
  {
    id: "microsoft",
    title: "Microsoft Technologies",
    description: "Identity management, email systems, and cloud productivity administration.",
    iconName: "Cloud",
    skills: ["Active Directory", "Microsoft 365", "Outlook"],
  },
  {
    id: "networking",
    title: "Networking",
    description: "Network configuration, infrastructure protocols, and connectivity troubleshooting.",
    iconName: "Network",
    skills: ["DNS / DHCP", "LAN/WAN", "TCP/IP", "Network Troubleshooting"],
  },
  {
    id: "it-support",
    title: "IT Support & Systems",
    description: "End-user support, hardware diagnostics, routine maintenance, and data protection.",
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
    description: "Physical security systems and surveillance hardware deployment.",
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
      "End-user remote desktop support and rapid technical issue resolution",
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
      "Desktop support across enterprise departments and diverse user environments",
      "Windows installation, system configuration, and software deployment",
      "Hardware troubleshooting, component replacement, and local network support",
    ],
  },
  {
    role: "Computer Service Engineer",
    company: "The Chennai Computers",
    period: "2005 – 2009",
    badge: "Technical Service",
    location: "Chennai, Tamil Nadu",
    responsibilities: [
      "PC assembly, hardware testing, and system builds",
      "Operating system installation, driver configuration, and peripheral setup",
      "Hardware repair, fault diagnosis, and routine preventive servicing",
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
    badge: "Higher Secondary",
    type: "State Board of School Examination",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    badge: "Secondary School",
    type: "State Board of Secondary Education",
  },
];

export const highlightsData: HighlightItem[] = [
  {
    title: "15+ Years IT Experience",
    subtitle: "Proven track record in systems administration, hardware maintenance, and IT infrastructure",
    iconName: "Briefcase",
    badge: "15+ Years",
  },
  {
    title: "500+ End Users Supported",
    subtitle: "Extensive experience delivering reliable desktop, software, and remote technical support",
    iconName: "Users",
    badge: "500+ Users",
  },
  {
    title: "Saudi Arabia Work Experience",
    subtitle: "Four years of professional international experience in enterprise IT support (2014–2018)",
    iconName: "Globe",
    badge: "2014 – 2018",
  },
];

export const languagesData = [
  {
    name: "Tamil",
    proficiency: "Native Proficiency",
    flag: "🇮🇳",
  },
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    flag: "🇬🇧",
  },
  {
    name: "Arabic",
    proficiency: "Professional Working Proficiency (Saudi Arabia Experience)",
    flag: "🇸🇦",
  },
];
