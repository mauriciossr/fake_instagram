const VerificaUsuarioLogado = (req, res, next) => {
  // Se a session do usuario não estiver setada redireciona para o login
  if (!req.session.usuario) {
    res.redirect('/login?error=2');
  }

  //Se chegou ate aqui, a session está ok
  next();
};

module.exports = VerificaUsuarioLogado;
