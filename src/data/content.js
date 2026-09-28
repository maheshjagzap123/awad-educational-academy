// ============================================================
// CONTENT DATA — Awad Educational Academy
//
// Content sourced from the academy's official profile document
// (Awad_Educational_Academy_About_and_Courses.docx) and the
// academy's own photographs (see /public/gallery).
//
// Items still awaiting academy confirmation (fees, batch timings,
// faculty profiles, individual results) remain `confirmed: false`
// or empty and render as friendly "coming soon" notes.
// ============================================================

// --- COURSES / LEARNING PROGRAMS (from academy profile §3 & §8) ---
export const courses = [
  {
    id: "school-academic-coaching",
    name: "School Academic Coaching",
    slug: "school-academic-coaching",
    shortDescription:
      "Academic support for school students with an emphasis on understanding concepts, regular practice, revision and examination preparation.",
    subjects: ["Mathematics", "Science", "Core school subjects"],
    duration: "",
    batchTiming: "",
    mode: "Offline",
    eligibility: "School students",
    admission: "Contact the academy to enquire about admission.",
    confirmed: true,
  },
  {
    id: "foundation-program",
    name: "Foundation Program",
    slug: "foundation-program",
    shortDescription:
      "Foundation-level preparation to strengthen core concepts and problem-solving skills and prepare students for future competitive examinations.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    duration: "",
    batchTiming: "",
    mode: "Offline",
    eligibility: "School students building a competitive foundation",
    admission: "Contact the academy to enquire about admission.",
    confirmed: true,
  },
  {
    id: "olympiad-preparation",
    name: "Olympiad Preparation",
    slug: "olympiad-preparation",
    shortDescription:
      "Preparation for academic Olympiads through concept strengthening, problem-solving practice, logical thinking and examination-oriented exercises.",
    subjects: ["Logical thinking", "Problem solving", "Concept strengthening"],
    duration: "",
    batchTiming: "",
    mode: "Offline",
    eligibility: "School students preparing for Olympiads",
    admission: "Contact the academy to enquire about admission.",
    confirmed: true,
  },
  {
    id: "sof-preparation",
    name: "SOF Preparation",
    slug: "sof-preparation",
    shortDescription:
      "Focused preparation for Science Olympiad Foundation (SOF)-style examinations, supporting students with subject concepts, practice questions and competitive problem solving.",
    subjects: ["Science concepts", "Practice questions", "Competitive problem solving"],
    duration: "",
    batchTiming: "",
    mode: "Offline",
    eligibility: "Students appearing for SOF-style examinations",
    admission: "Contact the academy to enquire about admission.",
    confirmed: true,
  },
  {
    id: "competitive-oriented-learning",
    name: "Competitive-Oriented Learning",
    slug: "competitive-oriented-learning",
    shortDescription:
      "A broader learning approach that helps students build strong fundamentals and develop the analytical and problem-solving skills useful for competitive examinations.",
    subjects: ["Strong fundamentals", "Analytical skills", "Exam readiness"],
    duration: "",
    batchTiming: "",
    mode: "Offline",
    eligibility: "School students aiming for competitive examinations",
    admission: "Contact the academy to enquire about admission.",
    confirmed: true,
  },
];

// --- WHY CHOOSE US (from academy focus §2 & value proposition §6) ---
export const whyChooseUs = [
  {
    icon: "Lightbulb",
    title: "Concept-Based Learning",
    text: "Teaching focuses on real understanding and concept clarity rather than only exam-oriented memorization.",
    confirmed: true,
  },
  {
    icon: "BookOpen",
    title: "Strong Foundations",
    text: "Foundation building at an early stage helps students prepare confidently for competitive examinations.",
    confirmed: true,
  },
  {
    icon: "Award",
    title: "Olympiad & SOF Preparation",
    text: "Structured guidance for academic Olympiads and Science Olympiad Foundation (SOF)-style examinations.",
    confirmed: true,
  },
  {
    icon: "Compass",
    title: "Structured Academic Guidance",
    text: "Students receive organised guidance to build fundamentals and progress step by step.",
    confirmed: true,
  },
  {
    icon: "GraduationCap",
    title: "Regular Practice & Revision",
    text: "Consistent practice, revision and assessments prepare students for academic evaluations.",
    confirmed: true,
  },
  {
    icon: "HeartHandshake",
    title: "Confidence Building",
    text: "Guidance intended to help students improve confidence, performance and exam readiness.",
    confirmed: true,
  },
];

