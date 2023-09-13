import { FileVideo, Github, Moon, Sun, Upload, Wand2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ui/theme-provider";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function App() {
  const { setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ui</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator className="h-6" orientation="vertical" />

          <Button variant="ghost">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>

          <Separator className="h-6" orientation="vertical" />

          <Button variant="ghost" onClick={() => setTheme()} size="icon">
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate- scale-100 transition-all dark:rotate-0 dark:scale-0" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
          </Button>
        </div>
      </div>

      <main className="flex-1 flex p-6 gap-6 ">
        <div className=" flex-1 flex flex-col  gap-4">
          <div className="flex-1 grid grid-rows-2 gap-4 ">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p>
            Lembre-se você podeutilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prokpt para adicionar o contúdo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              htmlFor="video"
            >
              <FileVideo />
              Selecione um vídeo
            </label>
            <input
              id="video"
              type="file"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button className="w-full" type="submit">
              Carregar vídeo <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do YouTube</SelectItem>
                  <SelectItem value="description">
                    Descrição do YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  <SelectItem value="gpt4.0">GPT 4.0</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Só é possível customizar com GPT Plus
              </span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tentem a deixar o resultado mais criativo e
                com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button className="w-full" type="submit">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
