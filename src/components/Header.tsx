import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900">Росгвардия</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('call')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Вызов сотрудника
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              О службе
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Новости
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
