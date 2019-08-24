const proxy = [
    {
      context: '',
      target: 'http://api.nexurapp.com',
     // target: 'https://api.nexur.com.br',
      pathRewrite: {'^/*' : ''}
      // target: 'http://ec2-52-14-20-244.us-east-2.compute.amazonaws.com',
      // pathRewrite: {'^/api' : ''}
    }
  ];
module.exports = proxy;