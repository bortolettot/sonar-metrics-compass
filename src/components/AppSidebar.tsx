
import { useState } from "react";
import { 
  Code, 
  GitBranch, 
  Copy, 
  TestTube, 
  Shield, 
  CheckCircle, 
  Bug,
  BarChart3 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export type MetricType = 
  | "overview"
  | "lines-of-code" 
  | "cyclomatic-complexity" 
  | "duplication" 
  | "test-coverage" 
  | "security-vulnerabilities" 
  | "code-standards" 
  | "bugs-code-smells";

const metrics = [
  { 
    id: "overview" as MetricType, 
    title: "Visão Geral", 
    icon: BarChart3 
  },
  { 
    id: "lines-of-code" as MetricType, 
    title: "Linhas de Código", 
    icon: Code 
  },
  { 
    id: "cyclomatic-complexity" as MetricType, 
    title: "Complexidade Ciclomática", 
    icon: GitBranch 
  },
  { 
    id: "duplication" as MetricType, 
    title: "Duplicação", 
    icon: Copy 
  },
  { 
    id: "test-coverage" as MetricType, 
    title: "Cobertura de Testes", 
    icon: TestTube 
  },
  { 
    id: "security-vulnerabilities" as MetricType, 
    title: "Vulnerabilidades", 
    icon: Shield 
  },
  { 
    id: "code-standards" as MetricType, 
    title: "Padrões de Código", 
    icon: CheckCircle 
  },
  { 
    id: "bugs-code-smells" as MetricType, 
    title: "Bugs e Code Smells", 
    icon: Bug 
  },
];

interface AppSidebarProps {
  selectedMetric?: MetricType;
  onMetricChange?: (metric: MetricType) => void;
}

export function AppSidebar({ selectedMetric = "overview", onMetricChange }: AppSidebarProps) {
  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">SONAR Dashboard</h1>
            <p className="text-sm text-gray-500">Métricas de Qualidade</p>
          </div>
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Métricas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {metrics.map((metric) => (
                <SidebarMenuItem key={metric.id}>
                  <SidebarMenuButton
                    onClick={() => onMetricChange?.(metric.id)}
                    isActive={selectedMetric === metric.id}
                    className="w-full justify-start"
                  >
                    <metric.icon className="mr-3 h-4 w-4" />
                    <span className="text-sm">{metric.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
