export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Remedidora",
  description:
    "Uma calculadora para calcular a quantidade necessária para cada animal, para médicos veterinários de animais de pequeno a grande porte.",
  emoji: "🐾",
  accent: "#0d9488",
  upcomingFeatures: [
    {
      title: "Calculadora de dose",
      description:
        "Informe dose em mg/kg e o peso do animal para obter a dose em mg e o volume em mL.",
    },
    {
      title: "Perfis por espécie",
      description:
        "Escolha cão, gato, equino, bovino, ovino ou suíno com faixas de peso típicas.",
    },
    {
      title: "Biblioteca de medicamentos",
      description:
        "Consulte fármacos comuns com concentração e faixa de dose por espécie.",
    },
    {
      title: "Cálculo de fluidoterapia",
      description:
        "Calcule a taxa de infusão em mL/h e gotas/min a partir do peso e da necessidade diária.",
    },
    {
      title: "Conversor de unidades",
      description: "Converta kg↔lb, mg↔mL e % para mg/mL em um clique.",
    },
    {
      title: "Histórico de cálculos",
      description:
        "Salve os cálculos de cada usuário para consultar e repetir depois.",
    },
  ] satisfies Feature[],
};
