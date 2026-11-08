# MedVision AI

A clinician-facing medical imaging **research and decision-support** platform.

> **Research use only.** MedVision AI is not an autonomous diagnostic system. All AI-assisted output requires review by a qualified clinician.

## Monorepo structure

| Path | Purpose |
| --- | --- |
| `apps/web` | Next.js frontend |
| `apps/api` | Node.js + Express backend |
| `apps/ai-service` | Python FastAPI AI microservice |
| `packages/shared-types` | Shared TypeScript types |
| `packages/validation` | Shared validation schemas |
| `prisma` | Database schema and migrations |
| `infrastructure` | Docker and deployment config |
| `docs` | Project documentation |

## Requirements

- Node.js 20+
- pnpm 9+
- Git
- Docker Desktop (from Phase 3, for PostgreSQL)
- Python 3.11+ (from the AI phase)

## Getting started

```bash
pnpm install
cp .env.example .env
```

## Status

Phase 0: repository initialization.
