const getIdIem = () => {
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

const scrollTop = () => {
  const $ = require("jquery");
  $("html").animate({ scrollTop: 0 }, 300);
};

export { getIdIem, scrollTop };
