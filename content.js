/* =====================================================================
   NỘI DUNG WEBSITE — SITE CONTENT
   ---------------------------------------------------------------------
   Edit this file to change any text, link or image on the site.
   You never need to touch index.html / assets/*.css / assets/*.js.

   Rules to keep it working:
   - Keep every text inside quotes: "like this"
   - Keep the commas between items
   - To add an item to a list, copy an existing { ... } block and paste
     it after a comma.
   - Images: put your files in the /images folder and write the path,
     e.g. "images/lop-hoc-1.jpg". If a file is missing, the site shows
     a grey placeholder with the file name so you know what to add.
   ===================================================================== */

window.SITE = {

  /* ---------- General ---------- */
  meta: {
    title: "VAMOS - Này học tiếng Tây Ban Nha đi",
    description: "Lớp học tiếng Tây Ban Nha online nhóm nhỏ, kèm 1-1, 1-2, giao tiếp, luyện thi DELE.",
  },

  // Leave logoImage empty ("") to use the built-in text logo "¡vamos!".
  // Or set it to your own logo file, e.g. "images/logo.png".
  logoImage: "",
  logoTagline: "Này, học tiếng Tây Ban Nha đi",

  /* ---------- Social / contact links ---------- */
  // type must be one of: zalo, facebook, tiktok, threads, instagram, youtube, email, phone
  socials: [
    { type: "zalo",     url: "https://zalo.me/0969801834" },
    { type: "facebook", url: "https://m.me/vamos.taybannha" },
    { type: "tiktok",   url: "https://www.tiktok.com/@vamostaybannha" },
    { type: "threads",  url: "https://www.threads.com/@vamos_daytiengtaybannha" },
  ],

  /* ---------- Menu ---------- */
  // "target" is the id of a section below (home, about, teachers, classes, schedule, feedback, workshop)
  nav: [
    { label: "Home",              target: "home" },
    { label: "Về VAMOS",          target: "about" },
    { label: "Giáo viên",         target: "teachers" },
    { label: "Lớp học thực tế",   target: "classes" },
    { label: "Lịch khai giảng",   target: "schedule" },
    { label: "Feedback học viên", target: "feedback" },
    { label: "Workshop",          target: "workshop" },
  ],

  /* ---------- Hero (top red banner) ---------- */
  hero: {
    description:
      "Mô hình các lớp học tiếng Tây Ban Nha online nhóm nhỏ, lớp kèm 1-1, kèm 1-2, kèm theo yêu cầu, các lớp giao tiếp, luyện thi DELE lấy chứng chỉ",
    contactPrompt: "Liên hệ để được tư vấn lớp học phù hợp",
  },

  /* ---------- Numbers (yellow block) ---------- */
  stats: [
    { number: "+ 230", label: "lớp học đã khai giảng" },
    { number: "+ 900", label: "học viên đồng hành" },
  ],

  /* ---------- Về Vamos (timeline) ---------- */
  about: {
    title: "Về Vamos",
    timeline: [
      { year: "Năm 2016", text: "Thành lập page với mục tiêu chia sẻ kiến thức và niềm đam mê tiếng Tây Ban Nha" },
      { year: "Năm 2021", text: "Phát triển thành cộng đồng dạy và học tiếng Tây Ban Nha online với hơn 20.000 lượt theo dõi tự nhiên trên facebook" },
      { year: "Năm 2023", text: "Mở rộng thêm Group này học tiếng Tây Ban Nha với hơn 8.000 thành viên tích cực hoạt động" },
      { year: "Năm 2024", text: "Xuất hiện trên nhiều nền tảng khác (Instagram/Tiktok/Threads)" },
      { year: "Năm 2025 - 2026", text: "Vamos đã đồng hành cùng hơn 900 học viên trong và ngoài nước trên hành trình học tiếng Tây Ban Nha" },
    ],
  },

  /* ---------- Giáo viên (accordion) ---------- */
  // icon must be one of: degree, award, teacher, work, language
  teachers: {
    title: "Giáo viên",
    subtitle: "Toàn bộ giáo viên có chuyên môn, nghiệp vụ sư phạm và kinh nghiệm vững vàng",
    items: [
      {
        icon: "degree",
        title: "Bằng cấp",
        text: "Bằng cử nhân, thạc sĩ và thủ khoa đầu ra trường ĐH Hà Nội, ĐH KHXH Nhân Văn Tp.HCM, ĐH Complutense de Madrid, ĐH La Laguna, BAU Tây Ban Nha",
      },
      {
        icon: "award",
        title: "Đào tạo nghiệp vụ",
        text: "(Sửa nội dung này) Giáo viên được đào tạo nghiệp vụ sư phạm giảng dạy tiếng Tây Ban Nha như một ngoại ngữ.",
      },
      {
        icon: "teacher",
        title: "Kinh nghiệm giảng dạy",
        text: "Kinh nghiệm giảng dạy tiếng TBN nhiều cấp độ, nhiều độ tuổi khác nhau, lớp nhóm giao tiếp, lớp trẻ em, lớp luyện thi DELE, SIELE, kèm (1-1; 1-2, theo yêu cầu)",
      },
      {
        icon: "work",
        title: "Kinh nghiệm làm việc",
        text: "(Sửa nội dung này) Kinh nghiệm làm việc thực tế trong môi trường sử dụng tiếng Tây Ban Nha.",
      },
      {
        icon: "language",
        title: "Sử dụng song ngữ trong lớp",
        text: "(Sửa nội dung này) Giáo viên sử dụng song ngữ Việt - Tây Ban Nha để học viên dễ tiếp thu.",
      },
    ],
  },

  /* ---------- Lớp học (photo grid) ---------- */
  classes: {
    title: "Lớp học",
    initialCount: 6,          // how many photos show before "Load More"
    loadMoreLabel: "Load More",
    photos: [
      "images/lop-hoc-1.jpg",
      "images/lop-hoc-2.jpg",
      "images/lop-hoc-3.jpg",
      "images/lop-hoc-4.jpg",
      "images/lop-hoc-5.jpg",
      "images/lop-hoc-6.jpg",
      "images/lop-hoc-7.jpg",
      "images/lop-hoc-8.jpg",
    ],
  },

  /* ---------- Lịch khai giảng (schedule) ---------- */
  schedule: {
    title: "Lịch khai giảng",
    startLabel: "Khai giảng",
    courses: [
      {
        name: "Khóa A1.1",
        classes: [
          { code: "A1.1 - 127", days: "Thứ 3 - 5",  time: "20h - 21h30", start: "08/09" },
          { code: "A1.1 - 128", days: "Thứ 2 - 4",  time: "20h - 21h30", start: "09/09" },
          { code: "A1.1 - 129", days: "Thứ 7 - CN", time: "9h - 10h30",  start: "17/09" },
          { code: "A1.1 - 130", days: "Thứ 3 - 5",  time: "9h - 10h30",  start: "22/09" },
        ],
      },
      {
        name: "Khóa A1.2",
        classes: [
          { code: "A1.2 - 112", days: "Thứ 3 - 5",  time: "20h - 21h30", start: "24/09" },
          { code: "A1.2 - 114", days: "Thứ 7 - CN", time: "9h - 10h30",  start: "10/10" },
          { code: "A1.2 - 115", days: "Thứ 6 - CN", time: "20h - 21h30", start: "18/10" },
        ],
      },
      {
        name: "Khóa A2.1",
        classes: [
          { code: "A2.1 - 101", days: "Thứ 6 - CN", time: "20h - 21h30", start: "18/09" },
          { code: "A2.1 - 102", days: "Thứ 3 - 5",  time: "20h - 21h30", start: "01/10" },
        ],
      },
      {
        name: "Khóa B1.1",
        classes: [
          { code: "B1.1 - 078", days: "Thứ 7 - CN", time: "15h30 - 17h", start: "05/09" },
          { code: "B1.1 - 085", days: "Thứ 2 - 4",  time: "20h - 21h30", start: "26/10" },
        ],
      },
      {
        name: "Khóa DELE B1.1",
        classes: [
          { code: "DELE B1", days: "Thứ 2 - 6", time: "19h - 20h30", start: "04/09" },
        ],
      },
    ],
  },

  /* ---------- Feedback học viên (screenshot slider) ---------- */
  feedback: {
    title: "Feedback\nhọc viên",   // \n = line break
    images: [
      "images/feedback-1.jpg",
      "images/feedback-2.jpg",
      "images/feedback-3.jpg",
      "images/feedback-4.jpg",
      "images/feedback-5.jpg",
    ],
  },

  /* ---------- Workshop (photo slider) ---------- */
  workshop: {
    title: "Workshop",
    caption: "Workshop làm bánh Empanadas",
    images: [
      "images/workshop-1.jpg",
      "images/workshop-2.jpg",
      "images/workshop-3.jpg",
      "images/workshop-4.jpg",
    ],
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline: "Này học tiếng Tây Ban Nha đi",
    contactTitle: "Liên hệ",
    contactText: "Cần tư vấn lớp phù hợp? Nhắn VAMOS ngay nhé!",
    copyright: "© 2026 VAMOS. All rights reserved.",
  },
};
