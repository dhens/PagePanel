'use strict';

// NOTIFICATION DOM ELEMENT
const domNotifEl = document.getElementsByClassName('notification')[0];

const runAlert = (alertMsg, notificationMode) => {
    const notifDivText = domNotifEl.textContent = alertMsg;

    domNotifEl.className = notificationMode;
    domNotifEl.appendChild(notifDivText);
}

export default runAlert;