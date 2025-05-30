import { useState } from "react";

export default function RangelAI() {
  const [produto, setProduto] = useState("");
  const [plataforma, setPlataforma] = useState("TikTok");
  const [gatilho, setGatilho] = useState("Desejo");
  const [resultado, setResultado] = useState(null);

  const gerar = () => {
    const titulo = `${gatilho.toUpperCase()} ABSURDO: ${produto} agora dominando o ${plataforma}`;
    const copy = `Eles não estavam preparados. ${produto} virou referência no ${plataforma} com uma estratégia que ninguém esperava.`;
    const script = `Cena 1: Pessoa comum olhando para o espelho.\nCena 2: Aparece ${produto} com efeito visual agressivo.\nCena 3: Texto na tela: 'Você também pode dominar o jogo.'`;
    const imagem = `https://placehold.co/600x400?text=${encodeURIComponent(produto)}`;

    setResultado({ titulo, copy, script, imagem });
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-4">Rangel AI</h1>

      <label className="block mb-2 font-semibold">Nome do Produto:</label>
      <input
        className="border p-2 w-full mb-4"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        placeholder="Ex: TurboTest, SkinClean, etc"
      />

      <label className="block mb-2 font-semibold">Plataforma:</label>
      <select
        className="border p-2 w-full mb-4"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
      >
        <option>Meta</option>
        <option>TikTok</option>
        <option>Shorts</option>
      </select>

      <label className="block mb-2 font-semibold">Gatilho Emocional:</label>
      <select
        className="border p-2 w-full mb-4"
        value={gatilho}
        onChange={(e) => setGatilho(e.target.value)}
      >
        <option>Desejo</option>
        <option>Medo</option>
        <option>Emoção</option>
        <option>Status</option>
        <option>Escassez</option>
      </select>

      <button
        onClick={gerar}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Gerar Criativo
      </button>

      {resultado && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-bold">Resultado:</h2>
          <p><strong>Título:</strong> {resultado.titulo}</p>
          <p><strong>Copy:</strong> {resultado.copy}</p>
          <p><strong>Script:</strong> {resultado.script}</p>
          <img src={resultado.imagem} alt="Criativo" className="mt-4 w-full max-w-md" />
        </div>
      )}
    </div>
  );
}