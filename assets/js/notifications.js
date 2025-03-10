class NotificationSystem {
  static show(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `notification ${type} fade-transition`;
      notification.textContent = message;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
          notification.remove();
      }, 3000);
  }
}