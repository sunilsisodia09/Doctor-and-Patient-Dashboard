import {
  createContext,
  useState,
} from "react";

export const NotificationContext =
  createContext();

const NotificationProvider = ({
  children,
}) => {
  const [notifications, setNotifications] =
    useState([]);

  const addNotification = (
    message,
    type = "info"
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };

    setNotifications((prev) => [
      ...prev,
      newNotification,
    ]);

    setTimeout(() => {
      removeNotification(
        newNotification.id
      );
    }, 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter(
        (notification) =>
          notification.id !== id
      )
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}

      <div className="fixed top-5 right-5 space-y-4 z-50">
        {notifications.map(
          (notification) => (
            <div
              key={notification.id}
              className={`px-5 py-3 rounded-xl shadow-lg text-white ${
                notification.type ===
                "success"
                  ? "bg-green-500"
                  : notification.type ===
                    "error"
                  ? "bg-red-500"
                  : "bg-pink-500"
              }`}
            >
              {notification.message}
            </div>
          )
        )}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;