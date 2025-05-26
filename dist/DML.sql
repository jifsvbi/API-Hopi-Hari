INSERT INTO areas (name) VALUES ("Mistieri");
INSERT INTO areas (name) VALUES ("Infantasi");
INSERT INTO areas (name) VALUES ("Aribabiba");
INSERT INTO areas (name) VALUES ("Wildwest");
INSERT INTO areas (name) VALUES ("Kaminda Mundi");

SELECT * FROM areas;

-- ÁREA: Mistiéri
INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Montezum", 30, "Aberto", (SELECT id FROM area WHERE name = "Mistiéri"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Vurang", 35, "Aberto", (SELECT id FROM area WHERE name = "Mistiéri"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Ekatomb", 50, "Manutenção", (SELECT id FROM area WHERE name = "Mistiéri"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Katakumb", 60, "Aberto", (SELECT id FROM area WHERE name = "Mistiéri"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Simulákron", 20, "Aberto", (SELECT id FROM area WHERE name = "Mistiéri"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Vulaviking", 25, "Aberto", (SELECT id FROM area WHERE name = "Mistiéri"));

-- ÁREA: Aribabiba
INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Katapul", 30, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Parangolé", 40, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Jambalaia", 45, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Hula Hupi", 45, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Aribabobbi", 60, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Speedi '64", 40, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Vambatê", 22, "Manutenção", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Cinemotion", 28, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Hadikali", 32, "Aberto", (SELECT id FROM area WHERE name = "Aribabiba"));

-- ÁREA: Wildwest
INSERT INTO rides (nome, tempo_espera, status, id_areas)
VALUES ("Bravo Bull", 15, "Aberto", (SELECT id FROM area WHERE name = "Wildwest"));