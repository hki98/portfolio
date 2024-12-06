/**
 * Translation strings for multilingual support.
 * Contains all text content in English and Arabic.
 * 
 * @author Haian Ibrahim <contact@haian.me>
 * @copyright 2024 Haian Ibrahim
 */

/**
 * Translation object type definition
 * Ensures type safety for all translations
 */
export type Translations = {
  [key in 'en' | 'ar']: {
    nav: {
      about: string;
      skills: string;
      languages: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      contactMe: string;
      downloadResume: string;
    };
    about: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    skills: {
      title: string;
      frontend: string;
      backend: string;
      mobile: string;
      tools: string;
    };
    languages: {
      title: string;
      arabic: string;
      english: string;
      german: string;
      native: string;
      professional: string;
      a1: string;
    };
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
    };
  };
};

/**
 * Translation strings for all supported languages
 */
export const translations: Translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      languages: "Languages",
      contact: "Contact"
    },
    hero: {
      title: "Fullstack Developer",
      subtitle: "Passionate about creating seamless web experiences with modern technologies. Specialized in building robust and scalable applications.",
      contactMe: "Contact Me",
      downloadResume: "Download Resume"
    },
    about: {
      title: "About Me",
      paragraph1: "I am a passionate Fullstack Developer with expertise in modern web technologies. My journey in software development has equipped me with a strong foundation in both frontend and backend development.",
      paragraph2: "I specialize in building scalable web applications using technologies like React, Next.js, Node.js, and various cloud platforms. I am committed to writing clean, maintainable code and creating intuitive user experiences."
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile Development",
      tools: "Tools & Others"
    },
    languages: {
      title: "Languages",
      arabic: "Arabic",
      english: "English",
      german: "German",
      native: "Native Language",
      professional: "Full Professional",
      a1: "A1"
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thanks for reaching out! I'll get back to you soon."
    }
  },
  ar: {
    nav: {
      about: "من أنا",
      skills: "مهاراتي",
      languages: "اللغات",
      contact: "تواصل معي"
    },
    hero: {
      title: "مطور ويب متكامل",
      subtitle: "أسعى دائماً لإنشاء تجارب رقمية مميزة باستخدام أحدث التقنيات. أركز على بناء تطبيقات قوية وقابلة للتطوير لتقديم أفضل تجربة للمستخدم.",
      contactMe: "تواصل معي",
      downloadResume: "تحميل السيرة الذاتية"
    },
    about: {
      title: "من أنا",
      paragraph1: "مرحباً! أنا مطور ويب شغوف بالتكنولوجيا ولدي خبرة واسعة في تقنيات الويب الحديثة. رحلتي في عالم البرمجة منحتني خبرة عميقة في تطوير الواجهات الأمامية والخلفية للتطبيقات.",
      paragraph2: "أتميز في بناء تطبيقات ويب متكاملة باستخدام تقنيات متطورة مثل React و Next.js و Node.js والعديد من المنصات السحابية. أؤمن بأهمية كتابة كود نظيف وسهل الصيانة، وأسعى دائماً لتقديم تجربة مستخدم سلسة ومميزة."
    },
    skills: {
      title: "مهاراتي التقنية",
      frontend: "تطوير الواجهات",
      backend: "تطوير الخوادم",
      mobile: "تطوير تطبيقات الموبايل",
      tools: "الأدوات والتقنيات"
    },
    languages: {
      title: "اللغات التي أتحدثها",
      arabic: "العربية",
      english: "الإنجليزية",
      german: "الألمانية",
      native: "اللغة الأم",
      professional: "إتقان تام",
      a1: "مستوى مبتدئ"
    },
    contact: {
      title: "دعنا نتواصل",
      name: "الاسم الكريم",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "شكراً لتواصلك! سأرد عليك في أقرب وقت ممكن."
    }
  }
}; 