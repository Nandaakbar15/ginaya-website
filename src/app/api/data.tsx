import { Icon } from "@iconify/react/dist/iconify.js";
export const ProductType: { id: number; section: string; link: string[] }[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    section: "Category",
    link: ["Design", "View all", "Log In"],
  },
  {
    id: 3,
    section: "Pages",
    link: ["404", "Instructions", "License"],
  },
  {
    id: 4,
    section: "Others",
    link: ["Styleguide", "Changelog"],
  },
];

export const Aboutdata: {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}[] = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
  {
    heading: "Services.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
  {
    heading: "Our Works.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
];

export const DataType: { profession: string; name: string; imgSrc: string }[] =
  [
    {
      profession: "Manajemen Proyek",
      name: "Muhammad Mulyadi",
      imgSrc: "/images/Foto1.jpg",
    },
    {
      profession: "Desain dan Perencanaan",
      name: "Deni Permana",
      imgSrc: "/images/Foto2.jpg",
    },
    {
      profession: "Manajemen Proyek",
      name: "Yessica Geovani Basuki",
      imgSrc: "/images/Foto3.png",
    },
  ];

export const postData: { heading: string; imgSrc: string }[] = [
  {
    heading: "Brand design for a computer brand.",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Brand design for a computer brand.",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    imgSrc: "/images/featured/feat2.jpg",
  },
];

export const Testimonials: {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
  rating: number;
}[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 4,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
];

export const Article: {
  time: string;
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  name: string;
}[] = [
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
];

export const PortfolioData: {
  heading: string;
  imgSrc: string;
  name: string;
}[] = [
  {
    heading: "Rumah Tinggal Kavling Grand Terra Kota Cimahi",
    name: "Pembangunan dan desain Rumah tinggal Kavling Grand Terra Kota Cimahi",
    imgSrc:
      "/images/portfolio/pekerjaan-non-kimia-farma/rumah-tinggal-grand-terra-cimahi/image001.png",
  },
  {
    heading: "Masjid AL ISTIQLAL Kecamatan Ciawitali",
    name: "Pembangunan dan desain Masjid AL ISTIQLAL Kecamatan Ciawitali",
    imgSrc:
      "/images/portfolio/pekerjaan-non-kimia-farma/pembangunan-masjid-al-istiqomah-ciawitali/image001.png",
  },
  {
    heading: "Apotik Kimia Farma Kota Cirebon",
    name: "Pembangunan dan desain Apotik Kimia Farma Kota Cirebon",
    imgSrc: "/images/portfolio/pekerjaan-kf-cirebon/image001.png",
  },
  {
    heading: "Apotik Kimia Farma Kota Bekasi",
    name: "Pembangunan dan desain Apotik Kimia Farma Kota Bekasi",
    imgSrc: "/images/portfolio/pekerjaan-kf-bekasi/kfbekasi1.png",
  },
  {
    heading: "Apotik Kimia Farma Kabupaten Tasikmalaya",
    name: "Pembangunan dan desain Apotik Kimia Farma Kabupaten Tasikmalaya",
    imgSrc: "/images/portfolio/pekerjaan-kf-tasikmalaya/image001.png",
  },
  {
    heading: "Apotik Kimia Farma Kota Batam",
    name: "Pembangunan dan desain Apotik Kimia Farma Kota Batam",
    imgSrc: "/images/portfolio/pekerjaan-kf-batam1/image001.png",
  },
];
