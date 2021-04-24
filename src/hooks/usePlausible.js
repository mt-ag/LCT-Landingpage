const usePlausible = () => {
  window.plausible =
    window.plausible ||
    // eslint-disable-next-line func-names
    function (...args) {
      (window.plausible.q = window.plausible.q || []).push(args);
    };

  return window.plausible;
};

export default usePlausible;
