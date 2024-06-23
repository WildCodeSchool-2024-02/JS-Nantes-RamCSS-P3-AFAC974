CREATE TABLE artist (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    description VARCHAR(256) NOT NULL,
    photo VARCHAR(100) NOT NULL,
    alt_artist VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    artist (
        firstname,
        lastname,
        description,
        photo,
        alt_artist
    )
VALUES (
        "Emma",
        "Martin",
        "Spécialiste de la macrophotographie, Emma capture la vie miniature des récifs coralliens. Sa maîtrise des couleurs et des textures transporte le spectateur dans un monde invisible à l'œil nu, révélant la beauté délicate et complexe de chaque créature.",
        "images/photos/photographer0/photographer.jpg",
        "description de la photo"
    ),
    (
        "Lucas",
        "Dubois",
        "Lucas excelle dans la photographie de paysages sous-marins. Ses clichés captivent par leurs vastes étendues bleues, leurs jeux de lumière et l'immensité silencieuse des océans, invitant au voyage et à la contemplation.",
        "images/photos/photographer1/photographer.jpg",
        "description de la photo"
    ),
    (
        "Léa",
        "Leroy",
        "Expertise dans les portraits marins, Léa immortalise l'expression unique des animaux marins. Sa sensibilité artistique transparaît dans chaque cliché, révélant les émotions et la personnalité de ses sujets aquatiques avec une touche de poésie visuelle.",
        "images/photos/photographer2/photographer.jpg",
        "description de la photo"
    ),
    (
        "Hugo",
        "Lefèvre",
        "Spécialisé dans la photographie de la vie nocturne sous-marine. Ses images transmettent une atmosphère envoûtante, où la lumière naturelle se mêle à la fluorescence, révélant un monde magique et insoupçonner.",
        "images/photos/photographer3/photographer.jpg",
        "description de la photo"
    ),
    (
        "Camille",
        "Dupont",
        "Camille se distingue à travers ses photographies engagées, elle documente les défis écologiques et l'harmonie fragile entre l'homme et la mer, invitant à la réflexion et à l'action pour la préservation des océans.",
        "images/photos/photographer4/photographer.jpg",
        "description de la photo"
    ),
    (
        "Nathan",
        "Lambert",
        "Nathan capture la grâce et la puissance des grands prédateurs marins. Ses images saisissent l'instant précis où la nature sauvage et la beauté brute se rencontrent, offrant une perspective intime sur la vie marine.",
        "images/photos/photographer5/photographer.jpg",
        "description de la photo"
    ),
    (
        "Manon",
        "Girard",
        "Manon révèle les histoires cachées des fonds marins. À travers ses séries captivantes, elle témoigne de la diversité biologique et des enjeux de conservation, inspirant une connexion profonde avec l'océan.",
        "images/photos/photographer6/photographer.jpg",
        "description de la photo"
    ),
    (
        "Louis",
        "Morel",
        "Expert en photographie sous-marine, il crée des compositions captivantes qui transcendent la réalité. Ses œuvres fusionnent lumière, mouvement et texture pour exprimer une vision poétique de la vie sous-marine, éveillant l'imagination et les émotions.",
        "images/photos/photographer7/photographer.jpg",
        "description de la photo"
    ),
    (
        "Sarah",
        "Bernard",
        "Connu pour ses portraits intimistes de la faune marine, Sarah capture l'âme des créatures marines avec une sensibilité unique. À travers ses photographies pleines d'émotions, elle invite à découvrir la beauté et la diversité du monde sous-marin.",
        "images/photos/photographer8/photographer.jpg",
        "description de la photo"
    ),
    (
        "Alexandre",
        "Renault",
        "Alexandre se spécialise dans la photographie de sites sous-marins uniques et peu explorés. Ses images époustouflantes capturent la grandeur des formations géologiques sous-marines, révélant des paysages subaquatiques spectaculaires et méconnus.",
        "images/photos/photographer9/photographer.jpg",
        "description de la photo"
    );

CREATE TABLE artwork (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(100) NOT NULL,
    alt_artwork VARCHAR(100) NOT NULL,
    id_artist INT REFERENCES artist (id),
    PRIMARY KEY (`id`)
);

INSERT INTO
    artwork (
        title,
        description,
        image,
        alt_artwork,
        id_artist
    )
VALUES (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        1
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        2
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        3
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        4
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        5
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        6
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        7
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        8
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        9
    ),
    (
        "ll",
        "ll",
        "photo1.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo2.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo3.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo4.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo5.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo6.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo7.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo8.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo9.jpg",
        "description de la photo",
        10
    ),
    (
        "ll",
        "ll",
        "photo10.jpg",
        "description de la photo",
        10
    );

CREATE TABLE gallery (
    id_user INT REFERENCES user (id),
    id_artwork INT REFERENCES artwork (id),
    id_artist INT REFERENCES artist (id),
    PRIMARY KEY (id_user, id_artwork)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_admin TINYINT DEFAULT 0 NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    user (
        firstname,
        lastname,
        mail,
        password
    )
VALUES (
        "Jean",
        "Dupont",
        "jean.dupont@gmail.com",
        "jvk-jcchgxhv656"
    ),
    (
        "Marie",
        "Martin",
        "marie-martin@hotmail.com",
        "dtjdj g54f65gf5"
    ),
    (
        "Pierre",
        "Lefevre",
        "pierre_lefevre@free.fr",
        "fsdff-fd5"
    ),
    (
        "Sophie",
        "Dubois",
        "sophiedubois@hotmail.fr",
        "dfdfh+ghg5545*"
    ),
    (
        "Thomas",
        "Lambert",
        "thomas-lambert@orange.com",
        "g54g89+fhs"
    ),
    (
        "Camille",
        "Moreau",
        "camille_moreau@sfr.fr",
        "ghhggg46f46fgwxw+-"
    ),
    (
        "Lucas",
        "Girard",
        "lucas.girard@caramail.fr",
        "gffgf5dfsddfdfdf+fdfhrrrù"
    ),
    (
        "Emma",
        "Petit",
        "emma_petit@me.com",
        "hgghg5-fg65dh4fgd+d"
    ),
    (
        "Hugo",
        "Roussel",
        "hugo-roussel@hotmail.com",
        "g565_hdfg+cgfg265gh6g"
    ),
    (
        "Léa",
        "Caron",
        "leacaron@gmail.fr",
        "fdf4f6f46fgd6d6f f6546"
    );