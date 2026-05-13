import type {
  NavLink,
  ProductCategory,
  PortfolioProject,
  Differentiator,
  ContactInfo,
  Testimonial,
  Stat,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "A casa", href: "#sobre" },
  { label: "Serviços", href: "#produtos" },
  { label: "Trabalhos", href: "#portefolio" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#contacto" },
];

export const PRODUCTS: ProductCategory[] = [
  {
    id: "portoes",
    iconName: "DoorOpen",
    title: "Portões e portas",
    description:
      "Pedonais, automáticos, de batente ou de correr. Em ferro forjado, aço inox ou tubo galvanizado, conforme o uso e a casa.",
    items: ["Batente", "Correr", "Automatização", "Pedonal", "Articulado"],
  },
  {
    id: "gradeamentos",
    iconName: "Grid3x3",
    title: "Gradeamentos e corrimãos",
    description:
      "Varandas, escadas, terraços, marquises. Modelos clássicos ou linhas mais simples, sempre tomados à medida.",
    items: ["Varanda", "Escada", "Terraço", "Inox", "Forjado"],
  },
  {
    id: "estruturas",
    iconName: "Layers",
    title: "Estruturas metálicas",
    description:
      "Coberturas, alpendres, naves, mezanines. Perfis HEB, IPE e tubo, galvanizados a quente quando o serviço o exige.",
    items: ["Cobertura", "Alpendre", "Nave", "Mezanine"],
  },
  {
    id: "vedacoes",
    iconName: "Shield",
    title: "Vedações e perímetros",
    description:
      "Quintas, indústrias, recintos. Painel eletrosoldado, malha rede e rede ovelheira, com postes próprios.",
    items: ["Painel", "Malha", "Postes", "Cancelas"],
  },
  {
    id: "reparacoes",
    iconName: "Wrench",
    title: "Reparações e retoques",
    description:
      "Soldadura local, recuperação de portões antigos, substituição de fechaduras, repintura. Visita ao terreno quando preciso.",
    items: ["Soldadura", "Pintura", "Anti-corrosão", "Fechaduras"],
  },
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "p1",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=1000&q=80",
    title: "Portão de quinta",
    tag: "Ferro forjado · 4,8 m",
    year: "2024",
    location: "Cabanas de Torres",
  },
  {
    id: "p2",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Varanda",
    tag: "Inox 304 · 12 m",
    year: "2024",
    location: "Alenquer",
  },
  {
    id: "p3",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Escada de loft",
    tag: "Aço pintado · 3 m",
    year: "2023",
    location: "Torres Vedras",
  },
  {
    id: "p4",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Alpendre",
    tag: "Tubo galvanizado · 36 m²",
    year: "2023",
    location: "Cadaval",
  },
  {
    id: "p5",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Cancela agrícola",
    tag: "Tubo galv. · 6 m",
    year: "2023",
    location: "Sobral de Monte Agraço",
  },
  {
    id: "p6",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Portão automático",
    tag: "Correr motorizado · 5 m",
    year: "2022",
    location: "Mafra",
  },
  {
    id: "p7",
    image:
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Vedação industrial",
    tag: "Painel Ø5 · 1.200 m",
    year: "2022",
    location: "Azambuja",
  },
  {
    id: "p8",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Corrimão exterior",
    tag: "Inox escovado · 2,2 m",
    year: "2021",
    location: "Vila Franca de Xira",
  },
  {
    id: "p9",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Marquise",
    tag: "Perfil C 200 · 18 m²",
    year: "2021",
    location: "Caldas da Rainha",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "atelier",
    iconName: "Hammer",
    stat: "2019",
    title: "Atelier de família",
    description:
      "Família Fonseca em Cabanas de Torres, desde 2019. Sem central de chamadas, sem subcontratos.",
  },
  {
    id: "medida",
    iconName: "Settings2",
    stat: "100%",
    title: "Trabalho à medida",
    description:
      "Cada peça desenhada, soldada e instalada pela mesma equipa. Sem catálogo industrial.",
  },
  {
    id: "cobertura",
    iconName: "MapPin",
    stat: "12+",
    title: "Concelhos cobertos",
    description:
      "Zona Oeste e distrito de Lisboa — Alenquer, Torres Vedras, Cadaval, Mafra, Lisboa.",
  },
  {
    id: "resposta",
    iconName: "Clock",
    stat: "24h",
    title: "Resposta a orçamentos",
    description:
      "Mande memorial, planta ou só uma fotografia. Em 24 horas tem proposta orçamentada.",
  },
];

export const CONTACT: ContactInfo = {
  phone: "263079366",
  phoneDisplay: "263 079 366",
  mobile: "916641573",
  mobileDisplay: "916 641 573",
  email: "jf@vjfonseca.com",
  address: "Rua das Flores n.º 8, 2580-121 Cabanas de Torres",
  region: "Cabanas de Torres · Alenquer",
  hours: "Seg–Sex · 08h00 — 18h00",
  whatsapp:
    "https://wa.me/351916641573?text=Boa%20tarde%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento.",
};

