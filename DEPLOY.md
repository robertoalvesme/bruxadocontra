# Deploy — Google Cloud Run

O app é um Nuxt 4 em modo SSR. O `nuxt build` gera um servidor Node (Nitro
`node-server`) em `.output/`, que escuta na variável de ambiente `PORT` —
exatamente o que o Cloud Run espera. O `Dockerfile` empacota esse build.

## Pré-requisitos (uma vez)

```bash
# Autenticar e escolher o projeto
gcloud auth login
gcloud config set project SEU_PROJECT_ID

# Habilitar as APIs necessárias
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com

# Criar o repositório de imagens (Artifact Registry) — escolha a região
gcloud artifacts repositories create apps \
  --repository-format=docker \
  --location=southamerica-east1
```

> Região sugerida: `southamerica-east1` (São Paulo). Troque se preferir.

## Opção A — Deploy direto do código (mais simples)

O Cloud Build constrói o `Dockerfile` automaticamente e publica no Cloud Run:

```bash
gcloud run deploy bruxadocontra \
  --source . \
  --region southamerica-east1 \
  --allow-unauthenticated \
  --port 8080
```

Ao final, o comando imprime a URL pública do serviço.

## Opção B — Build + push + deploy via cloudbuild.yaml

```bash
gcloud builds submit --config cloudbuild.yaml \
  --substitutions=_REGION=southamerica-east1,_REPO=apps,_SERVICE=bruxadocontra
```

Bom para CI/CD: dá para ligar a um trigger de GitHub no Cloud Build.

## Build/teste local do container (opcional)

```bash
docker build -t bruxadocontra .
docker run --rm -p 8080:8080 -e PORT=8080 bruxadocontra
# abre em http://localhost:8080
```

## Notas

- **Porta:** o Cloud Run injeta `PORT` (8080); o Nitro já o respeita. Não fixe outra porta.
- **`--allow-unauthenticated`:** deixa o site público. Remova para exigir autenticação.
- **Domínio próprio:** mapeie depois com
  `gcloud run domain-mappings create --service bruxadocontra --domain seu-dominio.com.br`.
- **Fontes:** Google Fonts são carregadas via CDN no navegador — não exigem nada no servidor.
