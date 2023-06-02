const button = document.querySelector('button');

let modal;
let backdrop;

// see how showModalHandler is getting called on button click..
button.addEventListener('click', showModalHandler);


// 1st function
function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

// 2nd function
function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}


// Some important methods :
// ele = document.createElement()
// document.querySelector()
// ele.addEventListener()
// ele.textContent
// ele.append()
// ele.remove()
// ele.className

// concept of how model and backdrop gets visible together on screen using z index

// Modals, like pop-ups, are components that pop up on a user's screen. The key difference, however, is that the user would have initiated the action as part of their journey. Modals are used for specific workflows such as adding users, deleting content, sharing content, adding content, and more.
