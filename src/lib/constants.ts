import type {
  NavLink,
  ProductCategory,
  PortfolioProject,
  Differentiator,
  ContactInfo,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Produtos", href: "#produtos" },
  { label: "Portefólio", href: "#portefolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export const PRODUCTS: ProductCategory[] = [
  {
    id: "coberturas",
    iconName: "Layers",
    title: "Coberturas",
    description:
      "Soluções completas de cobertura metálica para edificações industriais, comerciais e residenciais.",
    items: [
      "Painel Sandwich Cobertura",
      "Painel Imitação Telha",
      "Painel Alveolar",
      "Termo Painel Universal",
    ],
  },
  {
    id: "fachadas",
    iconName: "PanelTop",
    title: "Fachadas",
    description:
      "Revestimentos de fachada com acabamento lacado de alta durabilidade e resistência às intempéries.",
    items: [
      "Fixação a Vista",
      "Fixação Oculta",
      "Chapa Lacada 1 Face",
      "Chapa Lacada 2 Faces",
    ],
  },
  {
    id: "vedacao",
    iconName: "Shield",
    title: "Vedação",
    description:
      "Painéis de vedação robustos para delimitação de perímetros industriais e comerciais.",
    items: ["Painel de Vedação", "Painel de Rede Metálica"],
  },
  {
    id: "perfis",
    iconName: "Wrench",
    title: "Perfis Metálicos",
    description:
      "Perfis e calhas galvanizadas para estruturas de suporte e acabamentos construtivos.",
    items: ["Perfil Ómega", "Perfil U Galvanizado", "Calha C Galvanizada"],
  },
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "p1",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=1000&q=80",
    title: "Armazém Industrial",
    tag: "Cobertura Industrial",
    year: "2023",
    location: "Setúbal",
  },
  {
    id: "p2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Edifício Comercial",
    tag: "Fachada Comercial",
    year: "2023",
    location: "Palmela",
  },
  {
    id: "p3",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Perímetro Industrial",
    tag: "Vedação",
    year: "2022",
    location: "Sesimbra",
  },
  {
    id: "p4",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Moradia Unifamiliar",
    tag: "Cobertura Residencial",
    year: "2024",
    location: "Barreiro",
  },
  {
    id: "p5",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Nave Logística",
    tag: "Painel Sandwich",
    year: "2024",
    location: "Montijo",
  },
  {
    id: "p6",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Centro Comercial",
    tag: "Fachada Oculta",
    year: "2023",
    location: "Almada",
  },
  {
    id: "p7",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Complexo Desportivo",
    tag: "Cobertura Alveolar",
    year: "2022",
    location: "Palmela",
  },
  {
    id: "p8",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Parque Industrial",
    tag: "Vedação Perimetral",
    year: "2024",
    location: "Setúbal",
  },
  {
    id: "p9",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Arrecadação Agrícola",
    tag: "Termo Painel",
    year: "2023",
    location: "Alcochete",
  },
  {
    id: "p10",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Unidade de Produção",
    tag: "Perfis Metálicos",
    year: "2022",
    location: "Setúbal",
  },
  {
    id: "p11",
    image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Habitação Coletiva",
    tag: "Fachada Lacada",
    year: "2024",
    location: "Seixal",
  },
  {
    id: "p12",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&h=500&q=80",
    title: "Terminal Portuário",
    tag: "Cobertura Industrial",
    year: "2023",
    location: "Setúbal",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "experiencia",
    iconName: "Clock",
    stat: "+20",
    title: "Anos de Experiência",
    description:
      "Décadas de presença no sector da construção metálica, com centenas de obras concluídas.",
  },
  {
    id: "qualidade",
    iconName: "BadgeCheck",
    stat: "100%",
    title: "Qualidade Garantida",
    description:
      "Materiais rigorosamente selecionados para durabilidade máxima em condições adversas.",
  },
  {
    id: "local",
    iconName: "MapPin",
    stat: "360°",
    title: "Presença Regional",
    description:
      "Baseados em Setúbal, servimos toda a região de Lisboa e Setúbal com rapidez de resposta.",
  },
  {
    id: "medida",
    iconName: "Settings2",
    stat: "11+",
    title: "Soluções à Medida",
    description:
      "Mais de 11 produtos especializados, adaptados às necessidades específicas de cada projeto.",
  },
];

export const CONTACT: ContactInfo = {
  phone: "263079366",
  phoneDisplay: "263 079 366",
  mobile: "916641573",
  mobileDisplay: "916 641 573",
  email: "jf@vjfonseca.com",
  address: "Setúbal, Portugal",
  region: "Região de Setúbal / Palmela",
};

export const HERO = {
  eyebrow: "Construção Metálica de Excelência",
  headline: ["Painéis e Perfis", "Metálicos para", "a sua Obra"],
  subtext:
    "Fornecedor especializado em coberturas, fachadas e vedações metálicas. Qualidade certificada, entrega rápida, suporte técnico dedicado.",
  ctaPrimary: "Peça um Orçamento",
  ctaSecondary: "Ver Produtos",
};

export const ABOUT = {
  eyebrow: "Sobre Nós",
  title: "Uma empresa familiar com décadas de especialização",
  paragraphs: [
    "A V.&J. Fonseca nasceu da paixão pela construção metálica e da vontade de oferecer ao mercado materiais de qualidade superior. Sediados em Setúbal, trabalhamos lado a lado com construtores, empreiteiros e serralheiros de toda a região.",
    "A nossa missão é simples: fornecer os melhores painéis e perfis metálicos, com aconselhamento técnico honesto e prazos de entrega que não comprometem as suas obras.",
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Fale Connosco",
  title: "Pronto para começar o seu projeto?",
  subtitle:
    "Envie-nos os detalhes da sua obra e respondemos com um orçamento detalhado em menos de 24 horas.",
};
