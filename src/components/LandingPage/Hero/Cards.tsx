import Link from "@docusaurus/Link";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import LinkArrowUpRight from "../../Common/Icons/LinkArrowUpRight";

const MotionLink = motion(Link);

export const CardWithImage: React.FC<{
  children?: React.ReactNode;
  image: string;
  href: string;
}> = ({ children, image, href }) => {
  return (
    <MotionLink
      variants={transitions.item}
      to={href}
      className="bg-black/60 hover:bg-black/20 backdrop-blur-2xl rounded-xl pl-6 pr-20 md:pl-16 md:pr-40 text-white hover:no-underline transition-all hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-center gap-2 group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="group-hover:-translate-y-2 transition-transform">
        {children}
      </div>
    </MotionLink>
  );
};

export const CardsSection = () => {
  return (
    <AnimateSpawn
      className="container-12 mt-30"
      variants={transitions.container}
    >
      <article aria-label="powered by chainfusilli" className="overflow-clip relative bg-[radial-gradient(circle_at_50%,#000,#3B00B9,#1E005D)] rounded-[32px] text-white  mt-6">
        <img
          loading="lazy"
          src="img/home/chainfusion.webp"
          className="md:object-cover size-full absolute pointer-events-none"
        />
        <div className="flex flex-col md:flex-row items-stretch md:min-h-[34rem]">
          <div className="basis-1/2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475 194" className="w-2/3 m-auto mt-20 md:m-auto md:mr-0">
              <path fill="#fff" d="M277.18 18.56h4.36c2.76 0 4.44-1.6 4.44-4.04 0-2.52-1.68-4.08-4.44-4.08h-4.36v8.12Zm5.04 4.76h-5.08V34h-5.52V5.64h10.6c5.6 0 9.32 3.72 9.32 8.84 0 5.16-3.72 8.84-9.32 8.84Zm19.57 6.44c2.6 0 5-1.88 5-5.6 0-3.72-2.4-5.6-5-5.6s-5 1.88-5 5.6c0 3.68 2.4 5.6 5 5.6Zm0-16.04c5.88 0 10.32 4.36 10.32 10.44 0 6.04-4.44 10.44-10.32 10.44s-10.32-4.4-10.32-10.44c0-6.08 4.44-10.44 10.32-10.44Zm24.07.6h5.6L335.7 27l3.64-12.68h5.28L338.46 34h-5.32l-4.6-13.44L324.02 34h-5.4l-6.28-19.68h5.6l3.64 12.64 4.28-12.64Zm24.4 7.6h8.8c-.07-1.96-1.35-3.88-4.4-3.88a4.26 4.26 0 0 0-4.4 3.88Zm9.33 5.12 4.44 1.32c-1 3.4-4.12 6.24-8.96 6.24-5.4 0-10.16-3.88-10.16-10.52 0-6.28 4.64-10.36 9.68-10.36 6.08 0 9.72 3.88 9.72 10.2 0 .76-.08 1.56-.08 1.64h-14.08c.12 2.6 2.32 4.48 4.96 4.48 2.48 0 3.84-1.24 4.48-3ZM379 14.24v5.36a8.01 8.01 0 0 0-1.6-.16c-2.72 0-5.08 1.32-5.08 5.56v9H367V14.32h5.16v2.92c1.2-2.6 3.92-3.08 5.6-3.08.44 0 .84.04 1.24.08Zm5.87 7.68h8.8c-.08-1.96-1.36-3.88-4.4-3.88a4.26 4.26 0 0 0-4.4 3.88Zm9.32 5.12 4.44 1.32c-1 3.4-4.12 6.24-8.96 6.24-5.4 0-10.16-3.88-10.16-10.52 0-6.28 4.64-10.36 9.68-10.36 6.08 0 9.72 3.88 9.72 10.2 0 .76-.08 1.56-.08 1.64h-14.08c.12 2.6 2.32 4.48 4.96 4.48 2.48 0 3.84-1.24 4.48-3Zm26.46-22v25.4c0 1.32.08 2.76.16 3.56h-5.08c-.08-.4-.2-1.36-.2-2.28-.88 1.56-2.88 2.76-5.52 2.76-5.6 0-9.6-4.4-9.6-10.36 0-5.76 3.88-10.28 9.44-10.28 3.4 0 5 1.4 5.56 2.44V5.04h5.24Zm-14.88 19.08c0 3.52 2.08 5.6 4.88 5.6 2.72 0 4.84-2.08 4.84-5.64 0-3.52-2.12-5.48-4.84-5.48-2.72 0-4.88 2-4.88 5.52ZM437.56 34h-5.16V5.04h5.24v11.44c.88-1.4 3.04-2.68 5.96-2.68 5.76 0 9.08 4.44 9.08 10.28 0 5.96-3.68 10.4-9.28 10.4-2.72 0-4.8-1.2-5.84-2.88V34Zm9.8-9.88c0-3.6-2.16-5.56-4.88-5.56-2.68 0-4.92 1.96-4.92 5.56 0 3.56 2.24 5.6 4.92 5.6 2.72 0 4.88-2 4.88-5.6Zm14.35 17.64h-5.64l4.64-10.24-8.36-17.2h5.96l5.24 11.52 4.84-11.52h5.68l-12.36 27.44Z"/>
              <g clipPath="url(#a)">
                <path fill="#fff" d="M87.58 122.56c-4.99 0-10.42-2.07-16.17-6.17-4.1-2.9-8.38-6.85-13.1-12.03a91.35 91.35 0 0 1-8.17 8.25 47.16 47.16 0 0 1-11.02 7.42 25.05 25.05 0 0 1-10.45 2.53c-7.62 0-14.78-2.9-20.15-8.16a27.4 27.4 0 0 1-7.49-26.34C4.08 75.78 15.8 66.81 28.86 66.81c4.98 0 10.42 2.07 16.17 6.17 4.1 2.91 8.38 6.85 13.09 12.03a89.57 89.57 0 0 1 8.18-8.25c7.53-6.6 14.68-9.95 21.28-9.95 15.8 0 28.67 12.5 28.67 27.88 0 2.18-.27 4.35-.79 6.48-3.07 12.4-14.78 21.39-27.87 21.39h-.01ZM17.6 79.6a18 18 0 0 0-9.84 4.5 13.96 13.96 0 0 0-3.54 5.03 24.08 24.08 0 0 0 6.65 22.85 25.24 25.24 0 0 0 17.78 7.2c5.8 0 12.45-3.16 19.24-9.1 2.45-2.16 5-4.73 7.6-7.63l.5-.59-4.1-4.39-.39.46a80.72 80.72 0 0 1-7.78 7.92c-5.72 5-10.72 7.55-14.87 7.55-10.56 0-19.14-8.4-19.14-18.71 0-5.88 3.01-11.6 7.9-15.1v.01Zm49.27 14.8c4.05 4.26 6.93 7.19 8.57 8.69a37.12 37.12 0 0 0 11.2 6.85c.3.04.64.08.94.08 8.69-.05 15.75-6.92 15.75-15.32 0-8.41-7.06-15.33-15.75-15.33-2.27 0-6.31 1.17-12.64 6.72-2.6 2.27-5.23 5-8.06 8.3h-.01ZM28.86 79.37c-8.7.06-15.76 6.92-15.76 15.33 0 8.4 7.07 15.33 15.76 15.33 2.27 0 6.3-1.17 12.63-6.72a79.33 79.33 0 0 0 8.06-8.3 201.7 201.7 0 0 0-8.57-8.7 37.1 37.1 0 0 0-11.2-6.85c-.3-.04-.63-.07-.93-.07l.01-.02ZM87.58 76c10.56 0 19.13 8.4 19.13 18.71 0 5.88-3 11.59-7.9 15.1 3.95-.58 7.26-2.1 9.84-4.5a13.87 13.87 0 0 0 3.54-5.03c.45-1.8.66-3.67.66-5.55 0-13.5-11.34-24.5-25.29-24.5-5.75 0-12.16 3.07-19.04 9.11a90 90 0 0 0-7.6 7.64l-.52.57 4.13 4.4.4-.45a82.8 82.8 0 0 1 7.77-7.92c5.73-5.01 10.72-7.55 14.88-7.55V76Z"/>
                <path fill="color(display-p3 .1373 .1216 .1255)" d="M87.57 67.01c15.7 0 28.48 12.42 28.48 27.68 0 2.17-.26 4.32-.79 6.42-3.04 12.32-14.68 21.25-27.69 21.25-4.93 0-10.33-2.07-16.05-6.14-4.13-2.94-8.45-6.92-13.2-12.16a91.09 91.09 0 0 1-8.31 8.41 47.22 47.22 0 0 1-10.98 7.4 24.7 24.7 0 0 1-10.37 2.5 28.38 28.38 0 0 1-20.01-8.1 27.3 27.3 0 0 1-7.45-26.1C4.25 75.91 15.89 67 28.86 67c4.94 0 10.33 2.07 16.05 6.14 4.13 2.94 8.45 6.92 13.2 12.16a89.09 89.09 0 0 1 8.31-8.4c7.5-6.57 14.62-9.9 21.15-9.9Zm-23.03 25.2.53-.62c2.7-3.1 5.23-5.7 7.76-7.9 5.68-4.99 10.65-7.51 14.74-7.51 10.45 0 18.96 8.3 18.96 18.5 0 6.16-3.23 11.98-8.5 15.4 4.36-.5 7.98-2.06 10.77-4.66 2.56-2.4 3.5-4.84 3.58-5.11.44-1.83.67-3.72.67-5.62 0-13.62-11.43-24.7-25.48-24.7-5.8 0-12.24 3.09-19.16 9.15a85.7 85.7 0 0 0-7.61 7.65l-.64.7 4.4 4.7m23.01 18.03c8.8-.06 15.96-7.01 15.96-15.52 0-8.5-7.16-15.51-15.96-15.51-2.3 0-6.38 1.17-12.76 6.76a80.96 80.96 0 0 0-8.2 8.47c4.1 4.33 7.05 7.3 8.7 8.82 1.13 1.04 5.3 4.6 11.25 6.89a6 6 0 0 0 1.01.09Zm-58.71 0c2.3 0 6.38-1.17 12.76-6.77a82.33 82.33 0 0 0 8.2-8.46 204.1 204.1 0 0 0-8.7-8.82 37.37 37.37 0 0 0-11.25-6.9c-.34-.05-.7-.08-1.01-.08-8.8.05-15.96 7-15.96 15.51 0 8.5 7.17 15.52 15.96 15.52ZM18.4 79.3c-4.36.49-7.98 2.06-10.76 4.65a14.07 14.07 0 0 0-3.59 5.11 24.23 24.23 0 0 0 6.7 23.05 25.4 25.4 0 0 0 17.92 7.25c5.84 0 12.55-3.17 19.37-9.14a87.52 87.52 0 0 0 7.6-7.66l.64-.7-4.39-4.69-.52.61a80.52 80.52 0 0 1-7.77 7.91c-5.68 4.98-10.65 7.5-14.74 7.5-10.45 0-18.95-8.3-18.95-18.5 0-6.15 3.22-11.98 8.49-15.39Zm69.17-12.67c-6.63 0-13.84 3.37-21.4 9.99a90.16 90.16 0 0 0-8.05 8.1c-4.67-5.1-8.9-9-12.98-11.88-5.78-4.13-11.26-6.21-16.28-6.21-13.13 0-24.92 9-28.03 21.4-.03.06-.04.15-.06.22a27.6 27.6 0 0 0 7.6 26.29 28.76 28.76 0 0 0 20.3 8.22c3.36 0 6.9-.86 10.54-2.54a47.29 47.29 0 0 0 11.07-7.45 88.31 88.31 0 0 0 8.05-8.1c4.67 5.1 8.92 9 12.97 11.88 5.78 4.13 11.26 6.21 16.27 6.21 13.18 0 24.98-9.06 28.08-21.55.52-2.13.8-4.32.8-6.52-.02-15.47-12.96-28.06-28.88-28.06ZM60.67 87.5l.4-.44a87 87 0 0 1 7.58-7.63c6.85-6 13.21-9.04 18.9-9.04 13.84 0 25.1 10.9 25.1 24.29 0 1.87-.23 3.72-.66 5.52-.08.23-.97 2.58-3.46 4.92a17.4 17.4 0 0 1-8.97 4.33 18.97 18.97 0 0 0 7.34-14.77c0-10.42-8.68-18.9-19.34-18.9-4.2 0-9.23 2.56-14.99 7.6a81.35 81.35 0 0 0-7.8 7.96l-.26.28-3.85-4.12h.01Zm6.47 6.88a80.69 80.69 0 0 1 7.93-8.15c6.28-5.51 10.28-6.67 12.5-6.67 8.58 0 15.57 6.8 15.57 15.13 0 8.34-6.97 15.07-15.57 15.13-.27 0-.58-.03-.91-.09a37.12 37.12 0 0 1-11.09-6.8 216.62 216.62 0 0 1-8.45-8.55h.02ZM28.86 109.8c-8.58 0-15.57-6.79-15.57-15.12 0-8.34 6.98-15.07 15.57-15.13.27 0 .58.03.91.08a37.13 37.13 0 0 1 11.1 6.81c1.62 1.49 4.44 4.37 8.44 8.55a79.4 79.4 0 0 1-7.93 8.17c-6.28 5.5-10.28 6.66-12.5 6.66l-.02-.02Zm-.2 9.18A25.07 25.07 0 0 1 11 111.84a23.9 23.9 0 0 1-6.59-22.68c.09-.22.99-2.6 3.47-4.92a17.52 17.52 0 0 1 8.96-4.32 18.97 18.97 0 0 0-7.33 14.77c0 10.42 8.67 18.9 19.33 18.9 4.2 0 9.24-2.56 15-7.61a81.35 81.35 0 0 0 7.81-7.95l.26-.29 3.84 4.11-.4.46a84.7 84.7 0 0 1-7.58 7.6c-6.77 5.93-13.37 9.07-19.11 9.07v.01Z"/>
                <path fill="#fff" d="M61.7 192.02a.22.22 0 0 1-.2-.21v-53.34c0-.11.1-.21.2-.21h65.05c.1 0 .2.1.2.21v16.9c0 .12-.1.22-.2.22H82.7v6.07h38.83c.12 0 .22.1.22.22v15.6c0 .11-.1.21-.22.21H82.7v14.12c0 .11-.1.21-.21.21h-20.8.02Z"/>
                <path fill="#fff" d="M61.7 192.02a.22.22 0 0 1-.2-.21v-53.34c0-.11.1-.21.2-.21h65.05c.1 0 .2.1.2.21v16.9c0 .12-.1.22-.2.22H82.7v6.07h38.83c.12 0 .22.1.22.22v15.6c0 .11-.1.21-.22.21H82.7v14.12c0 .11-.1.21-.21.21h-20.8.02Zm107.52 1.23c-14.25-.03-24.46-3.06-30.36-8.98-4.2-4.22-6.32-10.02-6.3-17.22v-28.66c0-.12.1-.22.22-.22h20.8c.11 0 .21.1.21.22v27.34c-.09 8.77 7.36 10.08 15.43 10.2 8.06-.12 15.5-1.43 15.38-10.2V138.4c0-.12.1-.22.22-.22h20.83c.12 0 .22.1.22.22v28.66c.03 7.2-2.09 13-6.3 17.22-5.89 5.92-16.1 8.95-30.35 8.98Z"/>
                <path fill="#fff" d="M169.22 193.25c-14.25-.03-24.46-3.06-30.36-8.98-4.2-4.22-6.32-10.02-6.3-17.22v-28.66c0-.12.1-.22.22-.22h20.8c.11 0 .21.1.21.22v27.34c-.09 8.77 7.36 10.08 15.43 10.2 8.06-.12 15.5-1.43 15.38-10.2V138.4c0-.12.1-.22.22-.22h20.83c.12 0 .22.1.22.22v28.66c.03 7.2-2.09 13-6.3 17.22-5.89 5.92-16.1 8.95-30.35 8.98Zm78.53 0c-17.26-.04-34.3-1.54-36.39-19.04 0-.06 0-.11.06-.17.06-.06.1-.07.16-.07h21.79c.07 0 .14.04.18.1 2.02 3.47 6.53 5.1 14.23 5.1 3.33 0 14.2-.36 14.2-5 0-2.2-7.1-2.53-14.64-2.89-15.24-.77-36-1.82-35.95-15.32 0-12.85 11.9-19.1 36.4-19.1 17.3.11 34.33 1.67 36.4 19.08 0 .06 0 .12-.06.17a.23.23 0 0 1-.15.07h-21.8a.22.22 0 0 1-.18-.11c-2.56-4.51-8.95-5.1-14.22-5.1-5.26 0-14.2.65-14.2 5 0 2.16 6.78 2.47 14.65 2.84 15.24.77 35.99 1.83 35.95 15.37 0 12.83-11.9 19.07-36.41 19.07h-.02Z"/>
                <path fill="#fff" d="M247.75 193.25c-17.26-.04-34.3-1.54-36.39-19.04 0-.06 0-.11.06-.17.06-.06.1-.07.16-.07h21.79c.07 0 .14.04.18.1 2.02 3.47 6.53 5.1 14.23 5.1 3.33 0 14.2-.36 14.2-5 0-2.2-7.1-2.53-14.64-2.89-15.24-.77-36-1.82-35.95-15.32 0-12.85 11.9-19.1 36.4-19.1 17.3.11 34.33 1.67 36.4 19.08 0 .06 0 .12-.06.17a.23.23 0 0 1-.15.07h-21.8a.22.22 0 0 1-.18-.11c-2.56-4.51-8.95-5.1-14.22-5.1-5.26 0-14.2.65-14.2 5 0 2.16 6.78 2.47 14.65 2.84 15.24.77 35.99 1.83 35.95 15.37 0 12.83-11.9 19.07-36.41 19.07h-.02Zm62.55-55.06h-20.8c-.12 0-.21.1-.21.21v53.34c0 .11.1.21.21.21h20.8c.12 0 .21-.1.21-.21V138.4c0-.12-.1-.21-.21-.21Z"/>
                <path fill="#fff" d="M310.3 138.19h-20.8c-.12 0-.21.1-.21.21v53.34c0 .11.1.21.21.21h20.8c.12 0 .21-.1.21-.21V138.4c0-.12-.1-.21-.21-.21Zm42.54 55.06c-14.24-.03-24.45-3.04-30.34-8.96-4.21-4.24-6.32-10.05-6.3-17.27v-3.88c-.02-7.24 2.09-13.06 6.3-17.3 5.96-6 15.88-8.92 30.34-8.95 24.3 0 36.6 8.83 36.6 26.25v3.9c.04 7.23-2.08 13.04-6.29 17.28-5.88 5.92-16.08 8.93-30.3 8.96v-.03Zm0-39.05c-8.08.12-15.54 1.43-15.43 10.2v1.3c-.11 8.8 7.35 10.12 15.43 10.24 8.06-.12 15.5-1.43 15.39-10.22v-1.31c.11-8.77-7.33-10.08-15.39-10.2Z"/>
                <path fill="#fff" d="M352.84 193.25c-14.24-.03-24.45-3.04-30.34-8.96-4.21-4.24-6.32-10.05-6.3-17.27v-3.88c-.02-7.24 2.09-13.06 6.3-17.3 5.96-6 15.88-8.92 30.34-8.95 24.3 0 36.6 8.83 36.6 26.25v3.9c.04 7.23-2.08 13.04-6.29 17.28-5.88 5.92-16.08 8.93-30.3 8.96v-.03Zm0-39.05c-8.08.12-15.54 1.43-15.43 10.2v1.3c-.11 8.8 7.35 10.12 15.43 10.24 8.06-.12 15.5-1.43 15.39-10.22v-1.31c.11-8.77-7.33-10.08-15.39-10.2Zm91.98 37.75s-.11-.03-.15-.07l-28.29-32.17v32.03c0 .11-.1.21-.21.21h-20.8a.22.22 0 0 1-.21-.21V138.4c0-.11.1-.21.21-.21H424s.13.03.15.07l23.04 27.8V138.4c0-.12.1-.22.21-.22h20.84c.11 0 .21.1.21.22v53.33c0 .12-.1.22-.21.22h-23.42l.01.01Z"/>
                <path fill="#fff" d="M444.82 191.95s-.11-.03-.15-.07l-28.29-32.17v32.03c0 .11-.1.21-.21.21h-20.8a.22.22 0 0 1-.21-.21V138.4c0-.11.1-.21.21-.21H424s.13.03.15.07l23.04 27.8V138.4c0-.12.1-.22.21-.22h20.84c.11 0 .21.1.21.22v53.33c0 .12-.1.22-.21.22h-23.42l.01.01ZM163.5 122.77c-14.24-.02-24.45-3.05-30.34-8.97-4.21-4.24-6.32-10.05-6.3-17.27v-3.88c-.07-17.32 12.27-26.15 36.64-26.25 23.1.04 35.38 8 36.52 23.6 0 .06-.01.12-.05.16a.23.23 0 0 1-.16.07h-21.3a.21.21 0 0 1-.2-.14c-2.1-5.6-9.01-6.34-14.8-6.34-8.07.12-15.5 1.43-15.4 10.2v1.3c-.1 8.77 7.33 10.08 15.4 10.2 8.63 0 13.2-1.97 14.8-6.37a.21.21 0 0 1 .2-.14h21.3s.11.03.16.07c.04.04.05.1.05.16-1.14 15.67-13.43 23.6-36.52 23.6Z"/>
                <path fill="#fff" d="M163.5 122.77c-14.24-.02-24.45-3.05-30.34-8.97-4.21-4.24-6.32-10.05-6.3-17.27v-3.88c-.07-17.32 12.27-26.15 36.64-26.25 23.1.04 35.38 8 36.52 23.6 0 .06-.01.12-.05.16a.23.23 0 0 1-.16.07h-21.3a.21.21 0 0 1-.2-.14c-2.1-5.6-9.01-6.34-14.8-6.34-8.07.12-15.5 1.43-15.4 10.2v1.3c-.1 8.77 7.33 10.08 15.4 10.2 8.63 0 13.2-1.97 14.8-6.37a.21.21 0 0 1 .2-.14h21.3s.11.03.16.07c.04.04.05.1.05.16-1.14 15.67-13.43 23.6-36.52 23.6Zm94.52-1.31a.22.22 0 0 1-.21-.21v-18.02H227v18.02c0 .11-.1.21-.22.21h-20.8a.22.22 0 0 1-.2-.21V67.9c0-.11.1-.21.2-.21h20.8c.12 0 .22.1.22.21v18.01h30.81v-18c0-.12.1-.22.21-.22h20.84c.12 0 .21.1.21.21v53.34c0 .11-.1.21-.2.21h-20.85Z"/>
                <path fill="#fff" d="M258.02 121.46a.22.22 0 0 1-.21-.21v-18.02H227v18.02c0 .11-.1.21-.22.21h-20.8a.22.22 0 0 1-.2-.21V67.9c0-.11.1-.21.2-.21h20.8c.12 0 .22.1.22.21v18.01h30.81v-18c0-.12.1-.22.21-.22h20.84c.12 0 .21.1.21.21v53.34c0 .11-.1.21-.2.21h-20.85Zm80.97.09a.2.2 0 0 1-.19-.13l-4.15-9h-26.43l-4.16 9a.22.22 0 0 1-.18.13h-23.42a.24.24 0 0 1-.19-.1.17.17 0 0 1 0-.2l28.6-53.35s.12-.12.19-.12h24.72c.07 0 .14.05.18.12l28.62 53.33s.03.14 0 .2a.24.24 0 0 1-.19.1h-23.42l.02.02ZM328.4 98.98l-6.98-15.04-7 15.04h13.98Z"/>
                <path fill="#fff" d="M338.99 121.55a.2.2 0 0 1-.19-.13l-4.15-9h-26.43l-4.16 9a.22.22 0 0 1-.18.13h-23.42a.24.24 0 0 1-.19-.1.17.17 0 0 1 0-.2l28.6-53.35s.12-.12.19-.12h24.72c.07 0 .14.05.18.12l28.62 53.33s.03.14 0 .2a.24.24 0 0 1-.19.1h-23.42l.02.02ZM328.4 98.98l-6.98-15.04-7 15.04h13.98Zm56.39-31.27h-20.8c-.12 0-.21.1-.21.22v53.33c0 .12.1.21.21.21h20.8a.2.2 0 0 0 .21-.2V67.92c0-.12-.1-.22-.21-.22Z"/>
                <path fill="#fff" d="M384.79 67.71h-20.8c-.12 0-.21.1-.21.22v53.33c0 .12.1.21.21.21h20.8a.2.2 0 0 0 .21-.2V67.92c0-.12-.1-.22-.21-.22Zm60.47 53.75s-.12-.03-.16-.07l-28.29-32.17v32.03c0 .11-.1.21-.21.21h-20.8a.22.22 0 0 1-.2-.21V67.9c0-.11.1-.21.2-.21h28.62s.13.03.16.07l23.03 27.8V67.91c0-.11.1-.21.22-.21h20.83c.12 0 .22.1.22.21v53.34c0 .11-.1.21-.22.21h-23.42.02Z"/>
                <path fill="#fff" d="M445.26 121.46s-.12-.03-.16-.07l-28.29-32.17v32.03c0 .11-.1.21-.21.21h-20.8a.22.22 0 0 1-.2-.21V67.9c0-.11.1-.21.2-.21h28.62s.13.03.16.07l23.03 27.8V67.91c0-.11.1-.21.22-.21h20.83c.12 0 .22.1.22.21v53.34c0 .11-.1.21-.22.21h-23.42.02Zm-357.68 1.1c-4.99 0-10.42-2.07-16.17-6.17-4.1-2.9-8.38-6.85-13.1-12.03a91.35 91.35 0 0 1-8.17 8.25 47.12 47.12 0 0 1-11.02 7.42 25.04 25.04 0 0 1-10.45 2.53c-7.62 0-14.78-2.9-20.15-8.17a27.4 27.4 0 0 1-7.49-26.33C4.08 75.78 15.8 66.81 28.86 66.81c4.98 0 10.42 2.07 16.17 6.17 4.1 2.9 8.38 6.85 13.09 12.03a89.56 89.56 0 0 1 8.18-8.25c7.53-6.6 14.68-9.95 21.28-9.95 15.8 0 28.67 12.5 28.67 27.88 0 2.18-.27 4.35-.79 6.48-3.07 12.4-14.78 21.39-27.87 21.39h-.01ZM17.6 79.6a18 18 0 0 0-9.84 4.5 13.96 13.96 0 0 0-3.54 5.03 24.08 24.08 0 0 0 6.65 22.85 25.24 25.24 0 0 0 17.78 7.2c5.8 0 12.45-3.16 19.24-9.1 2.45-2.16 5-4.73 7.6-7.63l.5-.59-4.1-4.4-.39.47a80.8 80.8 0 0 1-7.78 7.92c-5.72 5-10.72 7.55-14.87 7.55-10.56 0-19.14-8.4-19.14-18.71 0-5.88 3.01-11.6 7.9-15.1v.01Zm49.26 14.79c4.05 4.26 6.93 7.19 8.57 8.69a37.1 37.1 0 0 0 11.2 6.85c.3.04.64.08.94.08 8.69-.05 15.75-6.92 15.75-15.32 0-8.41-7.06-15.33-15.75-15.33-2.27 0-6.31 1.17-12.64 6.72-2.6 2.27-5.23 5-8.06 8.3h-.01Zm-38-15.02c-8.7.06-15.76 6.92-15.76 15.33 0 8.4 7.07 15.33 15.76 15.33 2.27 0 6.3-1.17 12.63-6.72A79.33 79.33 0 0 0 49.55 95c-4.05-4.27-6.93-7.2-8.57-8.7a37.1 37.1 0 0 0-11.2-6.84c-.3-.05-.63-.07-.93-.07l.01-.02ZM87.58 76c10.56 0 19.13 8.4 19.13 18.71 0 5.88-3 11.59-7.9 15.1a18 18 0 0 0 9.84-4.5 13.87 13.87 0 0 0 3.54-5.03c.45-1.8.66-3.67.66-5.56 0-13.5-11.34-24.49-25.29-24.49-5.75 0-12.16 3.07-19.04 9.1a87.3 87.3 0 0 0-7.6 7.64l-.52.58 4.13 4.4.4-.45a80.8 80.8 0 0 1 7.77-7.92c5.73-5.01 10.72-7.55 14.88-7.55V76Z"/>
                <path fill="#fff" d="M87.57 67.01c15.7 0 28.48 12.42 28.48 27.68 0 2.17-.26 4.32-.79 6.42-3.04 12.31-14.68 21.25-27.69 21.25-4.93 0-10.33-2.07-16.05-6.14-4.13-2.94-8.45-6.92-13.2-12.16a90.96 90.96 0 0 1-8.31 8.4 47.2 47.2 0 0 1-10.98 7.4 24.7 24.7 0 0 1-10.37 2.51 28.38 28.38 0 0 1-20.01-8.1 27.3 27.3 0 0 1-7.45-26.1C4.25 75.91 15.89 67 28.86 67c4.94 0 10.33 2.07 16.05 6.14 4.13 2.94 8.45 6.92 13.2 12.16a89.1 89.1 0 0 1 8.31-8.4c7.5-6.57 14.62-9.9 21.15-9.9Zm-23.03 25.2.53-.62c2.7-3.1 5.23-5.7 7.76-7.9 5.68-4.99 10.65-7.52 14.74-7.52 10.45 0 18.96 8.31 18.96 18.52 0 6.15-3.23 11.97-8.5 15.38 4.36-.48 7.98-2.05 10.77-4.65 2.56-2.4 3.5-4.84 3.58-5.11.44-1.83.67-3.73.67-5.62 0-13.62-11.43-24.7-25.48-24.7-5.8 0-12.24 3.09-19.16 9.15a85.7 85.7 0 0 0-7.61 7.65l-.64.7 4.4 4.7m23.01 18.02c8.8-.05 15.96-7 15.96-15.51 0-8.5-7.16-15.51-15.96-15.51-2.3 0-6.38 1.17-12.76 6.76a80.96 80.96 0 0 0-8.2 8.46 207.8 207.8 0 0 0 8.7 8.83 37.4 37.4 0 0 0 11.25 6.89c.34.06.7.08 1.01.08Zm-58.71 0c2.3 0 6.38-1.17 12.76-6.76a82.44 82.44 0 0 0 8.2-8.46c-4.1-4.34-7.05-7.31-8.7-8.82a37.37 37.37 0 0 0-11.25-6.9c-.34-.06-.7-.08-1.01-.08-8.8.05-15.96 7-15.96 15.51 0 8.5 7.17 15.51 15.96 15.51ZM18.4 79.31c-4.36.48-7.98 2.05-10.76 4.64a14.07 14.07 0 0 0-3.59 5.11 24.23 24.23 0 0 0 6.7 23.05 25.4 25.4 0 0 0 17.92 7.25c5.84 0 12.55-3.17 19.37-9.15a87.8 87.8 0 0 0 7.6-7.65l.64-.71-4.39-4.68-.52.61a80.45 80.45 0 0 1-7.77 7.9c-5.68 4.99-10.65 7.52-14.74 7.52-10.45 0-18.95-8.31-18.95-18.51 0-6.16 3.22-11.98 8.49-15.39Zm69.17-12.68c-6.63 0-13.84 3.37-21.4 9.99a90.18 90.18 0 0 0-8.05 8.1c-4.67-5.1-8.9-9-12.98-11.88-5.78-4.13-11.26-6.21-16.28-6.21-13.13 0-24.92 9-28.03 21.4-.03.06-.04.15-.06.22a27.6 27.6 0 0 0 7.6 26.29 28.77 28.77 0 0 0 20.3 8.22c3.36 0 6.9-.86 10.54-2.54a47.29 47.29 0 0 0 11.07-7.45 88.42 88.42 0 0 0 8.05-8.1c4.67 5.1 8.92 9 12.97 11.88 5.78 4.13 11.26 6.2 16.27 6.2 13.18 0 24.98-9.05 28.08-21.54.52-2.13.8-4.33.8-6.52-.02-15.48-12.96-28.06-28.88-28.06ZM60.67 87.5l.4-.45a86.99 86.99 0 0 1 7.58-7.62c6.85-6 13.21-9.05 18.9-9.05 13.84 0 25.1 10.9 25.1 24.3 0 1.87-.23 3.72-.66 5.52-.08.23-.97 2.58-3.46 4.92a17.4 17.4 0 0 1-8.97 4.33 18.97 18.97 0 0 0 7.34-14.77c0-10.42-8.68-18.9-19.34-18.9-4.2 0-9.23 2.55-14.99 7.6a81.35 81.35 0 0 0-7.8 7.96l-.26.28-3.85-4.12h.01Zm6.47 6.88a80.69 80.69 0 0 1 7.93-8.15c6.28-5.51 10.28-6.67 12.5-6.67 8.58 0 15.57 6.8 15.57 15.13 0 8.33-6.97 15.07-15.57 15.13-.27 0-.58-.03-.91-.09a37.16 37.16 0 0 1-11.09-6.8 216.67 216.67 0 0 1-8.45-8.55h.02ZM28.86 109.8c-8.58 0-15.57-6.79-15.57-15.12 0-8.34 6.98-15.08 15.57-15.13.27 0 .58.03.91.08a37.13 37.13 0 0 1 11.1 6.81 225.1 225.1 0 0 1 8.44 8.55 79.39 79.39 0 0 1-7.93 8.16c-6.28 5.51-10.28 6.67-12.5 6.67l-.02-.02Zm-.2 9.18A25.07 25.07 0 0 1 11 111.84a23.9 23.9 0 0 1-6.59-22.68c.09-.23.99-2.6 3.47-4.92a17.52 17.52 0 0 1 8.96-4.33A18.97 18.97 0 0 0 9.51 94.7c0 10.41 8.67 18.9 19.33 18.9 4.2 0 9.24-2.56 15-7.62a81.43 81.43 0 0 0 7.81-7.94l.26-.29 3.84 4.11-.4.46a84.83 84.83 0 0 1-7.58 7.6c-6.77 5.93-13.37 9.07-19.11 9.07v.01Z"/>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 66.4h468.89v126.85H0z"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="basis-1/2 p-1/10 flex items-center">
            <div>
              <div className="tw-paragraph md:tw-lead-sm mt-6 mb-0">
                Unique compared to other blockchains. Enabling developers to write smart contracts spanning different chains. This is CHAIN FUSION.
              </div>
              <Link className="button-outline-white-30 mt-4" href="/ai">
                Jump right in 
              </Link>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-[linear-gradient(48deg,#4DEDD3_-32.7%,#31A782_33.06%,#3B00B9_129.51%)] rounded-[32px] text-white  overflow-clip mt-6">
        <div className="flex flex-col md:flex-row items-stretch">

          <div className="basis-1/2 p-1/10 md:py-1/12 md:order-2">
            <h4 className="tw-heading-4 md:tw-heading-60">
              Run AI models fully on chain
            </h4>
            <p className="tw-paragraph md:tw-lead-sm mt-4 md:mt-6 mb-0">
              Benefit from the security, resilience, and power of the ICP blockchain.
            </p>
            <Link className="button-outline-white-30 mt-4" href="/ai">
              BUILD NOW
            </Link>
          </div>

          <div className="basis-1/2 relative md:order-1 -mt-[5%] md:mt-0 overflow-hidden">
            <img
              loading="lazy"
              src="img/home/ai.webp"
              className="md:absolute bottom-0 left-0 w-full -mb-10 md:mb-0"
            />
          </div>
        </div>
      </article>

      <article className="bg-[linear-gradient(#3B00B9,#9D80DC)] rounded-[32px] text-white overflow-clip mt-6">
        <div className="flex flex-col md:flex-row items-stretch	 ">
          <div className="basis-1/2 relative">
            <img
              loading="lazy"
              src="img/home/icp-hubs.webp"
              className="w-full hidden md:block"
            />
            <img loading="lazy" src="img/home/icp-hubs-network-image.webp" className="w-full md:hidden" />
          </div>
          <div className="basis-1/2 p-1/10 md:py-1/12">
            <img
              loading="lazy"
              src="img/home/hbs1.png"
              className="w-72 ml-0 mb-4"
            />

            <h4 className="tw-heading-4 md:tw-heading-60">
              Building crypto ecosystems worldwide
            </h4>
            <Link className="button-outline-white-30 mt-6 flex gap-2 w-max max-w-full" href="https://linktr.ee/icp_hubs_network">
              <span>Join thriving Communities</span>
              <span className="scale-90 translate-y-0.5 relative w-4 h-4">
                <LinkArrowUpRight className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
              </span>
            </Link>
          </div>
        </div>
      </article>

      <div className="block md:flex gap-4">

        <article className="basis-1/2 bg-black rounded-[32px] text-white overflow-clip mt-6">
          <div className="md:flex-row items-stretch	relative z-1">
            <div className="p-1/10 md:p-2/10 py-1/10 pb-64 md:pb-96">
              <h5 className="tw-heading-4">
                Real World Use Cases
              </h5>
              <p className="tw-paragraph md:tw-lead-sm mt-6">
                Experience full stack decentralization: from DAOs and crypto cloud services to games, NFTs, and social media, the Internet Computer has something for everyone.
              </p>
              <Link className="button-outline-white-30 mt-4" href="/use-cases">
                See for yourself
              </Link>
            </div>
            <div className="absolute z-0 bottom-0 pointer-events-none">
              <img
                loading="lazy"
                src="img/home/dapps-bg.webp"
                className="object-cover size-full"
              />
            </div>
          </div>
        </article>

        <article className="basis-1/2 bg-black rounded-[32px] text-white overflow-clip mt-6">
          <div className="md:flex-row items-stretch	relative z-1">
            <div className="p-1/10 md:p-2/10 py-1/10 pb-64 md:pb-96">
              <h5 className="tw-heading-4">
                ICP ROADMAP
              </h5>
              <p className="tw-paragraph md:tw-lead-sm mt-6">
                Explore the ICP Roadmap, focussing on contributions by the DFINITY Foundation. The roadmap is split into nine themes, each highlighting upcoming milestones.
              </p>
              <Link className="button-outline-white-30 mt-4" href="/roadmap">
                get into latest achievements
              </Link>
            </div>
            <div className="absolute z-0 bottom-0  pointer-events-none">
              <img
                loading="lazy"
                src="img/home/roadmap-bg.webp"
                className="object-cover size-full"
              />
            </div>
          </div>
        </article>

      </div>
    </AnimateSpawn>
  );
};