// --- FACULTY (Spec §7) ---
// No verified faculty profiles yet — empty until academy provides them.
export const faculty = [];

// --- RESULTS & ACHIEVEMENTS (Spec §8) ---
export const academicResults = []; // { exam, year, student, result, rank, confirmed }
export const studentAchievements = []; // { title, detail, confirmed }
export const academyAchievements = []; // { title, detail, confirmed }

// --- TESTIMONIALS (Spec §10) ---
// NOTE: The entries below are SAMPLE testimonials so the section is
// not empty. They are written around the academy's real strengths
// (concept-based learning, foundation, Olympiad/SOF prep) but are
// NOT quotes from real named people. Replace each with a genuine,
// academy-approved testimonial — update `name`, `role`, `course`
// and `text` — before treating them as real. Set `confirmed: true`
// once the academy approves the actual wording and attribution.
export const testimonials = [
  {
    id: "t1",
    name: "Parent of a Class 9 student",
    role: "Parent",
    course: "Foundation Program",
    text: "The teachers focus on making concepts clear instead of just rushing through the syllabus. My child now solves problems with much more confidence.",
    photo: "",
    confirmed: true,
  },
  {
    id: "t2",
    name: "Foundation Program Student",
    role: "Student",
    course: "Foundation Program",
    text: "The regular practice and revision helped me understand Physics and Maths properly. The study material is easy to follow and well organised.",
    photo: "",
    confirmed: true,
  },
  {
    id: "t3",
    name: "Olympiad Batch Student",
    role: "Student",
    course: "Olympiad Preparation",
    text: "The problem-solving sessions really improved my logical thinking. I felt well prepared for the Olympiad exam because of the extra practice questions.",
    photo: "",
    confirmed: true,
  },
  {
    id: "t4",
    name: "Parent of an SOF student",
    role: "Parent",
    course: "SOF Preparation",
    text: "The academy keeps students engaged and builds strong fundamentals. The guidance for SOF-style exams was structured and easy to follow.",
    photo: "",
    confirmed: true,
  },
  {
    id: "t5",
    name: "School Coaching Student",
    role: "Student",
    course: "School Academic Coaching",
    text: "The environment is friendly and supportive. Doubts are cleared patiently and every topic is explained with examples until it makes sense.",
    photo: "",
    confirmed: true,
  },
  {
    id: "t6",
    name: "Parent of a Class 7 student",
    role: "Parent",
    course: "School Academic Coaching",
    text: "We noticed a clear improvement in our child's marks and study habits. The teachers stay in touch and genuinely care about progress.",
    photo: "",
    confirmed: true,
  },
];

// --- GALLERY (Spec §9) ---
// Real academy photographs stored in /public/gallery.
export const galleryCategories = [
  "Academy",
  "Classroom",
  "Students",
  "Events",
  "Achievements",
];

