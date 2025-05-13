INSERT INTO usuarios (nome, senha) VALUES
('Alice', encode(digest('123', 'sha256'), 'hex')),
('Bob', encode(digest('456', 'sha256'), 'hex')),
('Carlos', encode(digest('789', 'sha256'), 'hex'));
