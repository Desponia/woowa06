import { createAction } from "typesafe-actions";

export const addNotification = createAction("@notification/add", resolve => {
  return (type: string, msg: string) => resolve({ type, msg });
});

export const startMonitoring = createAction(
  "@command/monitoring/start",
  resolve => {
    return () => resolve();
  }
);

export const stopMonitoring = createAction(
  "@command/monitoring/stop",
  resolve => {
    return () => resolve();
  }
);

export const updateOrderStatus = createAction(
  "@update/order/status",
  resolve => {
    return (success: number, failure: number) => resolve({ success, failure });
  }
);
