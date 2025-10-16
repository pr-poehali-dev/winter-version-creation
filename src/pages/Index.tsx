import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const articles = [
    {
      id: 1,
      title: "Зимние прогулки в лесу",
      excerpt: "Откройте для себя красоту зимнего леса и насладитесь тишиной заснеженных троп...",
      image: "https://cdn.poehali.dev/projects/dc652e4b-562d-4b72-82ef-a4117596eb54/files/607eef21-1aeb-41fa-b9c9-404b1fc7a4d8.jpg",
      date: "15 января 2025",
      category: "Природа"
    },
    {
      id: 2,
      title: "Уют зимнего дома",
      excerpt: "Создайте идеальную атмосферу тепла и комфорта в холодные зимние дни...",
      image: "https://cdn.poehali.dev/projects/dc652e4b-562d-4b72-82ef-a4117596eb54/files/d7839e12-7f0e-41f0-b637-fc6090e11b9e.jpg",
      date: "12 января 2025",
      category: "Дом"
    },
    {
      id: 3,
      title: "Горные вершины зимой",
      excerpt: "Величественная красота заснеженных горных пиков и их завораживающие пейзажи...",
      image: "https://cdn.poehali.dev/projects/dc652e4b-562d-4b72-82ef-a4117596eb54/files/a19cd824-8356-4c9a-8499-122c65a024b8.jpg",
      date: "10 января 2025",
      category: "Путешествия"
    }
  ];

  const handleShare = (platform: string, article: typeof articles[0]) => {
    const url = window.location.href;
    const text = article.title;
    
    const shareUrls: { [key: string]: string } = {
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за подписку, ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-snow-fall" style={{animationDelay: '0s'}}>❄️</div>
        <div className="absolute top-20 right-20 text-3xl animate-snow-fall" style={{animationDelay: '2s'}}>❄️</div>
        <div className="absolute top-40 left-1/4 text-2xl animate-snow-fall" style={{animationDelay: '4s'}}>❄️</div>
        <div className="absolute top-60 right-1/3 text-3xl animate-snow-fall" style={{animationDelay: '1s'}}>❄️</div>
        <div className="absolute top-32 left-2/3 text-2xl animate-snow-fall" style={{animationDelay: '3s'}}>❄️</div>
      </div>

      <header className="relative z-10 border-b border-primary/10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-3xl font-bold text-primary">❄️ Зимний Блог</div>
            <div className="flex gap-8 items-center">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-7xl font-bold text-primary mb-6 leading-tight">
              Зимняя Сказка
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Погрузитесь в атмосферу уюта, красоты и волшебства зимнего сезона. 
              Истории, вдохновение и моменты для души.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Читать статьи
            </Button>
          </div>
        </div>
      </section>

      <section id="articles" className="relative z-10 py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-primary text-center mb-12">Последние Статьи</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in border-2 border-secondary/20"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="text-2xl font-bold text-primary mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button variant="ghost" className="text-primary hover:text-primary/80">
                      Читать далее →
                    </Button>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleShare('telegram', article)}
                        className="hover:bg-accent"
                      >
                        <Icon name="Send" size={18} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleShare('facebook', article)}
                        className="hover:bg-accent"
                      >
                        <Icon name="Facebook" size={18} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleShare('twitter', article)}
                        className="hover:bg-accent"
                      >
                        <Icon name="Twitter" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-24 bg-gradient-to-b from-white/50 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-primary text-center mb-12">Оставайтесь на связи</h2>
            
            <Card className="p-8 mb-12 border-2 border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Подписка на новости</h3>
              <p className="text-center text-muted-foreground mb-6">
                Получайте свежие статьи прямо на почту
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                  Подписаться
                </Button>
              </form>
            </Card>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Мы в социальных сетях</h3>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open('https://t.me', '_blank')}
                >
                  <Icon name="Send" size={24} className="mr-2" />
                  Telegram
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <Icon name="Facebook" size={24} className="mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open('https://twitter.com', '_blank')}
                >
                  <Icon name="Twitter" size={24} className="mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open('https://wa.me', '_blank')}
                >
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 border-t border-primary/10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Зимний Блог. Создано с теплом и любовью ❄️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
