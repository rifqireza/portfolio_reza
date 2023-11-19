import { notification } from "antd";

export default class NotificationService {
  SuccessNotif(message: string) {
    notification.success({
      message: undefined,
      description: message,
    });
  };

  ErrorNotif(message: string) {
    notification.error({
      message: undefined,
      description: message,
    });
  };
}