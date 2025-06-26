
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">WebApp</div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sobre
            </a>
            <Button variant="outline">Entrar</Button>
            <Button>Começar</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Bem-vindo ao seu
          <span className="text-blue-600 block">Novo Web App</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Uma plataforma moderna e intuitiva para desenvolver suas ideias. 
          Construa, itere e lance seus projetos com facilidade.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Ver Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Principais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra as funcionalidades que tornam nossa plataforma única
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Desenvolvimento Ágil</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Ferramentas modernas para acelerar seu processo de desenvolvimento
                com as melhores práticas do mercado.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Design Responsivo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Interface elegante e responsiva que se adapta perfeitamente
                a qualquer dispositivo ou tamanho de tela.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Performance Otimizada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Carregamento rápido e experiência fluida com tecnologias
                de ponta e otimizações avançadas.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Este web app foi criado com as mais modernas tecnologias disponíveis,
              incluindo React, TypeScript, Tailwind CSS e muito mais. Nossa missão
              é fornecer uma base sólida para que você possa construir aplicações
              incríveis de forma rápida e eficiente.
            </p>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">WebApp</div>
          <p className="text-gray-400 mb-6">
            Construindo o futuro, um projeto por vez.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
