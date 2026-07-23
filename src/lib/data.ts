export const socialIcons = {
  linkedin: "/images/socials/linkedin.webp",
  github: "/images/socials/github.webp",
  youtube: "/images/socials/youtube.webp",
  x: "/images/socials/x.webp",
  instagram: "/images/socials/instagram.webp",
  facebook: "/images/socials/facebook.webp",
  mail: "/images/email.webp",
};

export const companyInfo = {
  logo: "/logo.webp",
  logoText: "/logo-text.webp",
  name: "Bosman Tech Group",
  description:
    "Bosman Tech Group is a leading provider of computer hardware and software solutions, offering a wide range of services to meet the needs of businesses and individuals alike.",
  address: "123 Main Street, City, Country", // Temporary address placeholder
  phone: "+1 (555) 123-4567", // Temporary phone number placeholder
  email: "info@bosmantechgroup.be",
  socialMedia: {
    youtube: "https://www.youtube.com/@bosmantechgroup",
    facebook: "https://www.facebook.com/bosmantechgroup",
    twitter: "https://twitter.com/bosmantechgroup",
    linkedin: "https://www.linkedin.com/company/bosmantechgroup",
    instagram: "https://www.instagram.com/bosmantechgroup",
    tiktok: "https://www.tiktok.com/@bosmantechgroup",
  },
  employees: [
    {
      firstName: "Patrick",
      name: "Patrick Bosman",
      positions: ["CEO", "Technician"],
      bio: "With over three decades of hands-on technical experience, Patrick is a dedicated hardware technician specializing in computer hardware, committed to diagnosing problems, maintaining reliable systems, and keeping equipment running at its best.",
      email: "patrick.bosman@bosmantechgroup.be",
      image: process.env.API_URL + "/media/about-us/patrick.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/patrick-bosman-4861947a",
      },
      calendly: "patrick-bosman",
    },
    {
      firstName: "Peter",
      name: "Peter Bosman",
      positions: ["Full Stack Developer", "IT Software Support Specialist"],
      bio: "Recently graduated with an associate's degree in Programming, Peter is a skilled developer and IT software support specialist, dedicated to helping people and creating efficient and user-friendly applications.",
      email: "peter.bosman@bosmantechgroup.be",
      image: process.env.API_URL + "/media/about-us/peter.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/peterbosmanbe",
        github: "https://github.com/peterbosmanbe",
      },
      calendly: "peterbosmanbe",
    },
  ],
};