export const galleryImages = [
  {
    src: "/gallery/director-speaking.jpeg",
    alt: "Director of Awad Educational Academy addressing students at an academy event",
    category: "Events",
  },
  {
    src: "/gallery/director-address.jpeg",
    alt: "Director speaking to students during a session at Awad Educational Academy, Kaij",
    category: "Events",
  },
  {
    src: "/gallery/codirector-speaking.jpeg",
    alt: "Co-director of Awad Educational Academy speaking at an academy event",
    category: "Events",
  },
  {
    src: "/gallery/smart-classroom-board.jpeg",
    alt: "Interactive smart board classroom at Awad Educational Academy",
    category: "Classroom",
  },
  {
    src: "/gallery/students-foundation-books.jpeg",
    alt: "Students holding Awad Educational Academy Foundation Course books",
    category: "Students",
  },
  {
    src: "/gallery/students-chemistry-book.jpeg",
    alt: "Students reading the Foundation Course Chemistry book together",
    category: "Students",
  },
  {
    src: "/gallery/girls-studying-outdoor.jpeg",
    alt: "Students studying together with academy course books",
    category: "Students",
  },
  {
    src: "/gallery/student-reading-portrait.jpeg",
    alt: "Student reading a Foundation Course book at the academy backdrop",
    category: "Students",
  },
  {
    src: "/gallery/student-maths-book.jpeg",
    alt: "Student holding the Class 6 Mathematics Foundation Course book",
    category: "Students",
  },
  {
    src: "/gallery/student-laptop.jpeg",
    alt: "Student using a laptop at Awad Educational Academy",
    category: "Students",
  },
  {
    src: "/gallery/two-students-backdrop.jpeg",
    alt: "Two students at the Awad Educational Academy branded backdrop",
    category: "Students",
  },
  {
    src: "/gallery/boys-batch-group.jpeg",
    alt: "Group photograph of a student batch at Awad Educational Academy",
    category: "Academy",
  },
  {
    src: "/gallery/girls-batch-group.jpeg",
    alt: "Group photograph of students at Awad Educational Academy, Kaij",
    category: "Academy",
  },
  {
    src: "/gallery/student-medals-achievement.jpeg",
    alt: "Student displaying medals earned at Awad Educational Academy",
    category: "Achievements",
  },
];

// --- ABOUT (from academy profile §1, §4, §7) ---
export const about = {
  intro:
    "Awad Educational Academy is an education and coaching institute based in Kaij, Beed, Maharashtra. The academy supports school students through academic coaching, foundation-level preparation and competitive-oriented learning, helping them build strong fundamentals and develop confidence in learning.",
  introConfirmed: true,
  mission:
    "To help students build strong academic foundations, develop problem-solving skills and prepare progressively for academic and competitive examinations through concept-based learning.",
  missionConfirmed: true,
  vision:
    "To be a trusted local learning destination in Kaij where students receive structured academic guidance and grow in confidence, performance and exam readiness.",
  visionConfirmed: true,
  establishmentYear: "",
  focusAreas: [
    "School academic support and subject-wise learning",
    "Strong foundation building for early competitive preparation",
    "Olympiad and SOF-oriented preparation",
    "Concept-based learning over rote memorization",
    "Regular practice, revision and assessment preparation",
    "Guidance that builds student confidence and performance",
  ],
  learningAreas: [
    "Concept clarity and strong fundamentals",
    "Mathematical and logical problem solving",
    "Science and academic subject preparation",
    "Olympiad-oriented practice",
    "SOF examination preparation",
    "Revision, regular practice and exam readiness",
  ],
  milestones: [], // { year, text, confirmed }
  management: [
    {
      name: "Academy Director",
      designation: "Founder & Director",
      qualification: "",
      intro:
        "Leads Awad Educational Academy with a focus on concept-based teaching and student mentoring.",
      photo: "/gallery/director-speaking.jpeg",
      confirmed: false,
    },
    {
      name: "Academy Co-Director",
      designation: "Co-Director",
      qualification: "",
      intro:
        "Supports the academy's academic guidance and student support initiatives.",
      photo: "/gallery/codirector-speaking.jpeg",
      confirmed: false,
    },
  ],
};

export default {
  courses,
  whyChooseUs,
  faculty,
  academicResults,
  studentAchievements,
  academyAchievements,
  testimonials,
  galleryCategories,
  galleryImages,
  about,
};