export const HERO = {
  eyebrow: "Serralharia de família · desde 2019",
  headline: ["Ferro forjado", "à medida."],
  subtextLines: [
    "Portões, gradeamentos e estruturas em ferro e aço.",
    "Atelier em Cabanas de Torres · orçamento em 24 horas.",
  ],
  ctaPrimary: "Pedir orçamento",
  ctaSecondary: "Ver trabalhos",
  scrollHint: { left: "Descer", right: "ver os trabalhos" },
};

export const ABOUT = {
  eyebrow: "A casa",
  title: "Uma serralharia de família, em Cabanas de Torres.",
  paragraphs: [
    "A V.&J. Fonseca, Lda foi constituída em 2019, na Rua das Flores, em Cabanas de Torres. Nasceu para servir as casas e quintas da zona Oeste: Alenquer, Sobral de Monte Agraço, Torres Vedras, Cadaval, Azambuja.",
    "É a mesma família a atender o telefone, a ir a obra medir e a soldar a peça. Sem central de chamadas, sem subcontratos e sem catálogo industrial: trabalho à medida, feito por quem o desenha.",
  ],
  bullets: [
    "Empresa registada · NIPC 515 379 824 · Conservatória de Lisboa",
    "Atelier próprio em Cabanas de Torres, Alenquer",
    "Trabalhamos ferro, aço inox e galvanizado",
    "Documentos técnicos e DoP entregues com cada obra",
    "Garantia escrita sobre instalação e acabamentos",
  ],
};

export const PRODUCTS_SECTION = {
  eyebrow: "Serviços",
  title: ["Cinco famílias de trabalho.", "O que fazemos."] as const,
  lead: "Cada um sai do nosso atelier desenhado, soldado e instalado pela mesma equipa.",
  count: "05",
  countLabel: "famílias",
};

export const PORTFOLIO_SECTION = {
  eyebrow: "Trabalhos",
  title: ["Alguns dos nossos", "trabalhos."] as const,
  lead: "Obras recentes na zona Oeste e distrito de Lisboa. Para o portfólio completo, basta pedir por email.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Manuel Barata",
    role: "Quinta em Cabanas de Torres · 2024",
    quote:
      "Fizeram-me o portão da quinta em Cabanas de Torres. Vieram, mediram, mostraram o desenho, soldaram e instalaram em três semanas certinhas. Pessoa séria, trabalho bem feito.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Família Pereira",
    role: "Cadaval · 2023",
    quote:
      "Já é a segunda vez que trabalhamos com o Sr. Fonseca. Fez-nos a estrutura do alpendre e há um ano o gradeamento da varanda. Trabalho limpo, instalação rápida, preço justo.",
    rating: 5,
  },
  {
    id: "t3",
    name: "L. Mendes",
    role: "Operações · Logística Azambuja · 2022",
    quote:
      "Precisava de uma vedação para 1.200 metros de perímetro logístico. Mandei pedido na quarta, na quinta tinha orçamento. Em três semanas estava montada. Recomendo.",
    rating: 5,
  },
  {
    id: "t4",
    name: "António Carvalho",
    role: "Moradia · Torres Vedras · 2024",
    quote:
      "Pedi um corrimão exterior em inox. Visitaram a obra, propuseram um desenho e em duas semanas estava montado. Acabamento impecável. Já recomendei a vizinhos.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Sr. Lourenço",
    role: "Quinta · Sobral de Monte Agraço · 2023",
    quote:
      "Trabalho de gente honesta. Fizeram-me a cancela e ainda voltaram para retocar a pintura sem cobrar. Família séria, vale o que custa.",
    rating: 5,
  },
];

export const STATS: Stat[] = [
  { value: "150+", label: "Obras instaladas." },
  { value: "100%", label: "Trabalho à medida." },
  { value: "24h", label: "Resposta a orçamentos." },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: "Testemunhos",
  title: ["Palavra de quem", "já trabalhou connosco."] as const,
  lead: "Cinco anos a trabalhar para casas, quintas e indústrias da zona Oeste.",
};

export const CONTACT_SECTION = {
  eyebrow: "Contacto",
  title: "Diga o que precisa. Em 24 horas tem preço.",
  subtitle:
    "Atendimento direto, sem intermediários. Mande memorial, planta ou só uma fotografia do estaleiro, e respondemos com proposta orçamentada.",
};

export const COMPANY = {
  legalName: "V.&J. Fonseca, Lda",
  nipc: "515 379 824",
  cae: "43410",
  registry: "Conservatória do Registo Comercial de Lisboa",
  founded: 2019,
};
