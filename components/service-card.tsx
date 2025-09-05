'use client';

import { useState } from 'react';
import Image from 'next/image';
import KingsButton from './ui/kings-button';

interface ServiceCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  backgroundImage,
  buttonText = 'GET MY QUOTE NOW',
  buttonHref = '/contact',
  className = '',
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border border-light-brown ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt={title} fill className="object-cover object-center" />
        {/* Gradient overlay - stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/40 to-transparent"></div>
      </div>

      {/* Normal State - Title Only */}
      <div
        className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h3
          className="text-white text-lg uppercase tracking-wide font-medium"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {title}
        </h3>
      </div>

      {/* Hover State - Full Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Title at top on hover */}
        <h3
          className="text-white text-lg uppercase tracking-wide font-medium"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {title}
        </h3>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="text-light-grey text-sm md:text-base leading-relaxed mb-6 font-light"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {description}
          </p>

          <KingsButton variant="secondary" href={buttonHref} className="text-xs px-6 py-2 w-fit">
            {buttonText}
          </KingsButton>
        </div>
      </div>
    </div>
  );
}
