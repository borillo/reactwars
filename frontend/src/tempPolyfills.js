const raf = global.requestAnimationFrame = (callback) => {
      setTimeout(callback, 0);
}

export default raf;
