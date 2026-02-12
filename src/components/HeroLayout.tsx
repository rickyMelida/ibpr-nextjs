import Header from './Header';

/**
 * Layout component for pages with hero section
 * Following Single Responsibility: provide consistent layout structure
 */
interface HeroLayoutProps {
  children: React.ReactNode;
  isSubPage?: boolean;
  backgroundImage?: string;
}

export default function HeroLayout({ 
  children, 
  isSubPage = false,
  backgroundImage = '/images/ibpr_front.png' 
}: HeroLayoutProps) {
  return (
    <div className={isSubPage ? 'sub_page' : ''}>
      <div className="hero_area">
        <div className="bg-box">
          <img src={backgroundImage} alt="IBPR Background" />
        </div>
        <Header />
        {children}
      </div>
    </div>
  );
}
