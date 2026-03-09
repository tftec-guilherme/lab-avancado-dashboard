# Links e Recursos — Lab Avancado: Retail Operations Dashboard

## Video-aulas do Projeto (9 videos | 01:58:04)

| # | Titulo | Duracao | Link |
|---|--------|---------|------|
| 1 | Apresentacao do Lab Avancado — Retail Operations Dashboard | 04:44 | |
| 2 | Resource Group e Azure SQL Database | 11:22 | |
| 3 | App Service (Configuracao, Settings e CORS) | 15:55 | |
| 4 | Service Bus (Queue, Topic e Subscription) | 10:56 | |
| 5 | API Management (API, Policies e Teste) | 19:46 | |
| 6 | Event Grid e Event Hubs | 08:57 | |
| 7 | Logic Apps e Function App | 24:51 | |
| 8 | Deploy via GitHub Actions | 09:39 | |
| 9 | Event Grid Subscription e Pre-teste do Dashboard | 11:54 | |

---

## Repositorio

| Recurso | Link |
|---------|------|
| Repositorio GitHub (standalone) | https://github.com/tftec-guilherme/lab-avancado-dashboard |
| Repositorio principal da disciplina | https://github.com/tftec-guilherme/azure-retail |

---

## Portal e Ferramentas

| Recurso | Link |
|---------|------|
| Azure Portal | https://portal.azure.com |
| Postman (download) | https://www.postman.com/downloads/ |
| VS Code | https://code.visualstudio.com/ |
| draw.io (diagramas) | https://app.diagrams.net/ |

---

## Documentacao Azure

| Servico | Link |
|---------|------|
| App Service — Visao Geral | https://learn.microsoft.com/azure/app-service/overview |
| App Service — Deploy GitHub Actions | https://learn.microsoft.com/azure/app-service/deploy-github-actions |
| Azure SQL Database | https://learn.microsoft.com/azure/azure-sql/database/sql-database-paas-overview |
| Azure Functions — Visao Geral | https://learn.microsoft.com/azure/azure-functions/functions-overview |
| Durable Functions — Orquestracoes | https://learn.microsoft.com/azure/azure-functions/durable/durable-functions-orchestrations |
| API Management — Visao Geral | https://learn.microsoft.com/azure/api-management/api-management-key-concepts |
| APIM — Policies | https://learn.microsoft.com/azure/api-management/api-management-howto-policies |
| Service Bus — Queues e Topics | https://learn.microsoft.com/azure/service-bus-messaging/service-bus-messaging-overview |
| Event Grid — Visao Geral | https://learn.microsoft.com/azure/event-grid/overview |
| Event Grid — Custom Topics | https://learn.microsoft.com/azure/event-grid/custom-topics |
| Event Hubs — Visao Geral | https://learn.microsoft.com/azure/event-hubs/event-hubs-about |
| Logic Apps — Visao Geral | https://learn.microsoft.com/azure/logic-apps/logic-apps-overview |
| Entra ID — App Registrations | https://learn.microsoft.com/entra/identity-platform/quickstart-register-app |
| Entra ID — OAuth 2.0 Client Credentials | https://learn.microsoft.com/entra/identity-platform/v2-oauth2-client-creds-grant-flow |
| Server-Sent Events (SSE) | https://developer.mozilla.org/docs/Web/API/Server-sent_events |
| Application Insights | https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview |

---

## URLs Dinamicas (criadas durante o lab)

> Estes endpoints sao criados durante o provisionamento. Substitua pelos valores reais do seu ambiente.

| Recurso | Formato |
|---------|---------|
| Dashboard (App Service) | `https://<APP_SERVICE_NAME>.azurewebsites.net` |
| OAuth Callback | `https://<APP_SERVICE_NAME>.azurewebsites.net/callback` |
| Function App | `https://<FUNCTION_APP_NAME>.azurewebsites.net/api` |
| Criar Pedido | `https://<FUNCTION_APP_NAME>.azurewebsites.net/api/createOrder` |
| Telemetria | `https://<FUNCTION_APP_NAME>.azurewebsites.net/api/sendTelemetry` |
| APIM Gateway | `https://<APIM_NAME>.azure-api.net/retail` |
| Event Grid Topic | `https://<EVENTGRID_TOPIC>.brazilsouth-1.eventgrid.azure.net/api/events` |
| OAuth Token Endpoint | `https://login.microsoftonline.com/<TENANT_ID>/oauth2/v2.0/token` |
| Logic App Webhook | `https://prod-XX.brazilsouth.logic.azure.com:443/workflows/...` |

---

## Arquivos do Repositorio

| Pasta | Descricao |
|-------|-----------|
| `dashboard/` | Frontend React + Vite + Tailwind (6 paginas) |
| `dashboard/server/` | Backend Express + SSE + SQL Server |
| `dashboard/sql/init.sql` | Schema do banco de dados |
| `functions/` | Azure Functions (Durable + Triggers) |
| `logic-apps/` | Definicoes JSON (credit-approval, stock-alert) |
| `docs/arquitetura.drawio` | Diagrama de arquitetura (editavel) |
| `.github/workflows/deploy.yml` | CI/CD GitHub Actions |

---

*Disciplina 04 — Integracao e Mensageria no Azure | Prof. Guilherme Campos*
