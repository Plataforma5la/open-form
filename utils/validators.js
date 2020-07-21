export default {
  email: (target) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(target);
  },
  phone: (target) => {
    let num = target.replace(/[^\d]/g, "");
    return !(num.length < 8 || Number.isNaN(Number(num)));
  },
  country: (target) => {
    return target.length > 0;
  },
};
