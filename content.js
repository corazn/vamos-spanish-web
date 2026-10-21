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
     e.g. "images/lop-hoc-1.png" (.jpg, .png and .webp all work).
     If a file is missing, the site shows
     a grey placeholder with the file name so you know what to add.
   ===================================================================== */

window.SITE = {

  /* ---------- General ---------- */
  meta: {
    title: "VAMOS - Này học tiếng Tây Ban Nha đi",
    description: "Lớp học tiếng Tây Ban Nha online nhóm nhỏ, kèm 1-1, 1-2, giao tiếp, luyện thi DELE.",
  },

  // Leave logoImage empty ("") to use the built-in text logo "¡vamos!".
  // Or set it to your own logo file, e.g. "images/logo.svg".
  logoImage: "images/logo-header.svg",       // menu bar (white background)
  logoImageCover: "images/logo-footer.svg",  // top red banner (version with tagline)
  logoImageFooter: "images/logo-footer.svg", // footer (dark background)
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
    { label: "Về VAMOS",          target: "about" },
    { label: "Giáo viên",         target: "teachers" },
    { label: "Lớp học thực tế",   target: "classes" },
    { label: "Lịch khai giảng",   target: "schedule" },
    { label: "Feedback học viên", target: "feedback" },
    { label: "Workshop",          target: "workshop" },
  ],

  // Button on the right of the menu bar. Use "url" for a link, or "target" for a section.
  navCta: { label: "Đăng ký", url: "https://zalo.me/0969801834" },

  /* ---------- Hero (top red banner) ---------- */
  hero: {
    description:
      "Mô hình các lớp học tiếng Tây Ban Nha online nhóm nhỏ, lớp kèm 1-1, kèm 1-2, kèm theo yêu cầu, các lớp giao tiếp, luyện thi DELE lấy chứng chỉ",
    // Buttons. Use "url" for a link (opens in a new tab) or "target" for a section of this page.
    ctaPrimary:   { label: "Đăng ký học thử",    url: "https://zalo.me/0969801834" },
    ctaSecondary: { label: "Xem lịch khai giảng", target: "schedule" },
    contactPrompt: "Liên hệ để được tư vấn lớp học phù hợp",
    // Photos in the scrolling columns on the right.
    // Leave empty [] to automatically use the "Lớp học" + "Workshop" photos below.
    photos: [],
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

  /* ---------- Giáo viên ---------- */
  teachers: {
    title: "Giáo viên",
    subtitle: "Toàn bộ giáo viên có chuyên môn, nghiệp vụ sư phạm và kinh nghiệm vững vàng",

    // Teacher profiles — shown as a scrolling row of cards (photo on top, text below).
    // "photo": any shape works, it's cropped to fit, e.g. "images/giao-vien-1.jpg".
    // "role": shown as a small badge under the name — leave it "" for no badge.
    // "bio": credentials separated by "|" — each part becomes one bullet point.
    // "focus" (optional): where the face is in the photo, e.g. "75% 50%" (left→right, top→bottom),
    //   so it isn't cropped out.
    profiles: [
      {
        name: "Cô Mẫn Nhi",
        role: "Hiệu trưởng Vamos",
        bio: "Thủ khoa đầu ra ngành ngôn ngữ Tây Ban Nha - Đại học KHXH&NV TP.HCM | Trên 5 năm kinh nghiệm dạy tiếng Tây Ban nha",
        photo: "images/giao-vien-1.jpg",
      },
      {
        name: "Cô Đồng Đào",
        role: "",
        bio: "Thư ký thương vụ Đại Sứ Quán Tây Ban Nha | 10 năm giảng dạy tiếng Tây Ban Nha | 10 năm kinh nghiệm làm phiên dịch viên tự do cho các tổ chức, sự kiện và hội nghị đa quốc gia",
        photo: "images/giao-vien-2.jpg",
        focus: "50% 25%",
      },
      {
        name: "Cô Ngọc Tú",
        role: "",
        bio: "Đang theo học thạc sĩ Đại học về Đào tạo giáo viên, đào tạo nghề và giảng dạy ngoại ngữ tại trường Đại Học Ceu San Pablo, Tây Ban Nha | Trên 4 năm kinh nghiệm dạy tiếng Tây Ban Nha",
        photo: "images/giao-vien-3.jpg",
      },
      {
        name: "Thầy Tấn Bảo",
        role: "",
        bio: "Cử nhân ngôn ngữ Tây Ban Nha - Đại học KHXH&NV TP.HCM | Chứng chỉ tiếng Tây Ban Nha DELE C1 | Hơn 7 năm kinh nghiệm dạy tiếng Tây Ban Nha",
        photo: "images/giao-vien-4.jpg",
      },
      {
        name: "Cô Vân Anh",
        role: "",
        bio: "Cử nhân Ngôn ngữ Tây Ban Nha - Đại học Hà Nội (HANU) | Hơn 7 năm kinh nghiệm giảng dạy tiếng Tây Ban Nha và tiếng Anh | MC song ngữ Tây Ban Nha - Anh, phiên biên dịch tự do",
        photo: "images/giao-vien-5.jpg",
      },
      {
        name: "Cô Mỹ Hảo",
        role: "",
        bio: "Cử nhân loại giỏi ngành ngôn ngữ Tây Ban Nha, Đại học KHXH&NV TP.HCM | Hơn 7 năm dạy tiếng Anh và tiếng Tây Ban Nha | Làm việc trong lĩnh vực công nghệ thông tin, phân tích và đánh giá dữ liệu",
        photo: "images/giao-vien-6.jpg",
      },
      {
        name: "Cô Minh Nguyễn",
        role: "",
        bio: "Cử nhân loại giỏi ngành ngôn ngữ Tây Ban Nha - Đại học Hà Nội (HANU) | Đang theo học thạc sĩ chuyên ngành giảng dạy tiếng Tây Ban Nha tại trường ĐH Universidad Antonio de Nebrija (Tây Ban Nha)",
        photo: "images/giao-vien-7.jpg",
      },
      {
        name: "Cô Khánh Linh",
        role: "",
        bio: "Thạc sĩ Thiết kế trải nghiệm số - Đại học BAU, Barcelona (Tây Ban Nha) | Cử nhân loại giỏi ngành Mỹ Thuật - Đại học La Laguna (Tây Ban Nha) | Hơn 7 năm sinh sống, học tập và làm việc thực tế tại Tây Ban Nha",
        photo: "images/giao-vien-8.jpg",
        focus: "73% 50%",
      },
      {
        name: "Cô Xuân Thơ",
        role: "",
        bio: "Cử nhân loại giỏi ngành ngôn ngữ Tây Ban Nha - Đại học Hà Nội (HANU) | Học bổng trao đổi sinh Erasmus + tại trường ĐH Sevilla (Tây Ban Nha) | Từng là trợ lý văn hóa và báo chí của Đại Sứ Quán Venezuela",
        photo: "images/giao-vien-9.jpg",
        focus: "62% 45%",
      },
      {
        name: "Thầy Ngọc Việt",
        role: "",
        bio: "Cử nhân loại giỏi ngành ngôn ngữ Tây Ban Nha, ĐH Hà Nội (HANU) | Học bổng trao đổi sinh Erasmus+ tại ĐH Granada, Tây Ban Nha | Hơn 2 năm kinh nghiệm làm việc trong môi trường nói tiếng Tây Ban Nha như du lịch, dịch thuật, giảng dạy",
        photo: "images/giao-vien-10.jpg",
      },
      {
        name: "Cô Ngọc Du",
        role: "",
        bio: "Cử nhân loại giỏi ngành ngôn ngữ Tây Ban Nha, ĐH Hà Nội (HANU) | 4 năm kinh nghiệm giảng dạy ngoại ngữ, sở hữu nền tảng kiến thức vững chắc về văn hoá Tây Ban Nha - Mỹ Latinh",
        photo: "images/giao-vien-11.jpg",
      },
    ],

    // Team strengths — shown as clickable chips above the profiles.
    // icon must be one of: degree, award, teacher, work, language
    items: [
      {
        icon: "degree",
        title: "Bằng cấp",
        text: "Bằng cử nhân, thạc sĩ và thủ khoa đầu ra trường ĐH Hà Nội, ĐH KHXH Nhân Văn Tp.HCM, ĐH Complutense de Madrid, ĐH La Laguna, BAU Tây Ban Nha",
      },
      {
        icon: "award",
        title: "Đào tạo nghiệp vụ",
        text: "Toàn bộ giáo viên đều được đào tạo theo quy trình và tiêu chuẩn phát triển chung của Vamos: năng động, nhiệt huyết, kết hợp nhiều hoạt động trò chơi tại lớp, chú trọng vào tương tác và thực hành ngay tại lớp.",
      },
      {
        icon: "teacher",
        title: "Kinh nghiệm giảng dạy",
        text: "Kinh nghiệm giảng dạy tiếng TBN nhiều cấp độ, nhiều độ tuổi khác nhau, lớp nhóm giao tiếp, lớp trẻ em, lớp luyện thi DELE, SIELE, kèm (1-1; 1-2, theo yêu cầu)",
      },
      {
        icon: "work",
        title: "Kinh nghiệm làm việc",
        text: "Kinh nghiệm phiên dịch tại các hội nghị, hội chợ thương mại cho các nước nói tiếng TBN.",
      },
      {
        icon: "language",
        title: "Sử dụng song ngữ trong lớp",
        text: "Sử dụng song ngữ Tây Ban Nha - Việt trong quá trình giảng dạy, giúp học viên dễ dàng tiếp thu kiến thức và phát triển kỹ năng giao tiếp.",
      },
    ],
  },

  /* ---------- Lớp học (photo grid) ---------- */
  classes: {
    title: "Lớp học",
    initialCount: 9,          // how many photos show before "Load More"
    loadMoreLabel: "Load More",
    photos: [
      "images/lop-hoc-1.png",
      "images/lop-hoc-2.png",
      "images/lop-hoc-3.png",
      "images/lop-hoc-4.png",
      "images/lop-hoc-5.png",
      "images/lop-hoc-6.png",
      "images/lop-hoc-7.png",
      "images/lop-hoc-8.png",
      "images/lop-hoc-9.png",
      "images/lop-hoc-10.png",
      "images/lop-hoc-11.png",
      "images/lop-hoc-12.png",
      "images/lop-hoc-13.png",
      "images/lop-hoc-14.png",
      "images/lop-hoc-15.png",
      "images/lop-hoc-16.png",
      "images/lop-hoc-17.png",
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

  /* ---------- Feedback học viên (quote cards) ---------- */
  feedback: {
    title: "Feedback học viên",    // use \n for a line break
    subtitle: "Hơn 900 học viên đã đồng hành cùng Vamos",
    proofLabel: "Xem tin nhắn gốc",
    // One card per student:
    // "quote"   = the student's own words (keep it short)
    // "name"    = first name only — leave "" to show "Học viên Vamos"
    // "class"   = shown under the name, e.g. "A1.1" (leave "" to hide)
    // "image"   = the original chat screenshot, opened by the "Xem tin nhắn gốc" button ("" to hide it)
    items: [
      {
        quote: "Lớp học luôn trong không khí sôi động, không bị chán. Cô dạy với nhịp độ phù hợp, giảng rất dễ hiểu ạ.",
        name: "Ngọc Anh", class: "A1.1",
        image: "images/feedback-7.jpg",
      },
      {
        quote: "Thầy siêu hiền và dễ tính, còn rất kiên nhẫn giải thích từng từ cho mọi người học. Em thấy may mắn khi được học thầy ạ.",
        name: "Diễm Quỳnh", class: "B1.2",
        image: "images/feedback-5.jpg",
      },
      {
        quote: "Lớp học rất vui, cô dạy bài vừa dễ hiểu vừa rất tận tình tận tâm. Cô còn giúp em giải đáp thắc mắc và sửa lỗi rất nhiều ạ.",
        name: "Trinh", class: "A1.1",
        image: "images/feedback-8.jpg",
      },
      {
        quote: "Cô Vân Anh dạy khá kĩ và phù hợp với mình nên mình không có khó khăn gì.",
        name: "Trang", class: "A1.2",
        image: "images/feedback-2.jpg",
      },
      {
        quote: "Em thấy ổn lắm ạ, thầy dạy dễ hiểu, cũng vui tính nữa ạ.",
        name: "Bảo Hân", class: "A1.1",
        image: "images/feedback-9.jpg",
      },
      {
        quote: "Em thấy rất ổn ạ. Cô dạy kĩ và rất hỗ trợ học viên ạ.",
        name: "Minh Châu", class: "A2.1",
        image: "images/feedback-4.jpg",
      },
      {
        quote: "Học với thầy Bảo từ khoá A1 nên em quen với tiến độ giảng dạy của thầy, ngày càng suôn sẻ hơn.",
        name: "Lam", class: "A2.2",
        image: "images/feedback-1.jpg",
      },
      {
        quote: "Thầy Bảo dạy ổn lắm, phù hợp với chị.",
        name: "", class: "B1.1",
        image: "images/feedback-6.jpg",
      },
      {
        quote: "Mình thấy tiến độ học vừa phải. Cô giáo cho học sinh luyện tập nhiều.",
        name: "Billy", class: "A1.1",
        image: "images/feedback-3.jpg",
      },
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
    contactTitle: "Liên hệ",
    contactText: "Cần tư vấn lớp phù hợp? Nhắn VAMOS ngay nhé!",
    copyright: "© 2026 VAMOS. All rights reserved.",
  },
};
