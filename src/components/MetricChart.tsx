
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart 
} from "recharts";

export type MetricType = 
  | "overview"
  | "lines-of-code" 
  | "cyclomatic-complexity" 
  | "duplication" 
  | "test-coverage" 
  | "security-vulnerabilities" 
  | "code-standards" 
  | "bugs-code-smells";

interface MetricChartProps {
  metric: MetricType;
}

export function MetricChart({ metric }: MetricChartProps) {
  // Dados simulados para demonstração
  const getChartData = (metricType: MetricType) => {
    switch (metricType) {
      case "overview":
        return {
          type: "bar",
          data: [
            { name: "Qualidade Geral", value: 85, color: "#10b981" },
            { name: "Cobertura", value: 72, color: "#3b82f6" },
            { name: "Segurança", value: 91, color: "#f59e0b" },
            { name: "Manutenibilidade", value: 78, color: "#8b5cf6" },
          ]
        };
      
      case "lines-of-code":
        return {
          type: "area",
          data: [
            { month: "Jan", lines: 12000, files: 156 },
            { month: "Fev", lines: 15000, files: 189 },
            { month: "Mar", lines: 18000, files: 203 },
            { month: "Abr", lines: 16500, files: 198 },
            { month: "Mai", lines: 19000, files: 215 },
            { month: "Jun", lines: 21000, files: 228 },
          ]
        };
      
      case "cyclomatic-complexity":
        return {
          type: "line",
          data: [
            { module: "Auth", complexity: 8.5, threshold: 10 },
            { module: "Database", complexity: 12.3, threshold: 10 },
            { module: "API", complexity: 6.2, threshold: 10 },
            { module: "UI", complexity: 9.8, threshold: 10 },
            { module: "Utils", complexity: 4.1, threshold: 10 },
          ]
        };
      
      case "duplication":
        return {
          type: "pie",
          data: [
            { name: "Código Único", value: 87, color: "#10b981" },
            { name: "Duplicação Menor", value: 8, color: "#f59e0b" },
            { name: "Duplicação Crítica", value: 5, color: "#ef4444" },
          ]
        };
      
      case "test-coverage":
        return {
          type: "bar",
          data: [
            { component: "Models", coverage: 95, target: 80 },
            { component: "Controllers", coverage: 78, target: 80 },
            { component: "Services", coverage: 89, target: 80 },
            { component: "Utils", coverage: 92, target: 80 },
            { component: "Components", coverage: 67, target: 80 },
          ]
        };
      
      case "security-vulnerabilities":
        return {
          type: "pie",
          data: [
            { name: "Baixo Risco", value: 12, color: "#10b981" },
            { name: "Médio Risco", value: 5, color: "#f59e0b" },
            { name: "Alto Risco", value: 2, color: "#ef4444" },
            { name: "Crítico", value: 1, color: "#7c2d12" },
          ]
        };
      
      case "code-standards":
        return {
          type: "bar",
          data: [
            { standard: "Naming", compliance: 92 },
            { standard: "Formatting", compliance: 98 },
            { standard: "Documentation", compliance: 74 },
            { standard: "Error Handling", compliance: 86 },
            { standard: "Performance", compliance: 81 },
          ]
        };
      
      case "bugs-code-smells":
        return {
          type: "line",
          data: [
            { week: "S1", bugs: 23, codeSmells: 45, resolved: 18 },
            { week: "S2", bugs: 19, codeSmells: 38, resolved: 25 },
            { week: "S3", bugs: 15, codeSmells: 42, resolved: 21 },
            { week: "S4", bugs: 12, codeSmells: 35, resolved: 28 },
          ]
        };
      
      default:
        return { type: "bar", data: [] };
    }
  };

  const chartConfig = getChartData(metric);

  const renderChart = () => {
    switch (chartConfig.type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b82f6" />
              {chartConfig.data[0]?.target && (
                <Bar dataKey="target" fill="#10b981" />
              )}
              {chartConfig.data[0]?.coverage && (
                <Bar dataKey="coverage" fill="#3b82f6" />
              )}
              {chartConfig.data[0]?.compliance && (
                <Bar dataKey="compliance" fill="#8b5cf6" />
              )}
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="module" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="complexity" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Complexidade"
              />
              <Line 
                type="monotone" 
                dataKey="threshold" 
                stroke="#10b981" 
                strokeDasharray="5 5"
                name="Limite Recomendado"
              />
              {chartConfig.data[0]?.bugs && (
                <Line 
                  type="monotone" 
                  dataKey="bugs" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Bugs"
                />
              )}
              {chartConfig.data[0]?.codeSmells && (
                <Line 
                  type="monotone" 
                  dataKey="codeSmells" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="Code Smells"
                />
              )}
              {chartConfig.data[0]?.resolved && (
                <Line 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Resolvidos"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartConfig.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartConfig.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case "area":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="lines" 
                stackId="1"
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.6}
                name="Linhas de Código"
              />
              <Area 
                type="monotone" 
                dataKey="files" 
                stackId="2"
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.6}
                name="Arquivos"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>Tipo de gráfico não suportado</div>;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderChart()}
    </div>
  );
}
