const getIdURL = () => {
  const URL = window.location.href;
  let id = "";
  for (let i = URL.length; i >= 0; i--) {
    if (URL[i] >= 0 && URL[i] <= 9) {
      id = URL[i] + id;
    } else {
      break;
    }
  }
  return id;
};

const getIdItem = e => {
  let tag = e.target;
  while (!tag.hasAttribute("id")) {
    tag = tag.parentElement;
  }
  return tag.getAttribute("id");
};

const scrollTop = () => {
  const $ = require("jquery");
  $("html").animate({ scrollTop: 0 }, 300);
};

const totalProduct = proproductListduct => {
  return proproductListduct.reduce((perVal, curVal, curIdx) => {
    return perVal + curVal[0].price * curVal[1];
  }, 0);
};

export { getIdURL, scrollTop, totalProduct, getIdItem };
