DELIMITER $$

    CREATE TRIGGER after_insert_line
    AFTER INSERT ON hopi_hari_db.line
    FOR EACH ROW
     BEGIN   
        DECLARE wait_time INT;
        DECLARE line_count INT;
        DECLARE total_wait INT;



        SELECT tempo_espera INTO wait_time
         FROM rides
        WHERE id_rides = NEW.id_rides;
        
        SELECT COUNT(id) INTO line_count
         FROM hopi_hari_db.line
		WHERE id_rides = NEW.id_rides;

        SET total_wait = wait_time * line_count;
        
        INSERT INTO notifications (description, id_rides, id_users, status)
	    VALUES (CONCAT(total_tempo_espera, "minutos de espera para o brinquedo" ), NEW.id_rides, NEW.id_users, TRUE);
	END $$
DELIMITER ;