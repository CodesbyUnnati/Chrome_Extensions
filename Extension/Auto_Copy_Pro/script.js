//create copyText div
let div = document.createElement('div');

const button = function () {
  div.innerHTML = 'Auto Copy ⭐';
  div.classList.add('auto--copy');
  document.body.appendChild(div);
  const box = document.querySelector('.auto--copy');

  setTimeout(() => {
    box && box.remove();
  }, 1000);
};

//copy selected text to clipboard
const updateClipboard = function (text) {
  navigator.clipboard
    .writeText(text)

    .then(
      (Response) => {
        //remove child alertBox
        console.log(Response);
      },
      (err) => {
        /* clipboard write failed */
        console.log(err);
      }
    )
    .catch((err) => {
      console.log(err);
    });
};

//select text
const selectText = function () {
  //copy selected text to a variable
  let text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  }

  //calling the updateClipboard() and button() function
  if (text.length > 0 && text !== undefined && text != '\n' && text != '') {
    updateClipboard(text);
    button();
  }
};

document.addEventListener('select', selectText);
document.addEventListener('mouseup', selectText);
