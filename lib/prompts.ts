export interface Prompt {
  id: number
  category: string
  categorySlug: string
  promptNumber: number
  text: string
}

export const categories = [
  { slug: "escrita", label: "Escrita Humanizada", color: "brand-calla" },
  { slug: "conteudo", label: "Estratégia de Conteúdo", color: "brand-carota" },
  { slug: "seo", label: "SEO & Crescimento", color: "brand-cloro" },
  { slug: "saas", label: "Construção de SaaS", color: "brand-atmos" },
  { slug: "marketing", label: "Marketing & Vendas", color: "brand-sahara" },
  { slug: "code", label: "Claude Code & CLI", color: "brand-kobold" },
  { slug: "produtividade", label: "Produtividade & Sistemas", color: "brand-midori" },
  { slug: "debugging", label: "Debugging & Refatoração", color: "brand-boreal" },
  { slug: "landing", label: "Landing Pages & Copy", color: "brand-nubia" },
  { slug: "monetizacao", label: "Monetização & Escala", color: "brand-khewra" },
] as const

export const prompts: Prompt[] = [
  // 1:Escrita Humanizada
  {
    id: 1,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 1,
    text: `Analise estes 5 textos da minha autoria. Extraia minha voz: estruturas de frase, escolhas de palavras, ritmo, personalidade. Formate como um Cartão de Voz reutilizável: [AMOSTRAS]. Inclua uma lista de "faça/não faça", uma comparação "parece comigo" vs "não parece comigo", e 3 frases de exemplo na minha voz.`,
  },
  {
    id: 2,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 2,
    text: `Reescreva este texto gerado por IA para soar natural. Remova frases de preenchimento, varie o comprimento das sentenças, use contrações, adicione detalhes específicos: [TEXTO]. Destaque cada mudança que você fez e explique por quê. Sinalize frases que ainda soam robóticas após a reescrita.`,
  },
  {
    id: 3,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 3,
    text: `Escreva uma thread no Twitter sobre [TÓPICO] na minha voz. Regras: nada de "aprofundar", "vale ressaltar", "divisor de águas". Comece frases com E, Mas, Então. Inclua um tweet-gancho que gere 50%+ de cliques em "ler mais", um tweet compartilhável independente, e um CTA no final.`,
  },
  {
    id: 4,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 4,
    text: `Transforme esta lista de funcionalidades do produto em copy focada em benefícios que faça o leitor sentir algo. Sem buzzwords: [FUNCIONALIDADES]. Use cenários concretos de antes/depois para cada benefício. Mostre a vida do usuário sem vs com o produto.`,
  },
  {
    id: 5,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 5,
    text: `Escreva uma história pessoal sobre [EXPERIÊNCIA] para o LinkedIn. Estrutura: gancho, tensão, lição, takeaway acionável. Menos de 200 palavras. Faça a primeira linha impossível de ignorar. Inclua um momento vulnerável que gere confiança e termine com uma pergunta.`,
  },
  {
    id: 6,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 6,
    text: `Crie um guia de voz da marca para [MARCA]. Defina: tom, traços de personalidade, palavras que usamos, palavras que nunca usamos, frases de exemplo para cada contexto. Inclua exemplos de voz para 5 cenários: post em rede social, mensagem de erro, email de onboarding, página de preços e resposta do suporte.`,
  },

  // 2:Estratégia de Conteúdo
  {
    id: 7,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 1,
    text: `Atue como estrategista de conteúdo. Crie um calendário de conteúdo de 30 dias para [NICHO] focando em [PÚBLICO]. Inclua ganchos, formatos, horários de postagem, plataformas ideais por post, 3-4 pilares de conteúdo para rotacionar, e metas semanais de engajamento para acompanhar crescimento.`,
  },
  {
    id: 8,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 2,
    text: `Transforme este post de blog em 5 threads no Twitter, 3 posts no LinkedIn e 10 legendas para Instagram. Combine o tom de cada plataforma, inclua um gancho para cada peça, respeite os limites de caracteres, e adicione uma estratégia de hashtags por plataforma: [CONTEÚDO]`,
  },
  {
    id: 9,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 3,
    text: `Gere 20 ganchos impossíveis de ignorar para [TÓPICO] usando estas técnicas: lacuna de curiosidade, afirmação ousada, estatística, abertura com história, opinião controversa. Avalie cada gancho de 1-10 em controvérsia e potencial de engajamento com uma justificativa de uma linha.`,
  },
  {
    id: 10,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 4,
    text: `Analise meus 10 posts com melhor desempenho. Identifique padrões nos ganchos, comprimento, formato e tópico. Me dê uma fórmula replicável e sinalize o que evitar com base nos meus posts com pior desempenho: [POSTS]`,
  },
  {
    id: 11,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 5,
    text: `Escreva um roteiro de YouTube para "[TÓPICO]" que mantenha retenção acima de 60%. Inclua interrupções de padrão a cada 90 segundos, sugestões de b-roll por seção, 3 conceitos de thumbnail e 5 opções de título para teste A/B.`,
  },
  {
    id: 12,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 6,
    text: `Crie 10 ideias de conteúdo que quebrem mitos do [NICHO], desafiem crenças comuns e gerem debate nos comentários. Para cada uma, inclua a crença comum lado a lado com sua opinião contrária.`,
  },

  // 3:SEO & Crescimento
  {
    id: 13,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 1,
    text: `Gere um briefing de conteúdo completo para a palavra-chave "[PALAVRA-CHAVE]". Inclua: intenção de busca, contagem de palavras, estrutura H2/H3, lacunas dos concorrentes, meta description, alvos de linkagem interna, estratégia de featured snippet e recomendações de schema markup.`,
  },
  {
    id: 14,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 2,
    text: `Analise estas 5 páginas concorrentes que ranqueiam para [PALAVRA-CHAVE]. Identifique lacunas de conteúdo que posso explorar para ultrapassá-las. Compare contagem de palavras, potencial de backlinks, frescor do conteúdo e ângulos únicos que elas deixaram passar: [URLS]`,
  },
  {
    id: 15,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 3,
    text: `Crie uma estratégia de SEO programático que gere 100+ páginas a partir de [FONTE DE DADOS]. Inclua estrutura de URL, template, plano de linkagem interna, otimização de crawl budget, estratégia de canonicals e limites de unicidade de conteúdo para evitar penalidades por conteúdo fino.`,
  },
  {
    id: 16,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 4,
    text: `Escreva uma landing page que ranqueie para "[PALAVRA-CHAVE]" E converta a 5%+. Inclua copy above-the-fold, seções de prova social, FAQ schema, estratégia de posicionamento de CTA, sinais de confiança e recomendações de layout mobile-first.`,
  },
  {
    id: 17,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 5,
    text: `Faça auditoria da estrutura do meu site para problemas de SEO. Verifique: rastreabilidade, links internos, páginas órfãs, canibalização de palavras-chave, Core Web Vitals. Forneça uma lista de correções priorizada com impacto estimado de tráfego para cada problema: [URL]`,
  },
  {
    id: 18,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 6,
    text: `Construa um mapa de autoridade tópica para [NICHO]. Agrupe 50 palavras-chave em clusters com páginas pilar e artigos de suporte. Inclua volume de busca, scores de dificuldade e um roadmap de publicação de 6 meses com prioridades.`,
  },

  // 4:Construção de SaaS
  {
    id: 19,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 1,
    text: `Valide esta ideia de SaaS com uma análise de primeiros princípios. Tamanho de mercado, competição, defensibilidade e um veredito construir/não construir. Inclua estratégia de distribuição, escopo de MVP com cronograma e as 3 suposições mais arriscadas para testar primeiro: [IDEIA]`,
  },
  {
    id: 20,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 2,
    text: `Projete uma página de preços com 3 planos para [PRODUTO]. Inclua estratégia de feature gating, psicologia de preço-âncora e um plano "mais popular" recomendado. Adicione toggle anual vs mensal com economia, posicionamento de prova social e uma FAQ de objeções abaixo dos preços.`,
  },
  {
    id: 21,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 3,
    text: `Escreva emails de onboarding (Dia 0, 1, 3, 7, 14) para [PRODUTO] que reduzam churn e impulsionem ativação. Inclua linhas de assunto, horários ideais de envio e um gatilho comportamental para usuários que não completaram o setup até o Dia 3. Métrica alvo: [META].`,
  },
  {
    id: 22,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 4,
    text: `Gere um plano completo de integração com Stripe para [PRODUTO]: fluxo de checkout, tratamento de webhooks, ciclo de vida de assinaturas e estratégia de dunning. Inclua cronograma de retry para pagamentos falhos, períodos de carência e lógica de proration para upgrade/downgrade.`,
  },
  {
    id: 23,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 5,
    text: `Crie um checklist de lançamento de produto com 40 itens divididos em: pré-lançamento (buzz), dia do lançamento (distribuição) e pós-lançamento (retenção). Inclua canais específicos para postar, sequências de email para enviar e métricas de sucesso para acompanhar em cada fase.`,
  },
  {
    id: 24,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 6,
    text: `Analise meus dados de churn e sugira 5 intervenções para reduzir o churn mensal de [X]% para [Y]%. Inclua sequências de email de win-back, otimizações no fluxo de cancelamento e sinais de alerta precoce para monitorar antes que os usuários cancelem: [CONTEXTO]`,
  },

  // 5:Marketing & Vendas
  {
    id: 25,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 1,
    text: `Gere 10 ideias de lead magnet para [NICHO] que direcionem naturalmente para a compra de [PRODUTO]. Cada uma deve levar menos de 2 horas para criar. Ranqueie por potencial de conversão, inclua tipo de formato (PDF, quiz, template) e escreva um gancho de uma linha para cada.`,
  },
  {
    id: 26,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 2,
    text: `Escreva uma sequência de cold email (3 emails) para [PRODUTO] focando em [PÚBLICO]. Use o framework PAS. Inclua linhas de assunto com 40%+ de taxa de abertura. Adicione timing entre emails, variáveis de personalização e um script de follow-up por voicemail.`,
  },
  {
    id: 27,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 3,
    text: `Liste 15 objeções que as pessoas têm antes de comprar [PRODUTO]. Para cada uma, escreva um contra-argumento de uma linha que eu possa usar em copy de vendas. Categorize por tipo (preço, confiança, timing, concorrência) e sugira onde posicionar cada contra-argumento na landing page.`,
  },
  {
    id: 28,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 4,
    text: `Crie uma estratégia de viral loop para [PRODUTO]. Como cada usuário pode trazer 1,5 novos usuários através do próprio produto? Inclua o ponto de gatilho de referral, estrutura de incentivos, implementação de tracking e uma projeção realista de K-factor.`,
  },
  {
    id: 29,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 5,
    text: `Escreva 5 headlines de landing page para [PRODUTO] usando estes frameworks: AIDA, PAS, Antes/Depois, Prova Social, Urgência. Inclua subheadlines e texto do botão de CTA correspondentes para cada. Ranking de prioridade de teste A/B do maior para o menor potencial.`,
  },
  {
    id: 30,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 6,
    text: `Projete um programa de indicação para [PRODUTO] com estrutura de incentivos, plano de rastreamento e templates de email para indicadores. Inclua recompensas em níveis, badges por marcos alcançados, copy viral para compartilhamento em redes sociais e ROI projetado por indicação.`,
  },

  // 6:Claude Code & CLI
  {
    id: 31,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 1,
    text: `Atue como arquiteto sênior. Revise todo o meu codebase e gere um arquivo CLAUDE.md com padrões de código, estrutura do projeto, convenções de nomenclatura e contexto da tech stack para que futuras sessões com o Claude sejam 10x mais eficientes.`,
  },
  {
    id: 32,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 2,
    text: `Faça um git diff e finja que você é um dev sênior fazendo code review e que ODEIA essa implementação. Destrua tudo: o que você criticaria, refatoraria ou rejeitaria num PR review?`,
  },
  {
    id: 33,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 3,
    text: `Analise este stack trace de erro. Identifique a causa raiz, explique exatamente por que acontece em português simples, sugira uma correção com tratamento de erro adequado e escreva um teste de regressão para prevenir: [ERRO]`,
  },
  {
    id: 34,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 4,
    text: `Refatore esta função para ser mais legível, performática e testável. Use princípios de clean architecture, explique cada decisão que você tomar e me mostre o diff antes/depois: [CÓDIGO]`,
  },
  {
    id: 35,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 5,
    text: `Gere uma suíte de testes completa para [FUNÇÃO] cobrindo happy paths, edge cases, tratamento de erros, valores limítrofes e integração com dependências. Use blocos describe/it com nomes de teste claros.`,
  },
  {
    id: 36,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 6,
    text: `Revise minha rota de API para vulnerabilidades de segurança: verifique SQL injection, XSS, CSRF, bypass de autenticação, falhas de rate limiting, validação de input e exposição de dados. Priorize correções por severidade: [CÓDIGO]`,
  },

  // 7:Produtividade & Sistemas
  {
    id: 37,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 1,
    text: `Projete um sistema de workflow semanal para alguém equilibrando [PAPEL 1] e [PAPEL 2]. Inclua blocos de tempo, dias de batching e gestão de energia. Adicione um bloco de deep work "sem reunião", buffers de troca de contexto e um ritual de revisão na sexta-feira para planejar a semana seguinte.`,
  },
  {
    id: 38,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 2,
    text: `Transforme esta lista de tarefas avassaladora em um plano de execução claro de 7 dias com prioridades e dependências: [TAREFAS]. Sinalize quais tarefas posso delegar ou automatizar, identifique a única tarefa que desbloqueia todo o resto e adicione tempo de buffer.`,
  },
  {
    id: 39,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 3,
    text: `Sugira 10 automações com IA que posso configurar esta semana para economizar 5+ horas. Minhas ferramentas: [FERRAMENTAS]. Meus gargalos: [PONTOS DE DOR]. Inclua nomes exatos das ferramentas, tempo de setup para cada automação e horas estimadas economizadas por semana com ROI total.`,
  },
  {
    id: 40,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 4,
    text: `Crie uma matriz de decisão para escolher entre [OPÇÕES]. Pontue cada uma em: potencial de upside, risco, custo de tempo, reversibilidade e alinhamento com objetivos. Inclua um sistema de pontuação ponderada, uma recomendação clara de vencedor e a única pergunta que mudaria a resposta.`,
  },
  {
    id: 41,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 5,
    text: `Projete um sistema de batching de conteúdo que me permita produzir 30 dias de conteúdo em uma sessão de 8 horas. Nicho: [NICHO]. Formatos: [FORMATOS]. Inclua cronograma minuto a minuto para o dia de batch, arquivos de template para preparar antecipadamente e uma revisão pós-batch.`,
  },
  {
    id: 42,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 6,
    text: `Construa um OS pessoal: rotina matinal, template de revisão diária, ritual de planejamento semanal e framework de reflexão mensal para [OBJETIVO]. Inclua estrutura de template para Notion/Obsidian, métricas de rastreamento de hábitos e framework de definição de metas trimestrais com OKRs.`,
  },

  // 8:Debugging & Refatoração
  {
    id: 43,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 1,
    text: `Este código funciona mas é impossível de manter. Refatore usando princípios de clean architecture. Extraia utilitários reutilizáveis, adicione tipos TypeScript onde faltam e mostre um diagrama de dependências antes e depois da refatoração. Explique cada decisão: [CÓDIGO]`,
  },
  {
    id: 44,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 2,
    text: `Estou recebendo [ERRO] em produção mas não consigo reproduzir localmente. Me guie por um processo de debugging sistemático com 10 passos diagnósticos. Inclua um checklist de diff de ambientes, uma estratégia de logging para adicionar e como configurar monitoramento para pegar da próxima vez.`,
  },
  {
    id: 45,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 3,
    text: `Compare estas duas abordagens de implementação para [FEATURE]. Prós, contras, implicações de performance e qual você escolheria para um time de [TAMANHO]. Inclua uma matriz de decisão, tempo estimado de desenvolvimento para cada e o peso de manutenção ao longo de 12 meses: [ABORDAGEM A] vs [ABORDAGEM B]`,
  },
  {
    id: 46,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 4,
    text: `Gere um plano de migração para fazer upgrade de [TECH ANTIGA] para [TECH NOVA] com zero downtime. Inclua estratégia de rollback, avaliação de risco, timeline faseada, estratégia de feature flag para rollout gradual e um runbook para o time seguir no dia da migração.`,
  },
  {
    id: 47,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 5,
    text: `Revise este schema de banco de dados para um app [TIPO]. Identifique: índices faltantes, riscos de N+1 query, problemas de normalização e gargalos de escalabilidade. Sugira SQL específico de criação de índices, recomende camadas de cache e estime performance de queries a 10x e 100x da escala atual: [SCHEMA]`,
  },
  {
    id: 48,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 6,
    text: `Escreva uma estratégia abrangente de tratamento de erros para [TIPO DE APP]. Cubra: erros voltados ao usuário, logging, lógica de retry, degradação graciosa e alertas. Inclua taxonomia de códigos de erro, snippets de integração com Sentry/logging e thresholds de alerta do PagerDuty para cada nível de severidade.`,
  },

  // 9:Landing Pages & Copy
  {
    id: 49,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 1,
    text: `Escreva copy above-the-fold para [PRODUTO] que comunique o valor em 3 segundos. Inclua: headline, subheadline, texto do botão CTA e linha de prova social. Forneça 3 variações (foco em benefício, curiosidade, prova social) para teste A/B e inclua direcionamento para a imagem hero.`,
  },
  {
    id: 50,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 2,
    text: `Gere 10 emails de solicitação de depoimento que posso enviar para clientes. Cada um deve facilitar que escrevam elogios específicos e críveis. Inclua um template de depoimento pré-escrito que possam editar, perguntas específicas para guiar a resposta e uma cadência de follow-up.`,
  },
  {
    id: 51,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 3,
    text: `Crie uma página de preços com seção de FAQ para [PRODUTO]. Aborde as 5 principais objeções de compra nas respostas do FAQ. Inclua uma tabela comparativa vs concorrentes, posicionamento de badge de garantia de devolução e sinais de confiança perto do botão CTA.`,
  },
  {
    id: 52,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 4,
    text: `Escreva um template de case study para [PRODUTO]. Estrutura: desafio, solução, resultados (com números específicos) e uma citação destaque. Inclua perguntas de entrevista para fazer ao cliente, um wireframe de layout visual e formato de título otimizado para SEO da página.`,
  },
  {
    id: 53,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 5,
    text: `Projete um wireframe de homepage em texto: cada seção, seu propósito, meta de contagem de palavras e a emoção que deve provocar. Inclua metas de profundidade de scroll por seção, diferenças de layout mobile vs desktop e lógica de posicionamento de CTA otimizada para conversão. Produto: [PRODUTO].`,
  },
  {
    id: 54,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 6,
    text: `Escreva microcopy para [PRODUTO]: estados vazios, mensagens de erro, confirmações de sucesso, tooltips e dicas de onboarding. Inclua 3 variações por mensagem (amigável, profissional, divertida) e especifique qual contexto se encaixa melhor para cada variação. Tom: [VOZ].`,
  },

  // 10:Monetização & Escala
  {
    id: 55,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 1,
    text: `Gere 10 ideias de produtos digitais que posso criar a partir da minha expertise em [HABILIDADE]. Inclua preço, formato e tempo estimado de construção para cada. Ranqueie por potencial de receita vs esforço, sugira uma ordem de lançamento e identifique quais produtos fazem cross-sell entre si.`,
  },
  {
    id: 56,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 2,
    text: `Crie uma estratégia de lançamento para um produto digital de R$[PREÇO]. Cubra: waitlist de pré-lançamento, sequência da semana de lançamento e funil evergreen. Inclua uma sequência de aquecimento por email de 14 dias, táticas de escassez que pareçam autênticas e um template de debrief pós-lançamento.`,
  },
  {
    id: 57,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 3,
    text: `Projete uma oferta de membership/comunidade em torno de [TÓPICO]. Inclua: planos, benefícios, preços, cadência de conteúdo e gatilhos de retenção. Adicione fluxo de onboarding para novos membros, rituais de engajamento da comunidade (calls semanais, desafios) e gatilhos de prevenção de churn.`,
  },
  {
    id: 58,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 4,
    text: `Analise minhas fontes de receita e sugira 3 formas de aumentar o ticket médio sem adicionar novos produtos. Inclua posicionamento específico de upsell/cross-sell, psicologia de preço de bundles e uma estrutura de programa de fidelidade com projeções de lifetime value: [OFERTAS ATUAIS]`,
  },
  {
    id: 59,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 5,
    text: `Escreva um roteiro de webinar que venda [PRODUTO] com 10%+ de taxa de conversão. Inclua: gancho, segmento de ensino, transição para pitch e tratamento de objeções. Adicione estrutura slide a slide, timing exato por segmento, sequência de email de replay e uma estratégia de Q&A ao vivo para fechar indecisos.`,
  },
  {
    id: 60,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 6,
    text: `Crie um template de outreach para parceria com [TIPO DE PARCEIRO]. Inclua: proposta de valor, estrutura proposta e sequência de follow-up. Adicione um breakdown de benefício mútuo, modelos de revenue share, ideias de conteúdo de co-marketing e um scorecard de sucesso da parceria de 90 dias.`,
  },

  // ── PROMPTS EXTRAS (61–100):4 por categoria ──

  // Escrita Humanizada: extras
  {
    id: 61,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 7,
    text: `Reescreva este email corporativo para soar mais humano e persuasivo sem perder profissionalismo. Mantenha o objetivo original, reduza jargões, adicione empatia e termine com um CTA claro. Versão original: [EMAIL]`,
  },
  {
    id: 62,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 8,
    text: `Crie 10 variações de abertura para [TIPO DE CONTEÚDO] que evitem clichês como "no mundo atual" ou "cada vez mais". Use técnicas de storytelling: pergunta provocativa, dado surpreendente, cena vívida, confissão pessoal. Ranqueie por potencial de retenção.`,
  },
  {
    id: 63,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 9,
    text: `Transforme este texto técnico/acadêmico em linguagem acessível para um público leigo. Mantenha a precisão factual, substitua termos técnicos por analogias do cotidiano e adicione exemplos práticos a cada conceito: [TEXTO]`,
  },
  {
    id: 64,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 10,
    text: `Analise a copy deste site/landing page e identifique 10 melhorias específicas. Para cada uma, mostre o texto original, o texto sugerido e explique a psicologia por trás da mudança (urgência, prova social, especificidade, etc.): [URL ou TEXTO]`,
  },

  // Estratégia de Conteúdo: extras
  {
    id: 65,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 7,
    text: `Crie uma estratégia de conteúdo para lançamento de [PRODUTO/SERVIÇO] em 3 fases: pré-lançamento (14 dias), lançamento (3 dias) e pós-lançamento (7 dias). Inclua posts diários com hook, formato e plataforma. Objetivo: gerar [X] leads.`,
  },
  {
    id: 66,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 8,
    text: `Analise o perfil @overlens e identifique: os 3 pilares de conteúdo mais fortes, a frequência ideal de postagem, os formatos que geram mais engajamento, e 5 ideias de conteúdo que faltam na estratégia atual. Baseie-se em padrões de viralização do nicho.`,
  },
  {
    id: 67,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 9,
    text: `Transforme este único conteúdo em 30 peças diferentes para múltiplas plataformas. Inclua: 5 tweets, 3 carrosséis Instagram, 2 Reels scripts, 5 stories com enquetes, 3 posts LinkedIn, 2 newsletters, 5 CTAs para bio, e 5 legendas com gancho: [CONTEÚDO]`,
  },
  {
    id: 68,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 10,
    text: `Crie um sistema de reaproveitamento de conteúdo para [NICHO]. Mostre como um único post longo vira 15+ peças. Inclua fluxograma de derivação, templates reutilizáveis por formato, e um calendário semanal de reciclagem de conteúdo antigo.`,
  },

  // SEO & Crescimento: extras
  {
    id: 69,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 7,
    text: `Crie uma estratégia de link building para [SITE] focada em [NICHO]. Inclua: 10 sites-alvo para guest posting, templates de outreach, estratégia de conteúdo linkável (infográficos, estudos, ferramentas gratuitas), e métricas para acompanhar progresso mensal.`,
  },
  {
    id: 70,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 8,
    text: `Otimize este artigo existente para featured snippets e People Also Ask. Reestruture os H2/H3, adicione perguntas-alvo como headings, formate respostas em parágrafo/lista/tabela conforme o tipo de snippet, e sugira schema markup: [URL ou TEXTO]`,
  },
  {
    id: 71,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 9,
    text: `Projete uma estratégia de SEO local para [NEGÓCIO] em [CIDADE]. Inclua: otimização do Google Business Profile, estratégia de reviews, citações locais prioritárias, conteúdo localizado, e schema LocalBusiness. Meta: aparecer no pack local em 90 dias.`,
  },
  {
    id: 72,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 10,
    text: `Faça uma análise de gap de conteúdo entre meu site [MEU URL] e os 3 principais concorrentes [URLS]. Identifique: palavras-chave que eles ranqueiam e eu não, oportunidades de conteúdo não exploradas por ninguém, e um plano de 3 meses para fechar o gap.`,
  },

  // Construção de SaaS: extras
  {
    id: 73,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 7,
    text: `Projete o fluxo de onboarding ideal para [PRODUTO SaaS]. Mapeie cada etapa desde o signup até o "momento aha". Inclua: checklist de ativação, tooltips contextuais, emails por gatilho comportamental, e métricas de conclusão por etapa. Target: 80% de ativação em 48h.`,
  },
  {
    id: 74,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 8,
    text: `Crie um roadmap de produto para [SAAS] dos próximos 6 meses. Priorize features usando o framework RICE (Reach, Impact, Confidence, Effort). Inclua: milestones trimestrais, features de retenção vs aquisição, e critérios de go/no-go para cada release.`,
  },
  {
    id: 75,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 9,
    text: `Analise a UX do meu SaaS e sugira 10 melhorias para reduzir fricção. Foque em: fluxos de conversão, formulários, navegação, feedback visual, estados de loading e de erro. Para cada melhoria, estime o impacto em retenção e o esforço de implementação: [SCREENSHOTS ou DESCRIÇÃO]`,
  },
  {
    id: 76,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 10,
    text: `Projete um sistema de analytics interno para [SAAS]. Defina: as 10 métricas mais importantes (North Star, activation, retention, revenue, referral), dashboards por persona (CEO, PM, CS), alertas automáticos e queries SQL base para cada métrica.`,
  },

  // Marketing & Vendas: extras
  {
    id: 77,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 7,
    text: `Crie uma estratégia completa de email marketing para [NEGÓCIO]. Inclua: sequência de boas-vindas (5 emails), newsletter semanal template, sequência de vendas (7 emails), sequência de win-back para inativos, e critérios de segmentação por comportamento.`,
  },
  {
    id: 78,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 8,
    text: `Projete um funil de vendas completo para [PRODUTO] com preço de R$[VALOR]. Mapeie cada etapa: awareness (tráfego), interesse (lead magnet), consideração (nutrição), decisão (oferta), e pós-venda (upsell). Inclua taxas de conversão esperadas e budget de ads por etapa.`,
  },
  {
    id: 79,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 9,
    text: `Escreva 10 scripts de venda por WhatsApp/DM para [PRODUTO]. Cubra cenários: primeiro contato, follow-up após interesse, quebra de objeção de preço, recuperação de carrinho abandonado, e pós-venda para upsell. Tom: consultivo, não agressivo.`,
  },
  {
    id: 80,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 10,
    text: `Crie uma estratégia de conteúdo para anúncios pagos de [PRODUTO]. Inclua: 5 hooks para vídeo (primeiros 3 segundos), 5 variações de copy para Facebook/Instagram Ads, targeting sugerido por público, e um framework de teste A/B com orçamento mínimo de R$[BUDGET]/mês.`,
  },

  // Claude Code & CLI: extras
  {
    id: 81,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 7,
    text: `Crie um sistema de CI/CD completo para [PROJETO]. Inclua: pipeline de build e test, linting automatizado, deploy para staging/production, rollback automático em caso de falha, notificações no Slack, e proteção de branches com required reviews.`,
  },
  {
    id: 82,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 8,
    text: `Gere a documentação técnica completa para esta API. Inclua: endpoints com métodos HTTP, parâmetros de request/response com tipos, exemplos de uso via curl, códigos de erro possíveis, rate limits, e guia de autenticação. Formato: OpenAPI/Swagger: [CÓDIGO]`,
  },
  {
    id: 83,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 9,
    text: `Analise a performance deste código e otimize para velocidade e uso de memória. Identifique: loops desnecessários, queries N+1, alocações excessivas, oportunidades de caching, e algoritmos subótimos. Mostre benchmarks antes/depois estimados: [CÓDIGO]`,
  },
  {
    id: 84,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 10,
    text: `Crie um CLAUDE.md completo analisando meu projeto. Inclua: arquitetura do sistema, tech stack com versões, padrões de código (naming, imports, estrutura de pastas), comandos de desenvolvimento, fluxo de deploy, e decisões arquiteturais importantes com contexto.`,
  },

  // Produtividade & Sistemas: extras
  {
    id: 85,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 7,
    text: `Crie um sistema de gestão de projetos pessoal para alguém que gerencia [X] projetos simultâneos. Inclua: template de projeto (escopo, milestones, riscos), dashboard de status semanal, sistema de priorização, e rituais de revisão. Ferramentas: [FERRAMENTAS].`,
  },
  {
    id: 86,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 8,
    text: `Projete um segundo cérebro digital para [PROFISSÃO] usando [FERRAMENTA: Notion/Obsidian]. Inclua: estrutura de pastas PARA, sistema de captura rápida, templates de notas (reunião, projeto, ideia, referência), e fluxos de revisão semanal para evitar acúmulo.`,
  },
  {
    id: 87,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 9,
    text: `Crie um playbook de delegação para [CARGO/FUNÇÃO]. Inclua: framework para decidir o que delegar (matriz Eisenhower adaptada), template de briefing para tarefas delegadas, checklist de handoff, sistema de acompanhamento sem microgerenciamento, e critérios de "done".`,
  },
  {
    id: 88,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 10,
    text: `Monte uma rotina de aprendizado acelerado para dominar [HABILIDADE] em 90 dias. Inclua: curadoria de recursos (livros, cursos, podcasts), cronograma semanal de estudo com prática deliberada, projetos práticos para cada fase, métricas de progresso e accountability system.`,
  },

  // Debugging & Refatoração: extras
  {
    id: 89,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 7,
    text: `Crie um runbook de incidentes para [SISTEMA/APP]. Cubra: classificação de severidade (P0-P3), procedimentos de resposta por nível, templates de comunicação (interna e externa), checklist de postmortem, e ações preventivas para cada tipo de incidente comum.`,
  },
  {
    id: 90,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 8,
    text: `Faça uma auditoria de acessibilidade (a11y) neste componente/página. Verifique: ARIA labels, contraste de cores, navegação por teclado, screen reader compatibility, focus management, e alt texts. Forneça correções com código para cada problema: [CÓDIGO ou URL]`,
  },
  {
    id: 91,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 9,
    text: `Projete uma estratégia de observabilidade para [APLICAÇÃO]. Inclua: métricas (RED/USE), logging estruturado (formato e níveis), tracing distribuído, dashboards Grafana/Datadog com queries, alertas por SLO/SLI, e estimativa de custo de infra de monitoramento.`,
  },
  {
    id: 92,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 10,
    text: `Revise esta arquitetura de microsserviços e identifique: acoplamento excessivo, single points of failure, problemas de consistência de dados, falta de circuit breakers, e oportunidades de consolidação. Sugira uma arquitetura revisada com diagrama: [DESCRIÇÃO DA ARQUITETURA]`,
  },

  // Landing Pages & Copy: extras
  {
    id: 93,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 7,
    text: `Crie a copy completa de uma página de vendas longa para [PRODUTO] de R$[PREÇO]. Estrutura: headline + subheadline, problema/agitação, solução, benefícios com bullets, prova social, garantia, FAQ, e CTA final. Inclua variações de headline para teste A/B.`,
  },
  {
    id: 94,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 8,
    text: `Escreva a sequência completa de emails pós-compra para [PRODUTO]. Inclua: confirmação, onboarding (dia 1, 3, 7), solicitação de review (dia 14), cross-sell (dia 30), e reengajamento (dia 60). Para cada email: assunto, preview text e corpo.`,
  },
  {
    id: 95,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 9,
    text: `Projete uma página de captura de leads para [LEAD MAGNET] com taxa de conversão alvo de 40%+. Inclua: headline focada no benefício, 3-5 bullets do que vão aprender, prova social mínima, formulário simplificado, e copy do botão. Forneça versão desktop e mobile.`,
  },
  {
    id: 96,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 10,
    text: `Crie um banco de 50 headlines swipe file para [NICHO] organizadas por framework: PAS (10), AIDA (10), Antes/Depois (10), Números Específicos (10), Pergunta Provocativa (10). Para cada headline inclua onde usá-la (ad, email, landing page, social).`,
  },

  // Monetização & Escala: extras
  {
    id: 97,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 7,
    text: `Crie um modelo financeiro para [NEGÓCIO DIGITAL]. Inclua: projeção de receita 12 meses, estrutura de custos (fixos e variáveis), breakeven point, cenários otimista/realista/pessimista, métricas-chave (CAC, LTV, MRR, churn), e KPIs mensais para acompanhar.`,
  },
  {
    id: 98,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 8,
    text: `Projete uma estratégia de expansão internacional para [PRODUTO DIGITAL]. Cubra: análise de mercados prioritários (TAM/SAM/SOM), localização de conteúdo e produto, estratégia de pricing por região, canais de distribuição locais, e compliance/regulamentação por país.`,
  },
  {
    id: 99,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 9,
    text: `Crie um programa de afiliados para [PRODUTO]. Defina: estrutura de comissões (% e tiers), critérios de aprovação de afiliados, materiais de marketing para fornecer (banners, emails, scripts), dashboard de acompanhamento, e estratégia de recrutamento dos primeiros 50 afiliados.`,
  },
  {
    id: 100,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 10,
    text: `Monte um plano de automação de vendas para escalar [NEGÓCIO] de R$[ATUAL]/mês para R$[META]/mês sem aumentar equipe. Mapeie: funis automatizados, chatbots de qualificação, sequências de email por segmento, triggers de upsell, e métricas de eficiência por canal.`,
  },

  // ── PROMPTS EXTRAS (101–120) — 2 por categoria ──

  // Escrita Humanizada
  {
    id: 101,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 11,
    text: `Compare estes dois textos e identifique qual soa mais humano e persuasivo. Para cada parágrafo, explique o que funciona e o que não funciona em termos de ritmo, especificidade e conexão emocional. Reescreva o texto mais fraco no nível do mais forte: [TEXTO A] vs [TEXTO B]`,
  },
  {
    id: 102,
    category: "Escrita Humanizada",
    categorySlug: "escrita",
    promptNumber: 12,
    text: `Crie um sistema de templates de escrita para [TIPO DE CONTEÚDO] que eu possa reutilizar. Inclua: estrutura de abertura (3 variações), desenvolvimento com transições naturais, fechamento com CTA. Para cada template, adicione exemplos preenchidos e notas sobre quando usar cada variação.`,
  },

  // Estratégia de Conteúdo
  {
    id: 103,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 11,
    text: `Crie uma estratégia de conteúdo baseada em dados para [NICHO]. Analise os 5 tipos de post que mais engajam no setor, identifique horários de pico por plataforma, mapeie os tópicos trending e crie um framework de teste que permita validar novas ideias com investimento mínimo de tempo.`,
  },
  {
    id: 104,
    category: "Estratégia de Conteúdo",
    categorySlug: "conteudo",
    promptNumber: 12,
    text: `Projete um sistema de colaboração com criadores para [MARCA/NICHO]. Inclua: critérios de seleção de parceiros, modelos de proposta, formatos de conteúdo colaborativo (lives, takeovers, co-criação), métricas de sucesso por parceria, e um pipeline de relacionamento de longo prazo.`,
  },

  // SEO & Crescimento
  {
    id: 105,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 11,
    text: `Crie uma estratégia de conteúdo evergreen para [NICHO] que gere tráfego orgânico consistente por 12+ meses. Identifique 20 tópicos com demanda estável, crie um calendário de atualização trimestral, e defina KPIs de performance por artigo com thresholds para reotimização.`,
  },
  {
    id: 106,
    category: "SEO & Crescimento",
    categorySlug: "seo",
    promptNumber: 12,
    text: `Projete uma estratégia de SEO para YouTube/vídeo para [CANAL/NICHO]. Inclua: pesquisa de palavras-chave para vídeo, otimização de títulos e descrições, estratégia de tags, thumbnail CTR optimization, e um sistema de interlinks entre vídeos para aumentar watch time e autoridade do canal.`,
  },

  // Construção de SaaS
  {
    id: 107,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 11,
    text: `Projete um sistema de feedback do usuário para [SAAS]. Inclua: NPS surveys automatizados, feature request board com votação, entrevistas de churn (perguntas e cadência), análise de tickets de suporte para insights de produto, e um processo de priorização baseado em dados do cliente.`,
  },
  {
    id: 108,
    category: "Construção de SaaS",
    categorySlug: "saas",
    promptNumber: 12,
    text: `Crie uma estratégia de pricing para [SAAS] baseada em value metrics. Analise: qual unidade de valor os clientes pagam (usuários, uso, features), modelos de competidores, willingness-to-pay por segmento, e projete 3 cenários de pricing com simulação de receita para cada um.`,
  },

  // Marketing & Vendas
  {
    id: 109,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 11,
    text: `Crie um playbook de social selling para [PRODUTO/SERVIÇO] no LinkedIn. Inclua: otimização de perfil para conversão, estratégia de conexão com decisores, sequência de mensagens de aquecimento (5 touchpoints), conteúdo de autoridade para publicar, e métricas de pipeline por etapa.`,
  },
  {
    id: 110,
    category: "Marketing & Vendas",
    categorySlug: "marketing",
    promptNumber: 12,
    text: `Projete uma estratégia de retenção e expansão de receita para [NEGÓCIO]. Mapeie: indicadores de health score do cliente, triggers de upsell automáticos, programa de customer success com touchpoints por tier, estratégia de reativação para clientes dormentes, e projeção de Net Revenue Retention.`,
  },

  // Claude Code & CLI
  {
    id: 111,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 11,
    text: `Analise este projeto e crie um guia de contribuição completo. Inclua: setup do ambiente de desenvolvimento, padrões de commit (conventional commits), workflow de branching, checklist de PR, guidelines de code review, e instruções para rodar testes localmente: [REPO ou DESCRIÇÃO]`,
  },
  {
    id: 112,
    category: "Claude Code & CLI",
    categorySlug: "code",
    promptNumber: 12,
    text: `Projete uma arquitetura de monorepo para [PROJETO] com múltiplos pacotes. Inclua: estrutura de pastas, configuração de workspaces (npm/pnpm/turborepo), shared dependencies, build pipeline com cache, estratégia de versionamento, e CI/CD com builds incrementais.`,
  },

  // Produtividade & Sistemas
  {
    id: 113,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 11,
    text: `Crie um sistema de revisão semanal e mensal para [FUNÇÃO/CARGO]. Inclua: template de retrospectiva (o que funcionou, o que não funcionou, próximos passos), métricas pessoais de produtividade para acompanhar, ritual de planejamento com time-boxing, e um dashboard pessoal de progresso.`,
  },
  {
    id: 114,
    category: "Produtividade & Sistemas",
    categorySlug: "produtividade",
    promptNumber: 12,
    text: `Monte um sistema de gestão de energia (não apenas tempo) para máxima produtividade. Inclua: mapeamento do meu cronótipo, alocação de tarefas por nível de energia (alta/média/baixa), rotina de recovery entre blocos de foco, estratégia de sono e alimentação, e um plano de 30 dias para implementar.`,
  },

  // Debugging & Refatoração
  {
    id: 115,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 11,
    text: `Crie um plano de testes automatizados para [PROJETO] que não tem testes. Priorize: quais módulos testar primeiro (por risco e frequência de mudança), tipos de teste por camada (unit, integration, e2e), ferramentas recomendadas, meta de cobertura realista, e um cronograma de implementação de 8 semanas.`,
  },
  {
    id: 116,
    category: "Debugging & Refatoração",
    categorySlug: "debugging",
    promptNumber: 12,
    text: `Faça uma análise de débito técnico deste projeto e crie um plano de pagamento. Classifique cada item por: impacto no desenvolvimento, risco para produção, esforço de correção. Proponha uma estratégia de alocação (ex: 20% de cada sprint), quick wins para a primeira semana, e métricas para medir progresso: [DESCRIÇÃO DO PROJETO]`,
  },

  // Landing Pages & Copy
  {
    id: 117,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 11,
    text: `Crie uma estratégia de personalização de landing page para [PRODUTO] por fonte de tráfego. Projete variações de headline, hero image e CTA para: tráfego orgânico, Facebook Ads, Google Ads, email marketing e referral. Inclua hipóteses de conversão e um plano de teste para cada variante.`,
  },
  {
    id: 118,
    category: "Landing Pages & Copy",
    categorySlug: "landing",
    promptNumber: 12,
    text: `Escreva todo o copy de um funil de tripwire para [NICHO]. Inclua: página de oferta irresistível (produto de R$[VALOR BAIXO]), order bump copy, upsell imediato pós-compra, downsell para quem recusou, e sequência de 5 emails pós-compra que leva ao produto principal de R$[VALOR ALTO].`,
  },

  // Monetização & Escala
  {
    id: 119,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 11,
    text: `Projete uma estratégia de múltiplas fontes de receita para [CRIADOR/NEGÓCIO]. Mapeie: produto principal, produtos complementares, receita recorrente (membership), receita passiva (afiliados, licenciamento), e serviços premium. Inclua timeline de implementação e projeção de receita por stream em 12 meses.`,
  },
  {
    id: 120,
    category: "Monetização & Escala",
    categorySlug: "monetizacao",
    promptNumber: 12,
    text: `Crie um framework de precificação dinâmica para [PRODUTO/SERVIÇO]. Analise: segmentação por willingness-to-pay, estratégias de desconto sem desvalorizar a marca, pricing por cohort (early bird, lote, last chance), bundling inteligente, e um modelo de teste A/B de preços com métricas de decisão.`,
  },
]
