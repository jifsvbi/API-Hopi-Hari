const mysql = require('../mysql');

exports.getNotificacoes = async (req, res) => {
  try {
    const id_user = req.usuario.id; 

    const query = 'SELECT * FROM notifications WHERE id_user = ? AND ativa = TRUE';
    const [results] = await mysql.execute(query, [id_user]);

    res.status(200).json({
      notificacoes: results,
    });
  } catch (error) {
    console.error('Erro ao buscar notificações:', error);
    res.status(500).json({ erro: 'Erro ao buscar notificações' });
  }
};
