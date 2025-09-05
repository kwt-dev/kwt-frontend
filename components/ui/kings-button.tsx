import Link from 'next/link'
import { ReactNode } from 'react'

interface KingsButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'badge'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  arrow?: boolean
}

export default function KingsButton({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  arrow = false
}: KingsButtonProps) {
  
  const baseClasses = "transition duration-150 ease-in-out group relative inline-flex items-center justify-center"
  
  const variants = {
    // Kings primary button - based on Figma glassmorphism design
    primary: `btn text-white [background:linear-gradient(var(--color-obsidian),var(--color-obsidian))_padding-box,linear-gradient(var(--color-king-red),var(--color-king-red)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-[rgba(4,7,7,0.32)] before:rounded-[10px] before:pointer-events-none shadow-[0px_1px_2px_0px_rgba(196,30,58,0.48)] backdrop-blur-[13.5914px] backdrop-filter border border-king-red hover:before:bg-[rgba(4,7,7,0.45)]`,
    
    // Gold accent secondary button
    secondary: `btn text-obsidian bg-linear-to-r from-gold-accent via-gold-accent to-gold-accent hover:from-[#e5b342] hover:via-[#e5b342] hover:to-[#e5b342] w-full`,
    
    // Ghost button
    ghost: `btn text-light-grey hover:text-white bg-transparent hover:bg-dark-grey/30 w-full border border-light-grey/30`,
    
    // Badge style (like the original template's announcement badge)
    badge: `btn-sm py-0.5 text-light-grey hover:text-white [background:linear-gradient(var(--color-king-red),var(--color-king-red))_padding-box,linear-gradient(var(--color-king-red),var(--color-gold-accent)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-obsidian/50 before:rounded-full before:pointer-events-none shadow-sm`
  }

  const content = (
    <>
      {/* Blurred background effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-[rgba(196,30,58,0.48)] blur-[16.3097px] rounded-[30px] -z-10" />
      )}
      
      <span className="relative inline-flex items-center [text-shadow:rgba(255,255,255,0.33)_0px_0px_7.1px] font-montserrat font-semibold tracking-[0.25px]">
        {children}
        {arrow && (
          <span className="tracking-normal text-king-red group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            →
          </span>
        )}
      </span>
    </>
  )

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link className={buttonClasses} href={href}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}