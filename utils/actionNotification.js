'use strict';

// NOTIFICATION DOM ELEMENT
const domNotifEl = document.getElementsByClassName('notification')[0];

const runAlert = (alertMsg, notificationMode) => {
    domNotifEl.textContent = alertMsg;
    domNotifEl.className = notificationMode;
}

export default runAlert;