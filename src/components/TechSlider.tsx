import React from 'react';
import Slider from 'react-slick';

import TechIcon from '../misc/TechIcon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const techs = [
    {
      src: 'https://skillicons.dev/icons?i=svelte',
      padding: 'p-9',
      name: 'Svelte',
      link: 'https://svelte.dev',
    },
    {
      src: 'https://skillicons.dev/icons?i=opencv',
      padding: 'p-9',
      name: 'OpenCV',
      link: '',
    },
    {
      src: 'https://skillicons.dev/icons?i=tailwind',
      padding: 'p-9',
      name: 'Tailwind',
      link: 'https://tailwindcss.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=react',
      padding: 'p-9',
      name: 'React',
      link: 'https://reactjs.org',
    },
    {
      src: 'https://skillicons.dev/icons?i=go',
      padding: 'p-9',
      name: 'Go',
      link: 'https://go.dev',
    },
    {
      src: 'https://skillicons.dev/icons?i=python',
      padding: 'p-9',
      name: 'Python',
      link: 'https://pyhton.org',
    },
    {
      src: 'https://skillicons.dev/icons?i=rust',
      padding: 'p-9',
      name: 'Rust',
      link: 'https://www.rust-lang.org',
    },
    {
      src: 'https://skillicons.dev/icons?i=wasm',
      padding: 'p-9',
      name: 'WASM',
      link: 'https://webassembly.org',
    },
    {
      src: 'https://skillicons.dev/icons?i=mongo',
      padding: 'p-9',
      name: 'Mongo',
      link: 'https://mongodb.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=aws',
      padding: 'p-9',
      name: 'AWS',
      link: 'https://aws.amazon.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=cpp',
      padding: 'p-9',
      name: 'C++',
      link: 'https://cplusplus.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=cs',
      padding: 'p-9',
      name: 'C#',
      link: 'https://dotnet.microsoft.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=docker',
      padding: 'p-9',
      name: 'Docker',
      link: 'https://docker.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=git',
      padding: 'p-9',
      name: 'Git',
      link: 'https://git-scm.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=html',
      padding: 'p-9',
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      src: 'https://skillicons.dev/icons?i=css',
      padding: 'p-9',
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      src: 'https://skillicons.dev/icons?i=js',
      padding: 'p-9',
      name: 'JS',
      link: 'https://javascript.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=ts',
      padding: 'p-9',
      name: 'TS',
      link: 'https://typescriptlang.org',
    },
    {
      src: 'https://skillicons.dev/icons?i=postgres',
      padding: 'p-9',
      name: 'MySQL',
      link: 'https://mysql.com',
    },
    {
      src: 'https://skillicons.dev/icons?i=ros',
      padding: 'p-9',
      name: 'Nginx',
      link: 'https://nginx.org/en/',
    },
    {
      src: 'https://skillicons.dev/icons?i=nodejs',
      padding: 'p-9',
      name: 'Node',
      link: 'https://nodejs.org/en/',
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: 'linear',
    vertical: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mx-6 max-w-5xl w-full -mt-2">
      {techs.map((tech) => (
        <TechIcon
          key={tech.name}
          src={tech.src}
          padding={tech.padding}
          name={tech.name}
          link={tech.link}
        />
      ))}
    </Slider>
  );
}
