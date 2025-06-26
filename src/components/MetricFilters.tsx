
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface MetricFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  tribo: string;
  squad: string;
  repositorio: string;
}

export function MetricFilters({ onFiltersChange }: MetricFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    tribo: "",
    squad: "",
    repositorio: ""
  });

  const tribos = ["TriboA", "TriboB", "TriboC"];
  const squads = ["a", "b", "c"];
  const repositorios = ["qw", "wre", "yyt"];

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Tribo</label>
            <Select value={filters.tribo} onValueChange={(value) => handleFilterChange("tribo", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma tribo" />
              </SelectTrigger>
              <SelectContent>
                {tribos.map((tribo) => (
                  <SelectItem key={tribo} value={tribo}>
                    {tribo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Squad</label>
            <Select value={filters.squad} onValueChange={(value) => handleFilterChange("squad", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um squad" />
              </SelectTrigger>
              <SelectContent>
                {squads.map((squad) => (
                  <SelectItem key={squad} value={squad}>
                    {squad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Repositório</label>
            <Select value={filters.repositorio} onValueChange={(value) => handleFilterChange("repositorio", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um repositório" />
              </SelectTrigger>
              <SelectContent>
                {repositorios.map((repo) => (
                  <SelectItem key={repo} value={repo}>
                    {repo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
