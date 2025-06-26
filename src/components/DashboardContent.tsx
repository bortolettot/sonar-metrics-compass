
import { useState } from "react";
import { AppSidebar, MetricType } from "./AppSidebar";
import { MetricChart } from "./MetricChart";
import { MetricFilters } from "./MetricFilters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardContent() {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("overview");

  const getMetricTitle = (metric: MetricType): string => {
    const titles = {
      "overview": "Visão Geral do Projeto",
      "lines-of-code": "Linhas de Código",
      "cyclomatic-complexity": "Complexidade Ciclomática",
      "duplication": "Duplicação de Código",
      "test-coverage": "Cobertura de Testes",
      "security-vulnerabilities": "Vulnerabilidades de Segurança",
      "code-standards": "Conformidade com Padrões",
      "bugs-code-smells": "Bugs e Code Smells"
    };
    return titles[metric];
  };

  const getMetricDescription = (metric: MetricType): string => {
    const descriptions = {
      "overview": "Resumo das principais métricas de qualidade do projeto",
      "lines-of-code": "Análise do tamanho e distribuição do código fonte",
      "cyclomatic-complexity": "Medição da complexidade lógica dos métodos e funções",
      "duplication": "Identificação de blocos de código duplicados",
      "test-coverage": "Avaliação da cobertura de testes automatizados",
      "security-vulnerabilities": "Detecção de vulnerabilidades e falhas de segurança",
      "code-standards": "Verificação da aderência aos padrões de codificação",
      "bugs-code-smells": "Identificação de bugs potenciais e práticas ruins"
    };
    return descriptions[metric];
  };

  const handleFiltersChange = (filters: any) => {
    console.log("Filtros aplicados:", filters);
    // Aqui você pode implementar a lógica para filtrar os dados dos gráficos
  };

  return (
    <div className="flex h-screen">
      <AppSidebar 
        selectedMetric={selectedMetric} 
        onMetricChange={setSelectedMetric} 
      />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {getMetricTitle(selectedMetric)}
                </h1>
                <p className="text-gray-600">{getMetricDescription(selectedMetric)}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          <MetricFilters onFiltersChange={handleFiltersChange} />
          
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Análise de {getMetricTitle(selectedMetric)}</CardTitle>
              <CardDescription>
                Visualização detalhada das métricas coletadas pelo SONAR
              </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <MetricChart metric={selectedMetric} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
