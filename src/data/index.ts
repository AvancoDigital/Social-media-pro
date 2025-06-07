import { TestimonialType, ModuleType, AudienceType, BenefitType, StatType } from '../types';

export const benefits: BenefitType[] = [
  {
    id: 1,
    title: "Copywriting persuasivo para redes sociais",
    description: "Aprenda a escrever textos que vendem e engajam seu público.",
    icon: "PenLine"
  },
  {
    id: 2,
    title: "Gestão de tráfego pago",
    description: "Domine Meta Ads, TikTok Ads e outras plataformas de publicidade.",
    icon: "BarChart"
  },
  {
    id: 3,
    title: "Fórmulas para cobrar R$2.000+ por projeto",
    description: "Descubra como precificar seus serviços e negociar com clientes.",
    icon: "DollarSign"
  },
  {
    id: 4,
    title: "Checklist 'Primeiro Cliente em 48h'",
    description: "Bônus exclusivo no valor de R$97, HOJE GRÁTIS!",
    icon: "Gift"
  }
];

export const stats: StatType[] = [
  {
    id: 1,
    value: "100%",
    label: "dos negócios usam redes sociais, mas só 5% sabem monetizar."
  },
  {
    id: 2,
    value: "R$15.000",
    label: "é quanto profissionais qualificados ganham por mês (Glassdoor)."
  },
  {
    id: 3,
    value: "312%",
    label: "foi o crescimento do mercado de Social Media em 2024."
  }
];

export const audience: AudienceType[] = [
  {
    id: 1,
    title: "Iniciantes",
    description: "Aprenda do ZERO a criar posts virais e gerir contas profissionais.",
    icon: "UserPlus"
  },
  {
    id: 2,
    title: "Empreendedores",
    description: "Monetize seu negócio com estratégias de Instagram e TikTok.",
    icon: "Briefcase"
  },
  {
    id: 3,
    title: "Freelancers",
    description: "Feche clientes mesmo sem experiência comprovada.",
    icon: "Laptop"
  }
];

export const modules: ModuleType[] = [
  {
    id: 1,
    title: "Copywriting para Redes",
    description: "Gatilhos mentais, CTAs, SEO e técnicas avançadas para criar textos que convertem.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Gestão de Tráfego Pago",
    description: "Como criar campanhas lucrativas com Meta Ads, TikTok Ads e outros canais.",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "Como cobrar R$200–R$5.000 por projeto",
    description: "Estratégias de precificação, negociação e como se posicionar como especialista.",
    icon: "CreditCard"
  },
  {
    id: 4,
    title: "Bônus: Templates de Posts Prontos",
    description: "PDF editável com modelos de posts para diferentes objetivos e plataformas.",
    icon: "FileType"
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Ana",
    age: "28 anos",
    content: "Comprei o e-book e em 1 semana fechei meu primeiro cliente! RECOMENDO!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    name: "Carlos",
    role: "Empreendedor",
    content: "Já recuperei o investimento 20x. O método de prospecção é incrível!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    name: "Mariana",
    role: "Social Media",
    content: "As técnicas de copywriting são fantásticas. Meus posts agora geram 3x mais engajamento!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

export const KIWIFY_LINK = "https://pay.kiwify.com.br/gTDETKE";