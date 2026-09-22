// ============================================================
// CONTENT DATA — Awad Educational Academy
//
// IMPORTANT: No fabricated data. Every list below uses clearly
// marked placeholders (`confirmed: false`) until the academy
// supplies real content. Components should render only confirmed
// items in production, and show a friendly "coming soon" note
// otherwise. See WEBSITE-SPECIFICATION.md sections 23 & 24.
// ============================================================

// --- COURSES / CLASSES (Spec §6) ---
// Placeholders only — actual course names/details TBC by academy.
export const courses = [
  {
    id: "course-01",
    name: "Course / Class 01",
    slug: "course-01",
    shortDescription: "",
    subjects: [],
    duration: "",
    batchTiming: "",
    mode: "", // "Offline" | "Online" | "Both"
    eligibility: "",
    admission: "",
    confirmed: false,
  },
  {
    id: "course-02",
    name: "Course / Class 02",
    slug: "course-02",
    shortDescription: "",
    subjects: [],
    duration: "",
    batchTiming: "",
    mode: "",
    eligibility: "",
    admission: "",
    confirmed: false,
  },
  {
    id: "course-03",
    name: "Course / Class 03",
    slug: "course-03",
    shortDescription: "",
    subjects: [],
    duration: "",
    batchTiming: "",
    mode: "",
    eligibility: "",
    admission: "",
    confirmed: false,
  },
];

// --- WHY CHOOSE US (Spec §4.4) ---
// Potential strengths — publish only after academy approval.
export const whyChooseUs = [
  { icon: "GraduationCap", title: "Experienced Faculty", text: "", confirmed: false },
  { icon: "Users", title: "Student-Focused Teaching", text: "", confirmed: false },
  { icon: "BookOpen", title: "Positive Learning Environment", text: "", confirmed: false },
  { icon: "Compass", title: "Academic Guidance", text: "", confirmed: false },
  { icon: "Lightbulb", title: "Practical Learning", text: "", confirmed: false },
  { icon: "HeartHandshake", title: "Student Support", text: "", confirmed: false },
];

// --- FACULTY (Spec §7) ---
// No verified faculty yet — empty until academy provides profiles.
export const faculty = [
  // {
  //   id: "",
  //   name: "",
  //   designation: "",
  //   subject: "",
  //   qualification: "",
  //   experience: "",
  //   bio: "",
  //   photo: "",
  //   confirmed: true,
  // },
];

// --- RESULTS & ACHIEVEMENTS (Spec §8) ---
export const academicResults = []; // { exam, year, student, result, rank, confirmed }
export const studentAchievements = []; // { title, detail, confirmed }
export const academyAchievements = []; // { title, detail, confirmed }

// --- TESTIMONIALS (Spec §10) ---
// Only genuine, academy-approved testimonials. Empty until provided.
export const testimonials = [
  // { id: "", name: "", role: "Student" | "Parent", course: "", text: "", photo: "", confirmed: true },
];

// --- GALLERY (Spec §9) ---
// Add real academy photographs here (place files in /public/gallery or import from assets).
export const galleryCategories = [
  "Academy",
  "Classroom",
  "Faculty",
  "Students",
  "Events",
  "Activities",
  "Achievements",
];
export const galleryImages = [
  // { src: "", alt: "", category: "Classroom" }
];

// --- ABOUT (Spec §5) ---
export const about = {
  intro:
    "Awad Educational Academy is an educational institute located in Kaij, Beed, Maharashtra.",
  introConfirmed: false,
  mission: "",
  missionConfirmed: false,
  vision: "",
  visionConfirmed: false,
  establishmentYear: "",
  milestones: [], // { year, text, confirmed }
  management: [], // { name, designation, qualification, intro, photo, confirmed }
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
