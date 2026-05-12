# V.&J. Fonseca — Site institucional (v2)

Site da serralharia **V.&J. Fonseca**, especialista em painéis metálicos, fachadas, vedações e perfis para construção em Setúbal / Palmela.

Versão 2 com direção editorial industrial escura. Sucessora de [vjfonseca](https://github.com/itsjustiago/vjfonseca).

## Stack

- **Next.js 16** com App Router e React Server Components
- **TypeScript** estrito
- **Tailwind CSS v4** com tokens via `@theme inline`
- **Framer Motion** para reveals e micro-interações
- **lucide-react** para iconografia
- Tipografia **Fraunces** (editorial) + **Inter** (UI) via `next/font/google`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, JSON-LD LocalBusiness
│   ├── page.tsx          # composição das secções
│   ├── globals.css       # design tokens (dark editorial)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/
│   ├── layout/           # Navbar (scroll-spy), Footer
│   ├── sections/         # Hero, Products, Portfolio, About, Contact
│   └── ui/               # Button, Card, Reveal, Form, Logo, etc.
├── hooks/
│   └── useActiveSection.ts
└── lib/
    ├── constants.ts      # PRODUCTS, PORTFOLIO, DIFFERENTIATORS, CONTACT
    ├── types.ts
    └── utils.ts          # cn(), EASE_OUT
```

## Desenvolvimento

```bash
npm install
npm run dev      # localhost:3000
npm run build    # produção
npm run start    # serve build
npm run lint
```

## Sistema de design

Paleta dark editorial:

| Token | Valor | Uso |
|---|---|---|
| `--color-bg-base` | `#0A0B0D` | Fundo principal |
| `--color-bg-surface` | `#14161A` | Cartões, secções alternadas |
| `--color-bg-contrast` | `#06070A` | Hero e Contacto |
| `--color-accent` | `#5B9BE5` | Azul-aço primário |
| `--color-text-primary` | `#F4F4F5` | Texto principal |
| `--color-text-muted` | `#9BA1A8` | Texto secundário |

Tipografia: Fraunces para display (`.display`), Inter para UI, JetBrains Mono para metadados.

## Conteúdo

Toda a informação de negócio (produtos, portefólio, contactos, copy) vive em `src/lib/constants.ts`. Para atualizar produtos, telefones, morada ou textos, edita esse ficheiro — nenhum outro lugar.

As imagens do portefólio usam URLs Unsplash. **Substituir por fotos reais de obra antes de publicar.**

## Formulário de contacto

O formulário em `ContactSection` é um stub `mailto:` (abre o cliente de email do utilizador pré-preenchido). Para produção, integrar com:

- [Resend](https://resend.com) + Route Handler em `app/api/contact/route.ts`
- [Formspree](https://formspree.io) (sem backend)

## Deploy (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fitsjustiago%2Fvjfonsecav2)

1. Importar este repositório em [vercel.com/new](https://vercel.com/new)
2. Sem variáveis de ambiente necessárias
3. Auto-deploy em cada push para `main`
4. Adicionar domínio `vj-fonseca.com` nas Settings

## Contactos do negócio

- **Telefone:** 263 079 366 / 916 641 573
- **Email:** jf@vjfonseca.com
- **Região:** Setúbal · Palmela
