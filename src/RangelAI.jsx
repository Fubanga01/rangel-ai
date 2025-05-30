import React, { useState } from 'react';

export default function RangelAI() {
  const [produto, setProduto] = useState('');
  const [plataforma, setPlataforma] = useState('TikTok');
  const [gatilho, setGatilho] = useState('Desejo');
  const [resultado, setResultado] = useState(null);

  const gerarCriativo = () => {
    if (!produto.trim()) {
      alert('Digite o nome do produto, caralh*! 😡');
      return;
    }

    const titulo = `${produto} explodiu no ${plataforma} com esse gatilho: ${gatilho}`;
    const copy = `Descubra como ${produto} usa o gatilho de ${gatilho.toLowerCase()} pra fazer o ${plataforma} virar máquina de vendas.`;
    const script = `1. Mostra o problema\n2. Introduz o ${produto}\n3. Ativa o gatilho de ${gatilho.toLowerCase()}\n4. CTA direto pro clique`;
    const imagem = `https://source.unsplash.com/featured/?marketing,${gatilho}`;

    setResultado({ titulo, copy, script, imagem });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Rangel AI</h1>
      <div>
        <label>Nome do Produto:</label>
        <input value={produto} onChange={(e) => setProduto(e.target.value)} placeholder="Ex: TurboTest, SkinClean, etc" />
      </div>
      <div>
        <label>Plataforma:</label>
        <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
          <option>Meta</option>
          <option>TikTok</option>
          <option>Shorts</option>
        </select>
      </div>
      <div>
        <label>Gatilho Emocional:</label>
        <select value={gatilho} onChange={(e) => setGatilho(e.target.value)}>
          <option>Desejo</option>
          <option>Medo</option>
          <option>Urgência</option>
          <option>Prova Social</option>
          <option>Ganância</option>
        </select>
      </div>
      <button onClick={gerarCriativo}>Gerar Criativo</button>

      {resultado && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{resultado.titulo}</h2>
          <p><strong>Copy:</strong> {resultado.copy}</p>
          <p><strong>Script:</strong></p>
          <pre>{resultado.script}</pre>
          <img src={resultado.imagem} alt="Imagem gerada" width="300" />
        </div>
      )}
    </div>
  );
}
