export const METADATA = {
  author: "Le Van Quy",
  title: "Wuys Dev",
  description:
    "I'm a Frontend Developer based in Vietnam. I specialize in building modern, aesthetic and user-friendly web applications.",
  siteUrl: "https://www.facebook.com/le.vanquy.3597",
  twitterHandle: "https://www.instagram.com/2uyss/",
  keywords: [
    "Le Van Quy",
    "Frontend Engineer",
    "React Developer",
    "Software Engineer",
    "Portfolio",
    "Wuys Dev",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Với bản thân luôn mang tinh thần học hỏi",
  "Với sự cố gắng không ngừng nghỉ để hoàn thiện bản thân",
  "Tìm thấy tình yêu với lập trình Frontend",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "lequyvan21203@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/l%C3%AA-qu%C3%BD-706b5b227/",
  },
  {
    name: "github",
    url: "https://github.com/Levanquyyy",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/2uyss/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "figma",
    "php",
    "openapi",
    "redux",
    "postman",
    "socketio",
    "chartjs",
    "Redis",
    "jwt",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "shadcn",
    "zod",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "aws", "gitlab"],
};

export const PROJECTS = [
  {
    name: "Chat_app Sync",
    image: "/projects/airbnb.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Chat_app clone using NextJS + Tailwind CSS 🛏️ + SocketIO",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Levanquyyy/AppChatOffice",
    tech: ["react", "nextjs", "tailwindcss", "socketio"],
  },
  {
    name: "Dự án tốt nghiệp (Em vẫn đang trong quá trình hoàn thành - Web chỉ mới hoàn thiện 40%)",
    image: "/projects/nhatot.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻 + Laravel ",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/Levanquyyy/DATN",
    tech: ["typescript", "vite", , "tailwindcss", "shadcn", "laravel"],
  },
  {
    name: "Chứng chỉ Ielts hiện tại(5.0) đang ôn thi ở VUS và mong muốn tương lai ở Band 6.5",
    image: "/projects/ielts.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Đọc hiểu tài liệu bằng tiếng anh",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://vus.edu.vn/",
    tech: [""],
  },
  {
    name: "Hiện tại em có trau dồi thêm 1 chút kiến thức về AWS ",
    image: "/projects/aws.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Phá phách với các máy chủ ảo trên AWS",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://drive.google.com/drive/u/0/folders/16Xeh5QK7tVh74RSoDtl11I_JqpPwICxL",
    tech: [""],
  },
  {
    name: "Bảng điểm của em hiện tại",
    image: "/projects/chandung.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "File Drive chứa bảng điểm của em",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://drive.google.com/drive/u/0/folders/16Xeh5QK7tVh74RSoDtl11I_JqpPwICxL",
    tech: [""],
  },
];

export const WORK_CONTENTS = {
  Info_inter: [
    {
      title: "Vifo ( thực tập 3 tháng )",
      description:
        "Là một công ty bảo hiểm hàng đầu tại Việt Nam, Vifo cung cấp các dịch vụ bảo hiểm đa dạng cho khách hàng của mình.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Công ty thưc tập
        </div>
      ),
    },
    {
      title: "Vị trí thực tập tại công ty",
      description:
        "Với các module cho công ty ( như gọi API từ backend, xử lý dữ liệu, xây dựng giao diện ) bằng Angular hoạt động chủ yếu trên môi trường dev xử lý việc thanh toán tiền bằng Zalo Pay",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Vị trí
        </div>
      ),
    },
    {
      title: "Thời gian thực tập",
      description: "3 tháng ( 11/07/2024 - 11/10/2024 )",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend
        </div>
      ),
    },
    {
      title: "Ngôn ngữ thường sử dụng trong lúc thực tập",
      description: "Angular",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Ngôn ngữ
        </div>
      ),
    },
  ],
  Active: [
    {
      title: "Trải nghiệm",
      description:
        "DEV, Tp.HCM Trải nghiệm công nghệ mới cập bến Việt Nam Tầm quan trọng của tư duy bảo mật Blockchain làm thay đổi nhận thức về bảo mật blockchain công khai và bảo mật blockchain riêng Mô hình Blockchain về cách thức bảo mật blockchain? Tìm hiểu về Teamwork với giảng viên người nước ngoài về BlockChain",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Near APAC
        </div>
      ),
    },
    {
      title: "Đạt được",
      description:
        "Phát triển các ứng dụng giúp tôi tiếp thu những trải nghiệm mới Mở rộng tư duy tạo trang web Tăng cường tinh thần đồng đội",

      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          UIUX Hackathon
        </div>
      ),
    },
  ],
  thanhtuu: [
    {
      title: "thanhtuu",
      description: "Giải 4 Cuộc thi UIUX Hackathon Toàn trường",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          UIUX Hackathon
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
