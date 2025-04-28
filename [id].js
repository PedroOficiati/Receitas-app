import { useRouter } from 'next/router';

export default function Receita() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Nome da Receita</h1>
      {/* Futuramente aqui vai aparecer a imagem e as instruções */}
      <img src="#" alt="Imagem da Receita" width="300" />
      <h3>INSTRUÇÕES:</h3>
      <p>Aqui serão exibidas as instruções da receita.</p>

      <p style={{ marginTop: '30px', fontWeight: 'bold' }}>GOSTOU DA RECEITA?</p>
      <p>SIM   NÃO</p>
    </div>
  );
}
