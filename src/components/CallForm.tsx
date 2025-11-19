import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

export default function CallForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка принята! Сотрудник направлен по указанному адресу.');
    setFormData({ name: '', phone: '', address: '', reason: '' });
  };

  return (
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
  );
}
