import _ from 'lodash';
import './styles.css';
import img from './home-1.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = img;
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
