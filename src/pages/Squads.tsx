import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Squad {
  id: number;
  name: string;
  description: string;
}

const Squads = () => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [editing, setEditing] = useState<Squad | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setEditing(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setSquads((prev) =>
        prev.map((s) =>
          s.id === editing.id ? { ...s, name, description } : s
        )
      );
    } else {
      setSquads((prev) => [
        ...prev,
        { id: Date.now(), name, description },
      ]);
    }
    resetForm();
  };

  const handleEdit = (squad: Squad) => {
    setEditing(squad);
    setName(squad.name);
    setDescription(squad.description);
  };

  const handleDelete = (id: number) => {
    setSquads((prev) => prev.filter((s) => s.id !== id));
    if (editing && editing.id === id) {
      resetForm();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{editing ? "Editar Squad" : "Nova Squad"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Descrição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button type="submit">
                    {editing ? "Salvar" : "Adicionar"}
                  </Button>
                  {editing && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={resetForm}
                    >
                      Cancelar
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Squads Cadastradas</CardTitle>
            </CardHeader>
            <CardContent>
              {squads.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhuma squad cadastrada.</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="py-2">Nome</th>
                      <th className="py-2">Descrição</th>
                      <th className="py-2 w-32">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {squads.map((squad) => (
                      <tr key={squad.id} className="border-t">
                        <td className="py-2">{squad.name}</td>
                        <td className="py-2">{squad.description}</td>
                        <td className="py-2 space-x-2">
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => handleEdit(squad)}
                          >
                            Editar
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(squad.id)}
                          >
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Squads;
