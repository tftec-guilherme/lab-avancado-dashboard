// Entry point — registra todas as Azure Functions no runtime v4
// Cada arquivo usa app.http(), app.serviceBusQueue(), etc.

// Functions principais
require('./functions/createOrderApi');
// processOrder desabilitado — o orderOrchestrator (Durable Functions) assume o pipeline
// require('./functions/processOrder');
require('./functions/orderOrchestrator');
require('./functions/handleStockAlert');
require('./functions/notifyStock');
require('./functions/processTelemetry');
require('./functions/sendTestTelemetry');

// Durable Functions — Activities
require('./functions/activities/validateOrder');
require('./functions/activities/reserveStock');
require('./functions/activities/checkCredit');
require('./functions/activities/processPayment');
require('./functions/activities/updateStatus');
require('./functions/activities/notifyCompletion');
