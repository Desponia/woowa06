export interface INotification {
  id: number;
  type: string;
  msg: string;
}

export interface StoreState {
  monitoring: boolean;
  duration: number;
  notifications: INotification[];
  success: number;
  failure: number;
}
