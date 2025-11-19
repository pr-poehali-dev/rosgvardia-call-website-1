import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-red-600 to-red-700 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Служба вызова сотрудников Росгвардии
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-50 animate-fade-in">
            Оперативное реагирование на обращения граждан. Безопасность и порядок 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('call')} 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Вызвать сотрудника
            </Button>
            <Button 
              onClick={() => scrollToSection('about')} 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <Icon name="Shield" size={300} />
      </div>
    </section>
  );
}
