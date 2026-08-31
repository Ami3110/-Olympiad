"use client";

import { useState } from "react";
import Link from "next/link";

const divisionDetails = [
  {
    slug: "foundation",
    name: "Foundation",
    classes: "PG – UKG",
    tagline: "Discover. Imagine. Learn. Grow.",
    desc: "Nurturing early curiosity, observation skills, creative thinking, language discovery, number sense, and good habits through engaging and playful challenges.",
    image: "/assets/images/age-group-foundation.jpg",
    color: "#C1650C",
    accentBg: "rgba(193, 101, 12, 0.08)",
    border: "rgba(193, 101, 12, 0.25)",
    badge: "7 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "little-genius-mental-ability",
        name: "Little Genius Mental Ability Olympiad",
        topics: [
          "Observation & Attention",
          "Matching & Pairing",
          "Same & Different",
          "Sorting & Classification",
          "Patterns & Sequencing",
          "Shapes & Visual Recognition",
          "Memory & Recall",
          "Position & Spatial Awareness",
          "Simple Puzzles & Thinking Games",
          "Everyday Smart Thinking"
        ]
      },
      {
        slug: "language-communication",
        name: "Language & Communication Olympiad",
        topics: [
          "Alphabet Recognition",
          "Letter Sounds & Phonics",
          "Picture & Object Vocabulary",
          "Naming Words",
          "Action Words",
          "Describing Words",
          "Word & Picture Matching",
          "Listening & Understanding",
          "Speaking & Everyday Conversation",
          "Stories, Rhymes & Creative Expression"
        ]
      },
      {
        slug: "number-logical-thinking",
        name: "Number & Logical Thinking Olympiad",
        topics: [
          "Number Recognition",
          "Counting & Number Sense",
          "More, Less & Equal",
          "Number Sequencing",
          "Shapes & Basic Geometry",
          "Sorting, Grouping & Classification",
          "Patterns & Relationships",
          "Size, Length & Comparison",
          "Time, Position & Everyday Measurement",
          "Fun Number & Logic Challenges"
        ]
      },
      {
        slug: "my-world-general-awareness",
        name: "My World & General Awareness Olympiad",
        topics: [
          "All About Me",
          "My Family & Home",
          "My School & Classroom",
          "People Who Help Us",
          "Food, Clothes & Things Around Me",
          "Animals & Birds",
          "Plants & Things in Nature",
          "Transport & Places Around Us",
          "India: My Country",
          "My World & Everyday Awareness"
        ]
      },
      {
        slug: "creativity-imagination",
        name: "Creativity & Imagination Olympiad",
        topics: [
          "Colours & Colour Recognition",
          "Lines, Shapes & Forms",
          "Drawing & Doodling",
          "Patterns & Creative Designs",
          "Picture Completion",
          "Imagine & Tell a Story",
          "Creative Matching & Making",
          "Music, Rhythm & Movement",
          "Role Play & Pretend Play",
          "Imagine, Create & Express"
        ]
      },
      {
        slug: "nature-environment-awareness",
        name: "Nature & Environment Awareness Olympiad",
        topics: [
          "My Natural World",
          "Plants Around Us",
          "Animals, Birds & Insects",
          "Water & Its Importance",
          "Air, Sunlight & Weather",
          "Day, Night & Seasons",
          "Clean & Healthy Surroundings",
          "Reduce, Reuse & Recycle",
          "Caring for Plants & Animals",
          "Be a Little Earth Protector"
        ]
      },
      {
        slug: "good-habits-life-skills",
        name: "Good Habits & Life Skills Olympiad",
        topics: [
          "Personal Hygiene & Cleanliness",
          "Healthy Food & Healthy Living",
          "Good Manners & Polite Words",
          "Sharing, Caring & Helping Others",
          "Safety at Home & School",
          "Road & Travel Safety",
          "Feelings, Emotions & Self-Control",
          "Independence & Self-Help Skills",
          "Teamwork, Friendship & Respect",
          "Responsible & Happy Living"
        ]
      }
    ]
  },
  {
    slug: "junior",
    name: "Junior",
    classes: "Classes I – II",
    tagline: "Learn. Think. Explore. Excel.",
    desc: "Building fundamental logic, numeracy, language fluency, environmental curiosity, and introductory digital understanding.",
    image: "/assets/images/age-group-junior.jpg",
    color: "#0D7A67",
    accentBg: "rgba(13, 122, 103, 0.08)",
    border: "rgba(13, 122, 103, 0.25)",
    badge: "6 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "junior-mental-ability-reasoning",
        name: "Junior Mental Ability & Reasoning Olympiad",
        topics: [
          "Observation & Attention",
          "Patterns & Sequences",
          "Odd One Out & Classification",
          "Matching & Pairing",
          "Analogies & Relationships",
          "Shapes, Figures & Visual Reasoning",
          "Positions, Directions & Spatial Awareness",
          "Memory & Concentration",
          "Simple Logic & Thinking Puzzles",
          "Everyday Reasoning Challenges"
        ]
      },
      {
        slug: "mathematics-logical-thinking",
        name: "Mathematics & Logical Thinking Olympiad",
        topics: [
          "Numbers & Number Sense",
          "Counting, Comparing & Ordering",
          "Addition & Subtraction",
          "Multiplication & Division Basics",
          "Shapes, Patterns & Geometry",
          "Measurement: Length, Weight, Capacity & Time",
          "Money & Everyday Mathematics",
          "Fractions & Equal Parts",
          "Data, Pictographs & Simple Graphs",
          "Mathematical Puzzles & Logical Challenges"
        ]
      },
      {
        slug: "english-language-communication",
        name: "English Language & Communication Olympiad",
        topics: [
          "Alphabet, Sounds & Phonics",
          "Words, Vocabulary & Word Meaning",
          "Naming Words & Basic Grammar",
          "Action Words & Describing Words",
          "Sentences & Sentence Building",
          "Spelling & Word Formation",
          "Reading & Reading Comprehension",
          "Picture Reading & Story Understanding",
          "Everyday Communication & Conversation",
          "Creative Expression & Language Challenges"
        ]
      },
      {
        slug: "general-knowledge-my-india",
        name: "General Knowledge & My India Olympiad",
        topics: [
          "Myself, My Family & My Community",
          "My School, Neighbourhood & Helpers",
          "India: Our Country",
          "Indian States, Cities & Places",
          "National Symbols & Important National Days",
          "Great Indians & National Heroes",
          "Indian Festivals, Food, Dress & Culture",
          "Animals, Birds, Plants & Nature Around Us",
          "World Around Me: Continents, Oceans & Famous Places",
          "Everyday General Knowledge Challenge"
        ]
      },
      {
        slug: "young-science-explorer",
        name: "Young Science Explorer Olympiad",
        topics: [
          "My Body & Healthy Living",
          "Plants & How They Grow",
          "Animals & Their Habitats",
          "Food, Nutrition & Healthy Choices",
          "Air, Water & Their Importance",
          "Our Earth, Weather & Seasons",
          "Light, Sound, Heat & Energy Around Us",
          "Materials & Their Everyday Uses",
          "Our Environment & Caring for Nature",
          "Science Around Us & Discovery Challenges"
        ]
      },
      {
        slug: "digital-computer-awareness",
        name: "Digital & Computer Awareness Olympiad",
        topics: [
          "What Is a Computer?",
          "Parts of a Computer & Their Uses",
          "Keyboard, Mouse, Screen & Basic Devices",
          "Files, Pictures & Simple Digital Tasks",
          "Introduction to Digital Devices",
          "Internet & Websites: Basic Awareness",
          "Safe, Smart & Responsible Technology Use",
          "Passwords, Privacy & Personal Information",
          "Introduction to Algorithms & Step-by-Step Thinking",
          "Digital World & Fun Computer Challenges"
        ]
      }
    ]
  },
  {
    slug: "primary",
    name: "Primary",
    classes: "Classes III – V",
    tagline: "Explore. Think. Discover. Excel.",
    desc: "Expanding horizons in reasoning, coding fundamentals, space science, young entrepreneurship, and Indian heritage.",
    image: "/assets/images/age-group-primary.jpg",
    color: "#C94627",
    accentBg: "rgba(201, 70, 39, 0.08)",
    border: "rgba(201, 70, 39, 0.25)",
    badge: "5 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "mental-ability-reasoning",
        name: "Mental Ability & Reasoning Olympiad",
        topics: [
          "Patterns, Sequences & Relationships",
          "Classification & Odd One Out",
          "Analogies & Similarities",
          "Coding, Decoding & Symbol Reasoning",
          "Shapes, Figures & Visual Reasoning",
          "Number & Mathematical Reasoning",
          "Direction, Position & Spatial Awareness",
          "Logical Puzzles & Brain Teasers",
          "Observation, Memory & Attention",
          "Everyday Logic & Reasoning Challenges"
        ]
      },
      {
        slug: "computer-coding-genius",
        name: "Computer & Coding Genius Olympiad",
        topics: [
          "Computer Basics & Digital Devices",
          "Parts of a Computer & Their Functions",
          "Operating Systems, Files & Folders",
          "Keyboard, Mouse & Basic Digital Skills",
          "Internet, Websites & Safe Searching",
          "Digital Safety, Privacy & Responsible Use",
          "Introduction to Algorithms & Step-by-Step Thinking",
          "Coding Basics: Sequences, Commands & Patterns",
          "Blocks, Loops, Conditions & Simple Programs",
          "Computational Thinking & Coding Challenges"
        ]
      },
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy Olympiad",
        topics: [
          "Our Amazing Universe",
          "Stars, Constellations & the Night Sky",
          "The Solar System",
          "The Sun, Earth & Moon",
          "Planets, Moons & Small Space Objects",
          "Gravity, Day, Night & Seasons",
          "Rockets, Satellites & Space Technology",
          "Astronauts & Life in Space",
          "India in Space & ISRO",
          "Space Exploration & Future Discoveries"
        ]
      },
      {
        slug: "innovation-young-entrepreneur",
        name: "Innovation & Young Entrepreneur Olympiad",
        topics: [
          "What Is an Entrepreneur?",
          "Ideas, Creativity & Curiosity",
          "Problems, Needs & Opportunities",
          "Invention, Innovation & Improvement",
          "Design Thinking for Young Minds",
          "Products, Services & Customers",
          "Money, Cost, Price & Simple Profit",
          "Branding, Selling & Responsible Business",
          "Teamwork, Leadership & Learning from Failure",
          "Young Innovators & Entrepreneurial Challenges"
        ]
      },
      {
        slug: "india-genius-gk-heritage",
        name: "India Genius GK & Heritage Olympiad",
        topics: [
          "Know India: States, Union Territories & Capitals",
          "India's Geography: Mountains, Rivers & Landscapes",
          "Indian History & Great Civilisations",
          "Freedom Movement & Great Indian Leaders",
          "Indian Constitution, Democracy & National Symbols",
          "Indian Art, Culture, Dance, Music & Festivals",
          "Indian Monuments, Heritage Sites & Architecture",
          "Indian Science, Mathematics, Space & Inventions",
          "Famous Indians & India's Achievements",
          "India & the World: GK Challenge"
        ]
      }
    ]
  },
  {
    slug: "middle",
    name: "Middle",
    classes: "Classes VI – VIII",
    tagline: "Develop Knowledge. Build Skills. Shape the Future.",
    desc: "Fostering deeper problem-solving in cybersecurity, financial literacy, space exploration, sustainability, vocational skills, digital citizenship, and heritage.",
    image: "/assets/images/age-group-middle.jpg",
    color: "#93650A",
    accentBg: "rgba(147, 101, 10, 0.08)",
    border: "rgba(147, 101, 10, 0.25)",
    badge: "7 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "cybersecurity-digital-safety",
        name: "Cybersecurity & Digital Safety Olympiad",
        topics: [
          "Introduction to Cybersecurity & the Digital World",
          "Internet, Networks & Safe Browsing",
          "Passwords, Authentication & Account Security",
          "Phishing, Scams & Social Engineering",
          "Malware, Viruses & Cyber Attacks",
          "Privacy, Personal Data & Digital Identity",
          "Device, Mobile, Wi-Fi & Cloud Security",
          "Cyberbullying, Online Behaviour & Digital Wellbeing",
          "Cyber Ethics, Laws & Responsible Technology Use",
          "Cyber Safety Scenarios & Real-World Challenges"
        ]
      },
      {
        slug: "financial-literacy",
        name: "Financial Literacy Olympiad",
        topics: [
          "Money & the Basics of Personal Finance",
          "Needs, Wants & Smart Financial Choices",
          "Saving, Budgeting & Financial Goals",
          "Banks, Bank Accounts & Banking Services",
          "Digital Payments & Safe Digital Banking",
          "Interest, Compounding & the Value of Money",
          "Introduction to Investment & Wealth Creation",
          "Financial Risk, Fraud & Consumer Protection",
          "Responsible Spending, Borrowing & Credit",
          "Financial Decision-Making & Real-Life Money Challenges"
        ]
      },
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy Olympiad",
        topics: [
          "The Universe & Our Cosmic Neighbourhood",
          "Stars, Galaxies & Constellations",
          "The Solar System",
          "Sun, Earth & Moon",
          "Gravity, Motion & Orbits",
          "Telescopes & Exploring the Night Sky",
          "Rockets, Satellites & Space Technology",
          "Human Spaceflight & Space Exploration",
          "India in Space & ISRO Missions",
          "Black Holes, Exoplanets & Future Space Exploration"
        ]
      },
      {
        slug: "climate-sustainability",
        name: "Climate & Sustainability Olympiad",
        topics: [
          "Earth, Environment & Natural Resources",
          "Weather, Climate & Climate Change",
          "Greenhouse Effect & Global Warming",
          "Air, Water & Land Pollution",
          "Biodiversity, Ecosystems & Conservation",
          "Water Conservation & Water Security",
          "Energy, Renewable Resources & Energy Conservation",
          "Waste Management, Recycling & Circular Economy",
          "Sustainable Living, Cities & Responsible Consumption",
          "Climate Action, SDGs & Green Innovation"
        ]
      },
      {
        slug: "kaushal-bodh",
        name: "Kaushal Bodh Olympiad",
        topics: [
          "Understanding Skills, Work & Vocational Awareness",
          "Self-Awareness, Strengths & Skill Discovery",
          "Communication & Interpersonal Skills",
          "Teamwork, Collaboration & Leadership",
          "Problem-Solving & Critical Thinking",
          "Creativity, Innovation & Design Thinking",
          "Digital Skills & Technology for Work",
          "Financial, Entrepreneurial & Workplace Skills",
          "Practical Life Skills, Safety & Responsible Work",
          "Future Skills, Careers & Real-World Skill Challenges"
        ]
      },
      {
        slug: "digital-citizenship",
        name: "Digital Citizenship Olympiad",
        topics: [
          "Understanding Digital Citizenship",
          "Digital Identity & Online Reputation",
          "Privacy, Personal Data & Consent",
          "Digital Communication & Online Etiquette",
          "Cyberbullying, Respect & Empathy Online",
          "Information Literacy, Fake News & Misinformation",
          "Copyright, Plagiarism & Digital Content",
          "Digital Footprint, Social Media & Responsible Sharing",
          "Digital Wellbeing, Screen Time & Healthy Technology Use",
          "Responsible Digital Citizenship & Real-Life Scenarios"
        ]
      },
      {
        slug: "indian-heritage",
        name: "Indian Heritage Olympiad",
        topics: [
          "Introduction to India's Heritage & Cultural Diversity",
          "Ancient Indian Civilisations & Historical Foundations",
          "Indian Art, Architecture & Monuments",
          "Languages, Literature & Knowledge Traditions",
          "Indian Religions, Philosophies & Cultural Traditions",
          "Folk Arts, Music, Dance, Theatre & Crafts",
          "Festivals, Food, Clothing & Living Traditions",
          "Science, Mathematics, Medicine & Innovation in India",
          "Heritage Conservation, UNESCO & Responsible Tourism",
          "India's Cultural Legacy & Heritage Challenge"
        ]
      }
    ]
  },
  {
    slug: "secondary",
    name: "Secondary",
    classes: "Classes IX – X",
    tagline: "Master Knowledge. Challenge Ideas. Create the Future.",
    desc: "Mastering advanced applied knowledge across AI & ML, ethical hacking, financial markets, astronomy, behavioral science, sustainability, and innovation.",
    image: "/assets/images/age-group-secondary.jpg",
    color: "#0D7A67",
    accentBg: "rgba(13, 122, 103, 0.08)",
    border: "rgba(13, 122, 103, 0.25)",
    badge: "7 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "ai-machine-learning",
        name: "Artificial Intelligence & Machine Learning Olympiad",
        topics: [
          "Foundations of Artificial Intelligence",
          "Data, Information & Data Science",
          "Machine Learning Fundamentals",
          "Supervised, Unsupervised & Reinforcement Learning",
          "Algorithms, Patterns & Computational Thinking",
          "Neural Networks & Deep Learning",
          "Computer Vision, Natural Language Processing & Generative AI",
          "AI Applications in Science, Education, Business & Society",
          "AI Ethics, Bias, Privacy & Responsible AI",
          "Future of AI: Innovation, Risks & Real-World Case Studies"
        ]
      },
      {
        slug: "cybersecurity-ethical-hacking",
        name: "Cybersecurity & Ethical Hacking Olympiad",
        topics: [
          "Cybersecurity Fundamentals & Digital Threats",
          "Networks, Internet & Network Security",
          "Malware, Viruses, Ransomware & Cyber Attacks",
          "Phishing, Social Engineering & Online Scams",
          "Passwords, Authentication & Access Security",
          "Cryptography, Encryption & Data Protection",
          "Web, Mobile, Cloud & IoT Security",
          "Ethical Hacking, Vulnerability Assessment & Cyber Defence",
          "Cyber Ethics, Digital Citizenship & Cyber Laws",
          "Incident Response, Cyber Risk & Real-World Cyber Cases"
        ]
      },
      {
        slug: "financial-markets",
        name: "Financial Markets Olympiad",
        topics: [
          "Money, Banking & the Financial System",
          "Saving, Investing & Financial Planning",
          "Financial Markets & Stock Exchanges",
          "Stocks, Shares & Equity Markets",
          "Bonds, Fixed Income & Other Investment Instruments",
          "Mutual Funds, ETFs & Diversification",
          "Fundamental & Technical Analysis",
          "Risk, Return, Compounding & Portfolio Management",
          "Digital Finance, FinTech, Fraud & Investor Safety",
          "RBI, SEBI, Global Markets & Real-World Financial Cases"
        ]
      },
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy Olympiad",
        topics: [
          "Universe, Galaxies & Cosmic Evolution",
          "Stars: Birth, Life & Death",
          "Solar System & Planetary Science",
          "Earth, Moon, Sun & Their Interactions",
          "Gravity, Orbits & Space-Time",
          "Telescopes, Observatories & Space Observation",
          "Satellites, Rockets & Space Technology",
          "Human Spaceflight, Space Stations & Exploration",
          "India's Space Programme & Global Space Missions",
          "Black Holes, Exoplanets, Astrobiology & Future Space Exploration"
        ]
      },
      {
        slug: "behavioural-science-psychology",
        name: "Behavioural Science & Psychology Olympiad",
        topics: [
          "Introduction to Psychology & Behavioural Science",
          "Brain, Nervous System & Human Behaviour",
          "Sensation, Perception & Attention",
          "Learning, Memory & Intelligence",
          "Thinking, Decision-Making & Problem-Solving",
          "Emotions, Motivation & Human Behaviour",
          "Personality, Individual Differences & Development",
          "Social Psychology, Groups & Human Relationships",
          "Behavioural Biases, Persuasion & Decision Science",
          "Psychology in Everyday Life, Society & Real-World Case Studies"
        ]
      },
      {
        slug: "climate-sustainability",
        name: "Climate & Sustainability Olympiad",
        topics: [
          "Earth Systems & Environmental Science",
          "Weather, Climate & Climate Change",
          "Global Warming, Greenhouse Gases & Carbon Cycle",
          "Biodiversity, Ecosystems & Conservation",
          "Water, Food & Natural Resource Security",
          "Energy Resources & Renewable Energy",
          "Pollution, Waste Management & Circular Economy",
          "Sustainable Cities, Agriculture & Responsible Consumption",
          "Climate Action, Adaptation, Mitigation & Net-Zero",
          "SDGs, Green Technology & Global Climate Case Studies"
        ]
      },
      {
        slug: "entrepreneurship-innovation",
        name: "Entrepreneurship & Innovation Olympiad",
        topics: [
          "Entrepreneurial Mindset & Entrepreneurship Fundamentals",
          "Problem Identification & Opportunity Recognition",
          "Creativity, Innovation & Design Thinking",
          "Market Research & Understanding Customers",
          "Value Proposition & Business Models",
          "Product Development, Prototyping & MVP",
          "Marketing, Branding, Sales & Digital Business",
          "Finance, Pricing, Revenue & Startup Funding",
          "Technology, AI, Social & Sustainable Entrepreneurship",
          "Startup Strategy, Leadership, Risk & Entrepreneurial Case Studies"
        ]
      }
    ]
  },
  {
    slug: "senior-secondary",
    name: "Senior Secondary",
    classes: "Classes XI – XII",
    tagline: "Lead with Knowledge. Think with Purpose. Shape the Future.",
    desc: "Developing strategic leadership, capital markets expertise, entrepreneurial acumen, climate action, critical thinking, public speaking, and future career agility.",
    image: "/assets/images/age-group-senior.jpg",
    color: "#C1650C",
    accentBg: "rgba(193, 101, 12, 0.08)",
    border: "rgba(193, 101, 12, 0.25)",
    badge: "8 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "cybersecurity-digital-safety",
        name: "Cybersecurity & Digital Safety Olympiad",
        topics: [
          "Cybersecurity Fundamentals & Digital Threat Landscape",
          "Malware, Phishing, Social Engineering & Cyber Fraud",
          "Network, Web & Application Security",
          "Passwords, Authentication & Access Management",
          "Cryptography, Data Security & Privacy",
          "Mobile, Cloud, IoT & Emerging Technology Security",
          "Digital Identity, Cyber Ethics & Responsible Digital Citizenship",
          "Cyber Laws, Regulations & Digital Rights",
          "Cyber Risk, Incident Response & Disaster Recovery",
          "AI, Cybersecurity & Real-World Cyber Case Studies"
        ]
      },
      {
        slug: "financial-markets-management",
        name: "Financial Markets Management Olympiad",
        topics: [
          "Money, Banking & the Financial System",
          "Personal Finance, Saving & Wealth Creation",
          "Financial Markets & Stock Exchanges",
          "Equity, Bonds & Fixed-Income Instruments",
          "Mutual Funds, ETFs & Investment Products",
          "Derivatives: Futures & Options",
          "Fundamental & Technical Analysis",
          "Risk, Return, Portfolio & Behavioural Finance",
          "Digital Banking, FinTech & Investor Protection",
          "SEBI, RBI, Global Markets & Financial Case Studies"
        ]
      },
      {
        slug: "entrepreneurship-innovation",
        name: "Entrepreneurship & Innovation Olympiad",
        topics: [
          "Entrepreneurial Mindset & Types of Entrepreneurship",
          "Opportunity Identification & Problem Discovery",
          "Creativity, Ideation & Design Thinking",
          "Market Research & Customer Discovery",
          "Business Models & Value Proposition",
          "Business Planning, Product Development & MVP",
          "Marketing, Branding, Sales & Customer Acquisition",
          "Startup Finance, Funding & Business Economics",
          "Technology, AI, Social & Sustainable Entrepreneurship",
          "Startup Strategy, Leadership, Risk & Case Studies"
        ]
      },
      {
        slug: "climate-sustainability",
        name: "Climate & Sustainability Olympiad",
        topics: [
          "Earth Systems, Environment & Climate Science",
          "Global Warming, Greenhouse Effect & Climate Change",
          "Carbon Cycle, Carbon Footprint & Emissions",
          "Biodiversity, Ecosystems & Natural Resources",
          "Water, Food & Energy Security",
          "Renewable Energy & Energy Transition",
          "Waste Management & Circular Economy",
          "Sustainable Cities, Agriculture & Infrastructure",
          "Climate Adaptation, Mitigation & Net-Zero",
          "SDGs, Environmental Policies & Green Innovation"
        ]
      },
      {
        slug: "leadership-life-skills",
        name: "Leadership & Life Skills Olympiad",
        topics: [
          "Leadership Fundamentals & Leadership Styles",
          "Self-Awareness, Vision & Personal Effectiveness",
          "Emotional Intelligence & Empathy",
          "Goal Setting, Time Management & Productivity",
          "Decision-Making, Problem-Solving & Strategic Thinking",
          "Communication, Teamwork & Collaboration",
          "Conflict Resolution, Negotiation & Relationship Skills",
          "Resilience, Adaptability, Stress & Change Management",
          "Ethical, Digital & Socially Responsible Leadership",
          "Leadership in Crisis, Society & Real-World Case Studies"
        ]
      },
      {
        slug: "critical-thinking-problem-solving",
        name: "Critical Thinking & Problem-Solving Olympiad",
        topics: [
          "Foundations of Critical Thinking & Observation",
          "Logic, Deduction & Induction",
          "Arguments, Assumptions & Conclusions",
          "Evidence, Inference, Cause & Effect",
          "Patterns, Analogies & Logical Relationships",
          "Data Interpretation, Probability & Risk",
          "Decision-Making & Strategic Problem-Solving",
          "Cognitive Biases, Logical Fallacies & Misinformation",
          "Creative, Lateral, Systems & Computational Thinking",
          "Advanced Reasoning & Real-World Case Challenges"
        ]
      },
      {
        slug: "communication-public-speaking",
        name: "Communication & Public Speaking Olympiad",
        topics: [
          "Fundamentals of Effective Communication",
          "Verbal, Non-Verbal & Listening Skills",
          "Language, Vocabulary, Grammar & Clarity",
          "Public Speaking & Speech Structure",
          "Voice, Pronunciation, Tone & Stage Presence",
          "Storytelling, Presentation & Visual Communication",
          "Persuasion, Debate & Argumentation",
          "Impromptu Speaking, Extempore & Group Discussion",
          "Interview, Negotiation & Professional Communication",
          "Leadership, Digital, Media & Crisis Communication"
        ]
      },
      {
        slug: "career-future-skills",
        name: "Career & Future Skills Olympiad",
        topics: [
          "Self-Awareness, Interests, Strengths & Career Values",
          "Career Exploration & Decision-Making",
          "Aptitude, Employability & Professional Skills",
          "Future of Work & Emerging Careers",
          "AI, Digital Technology & Workplace Transformation",
          "Critical Thinking, Creativity & Problem-Solving",
          "Communication, Collaboration & Workplace Behaviour",
          "Resume, Portfolio, Personal Branding & Networking",
          "Interviews, Workplace Ethics & Professionalism",
          "Entrepreneurship, Lifelong Learning & Future Readiness"
        ]
      }
    ]
  }
];

