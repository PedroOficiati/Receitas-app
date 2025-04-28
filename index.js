import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ backgroundColor: '#C0A060', padding: '10px', textAlign: 'center' }}>
        <h1>SITE DE RECEITAS</h1>
        <p>ESCOLHA A LETRA INICIAL DA SUA RECEITA:</p>
        <p>A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z</p>
      </header>

      <h2>Receitas com a letra "A"</h2>

      <ul>
        {/* Lista de receitas da letra A será carregada futuramente via API */}
      </ul>

      <p style={{ marginTop: '30px', fontWeight: 'bold' }}>GOSTOU DA RECEITA?</p>
      <p>SIM   NÃO</p>
    </div>
  );
}
