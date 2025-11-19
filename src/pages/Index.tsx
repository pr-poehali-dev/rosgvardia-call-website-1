import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CallForm from '@/components/CallForm';
import NewsSection from '@/components/NewsSection';

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />

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

        <CallForm />

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

        <NewsSection />

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

        <section id="contacts" className="py-20 bg-white">
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a25df2af-fea8-42d1-84b0-a36c79146fe3.png" 
                  alt="Герб Росгвардии" 
                  className="w-12 h-12 object-contain"
                />
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