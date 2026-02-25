self.onmessage = function (event) {
  console.log('WORKER RECEBEU', event.data);

  self.postMessage('Olá para você Também!')
};