export default function SyllabusInteractive() {
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedDivisions, setExpandedDivisions] = useState({});

  const toggleDivisionExpand = (slug) => {
    setExpandedDivisions((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <>
      {/* Main Grid Section */}
      <section className="syl-grid-section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="syl-cards-grid">
            {divisionDetails.map((div) => {
              const isExpanded = !!expandedDivisions[div.slug];
              const visibleSubjects = isExpanded ? div.subjects : div.subjects.slice(0, 2);

              return (
                <div key={div.slug} className="syl-card">
                  {/* Visual Media Header */}
                  <div className="syl-card-media">
                    <img
                      src={div.image}
                      alt={`${div.name} Division students`}
                      loading="lazy"
                      className="syl-card-img"
                    />
                    <div className="syl-card-overlay" />
                    <div className="syl-card-badge-top" style={{ color: div.color }}>
                      {div.classes}
                    </div>
                    <div className="syl-card-status-pill">
                      {div.status === "Active" ? (
                        <>
                          <span className="syl-live-dot" />
                          {div.subjects.length} Subjects
                        </>
                      ) : (
                        "Coming Soon"
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="syl-card-body">
                    <div className="syl-card-div-tag" style={{ color: div.color }}>
                      {div.name} Division
                    </div>
                    <h3 className="syl-card-title">{div.tagline}</h3>
                    <p className="syl-card-desc">{div.desc}</p>

                    {/* Subject Chips / Interactive Topics Preview */}
                    <div className="syl-subjects-preview">
                      <div className="syl-preview-label-row">
                        <div className="syl-preview-label">Included Subjects:</div>
                        {div.subjects.length > 2 && (
                          <button
                            type="button"
                            onClick={() => toggleDivisionExpand(div.slug)}
                            className={`syl-subject-expand-btn ${isExpanded ? "is-expanded" : ""}`}
                            title={isExpanded ? "Show fewer subjects" : `Show ${div.subjects.length - 2} more subjects`}
                          >
                            <span>{isExpanded ? "Show Less" : `+${div.subjects.length - 2} More`}</span>
                            <span className="syl-expand-chevron">{isExpanded ? "▴" : "▾"}</span>
                          </button>
                        )}
                      </div>
                      <div className="syl-chips-wrapper">
                        {visibleSubjects.map((sub, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() =>
                              setSelectedSubjectModal({
                                division: div.name,
                                classes: div.classes,
                                color: div.color,
                                subject: sub,
                              })
                            }
                            className="syl-subject-chip"
                            title="Click to preview key syllabus topics"
                          >
                            <span className="syl-chip-dot" style={{ background: div.color }} />
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    </div>

                      {/* Card Action Footer */}
                      <div className="syl-card-footer">
                        <Link
                          href={`/syllabus/${div.slug}/`}
                          className="syl-cta-primary"
                        >
                          Explore Full Syllabus <span className="arrow">→</span>
                        </Link>
                        {div.status === "Active" && (
                          <Link
                            href="/sample-papers/"
                            className="syl-cta-secondary"
                            title="Download sample papers for this level"
                          >
                            Sample Papers ↗
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="syl-faq-section">
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: 640 }}>
            <div className="section-eyebrow">Syllabus Guidance</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="syl-faq-list">
            {[
              {
                q: "Is the Olympiad syllabus aligned with CBSE, ICSE, and State Boards?",
                a: "Yes. The core concepts correlate with school curriculums across all major national and state boards, while extending into applied thinking, real-world scenarios, and emerging competencies like Space Science and AI."
              },
              {
                q: "Can a student appear for multiple subject Olympiads in their division?",
                a: "Absolutely! Students from Classes III through XII are encouraged to participate in multiple subject Olympiads within their designated age division to explore diverse interests."
              },
              {
                q: "Are sample question papers available for practice?",
                a: "Yes. Free sample question papers and model blueprints for each active subject can be accessed directly on our Sample Papers page to help students familiarize themselves with question patterns and difficulty tiers."
              },
              {
                q: "What is the format and duration of the Olympiad examination?",
                a: "The assessment consists of objective Multiple-Choice Questions (MCQs) designed for 60 minutes, focusing on analytical reasoning, problem solving, and conceptual clarity."
              }
            ].map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`syl-faq-card ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="syl-faq-question"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="syl-faq-chevron">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="syl-faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Subject Topic Quick Preview Modal */}
      {selectedSubjectModal && (
        <div className="syl-modal-backdrop" onClick={() => setSelectedSubjectModal(null)}>
          <div
            className="syl-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedSubjectModal(null)}
              className="syl-modal-close"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="syl-modal-header">
              <span
                className="syl-modal-div-badge"
                style={{ color: selectedSubjectModal.color }}
              >
                {selectedSubjectModal.division} Division · {selectedSubjectModal.classes}
              </span>
              <h3 className="syl-modal-title">{selectedSubjectModal.subject.name}</h3>
              <p className="syl-modal-subtitle">
                Core syllabus blueprint and key learning topics covered in the Olympiad:
              </p>
            </div>

            <div className="syl-modal-topics-grid">
              {selectedSubjectModal.subject.topics ? (
                selectedSubjectModal.subject.topics.map((t, idx) => (
                  <div key={idx} className="syl-modal-topic-item">
                    <span className="syl-topic-num">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="syl-topic-text">{t}</span>
                  </div>
                ))
              ) : (
                <p style={{ color: "#64748B", fontSize: 13.5 }}>Detailed topic breakdown loading...</p>
              )}
            </div>

            <div className="syl-modal-footer">
              <Link
                href={`/syllabus/${selectedSubjectModal.division.toLowerCase().replace(/\s+/g, "-")}/`}
                className="btn btn-primary"
                style={{ padding: "10px 22px", fontSize: 13.5 }}
              >
                View Full Division Syllabus →
              </Link>
              <button
                type="button"
                onClick={() => setSelectedSubjectModal(null)}
                className="btn btn-ghost"
                style={{ padding: "10px 18px", fontSize: 13.5 }}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
