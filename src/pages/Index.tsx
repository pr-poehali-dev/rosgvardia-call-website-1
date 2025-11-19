import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    reason: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('Все');

  const newsCategories = ['Все', 'События', 'Безопасность', 'Учения', 'Награждения'];

  const newsItems = [
    {
      id: 1,
      title: 'Росгвардия провела антитеррористические учения в Москве',
      category: 'Учения',
      date: '15 ноября 2024',
      description: 'В столице прошли масштабные учения по противодействию террористическим угрозам с участием более 500 сотрудников.',
      image: '🎯',
    },
    {
      id: 2,
      title: 'Награждение лучших сотрудников года',
      category: 'Награждения',
      date: '12 ноября 2024',
      description: 'Состоялась церемония награждения сотрудников, проявивших мужество и профессионализм при исполнении служебных обязанностей.',
      image: '🏆',
    },
    {
      id: 3,
      title: 'Новые меры безопасности в общественных местах',
      category: 'Безопасность',
      date: '10 ноября 2024',
      description: 'Введены дополнительные меры контроля в торговых центрах и на транспортных узлах для повышения безопасности граждан.',
      image: '🛡️',
    },
    {
      id: 4,
      title: 'Открытие нового учебного центра',
      category: 'События',
      date: '8 ноября 2024',
      description: 'В Санкт-Петербурге открылся современный учебный центр для подготовки сотрудников с использованием новейших технологий.',
      image: '🏢',
    },
    {
      id: 5,
      title: 'Профилактика правонарушений: итоги месяца',
      category: 'Безопасность',
      date: '5 ноября 2024',
      description: 'Подведены итоги работы по профилактике правонарушений. Количество инцидентов снизилось на 15%.',
      image: '📊',
    },
    {
      id: 6,
      title: 'Совместные учения с МЧС России',
      category: 'Учения',
      date: '1 ноября 2024',
      description: 'Проведены совместные учения по ликвидации последствий чрезвычайных ситуаций и эвакуации населения.',
      image: '🚨',
    },
  ];

  const filteredNews = selectedCategory === 'Все' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка принята! Сотрудник направлен по указанному адресу.');
    setFormData({ name: '', phone: '', address: '', reason: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
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

      <main>
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-primary" size={32} />
                  </div>
                  <CardTitle>Круглосуточно</CardTitle>
                  <CardDescription>Работаем 24 часа в сутки, 7 дней в неделю</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="MapPin" className="text-primary" size={32} />
                  </div>
                  <CardTitle>Быстрое прибытие</CardTitle>
                  <CardDescription>Среднее время прибытия 10-15 минут</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" className="text-primary" size={32} />
                  </div>
                  <CardTitle>Профессионализм</CardTitle>
                  <CardDescription>Опытные и квалифицированные сотрудники</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="call" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Вызов сотрудника
              </h2>
              <p className="text-lg text-gray-600">
                Заполните форму, и наш сотрудник прибудет по указанному адресу
              </p>
            </div>
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иванов Иван Иванович"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Город, улица, дом, квартира"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Причина вызова *</Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Опишите ситуацию"
                      required
                      rows={4}
                      className="border-gray-300"
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    В экстренных ситуациях звоните по номеру <strong className="text-primary">112</strong>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                О службе Росгвардии
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" className="text-primary" size={24} />
                      Наша миссия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Обеспечение безопасности граждан, охрана общественного порядка и борьба с преступностью на территории Российской Федерации.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Users" className="text-primary" size={24} />
                      Наша команда
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Высококвалифицированные специалисты с многолетним опытом работы, прошедшие профессиональную подготовку и регулярное обучение.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-primary text-white">
                <CardContent className="py-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold mb-2">24/7</div>
                      <div className="text-red-100">Режим работы</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">15 мин</div>
                      <div className="text-red-100">Время прибытия</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">100%</div>
                      <div className="text-red-100">Ответственность</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="news" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Новости Росгвардии
                </h2>
                <p className="text-lg text-gray-600">
                  Актуальная информация о деятельности службы
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {newsCategories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className={selectedCategory === category ? '' : 'hover:bg-red-50'}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news) => (
                  <Card key={news.id} className="hover:shadow-xl transition-shadow border-t-2 border-t-primary">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-red-100 text-primary hover:bg-red-100">
                          {news.category}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {news.date}
                        </span>
                      </div>
                      <div className="text-5xl mb-4 text-center">{news.image}</div>
                      <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {news.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full text-primary hover:bg-red-50">
                        Читать далее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  В каких случаях можно вызвать сотрудника?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Вызов сотрудника Росгвардии возможен при нарушении общественного порядка, угрозе безопасности, необходимости охраны мероприятий, а также в других ситуациях, требующих вмешательства правоохранительных органов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Сколько времени занимает прибытие?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Среднее время прибытия составляет 10-15 минут в зависимости от загруженности служб и расположения адреса. В экстренных ситуациях время реагирования минимально.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Нужно ли оплачивать вызов?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Вызов сотрудника Росгвардии для граждан является бесплатным. Услуга финансируется из государственного бюджета.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Что делать в экстренной ситуации?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  В экстренных ситуациях необходимо немедленно звонить по номеру 112. Этот номер работает круглосуточно и обеспечивает максимально быстрое реагирование.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Какие документы нужны при вызове?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  При встрече с сотрудником желательно иметь документ, удостоверяющий личность (паспорт). В форме заявки необходимо указать достоверные контактные данные.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Контакты
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">Экстренный вызов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:112" className="text-2xl font-bold text-primary hover:text-red-700">
                      112
                    </a>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@rosgvardia.ru" className="text-primary hover:text-red-700">
                      info@rosgvardia.ru
                    </a>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">Адрес</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Росгвардия</span>
              </div>
              <p className="text-gray-400">
                Федеральная служба войск национальной гвардии Российской Федерации
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white">Главная</button></li>
                <li><button onClick={() => scrollToSection('call')} className="hover:text-white">Вызов сотрудника</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">О службе</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Экстренные службы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Единый номер: <a href="tel:112" className="text-primary hover:text-red-400">112</a></li>
                <li>Полиция: <a href="tel:102" className="text-primary hover:text-red-400">102</a></li>
                <li>Скорая помощь: <a href="tel:103" className="text-primary hover:text-red-400">103</a></li>
                <li>МЧС: <a href="tel:101" className="text-primary hover:text-red-400">101</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Росгвардия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}