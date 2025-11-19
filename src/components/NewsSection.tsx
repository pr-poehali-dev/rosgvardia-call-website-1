import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function NewsSection() {
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

  return (
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
  );
}
