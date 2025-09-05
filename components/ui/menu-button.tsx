'use client'

import { useState } from 'react'
import Image from 'next/image'
import MenuIcon from '@/public/images/menu-icon.svg'

interface MenuButtonProps {
  onToggle?: (isOpen: boolean) => void
  className?: string
}

export default function MenuButton({ onToggle, className = '' }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.(newState)
  }

  return (
    <button
      onClick={handleClick}
      className={`relative p-2 transition-all duration-200 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-king-red focus:ring-offset-2 ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <Image
          src={MenuIcon}
          alt=""
          width={32}
          height={32}
          className="max-w-none"
        />
      </div>
    </button>
  )
}