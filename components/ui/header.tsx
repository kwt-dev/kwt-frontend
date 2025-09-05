import Logo from './logo';
import MenuButton from './menu-button';
import KingsButton from './kings-button';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="relative max-w-7xl mx-autow-full max-w-7xl mx-auto px-12 sm:px-18">
        <div className="flex items-center justify-between w-full pt-8 h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* CTA Button and Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:block">
              <KingsButton
                variant="primary"
                href="/contact"
                className="text-xs px-4 py-2 whitespace-nowrap"
              >
                PROTECT YOUR VEHICLE TODAY
              </KingsButton>
            </div>

            {/* Menu button */}
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}
