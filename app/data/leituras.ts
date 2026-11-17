// As modalidades de leitura (texto da Bruxa, temp/cosultas.txt). Usadas na home
// e na pagina de consultas; o `id` e a ancora em /consultas.
export interface Leitura {
  id: string
  title: string
  summary: string
  tag: string
}

export const LEITURAS: Leitura[] = [
  {
    id: 'orientacoes-semanais-e-mensais',
    title: 'Orientações semanais e mensais',
    summary: 'Tendências, alertas e aconselhamentos para o período escolhido, em uma ou mais áreas: amor, finanças, saúde, espiritualidade e família.',
    tag: 'Por período',
  },
  {
    id: 'tiragens-tematicas',
    title: 'Tiragens temáticas',
    summary: 'Um olhar profundo sobre amor, trabalho ou finanças: passado, angústias, acertos, amadurecimentos e caminhos possíveis.',
    tag: 'Um tema a fundo',
  },
  {
    id: 'panorama-da-vida',
    title: 'Panorama da Vida',
    summary: 'As cinco áreas importantes da sua vida numa só leitura, para compreender o momento atual de forma ampla.',
    tag: 'Visão completa',
  },
  {
    id: 'leituras-livres',
    title: 'Leituras livres',
    summary: 'Sem pergunta pronta: você chega com um tema ou uma inquietação, e a leitura se desenvolve a partir das mensagens.',
    tag: 'Aberta',
  },
]

export const AREAS = [
  { name: 'Amor', text: 'relacionamentos, vida afetiva e possibilidades amorosas.' },
  { name: 'Finanças', text: 'dinheiro, organização financeira e questões materiais.' },
  { name: 'Saúde', text: 'atenção ao bem-estar físico e emocional.' },
  { name: 'Espiritualidade', text: 'conexão espiritual, desenvolvimento e a sua vivência espiritual.' },
  { name: 'Família', text: 'relações familiares, convivência e o ambiente familiar.' },
]

// Perguntas frequentes: aparecem na home (as primeiras) e em /consultas, com o FAQPage do schema.org.
export const FAQ = [
  {
    q: 'Preciso conhecer o Baralho Cigano?',
    a: 'Não. Você não precisa conhecer as cartas, ter experiência com oráculos nem saber interpretar os símbolos. Tudo é explicado durante a leitura, de um jeito que qualquer pessoa entende, e você ainda aprende um pouco sobre o universo do Baralho Cigano.',
  },
  {
    q: 'Como recebo a minha tiragem?',
    a: 'As tiragens enviadas chegam por fotografias das cartas e áudios explicativos, com a interpretação de cada parte da leitura. Você recebe por e-mail e também pode acessar pelo site, na sua conta.',
  },
  {
    q: 'Qual é o prazo de entrega?',
    a: 'Até 48 horas depois da confirmação do pagamento. Nas tiragens enviadas você não precisa agendar horário nem estar disponível num momento específico.',
  },
  {
    q: 'Como funciona a consulta ao vivo?',
    a: 'É uma conversa individual pelo Google Meet, de 30 minutos ou 1 hora. Você escolhe o dia e o horário no produto, faz o pagamento e o seu horário fica reservado. Ao final, recebe um e-mail com os conselhos da consulta e uma mensagem direcionada a você.',
  },
  {
    q: 'Preciso levar perguntas prontas?',
    a: 'Não. Ter um tema ou uma pauta em mente já basta. Você pode trazer uma preocupação, um assunto que quer entender melhor ou simplesmente deixar a consulta fluir.',
  },
  {
    q: 'A leitura prevê o meu futuro?',
    a: 'A leitura mostra tendências, possibilidades e caminhos, não uma sentença. Nossas escolhas interferem nos acontecimentos e o livre-arbítrio é seu: a espiritualidade aconselha e direciona; a decisão é sempre sua.',
  },
  {
    q: 'A leitura substitui médico ou psicólogo?',
    a: 'Não. O oráculo pode orientar você a observar e cuidar de uma questão física ou emocional, mas não faz diagnósticos. Nenhuma interpretação substitui a avaliação de um profissional de saúde qualificado.',
  },
]
