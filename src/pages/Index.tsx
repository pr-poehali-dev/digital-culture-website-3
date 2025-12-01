import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Цифровая культура</h1>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('classification')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Классификация
              </button>
              <button
                onClick={() => scrollToSection('tools')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Инструменты
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-foreground leading-tight">
                Цифровая культура в профессиональной деятельности
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Образовательный портал, посвящённый современным инструментам создания 
                цифрового контента. Узнайте о классификации онлайн-сервисов и выберите 
                подходящие решения для вашей профессиональной деятельности.
              </p>
              <div className="flex gap-4 mb-8">
                <Button onClick={() => scrollToSection('classification')} size="lg">
                  Изучить инструменты
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                  Связаться
                </Button>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Разработчик сайта</p>
                <p className="text-lg font-medium">Студент образовательной программы</p>
                <p className="text-muted-foreground">Курс: Цифровая культура в профессиональной деятельности</p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/5dac026e-570b-4700-99cd-133266d6e169/files/c162ca22-ff79-4535-a785-34f96ab36930.jpg"
                alt="Цифровая культура"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="classification" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Классификация инструментов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современные онлайн-сервисы для создания цифрового контента можно разделить 
              на несколько категорий по их функциональному назначению
            </p>
          </div>

          <div className="mb-12">
            <img
              src="https://cdn.poehali.dev/projects/5dac026e-570b-4700-99cd-133266d6e169/files/0bf73fac-ea2c-4023-a726-cb5d99339abb.jpg"
              alt="Mind Map классификации инструментов"
              className="rounded-lg shadow-xl w-full animate-scale-in"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon name="Image" size={32} className="text-primary" />
                </div>
                <CardTitle>Графический дизайн</CardTitle>
                <CardDescription>
                  Инструменты для создания визуального контента
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Создание презентаций и инфографики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Редактирование фотографий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Разработка логотипов и брендинга</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon name="Video" size={32} className="text-primary" />
                </div>
                <CardTitle>Видеомонтаж</CardTitle>
                <CardDescription>
                  Сервисы для работы с видеоконтентом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Монтаж и обработка видео</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Добавление эффектов и переходов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Создание анимаций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
                <CardTitle>Работа с текстом</CardTitle>
                <CardDescription>
                  Инструменты для создания текстового контента
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Совместное редактирование документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Проверка грамматики и стиля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Создание презентаций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Обзор инструментов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Детальное описание популярных онлайн-сервисов для создания цифрового контента
            </p>
          </div>

          <Tabs defaultValue="canva" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="canva">Canva</TabsTrigger>
              <TabsTrigger value="figma">Figma</TabsTrigger>
              <TabsTrigger value="notion">Notion</TabsTrigger>
            </TabsList>

            <TabsContent value="canva" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Canva</CardTitle>
                  <CardDescription className="text-lg">
                    Онлайн-платформа для графического дизайна
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Назначение</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Canva — это универсальный инструмент для создания визуального контента, 
                      который позволяет пользователям без опыта в дизайне создавать профессионально 
                      выглядящие материалы для социальных сетей, презентаций, печати и веб-публикаций.
                    </p>
                  </div>

                  <div>
                    <img
                      src="https://cdn.poehali.dev/projects/5dac026e-570b-4700-99cd-133266d6e169/files/91827593-91ad-4db7-b74c-e15d9d314270.jpg"
                      alt="Интерфейс Canva"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Краткое описание</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Сервис предлагает интуитивно понятный drag-and-drop интерфейс с огромной 
                      библиотекой шаблонов, изображений, шрифтов и графических элементов. 
                      Работает в браузере и имеет мобильные приложения.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Основные возможности</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Palette" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Библиотека шаблонов</p>
                          <p className="text-sm text-muted-foreground">
                            Более 250 000 готовых шаблонов для различных целей
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Users" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Совместная работа</p>
                          <p className="text-sm text-muted-foreground">
                            Командное редактирование в реальном времени
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Wand2" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">AI инструменты</p>
                          <p className="text-sm text-muted-foreground">
                            Автоматическое удаление фона, генерация текста
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Download" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Экспорт</p>
                          <p className="text-sm text-muted-foreground">
                            Сохранение в PNG, JPG, PDF, MP4 и других форматах
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Примеры использования</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Создание постов для социальных сетей (Instagram, Facebook, LinkedIn)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Разработка презентаций и инфографики</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Дизайн логотипов, визиток и маркетинговых материалов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Создание обложек для YouTube и миниатюр</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="figma" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Figma</CardTitle>
                  <CardDescription className="text-lg">
                    Профессиональный инструмент для UI/UX дизайна
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Назначение</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Figma — это облачная платформа для проектирования пользовательских интерфейсов 
                      и создания прототипов веб-сайтов и мобильных приложений. Основной инструмент 
                      для UX/UI дизайнеров и продуктовых команд.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                    <div className="flex items-center justify-center gap-4 text-6xl mb-4">
                      <Icon name="Figma" size={80} className="text-purple-600" />
                    </div>
                    <p className="text-center text-muted-foreground">Профессиональный дизайн интерфейсов</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Краткое описание</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Figma работает полностью в браузере и позволяет нескольким пользователям 
                      одновременно редактировать один проект. Поддерживает векторную графику, 
                      создание компонентов, прототипирование и передачу макетов разработчикам.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Основные возможности</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Component" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Компонентная система</p>
                          <p className="text-sm text-muted-foreground">
                            Создание переиспользуемых элементов дизайна
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Layers" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Прототипирование</p>
                          <p className="text-sm text-muted-foreground">
                            Создание интерактивных прототипов без кода
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="UserPlus" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Real-time коллаборация</p>
                          <p className="text-sm text-muted-foreground">
                            Совместная работа над проектом в реальном времени
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Code" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Dev Mode</p>
                          <p className="text-sm text-muted-foreground">
                            Автоматическая генерация кода для разработчиков
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Примеры использования</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Проектирование интерфейсов веб-приложений и сайтов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Разработка дизайн-систем для продуктов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Создание интерактивных прототипов для тестирования</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Передача макетов разработчикам с автоматическими спецификациями</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notion" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Notion</CardTitle>
                  <CardDescription className="text-lg">
                    Универсальное рабочее пространство для заметок и документов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Назначение</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Notion — это комплексный инструмент для управления знаниями, проектами и документами. 
                      Объединяет функции заметок, баз данных, вики, досок задач и календарей в одной платформе.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-lg">
                    <div className="flex items-center justify-center gap-4 text-6xl mb-4">
                      <Icon name="FileText" size={80} className="text-slate-700" />
                    </div>
                    <p className="text-center text-muted-foreground">Организация знаний и задач</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Краткое описание</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Notion использует блочную структуру для создания документов любой сложности. 
                      Позволяет создавать базы данных, встраивать медиа-контент, настраивать шаблоны 
                      и организовывать информацию различными способами.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Основные возможности</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Database" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Базы данных</p>
                          <p className="text-sm text-muted-foreground">
                            Таблицы, доски, календари, галереи и списки
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Link" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Связанные страницы</p>
                          <p className="text-sm text-muted-foreground">
                            Создание вики и структурированных знаний
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Layout" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Шаблоны</p>
                          <p className="text-sm text-muted-foreground">
                            Готовые решения для различных задач
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                        <Icon name="Share2" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Совместная работа</p>
                          <p className="text-sm text-muted-foreground">
                            Комментарии, упоминания, гибкие права доступа
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Примеры использования</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Создание личной базы знаний и системы заметок</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Управление проектами и задачами команды</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Ведение документации и корпоративной вики</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1" />
                        <span>Планирование контента и редакционный календарь</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Контакты разработчика</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь со мной для обсуждения вопросов или предложений
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Разработчик</p>
                      <p className="text-muted-foreground">Студент образовательной программы</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:student@example.edu" className="text-primary hover:underline">
                        student@example.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="GraduationCap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Курс</p>
                      <p className="text-muted-foreground">Цифровая культура в профессиональной деятельности</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Calendar" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Год</p>
                      <p className="text-muted-foreground">2024-2025 учебный год</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4">О проекте</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Данный веб-сайт разработан в рамках изучения курса «Цифровая культура 
                    в профессиональной деятельности». Проект демонстрирует навыки работы 
                    с современными онлайн-инструментами для создания цифрового контента.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Github" size={16} className="mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Linkedin" size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Цифровая культура</h3>
              <p className="text-background/80 text-sm">
                Образовательный портал о современных инструментах создания цифрового контента
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-background transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('classification')} className="hover:text-background transition-colors">Классификация</button></li>
                <li><button onClick={() => scrollToSection('tools')} className="hover:text-background transition-colors">Инструменты</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-background transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Инструменты</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Canva</li>
                <li>Figma</li>
                <li>Notion</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-background/20 mb-8" />
          <div className="text-center text-sm text-background/60">
            © 2024-2025 Цифровая культура в профессиональной деятельности. Учебный проект.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
