CREATE TABLE artist (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    description VARCHAR(256) NOT NULL,
    photo VARCHAR(100) NOT NULL,
    alt_artist VARCHAR(100) NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    artist (
        firstname,
        lastname,
        description,
        photo
    )
VALUES (
        "Emma",
        "Martin",
        "Spécialiste de la macrophotographie, Emma capture la vie miniature des récifs coralliens. Sa maîtrise des couleurs et des textures transporte le spectateur dans un monde invisible à l'œil nu, révélant la beauté délicate et complexe de chaque créature.",
        "images/photos/photographer1/photographer.jpg"
    ),
    (
        "Lucas",
        "Dubois",
        "Lucas excelle dans la photographie de paysages sous-marins. Ses clichés captivent par leurs vastes étendues bleues, leurs jeux de lumière et l'immensité silencieuse des océans, invitant au voyage et à la contemplation.",
        "images/photos/photographer2/photographer.jpg"
    ),
    (
        "Léa",
        "Leroy",
        "Expertise dans les portraits marins, Léa immortalise l'expression unique des animaux marins. Sa sensibilité artistique transparaît dans chaque cliché, révélant les émotions et la personnalité de ses sujets aquatiques avec une touche de poésie visuelle.",
        "images/photos/photographer3/photographer.jpg"
    ),
    (
        "Hugo",
        "Lefèvre",
        "Spécialisé dans la photographie de la vie nocturne sous-marine. Ses images transmettent une atmosphère envoûtante, où la lumière naturelle se mêle à la fluorescence, révélant un monde magique et insoupçonner.",
        "images/photos/photographer4/photographer.jpg"
    ),
    (
        "Camille",
        "Dupont",
        "Camille se distingue à travers ses photographies engagées, elle documente les défis écologiques et l'harmonie fragile entre l'homme et la mer, invitant à la réflexion et à l'action pour la préservation des océans.",
        "images/photos/photographer5/photographer.jpg"
    ),
    (
        "Nathan",
        "Lambert",
        "Nathan capture la grâce et la puissance des grands prédateurs marins. Ses images saisissent l'instant précis où la nature sauvage et la beauté brute se rencontrent, offrant une perspective intime sur la vie marine.",
        "images/photos/photographer6/photographer.jpg"
    ),
    (
        "Manon",
        "Girard",
        "Manon révèle les histoires cachées des fonds marins. À travers ses séries captivantes, elle témoigne de la diversité biologique et des enjeux de conservation, inspirant une connexion profonde avec l'océan.",
        "images/photos/photographer7/photographer.jpg"
    ),
    (
        "Louis",
        "Morel",
        "Expert en photographie sous-marine, il crée des compositions captivantes qui transcendent la réalité. Ses œuvres fusionnent lumière, mouvement et texture pour exprimer une vision poétique de la vie sous-marine, éveillant l'imagination et les émotions.",
        "images/photos/photographer8/photographer.jpg"
    ),
    (
        "Sarah",
        "Bernard",
        "Connu pour ses portraits intimistes de la faune marine, Sarah capture l'âme des créatures marines avec une sensibilité unique. À travers ses photographies pleines d'émotions, elle invite à découvrir la beauté et la diversité du monde sous-marin.",
        "images/photos/photographer9/photographer.jpg"
    ),
    (
        "Alexandre",
        "Renault",
        "Alexandre se spécialise dans la photographie de sites sous-marins uniques et peu explorés. Ses images époustouflantes capturent la grandeur des formations géologiques sous-marines, révélant des paysages subaquatiques spectaculaires et méconnus.",
        "images/photos/photographer10/photographer.jpg"
    );

CREATE TABLE artwork (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(1080) NOT NULL,
    image VARCHAR(100) NOT NULL,
    alt_artwork VARCHAR(100) NULL,
    id_artist INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (id_artist) REFERENCES artist (id) ON DELETE CASCADE
);

INSERT INTO
    artwork (
        title,
        description,
        image,
        id_artist
    )
VALUES (
        "Rencontre avec la Raie Manta",
        "Une raie manta majestueuse glisse gracieusement à travers les eaux claires, entourée de petits poissons curieux qui semblent danser autour d'elle. Ses vastes ailes se déploient avec élégance, chaque mouvement semblant parfaitement calculé. Les rayons de soleil filtrent à travers l'eau, illuminant la scène et accentuant les motifs uniques sur le dos de la raie manta. Elle avance lentement, presque comme si elle flottait, offrant une vision sereine et paisible du monde sous-marin. Autour d'elle, des poissons colorés et des petites créatures marines se déplacent, créant un tableau vivant et dynamique. La raie manta, souvent perçue comme un géant doux de l'océan, incarne la beauté et la grâce naturelle des profondeurs marines. Cette rencontre privilégiée, capturée en image, révèle la magie et la tranquillité qui règnent sous la surface, invitant les spectateurs à admirer et à respecter la richesse de la vie océanique.",
        "images/photos/photographer1/photo1.jpg",
        1
    ),
    (
        "Jardin de Corail",
        "Un récif de corail vibrant et coloré se déploie sous les eaux cristallines, offrant un refuge et un habitat à une multitude d'espèces marines. Les coraux, aux formes et aux couleurs variées, forment une structure complexe et fascinante qui s'étend à perte de vue. Chaque recoin du récif est peuplé de vie : des poissons exotiques aux couleurs chatoyantes, des crustacés se faufilant entre les anfractuosités, et des anémones ondulant doucement au gré des courants. Les coraux eux-mêmes, avec leurs branches délicates et leurs formes diverses, créent un paysage sous-marin d'une beauté inégalée. La lumière du soleil pénètre à travers la surface de l'eau, créant des jeux d'ombres et de lumières qui accentuent encore la splendeur de ce jardin sous-marin. Cet écosystème fragile, mais vital, représente un havre de biodiversité où chaque créature joue un rôle essentiel dans l'équilibre de la vie marine.",
        "images/photos/photographer1/photo2.jpg",
        1
    ),
    (
        "Caverne Mystérieuse",
        "Une caverne sous-marine s'ouvre dans l'obscurité des profondeurs, dévoilant un monde secret et mystérieux. Les stalactites et les stalagmites se dressent majestueusement, formant des sculptures naturelles millénaires. La lumière d'une torche éclaire timidement l'intérieur de la caverne, révélant des parois couvertes de vie marine : des algues luminescentes, des éponges colorées et des poissons cavernicoles aux yeux adaptés à la pénombre. L'eau, d'une clarté surprenante, permet d'apercevoir chaque détail de cette grotte sous-marine. Les plongeurs s'aventurant dans ces cavités ressentent une combinaison d'émerveillement et de respect devant cette beauté naturelle intacte. Les cavernes sous-marines, souvent inexplorées et préservées du monde extérieur, recèlent des secrets et des trésors de biodiversité que seule une exploration attentive peut dévoiler. Cette photographie capture un instant de cette exploration, une fenêtre sur un royaume caché et envoûtant.",
        "images/photos/photographer1/photo3.jpg",
        1
    ),
    (
        "Ballet des Méduses",
        "Des méduses translucides flottent paisiblement dans une danse lente et hypnotique, leurs tentacules ondulant gracieusement dans le courant. La lumière filtrée à travers l'eau met en valeur leur structure délicate et éthérée, créant un spectacle visuel captivant. Chaque méduse, avec ses formes et ses couleurs uniques, semble se mouvoir en harmonie avec ses congénères, formant une chorégraphie naturelle et élégante. Les méduses, souvent mal comprises et craintes, révèlent ici leur côté fascinant et mystérieux. Leurs mouvements fluides et synchronisés donnent l'impression d'un ballet orchestré par la nature elle-même. En arrière-plan, l'obscurité de l'océan profond accentue encore plus leur apparence fantomatique et envoûtante. Cette scène sous-marine, à la fois simple et complexe, capture la beauté et la délicatesse de ces créatures marines, invitant les spectateurs à admirer leur rôle vital dans l'écosystème océanique.",
        "images/photos/photographer1/photo4.jpg",
        1
    ),
    (
        "Requins en Patrouille",
        "Un groupe de requins nage en formation serrée, projetant des ombres inquiétantes sur le sable en dessous. Leurs mouvements sont à la fois puissants et gracieux, chaque battement de queue propulsant ces prédateurs agiles à travers les eaux. Leurs silhouettes imposantes se détachent contre le bleu profond de l'océan, créant une scène à la fois fascinante et intimidante. Les requins, souvent mal perçus comme des tueurs impitoyables, montrent ici leur rôle essentiel en tant que régulateurs de l'écosystème marin. Ils patrouillent leur territoire, maintenant l'équilibre naturel des populations de poissons et autres créatures marines. La lumière du soleil pénètre à travers la surface de l'eau, ajoutant des reflets scintillants à cette scène dramatique. Cette photographie, capturant un moment de leur vie quotidienne, rappelle la puissance et la majesté des requins, tout en soulignant l'importance de leur préservation pour la santé des océans.",
        "images/photos/photographer1/photo5.jpg",
        1
    ),
    (
        "La Vie au Fond de l'Océan",
        "Une vue rapprochée de créatures abyssales étranges et lumineuses qui peuplent les profondeurs océaniques. Ces créatures, adaptées à l'obscurité et à la pression extrême des abysses, exhibent des formes et des couleurs étonnantes. Parmi elles, des poissons aux yeux surdimensionnés, des crustacés bioluminescents et des méduses phosphorescentes créent un spectacle fantastique. La lumière émise par ces êtres illumine les ténèbres environnantes, révélant un monde caché et fascinant. Les abysses, souvent inaccessibles et méconnus, recèlent une biodiversité incroyable, où chaque espèce a développé des adaptations uniques pour survivre dans des conditions extrêmes. Cette scène sous-marine, capturée avec une précision étonnante, offre un aperçu rare et précieux de ce monde mystérieux. La beauté et la diversité des créatures abyssales rappellent la complexité et la richesse de la vie océanique, incitant à la protection et à l'étude de ces environnements fragiles et encore largement inexplorés.",
        "images/photos/photographer1/photo6.jpg",
        1
    ),
    (
        "Poisson-Clown et Son Anémone",
        "Un poisson-clown se cache dans les tentacules protecteurs d'une anémone colorée, formant un duo emblématique du monde sous-marin. Le poisson-clown, avec ses rayures orange et blanches distinctives, nage parmi les tentacules urticants de l'anémone, trouvant refuge et protection. En échange, il débarrasse l'anémone de parasites et lui apporte de la nourriture. Cette relation symbiotique, où deux espèces différentes vivent en harmonie et tirent profit l'une de l'autre, est un exemple fascinant de coopération dans la nature. La scène est baignée de lumière naturelle, mettant en valeur les couleurs vives et les détails de chaque créature. Les mouvements fluides du poisson-clown et le balancement délicat de l'anémone créent une danse tranquille et apaisante. Cette photographie capture non seulement la beauté de ces créatures marines, mais aussi l'interdépendance et l'équilibre délicat qui régissent les écosystèmes sous-marins.",
        "images/photos/photographer1/photo7.jpg",
        1
    ),
    (
        "Épave Enfouie",
        "Une épave de navire envahie par la vie marine, avec des coraux et des algues recouvrant ses structures rouillées, repose au fond de l'océan. Cette scène mélancolique et poétique montre comment la nature reprend ses droits sur les vestiges humains. Les poissons de récif et les crustacés se sont approprié les moindres recoins de l'épave, transformant ce qui était autrefois une prouesse d'ingénierie en un habitat vivant. Les coraux, aux couleurs éclatantes, se sont fixés sur les métaux corrodés, ajoutant une touche de vie et de beauté à cette relique submergée. Les algues ondulent doucement avec les courants, apportant mouvement et dynamisme à la scène. L'épave, à moitié enterrée dans le sable, raconte une histoire de naufrage et de renaissance, où la fin d'une chose devient le début d'une autre. Cette photographie, en capturant cet instant, offre un témoignage puissant de la résilience et de la capacité de la nature à transformer et à régénérer.",
        "images/photos/photographer1/photo8.jpg",
        1
    ),
    (
        "Forêt de Kelp",
        "Des algues géantes s'élèvent vers la surface, créant une forêt sous-marine dense et mystérieuse. Les frondes du kelp, atteignant plusieurs mètres de hauteur, oscillent doucement avec le courant, formant un réseau complexe de tunnels et de cachettes pour une multitude d'espèces marines. Les poissons de toutes tailles, des petits poissons colorés aux grands prédateurs, se déplacent parmi les algues, utilisant cette forêt comme un refuge et une source de nourriture. Les rayons de lumière solaire pénètrent à travers la canopée de kelp, créant des jeux d'ombres et de lumières qui ajoutent une atmosphère féerique à la scène. Le fond de cette forêt sous-marine est tapissé de coquillages et de petites plantes marines, contribuant à la richesse et à la diversité de l'écosystème. Cette photographie capture la majesté et la complexité de ce monde submergé, offrant un aperçu de la vie cachée sous la surface et soulignant l'importance de ces habitats pour la santé des océans.",
        "images/photos/photographer1/photo9.jpg",
        1
    ),
    (
        "Rencontre avec une Tortue",
        "Une tortue de mer nage tranquillement, entourée de petits poissons et de coraux vibrants. Sa carapace, ornée de motifs naturels, reflète la lumière du soleil filtrant à travers l'eau, créant un spectacle visuel enchanteur. La tortue avance lentement, ses mouvements paisibles et mesurés contrastant avec l'agitation des poissons qui l'entourent. Ce reptile marin, symbole de sagesse et de longévité, incarne la sérénité et la résilience de la vie sous-marine. Autour d'elle, les coraux multicolores et les algues dansantes composent un paysage riche et diversifié. Chaque coup de nageoire propulse la tortue avec grâce, tandis qu'elle explore son environnement avec curiosité et aisance. Cette rencontre privilégiée, immortalisée en image, rappelle la fragilité et la beauté des écosystèmes marins. La tortue de mer, en tant qu'espèce emblématique et menacée, incite à la préservation et à la protection des océans pour les générations futures.",
        "images/photos/photographer1/photo10.jpg",
        1
    ),
    (
        "Banc de Poissons",
        "Des milliers de poissons argentés nagent ensemble en parfaite synchronisation, formant des motifs fascinants et en constante évolution. Chaque mouvement du banc est harmonisé, créant une vague ondulante de reflets métalliques qui captivent le regard. Les poissons, malgré leur petite taille individuelle, agissent comme une seule entité massive, démontrant la puissance de la coopération et de la coordination. Les prédateurs potentiels, tels que les thons ou les requins, sont souvent confondus et découragés par ce spectacle impressionnant de défense collective. La lumière du soleil, pénétrant à travers les eaux, ajoute une dimension scintillante à cette scène déjà spectaculaire. Le banc de poissons se déplace avec une rapidité et une précision étonnantes, changeant de direction en un instant et créant des formes et des figures toujours nouvelles. Cette photographie, capturant l'essence même de cette danse aquatique, met en lumière la beauté et la complexité des comportements collectifs dans la nature.",
        "images/photos/photographer2/photo1.jpg",
        2
    ),
    (
        "Chasse au Trésor",
        "Un plongeur explore une ancienne épave, espérant découvrir des trésors cachés parmi les débris. L'épave, partiellement recouverte de coraux et de sédiments, raconte une histoire de naufrage et de mystère. Le plongeur, équipé de son matériel de plongée, éclaire les recoins sombres avec sa lampe, révélant des objets oubliés et des artefacts anciens. Des coffres rouillés, des vaisselles brisées et des pièces de monnaie incrustées de sel évoquent des époques révolues et des aventures maritimes. Autour de l'épave, la vie marine s'est épanouie : des poissons curieux suivent le plongeur, des anémones colorées s'accrochent aux structures métalliques, et des crabes se faufilent parmi les débris. Chaque découverte, aussi petite soit-elle, ajoute une pièce au puzzle de l'histoire de l'épave. Cette quête de trésor, immortalisée en image, capture l'excitation de l'exploration et le mystère du passé, tout en soulignant la richesse et la diversité des écosystèmes marins qui prospèrent sur les vestiges humains.",
        "images/photos/photographer2/photo2.jpg",
        2
    ),
    (
        "Anémones et Clowns",
        "Des anémones colorées et leurs poissons-clowns résidents créent un tableau vivant et animé. Les anémones, avec leurs tentacules ondulants et urticants, offrent un refuge sûr pour les poissons-clowns, qui naviguent habilement parmi elles. Ces poissons, reconnaissables à leurs rayures orange et blanches, entretiennent une relation symbiotique avec les anémones : ils trouvent protection parmi les tentacules urticants, tandis qu'ils nettoient l'anémone et l'aident à se nourrir. Leurs interactions constantes et dynamiques créent une scène vibrante de coopération et de cohabitation. La lumière du soleil, filtrée par l'eau, accentue les couleurs vives des anémones et des poissons-clowns, créant un spectacle visuel éclatant. Autour d'eux, le récif de corail abrite d'autres créatures marines, ajoutant à la diversité et à la richesse de l'écosystème. Cette photographie, capturant un instant de cette interaction quotidienne, met en lumière la beauté et la complexité des relations symbiotiques dans le monde sous-marin.",
        "images/photos/photographer2/photo3.jpg",
        2
    ),
    (
        "Grottes sous-marines",
        "Une série de grottes sous-marines mystérieuses, éclairées par la lumière filtrante de la surface, révèle un monde caché et fascinant. Les parois des grottes, sculptées par des millénaires d'érosion, sont ornées de formations rocheuses uniques et de couleurs surprenantes. Des stalactites et des stalagmites, créées par les minéraux dissous dans l'eau, ajoutent une dimension presque fantastique à cette scène. Les plongeurs explorent ces cavités avec précaution, découvrant des passages étroits, des chambres secrètes et des piscines cristallines. La faune locale, adaptée à l'obscurité, inclut des poissons cavernicoles, des crustacés et des créatures bioluminescentes qui ajoutent des touches de lumière naturelle aux recoins sombres. Chaque coin de ces grottes sous-marines recèle des secrets et des surprises, faisant de chaque exploration une aventure inoubliable. Cette photographie capture l'essence de cette exploration, offrant un aperçu rare et précieux de ce monde sous-marin caché et envoûtant.",
        "images/photos/photographer2/photo4.jpg",
        2
    ),
    (
        "Créatures Bioluminescentes",
        "Des créatures marines bioluminescentes illuminent les ténèbres des profondeurs avec leurs lueurs fantastiques. Ces êtres étranges et merveilleux, vivant dans les zones les plus inaccessibles de l'océan, ont développé la capacité de produire leur propre lumière pour attirer des proies, se camoufler ou communiquer. Parmi elles, des méduses émettant des flashes lumineux, des poissons-anguilles arborant des motifs lumineux et des crustacés scintillant comme des étoiles sous-marines. La bioluminescence, phénomène fascinant et mystérieux, crée des scènes d'une beauté surnaturelle dans les abysses. Chaque mouvement de ces créatures laisse une traînée lumineuse, transformant l'obscurité en un spectacle visuel hypnotique. La lumière naturelle, absente à ces profondeurs, est remplacée par ces éclats de bioluminescence, révélant des détails et des formes insoupçonnées. Cette photographie, capturant la magie de ce phénomène naturel, offre une fenêtre sur un monde caché et enchanteur, où la vie brille littéralement dans l'obscurité.",
        "images/photos/photographer2/photo5.jpg",
        2
    ),
    (
        "Danse des Dauphins",
        "Un groupe de dauphins joue et saute hors de l'eau, montrant leurs acrobaties impressionnantes et leur joie de vivre. Ces créatures intelligentes et sociales se déplacent en groupe, naviguant avec une grâce et une agilité remarquables. Leurs sauts et pirouettes créent des éclaboussures et des arcs de lumière qui captivent les spectateurs. Les dauphins, souvent vus comme des symboles de liberté et de joie, incarnent l'esprit ludique de l'océan. Leurs interactions complexes, basées sur des liens sociaux forts, montrent une coopération et une communication avancées. Autour d'eux, les eaux scintillent sous les rayons du soleil, ajoutant une dimension éclatante à cette scène dynamique. La surface de l'eau, constamment perturbée par leurs jeux, reflète les cieux et crée un spectacle visuel changeant et vibrant. Cette photographie capture un instant de cette danse aquatique, mettant en lumière la beauté et l'intelligence de ces mammifères marins, ainsi que leur place essentielle dans l'écosystème océanique.",
        "images/photos/photographer2/photo6.jpg",
        2
    ),
    (
        "Poissons-Papillons",
        "Des poissons-papillons colorés nagent parmi les coraux, leurs motifs vibrants se détachant sous l'eau claire. Ces poissons, avec leurs formes délicates et leurs couleurs éclatantes, ajoutent une touche de beauté et de diversité au récif corallien. Leurs mouvements gracieux et synchronisés créent un ballet naturel, tandis qu'ils cherchent de la nourriture parmi les polypes de corail. Chaque espèce de poisson-papillon possède des motifs uniques, qui servent à la fois de camouflage et de moyen de communication avec leurs congénères. La lumière du soleil, pénétrant à travers la surface de l'eau, illumine les écailles iridescentes de ces poissons, créant des reflets scintillants qui enchantent les plongeurs et les observateurs. Le récif, avec ses coraux multicolores et ses algues ondulantes, constitue un décor parfait pour ces créatures élégantes. Cette photographie, capturant l'essence de ce ballet aquatique, met en lumière la richesse et la complexité des écosystèmes coralliens, tout en célébrant la beauté des poissons-papillons.",
        "images/photos/photographer2/photo7.jpg",
        2
    ),
    (
        "Mystère des Abysses",
        "Des créatures étranges et merveilleuses des profondeurs océaniques révèlent les secrets de leur monde dans une scène mystérieuse et captivante. Ces êtres, adaptés à l'obscurité totale et à la pression écrasante des abysses, exhibent des formes et des caractéristiques étonnantes. Parmi eux, des poissons aux mâchoires gigantesques, des méduses bioluminescentes et des crustacés aux appendices démesurés. La lumière artificielle des sous-marins et des caméras éclaire ces créatures, révélant des détails fascinants de leur anatomie et de leur comportement. Les abysses, souvent inaccessibles et inexplorés, abritent une biodiversité incroyable, où chaque espèce a développé des adaptations uniques pour survivre dans des conditions extrêmes. Cette scène sous-marine, à la fois effrayante et envoûtante, offre un aperçu rare de ce monde caché et mystérieux. La photographie capture un instant de cette exploration, mettant en lumière la diversité et la résilience des créatures abyssales, et rappelant l'importance de la recherche et de la protection de ces environnements fragiles.",
        "images/photos/photographer2/photo8.jpg",
        2
    ),
    (
        "Aventurier des Fonds Marins",
        "Un plongeur équipé explore une région inexplorée des fonds marins, entouré de merveilles naturelles et de créatures fascinantes. Son équipement de plongée high-tech, comprenant un scaphandre et des lampes puissantes, lui permet de s'aventurer dans des zones profondes et sombres. Autour de lui, des coraux aux formes étranges, des poissons colorés et des invertébrés mystérieux créent un paysage sous-marin d'une beauté saisissante. Le plongeur, attentif et méthodique, documente chaque découverte, prenant des notes et des photographies pour l'étude scientifique. Cette exploration, à la fois scientifique et aventureuse, révèle les secrets cachés des profondeurs et contribue à notre compréhension de la biodiversité marine. Les courants sous-marins, les variations de lumière et les rencontres imprévues ajoutent une dimension excitante et imprévisible à cette mission. Cette photographie, capturant un moment de cette exploration, célèbre l'esprit d'aventure et la quête de connaissance qui poussent les explorateurs à repousser les limites du connu.",
        "images/photos/photographer2/photo9.jpg",
        2
    ),
    (
        "Requins Marteaux",
        "Un groupe de requins-marteaux navigue silencieusement dans les eaux profondes, leurs silhouettes imposantes projetant des ombres effrayantes sur le fond marin. Leurs têtes distinctives en forme de marteau, avec des yeux et des narines placés aux extrémités, leur confèrent une apparence unique et redoutable. Ces requins, excellents chasseurs, utilisent leur vision stéréoscopique et leur sensibilité électromagnétique pour détecter leurs proies dans l'eau trouble. Leurs mouvements fluides et gracieux, pourtant empreints de puissance, créent une scène à la fois fascinante et intimidante. Autour d'eux, des bancs de poissons se dispersent précipitamment, révélant l'impact de ces prédateurs dans l'écosystème. La lumière filtrée par l'eau accentue les contours de leurs corps musclés, ajoutant une dimension dramatique à cette scène. Cette photographie capture l'essence même de la prédation et de la survie dans le monde sous-marin, tout en soulignant la beauté et la puissance des requins-marteaux, souvent incompris et mal perçus.",
        "images/photos/photographer2/photo10.jpg",
        2
    ),
    (
        "Serpent de Mer",
        "Un serpent de mer se faufile entre les rochers, sa silhouette sinueuse se fondant dans le paysage sous-marin. Ses écailles scintillantes reflètent la lumière, créant des motifs hypnotiques sur son corps ondulant. Les serpents de mer, bien que souvent perçus comme dangereux, jouent un rôle crucial dans l'écosystème marin en régulant les populations de poissons et autres créatures marines. Leur corps allongé et flexible leur permet de naviguer aisément à travers les récifs coralliens et les anfractuosités des rochers, à la recherche de proies. Cette scène sous-marine, baignée de lumière naturelle, révèle la grâce et l'agilité de ce reptile marin. Autour de lui, des poissons colorés et des coraux vibrants ajoutent une touche de vie et de diversité à l'environnement. Cette photographie, capturant un moment de la vie quotidienne du serpent de mer, met en lumière la beauté et la complexité des interactions entre les différentes espèces marines, tout en soulignant l'importance de la conservation de ces habitats uniques et fragiles.",
        "images/photos/photographer3/photo1.jpg",
        3
    ),
    (
        "Nudibranches Étonnants",
        "Des nudibranches aux couleurs vives et aux formes variées rampent sur les coraux, ajoutant une touche de couleur éclatante au paysage sous-marin. Ces mollusques marins, dépourvus de coquille, exhibent des motifs et des teintes qui rivalisent avec les plus beaux arcs-en-ciel. Chaque espèce de nudibranche possède des caractéristiques uniques, qu'il s'agisse de leurs franges délicates, de leurs tentacules élégants ou de leurs couleurs chatoyantes. Les nudibranches se déplacent lentement mais sûrement, explorant chaque recoin du récif à la recherche de nourriture. Leur apparence flamboyante sert à avertir les prédateurs potentiels de leur toxicité, une défense efficace contre les attaques. La lumière du soleil, filtrée à travers l'eau, accentue les couleurs vibrantes de ces créatures, créant un spectacle visuel captivant. Cette photographie, capturant la beauté et la diversité des nudibranches, met en lumière la richesse et la complexité des écosystèmes marins, et célèbre la diversité étonnante de la vie sous-marine.",
        "images/photos/photographer3/photo2.jpg",
        3
    ),
    (
        "La Grande Barrière",
        "Un aperçu de la Grande Barrière de Corail, une des merveilles naturelles du monde sous-marin, révèle un écosystème d'une richesse et d'une complexité inégalées. S'étendant sur des milliers de kilomètres, ce récif abrite une multitude d'espèces marines, des poissons colorés aux coraux éclatants, en passant par les tortues de mer et les requins majestueux. La biodiversité de la Grande Barrière est si vaste que chaque plongée offre une nouvelle découverte, un nouvel émerveillement. Les coraux, aux formes et aux couleurs variées, forment des structures complexes qui servent de refuge et de nourricerie à de nombreuses créatures marines. La lumière du soleil, pénétrant à travers les eaux cristallines, crée des jeux d'ombres et de lumières qui accentuent la beauté naturelle de ce site. Cette photographie, capturant un instant de la vie vibrante de la Grande Barrière, met en lumière l'importance de la préservation de ce joyau naturel, menacé par le changement climatique et les activités humaines.",
        "images/photos/photographer3/photo3.jpg",
        3
    ),
    (
        "Plongée de Nuit",
        "Une plongée de nuit révèle une multitude de créatures nocturnes et bioluminescentes qui sortent pour chasser, transformant le paysage sous-marin en un monde magique et mystérieux. Les plongeurs, équipés de lampes puissantes, découvrent des créatures insoupçonnées : des pieuvres camouflées, des crustacés lumineux et des poissons étranges aux comportements uniques. La bioluminescence, produite par certaines espèces, crée des éclats de lumière naturelle dans l'obscurité, ajoutant une dimension féerique à cette exploration nocturne. Les coraux eux-mêmes, souvent plus actifs la nuit, exhibent des couleurs et des formes que l'on ne voit pas en plein jour. Chaque mouvement des plongeurs soulève des particules phosphorescentes, créant une traînée lumineuse derrière eux. Cette scène, à la fois calme et animée, capture la magie et le mystère des profondeurs nocturnes, offrant une perspective nouvelle et fascinante sur la vie marine. Cette photographie met en lumière la richesse et la diversité des écosystèmes sous-marins, même dans l'obscurité totale.",
        "images/photos/photographer3/photo4.jpg",
        3
    ),
    (
        "Pieuvre Caméléon",
        "Une pieuvre changeant de couleur pour se camoufler parmi les rochers et les coraux, démontrant sa capacité exceptionnelle à se fondre dans son environnement. Grâce à des cellules spécialisées appelées chromatophores, la pieuvre peut modifier sa couleur et sa texture en un instant, passant d'une teinte sableuse à un motif complexe de taches et de lignes. Cette capacité de camouflage lui permet de se protéger des prédateurs et de surprendre ses proies. La pieuvre, créature intelligente et adaptable, explore son environnement avec curiosité, utilisant ses tentacules pour sonder et manipuler les objets. Autour d'elle, les coraux et les rochers offrent un décor parfait pour ses démonstrations de camouflage. La lumière naturelle, pénétrant à travers l'eau, ajoute une dimension supplémentaire à cette scène fascinante. Cette photographie, capturant un moment de cette transformation spectaculaire, met en lumière la beauté et l'ingéniosité de la pieuvre, tout en soulignant l'importance de la préservation de ces habitats uniques.",
        "images/photos/photographer3/photo5.jpg",
        3
    ),
    (
        "La Passe des Raies Aigles",
        "Des raies aigles majestueuses glissent à travers une passe étroite entre deux récifs coralliens, offrant un spectacle de grâce et de puissance. Leurs corps plats et leurs ailes étendues créent des mouvements fluides et élégants, comme des oiseaux volant sous l'eau. Les raies aigles, avec leurs motifs distinctifs et leurs queues longues et fines, naviguent habilement à travers les courants et les obstacles. Les plongeurs, témoins de cette scène incroyable, sont émerveillés par la beauté et la fluidité des mouvements de ces créatures. La lumière du soleil, filtrée à travers l'eau, éclaire les raies et crée des reflets scintillants sur leur peau lisse. Cette photographie, capturant un instant de cette danse aquatique, met en lumière la majesté et la grâce des raies aigles, tout en soulignant l'importance de la conservation des passages marins et des habitats coralliens.",
        "images/photos/photographer3/photo6.jpg",
        3
    ),
    (
        "Symbiose Inattendue",
        "Une relation symbiotique étonnante entre un poisson et une crevette, où chaque partenaire bénéficie de la présence de l'autre. Le poisson, souvent un gobie, veille à l'entrée du terrier creusé par la crevette, alertant cette dernière de tout danger potentiel. En retour, la crevette maintient et élargit le terrier, offrant un abri sécurisé pour eux deux. Cette coopération exemplaire illustre les interactions complexes et bénéfiques qui se développent dans le monde sous-marin. Le terrier, entouré de sable et de débris coralliens, sert de refuge contre les prédateurs et les courants forts. La lumière naturelle, pénétrant à travers l'eau, éclaire cette scène de coopération et de survie. Cette photographie, capturant un instant de cette interaction symbiotique, met en lumière la complexité et la beauté des relations dans les écosystèmes marins, tout en soulignant l'importance de la préservation de ces interactions uniques et vitales.",
        "images/photos/photographer3/photo7.jpg",
        3
    ),
    (
        "Récif Arc-en-Ciel",
        "Un récif de corail éclatant de couleurs et de vie, abritant une multitude d'espèces marines, de poissons aux algues en passant par les invertébrés. Les coraux, aux formes et aux teintes variées, créent un paysage sous-marin semblable à un jardin enchanté. Chaque recoin du récif abrite une nouvelle surprise : des poissons-papillons colorés, des anémones ondulantes, des étoiles de mer aux teintes vives. La biodiversité et la densité de vie sur ce récif en font un écosystème incroyablement riche et dynamique. La lumière du soleil, pénétrant à travers les eaux claires, accentue les couleurs et les contrastes, créant un spectacle visuel époustouflant. Cette photographie, capturant l'essence même de cette diversité éclatante, met en lumière la beauté et la complexité des écosystèmes coralliens, tout en soulignant l'importance de leur préservation face aux menaces environnementales.",
        "images/photos/photographer3/photo8.jpg",
        3
    ),
    (
        "Chorégraphie de Mérous",
        "Un groupe de mérous exécutant une chorégraphie sous-marine complexe, montrant leurs comportements sociaux et de reproduction. Ces poissons, souvent solitaires, se rassemblent à des moments précis de l'année pour former des agrégations massives, où ils se livrent à des danses synchronisées et des parades nuptiales. Les mérous, avec leurs corps robustes et leurs couleurs changeantes, créent un spectacle impressionnant en se déplaçant à l'unisson. La lumière naturelle, pénétrant à travers l'eau, ajoute une dimension dramatique à cette scène de synchronisation et de coopération. Cette photographie, capturant un moment de cette chorégraphie, met en lumière les comportements sociaux complexes et la beauté des mérous, tout en soulignant l'importance de la préservation de leurs habitats pour la continuité de ces rituels naturels.",
        "images/photos/photographer3/photo9.jpg",
        3
    ),
    (
        "Évasion de la Méduse",
        "Une méduse translucide dérivant paisiblement dans l'eau, ses tentacules flottant gracieusement autour d'elle. La lumière du soleil, filtrée à travers la surface de l'eau, éclaire la méduse et crée des reflets scintillants sur son corps gélatineux. Les mouvements lents et fluides de la méduse créent une danse hypnotique, ajoutant une touche de magie à cette scène sous-marine. La méduse, souvent perçue comme une créature simple et passive, joue un rôle crucial dans l'écosystème marin en tant que prédateur de petits organismes et proie pour de nombreux autres. La photographie, capturant un moment de cette dérive paisible, met en lumière la beauté et la simplicité des méduses, tout en soulignant leur importance dans l'équilibre de la vie marine.",
        "images/photos/photographer3/photo10.jpg",
        3
    ),
    (
        "Bal des Raies Manta",
        "Un groupe de raies manta se rassemble pour une danse majestueuse dans les eaux claires. Leurs ailes immenses et gracieuses coupent à travers l'eau, créant des mouvements fluides et harmonieux. Chaque raie, avec son propre motif unique, glisse avec une élégance inégalée, formant des spirales et des cercles parfaits. Les raies manta sont souvent accompagnées de poissons-pilotes, qui profitent des courants créés par leurs mouvements. Ces géants des mers, malgré leur taille imposante, sont des créatures paisibles, se nourrissant principalement de plancton. La lumière filtrée par l'eau accentue les contours de leurs ailes et crée des reflets scintillants sur leur peau soyeuse. Cette photographie, capturant un instant de ce ballet aquatique, met en lumière la majesté et la grâce des raies manta, tout en soulignant l'importance de leur protection contre les menaces telles que la pêche et la pollution marine.",
        "images/photos/photographer4/photo1.jpg",
        4
    ),
    (
        "La Citadelle des Étoiles de Mer",
        "Un récif peuplé d'étoiles de mer de toutes formes et couleurs, créant une véritable citadelle de vie. Les étoiles de mer, avec leurs bras rayonnants et leurs motifs variés, s'accrochent aux rochers et aux coraux, se déplaçant lentement à la recherche de nourriture. Certaines espèces arborent des couleurs vives et éclatantes, tandis que d'autres se fondent dans leur environnement avec des teintes plus discrètes. La diversité des étoiles de mer est étonnante : certaines ont des bras épais et courts, d'autres des bras longs et élancés. Cette scène, baignée de lumière naturelle, révèle la beauté et la diversité de ces créatures fascinantes. La photographie, capturant un moment de cette vie foisonnante, met en lumière l'importance des récifs coralliens en tant qu'habitat essentiel pour une multitude d'espèces marines, tout en célébrant la beauté et la diversité des étoiles de mer.",
        "images/photos/photographer4/photo2.jpg",
        4
    ),
    (
        "Caravane des Crabes",
        "Une migration massive de crabes rouges traversant le fond de l'océan, formant une caravane impressionnante en quête de nouveaux territoires. Les crabes, avec leurs pinces levées et leurs carapaces brillantes, se déplacent en rangs serrés, créant une scène à la fois fascinante et chaotique. Chaque crabe suit instinctivement le mouvement du groupe, avançant avec détermination à travers les obstacles sous-marins. Les courants et les marées influencent leur trajectoire, ajoutant une dimension dynamique à cette migration. La lumière pénétrant à travers l'eau illumine les carapaces des crabes, créant des reflets rouges et dorés. Cette photographie, capturant un instant de cette migration impressionnante, met en lumière la force de la nature et les comportements instinctifs des créatures marines, tout en soulignant l'importance des habitats côtiers pour ces migrations annuelles cruciales.",
        "images/photos/photographer4/photo3.jpg",
        4
    ),
    (
        "Royaume des Éponges",
        "Un jardin sous-marin peuplé d'éponges de toutes formes et couleurs, créant un paysage étrange et enchanteur. Les éponges, avec leurs structures poreuses et leurs motifs variés, filtrent l'eau et abritent de nombreuses créatures marines. Certaines éponges ressemblent à des vases élégants, d'autres à des tubes ou des monticules. Leur diversité est incroyable, allant des teintes pastel aux couleurs éclatantes. Les poissons et les invertébrés trouvent refuge parmi les éponges, ajoutant de la vie et du mouvement à ce jardin sous-marin. La lumière du soleil, filtrée à travers l'eau, éclaire les éponges et crée des jeux d'ombres et de lumières fascinants. Cette photographie, capturant la beauté et la diversité des éponges, met en lumière l'importance de ces organismes pour la santé des écosystèmes marins, tout en célébrant leur beauté unique.",
        "images/photos/photographer4/photo4.jpg",
        4
    ),
    (
        "Mystère du Requin Baleine",
        "Un requin baleine gigantesque nage paisiblement dans les eaux profondes, entouré de petits poissons qui profitent de sa présence imposante. Ce géant doux, le plus grand poisson de l'océan, se nourrit principalement de plancton, filtrant l'eau avec sa large bouche. La peau du requin baleine est parsemée de motifs uniques de taches blanches, qui aident à l'identifier individuellement. Malgré sa taille impressionnante, le requin baleine est une créature paisible, nageant lentement et majestueusement à travers les eaux. La lumière du soleil, filtrée à travers la surface de l'eau, éclaire ses taches et crée des reflets scintillants sur sa peau épaisse. Cette photographie, capturant un instant de la vie de ce géant des mers, met en lumière la majesté et la sérénité du requin baleine, tout en soulignant l'importance de sa protection contre la chasse et la pollution marine.",
        "images/photos/photographer4/photo5.jpg",
        4
    ),
    (
        "Cavaliers des Hippocampes",
        "Un groupe d'hippocampes se déplaçant gracieusement parmi les algues et les coraux, leurs corps délicats et leurs queues enroulées créant un spectacle enchanteur. Les hippocampes, avec leurs têtes en forme de cheval et leurs motifs élégants, se camouflent parfaitement dans leur environnement. Chaque hippocampe utilise sa queue préhensile pour s'accrocher aux plantes sous-marines, se balançant doucement avec les courants. Leur méthode de reproduction unique, où les mâles portent les œufs dans une poche spéciale, ajoute une dimension fascinante à leur biologie. La lumière naturelle, pénétrant à travers l'eau, éclaire les hippocampes et crée des reflets scintillants sur leurs écailles délicates. Cette photographie, capturant un moment de la vie de ces créatures mystérieuses, met en lumière la beauté et la complexité des hippocampes, tout en soulignant l'importance de la préservation de leurs habitats fragiles.",
        "images/photos/photographer4/photo6.jpg",
        4
    ),
    (
        "Ballet des Barracudas",
        "Un banc de barracudas nage en formation serrée, leurs corps fuselés et leurs dents acérées créant un spectacle à la fois impressionnant et intimidant. Les barracudas, connus pour leur vitesse et leur agressivité, se déplacent avec une précision militaire, chaque individu suivant le mouvement du groupe avec une coordination parfaite. Leurs écailles argentées reflètent la lumière du soleil, créant des éclats métalliques dans l'eau claire. Les prédateurs et les proies des barracudas ajoutent une dimension dynamique à cette scène, alors que les poissons plus petits tentent de se dissimuler parmi les coraux et les rochers. Cette photographie, capturant un instant de la vie de ces chasseurs redoutables, met en lumière la puissance et la coordination des barracudas, tout en soulignant l'importance de leur rôle dans l'écosystème marin.",
        "images/photos/photographer4/photo7.jpg",
        4
    ),
    (
        "Chorégraphie des Plongées",
        "Des plongeurs synchronisés exécutent une série de figures complexes sous l'eau, leurs mouvements fluides et gracieux créant une danse aquatique fascinante. Chaque plongeur, équipé de palmes, de masques et de bouteilles d'oxygène, contribue à la création de motifs et de formes étonnants. La coordination et la communication entre les plongeurs sont essentielles pour réussir cette performance sous-marine. Les bulles d'air, libérées à chaque respiration, ajoutent une touche visuelle unique à cette scène. La lumière naturelle, filtrée à travers l'eau, éclaire les plongeurs et crée des jeux d'ombres et de lumières sur le fond marin. Cette photographie, capturant un instant de cette chorégraphie aquatique, met en lumière la beauté et la synchronisation des mouvements humains sous l'eau, tout en célébrant la passion et la maîtrise des plongeurs.",
        "images/photos/photographer4/photo8.jpg",
        4
    ),
    (
        "Trésor des Galères Portugaises",
        "Une flotte de galères portugaises dérive à la surface de l'eau, leurs flotteurs translucides et leurs tentacules venimeux créant un spectacle à la fois beau et dangereux. Ces créatures, souvent confondues avec des méduses, sont en réalité des siphonophores, des colonies de polypes spécialisés. Leurs flotteurs, remplis de gaz, leur permettent de dériver avec les courants, tandis que leurs tentacules peuvent s'étendre sur plusieurs mètres pour capturer des proies. La lumière du soleil, filtrée à travers l'eau, éclaire les flotteurs et crée des reflets scintillants sur leurs surfaces gélatineuses. Cette photographie, capturant un instant de la vie de ces créatures fascinantes, met en lumière la beauté et la dangerosité des galères portugaises, tout en soulignant l'importance de la compréhension et du respect des créatures marines.",
        "images/photos/photographer4/photo9.jpg",
        4
    ),
    (
        "Spectacle des Fusiliers",
        "Un banc de fusiliers nage en formation serrée, leurs corps élancés et leurs couleurs éclatantes créant un spectacle visuel époustouflant. Les fusiliers, avec leurs teintes bleues et jaunes vives, se déplacent avec une rapidité et une coordination remarquables. Chaque individu suit le mouvement du groupe, créant des vagues et des motifs changeants dans l'eau. Les prédateurs, attirés par cette masse de poissons, ajoutent une dimension dynamique à cette scène, tandis que les fusiliers ajustent leur formation pour éviter les attaques. La lumière naturelle, pénétrant à travers l'eau, accentue les couleurs vives des poissons et crée des reflets scintillants sur leurs écailles. Cette photographie, capturant un instant de la vie de ces créatures colorées, met en lumière la beauté et la coordination des fusiliers, tout en célébrant la richesse et la diversité de la vie marine.",
        "images/photos/photographer4/photo10.jpg",
        4
    ),
    (
        "La Cité des Coraux",
        "Un récif corallien animé, où chaque recoin abrite une multitude de créatures marines colorées et fascinantes. Les coraux, aux formes variées et aux teintes éclatantes, créent une cité sous-marine vibrante de vie. Des poissons-papillons, des demoiselles et des chirurgiens virevoltent parmi les coraux, ajoutant du mouvement et de la couleur à cette scène. Les crevettes, les crabes et les étoiles de mer se déplacent lentement sur le fond marin, tandis que les murènes et les poulpes se cachent dans les anfractuosités des rochers. La lumière du soleil, pénétrant à travers les eaux claires, éclaire les coraux et crée des jeux d'ombres et de lumières fascinants. Cette photographie, capturant l'effervescence de la vie sur le récif, met en lumière la complexité et la beauté des écosystèmes coralliens, tout en soulignant l'importance de leur conservation.",
        "images/photos/photographer5/photo1.jpg",
        5
    ),
    (
        "Ballet des Méduses",
        "Un groupe de méduses se déplaçant lentement dans les eaux profondes, leurs ombrelles translucides et leurs tentacules flottants créant un ballet aquatique hypnotique. Les méduses, avec leurs mouvements gracieux et leurs couleurs délicates, ajoutent une touche de magie à cette scène sous-marine. La lumière naturelle, filtrée à travers l'eau, éclaire les méduses et crée des reflets scintillants sur leurs corps gélatineux. Les méduses se déplacent en rythme, leurs pulsations synchronisées créant un spectacle visuel envoûtant. Cette photographie, capturant un instant de cette danse aquatique, met en lumière la beauté et la délicatesse des méduses, tout en soulignant l'importance de la préservation de leurs habitats fragiles.",
        "images/photos/photographer5/photo2.jpg",
        5
    ),
    (
        "Royaume des Poissons-Clowns",
        "Un groupe de poissons-clowns nageant parmi les tentacules protecteurs d'une anémone de mer, créant une scène colorée et dynamique. Les poissons-clowns, avec leurs couleurs vives et leurs motifs distinctifs, se déplacent en harmonie avec l'anémone, formant une relation symbiotique où chacun bénéficie de la présence de l'autre. Les tentacules de l'anémone, ondulant doucement avec les courants, offrent un abri sûr aux poissons-clowns contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les tentacules, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de cette relation symbiotique, met en lumière la beauté et la complexité des interactions marines, tout en soulignant l'importance de la préservation de ces habitats uniques.",
        "images/photos/photographer5/photo3.jpg",
        5
    ),
    (
        "Danse des Crevettes Nettoyeuses",
        "Un groupe de crevettes nettoyeuses s'activant sur un poisson, offrant leurs services de nettoyage en échange de nourriture. Les crevettes, avec leurs couleurs vives et leurs mouvements précis, parcourent le corps du poisson, éliminant les parasites et les débris. Le poisson, immobile et coopératif, profite de cette interaction bénéfique. La scène est baignée de lumière naturelle, qui éclaire les crevettes et le poisson, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de cette interaction symbiotique, met en lumière la beauté et l'importance des services écosystémiques offerts par les crevettes nettoyeuses, tout en soulignant la complexité des relations dans les écosystèmes marins.",
        "images/photos/photographer5/photo4.jpg",
        5
    ),
    (
        "Le Jardin des Gorgones",
        "Un jardin sous-marin peuplé de gorgones, ces coraux en forme d'éventail qui ajoutent une touche de grâce et d'élégance au paysage marin. Les gorgones, avec leurs branches délicates et leurs couleurs variées, se balancent doucement avec les courants, offrant un abri et de la nourriture à de nombreuses créatures marines. Les poissons, les crustacés et les mollusques trouvent refuge parmi les branches des gorgones, créant un écosystème riche et diversifié. La lumière du soleil, filtrée à travers l'eau, éclaire les gorgones et crée des jeux d'ombres et de lumières fascinants. Cette photographie, capturant la beauté et la diversité des gorgones, met en lumière l'importance de la préservation de ces habitats essentiels pour la santé des écosystèmes marins.",
        "images/photos/photographer5/photo5.jpg",
        5
    ),
    (
        "La Grande Migration des Anguilles",
        "Un groupe d'anguilles migrantes traversant le fond de l'océan, formant une colonne sinueuse et dynamique en quête de nouvelles zones de reproduction. Les anguilles, avec leurs corps longs et flexibles, se déplacent en harmonie, suivant les courants et les variations de température de l'eau. Chaque individu utilise ses sens aiguisés pour naviguer et éviter les obstacles sous-marins. La lumière naturelle, pénétrant à travers l'eau, éclaire les anguilles et crée des reflets scintillants sur leurs écailles lisses. Cette photographie, capturant un instant de cette migration impressionnante, met en lumière la force et la détermination des anguilles, tout en soulignant l'importance de la préservation des routes migratoires marines.",
        "images/photos/photographer5/photo6.jpg",
        5
    ),
    (
        "Festin de Requins",
        "Un groupe de requins se réunissant pour se nourrir d'un banc de poissons, créant une scène à la fois impressionnante et terrifiante. Les requins, avec leurs corps fuselés et leurs mâchoires puissantes, se déplacent avec une rapidité et une précision remarquables. Le banc de poissons, tentant de s'échapper, crée des mouvements frénétiques et chaotiques dans l'eau. La lumière naturelle, pénétrant à travers l'eau, éclaire les requins et les poissons, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de ce festin sous-marin, met en lumière la puissance et l'efficacité des requins en tant que prédateurs, tout en soulignant l'importance de leur rôle dans l'équilibre des écosystèmes marins.",
        "images/photos/photographer5/photo7.jpg",
        5
    ),
    (
        "L'Aquarium des Cavernes",
        "Une caverne sous-marine illuminée par des rayons de lumière naturelle, révélant un écosystème caché riche en couleurs et en vie. Les parois de la caverne, couvertes de coraux et de spongiaires, abritent une multitude de créatures marines, des poissons colorés aux invertébrés mystérieux. Les plongeurs, explorant cet environnement unique, découvrent des formations rocheuses étonnantes et des créatures rarement observées. La lumière naturelle, pénétrant à travers les ouvertures de la caverne, crée des jeux d'ombres et de lumières fascinants sur le fond marin. Cette photographie, capturant un instant de l'exploration de cette caverne, met en lumière la beauté et la diversité des écosystèmes sous-marins cachés, tout en soulignant l'importance de leur préservation.",
        "images/photos/photographer5/photo8.jpg",
        5
    ),
    (
        "Symbiose des Coraux et des Poissons-Perroquets",
        "Un poisson-perroquet mordillant des coraux, aidant à contrôler la croissance des algues et à maintenir la santé du récif. Les poissons-perroquets, avec leurs becs puissants et leurs couleurs vives, jouent un rôle crucial dans l'écosystème corallien en grignotant les algues qui peuvent envahir les coraux. Leur alimentation aide à maintenir l'équilibre du récif et à favoriser la croissance des coraux. La lumière naturelle, pénétrant à travers l'eau, éclaire le poisson et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de cette interaction bénéfique, met en lumière la beauté et l'importance des poissons-perroquets pour la santé des récifs coralliens, tout en soulignant l'importance de la préservation de ces écosystèmes fragiles.",
        "images/photos/photographer5/photo9.jpg",
        5
    ),
    (
        "Tortues en Migration",
        "Un groupe de tortues de mer nageant ensemble vers leurs sites de nidification, formant une scène émouvante et inspirante. Les tortues, avec leurs carapaces robustes et leurs mouvements gracieux, traversent des milliers de kilomètres pour retourner à leurs plages natales. Chaque tortue utilise des signaux environnementaux pour naviguer et retrouver son chemin. La lumière du soleil, filtrée à travers l'eau, éclaire les tortues et crée des reflets scintillants sur leurs carapaces. Cette photographie, capturant un instant de cette migration épique, met en lumière la détermination et la résilience des tortues de mer, tout en soulignant l'importance de la protection de leurs routes migratoires et de leurs sites de nidification pour leur survie à long terme.",
        "images/photos/photographer5/photo10.jpg",
        5
    ),
    (
        "La Cité des Coraux",
        "Un récif corallien animé, où chaque recoin abrite une multitude de créatures marines colorées et fascinantes. Les coraux, aux formes variées et aux teintes éclatantes, créent une cité sous-marine vibrante de vie. Des poissons-papillons, des demoiselles et des chirurgiens virevoltent parmi les coraux, ajoutant du mouvement et de la couleur à cette scène. Les crevettes, les crabes et les étoiles de mer se déplacent lentement sur le fond marin, tandis que les murènes et les poulpes se cachent dans les anfractuosités des rochers. La lumière du soleil, pénétrant à travers les eaux claires, éclaire les coraux et crée des jeux d'ombres et de lumières fascinants. Cette photographie, capturant l'effervescence de la vie sur le récif, met en lumière la complexité et la beauté des écosystèmes coralliens, tout en soulignant l'importance de leur conservation.",
        "images/photos/photographer6/photo1.jpg",
        6
    ),
    (
        "Ballet des Méduses",
        "Un groupe de méduses se déplaçant lentement dans les eaux profondes, leurs ombrelles translucides et leurs tentacules flottants créant un ballet aquatique hypnotique. Les méduses, avec leurs mouvements gracieux et leurs couleurs délicates, ajoutent une touche de magie à cette scène sous-marine. La lumière naturelle, filtrée à travers l'eau, éclaire les méduses et crée des reflets scintillants sur leurs corps gélatineux. Les méduses se déplacent en rythme, leurs pulsations synchronisées créant un spectacle visuel envoûtant. Cette photographie, capturant un instant de cette danse aquatique, met en lumière la beauté et la délicatesse des méduses, tout en soulignant l'importance de la préservation de leurs habitats fragiles.",
        "images/photos/photographer6/photo2.jpg",
        6
    ),
    (
        "Forêt de Kelp",
        "Une forêt sous-marine de kelp s'étendant à perte de vue, créant un habitat riche en vie marine. Les longues frondes de kelp ondulent doucement avec les courants, formant des allées et des arches naturelles à travers lesquelles nagent de nombreuses créatures marines. Les otaries, les poissons et les crustacés trouvent refuge et nourriture dans cette forêt aquatique. La lumière naturelle, pénétrant à travers l'épaisseur du kelp, crée des jeux d'ombres et de lumières fascinants sur le fond marin. Cette photographie, capturant l'immensité et la beauté de la forêt de kelp, met en lumière l'importance de ces écosystèmes pour la biodiversité marine, tout en soulignant la nécessité de leur protection contre les menaces environnementales.",
        "images/photos/photographer6/photo3.jpg",
        6
    ),
    (
        "Grotte de la Pieuvre*",
        "Une pieuvre géante s'abritant dans une grotte sous-marine, ses tentacules s'étendant avec grâce et puissance. La pieuvre, avec sa peau changeante et ses yeux perçants, explore son environnement avec une intelligence et une curiosité remarquables. Elle utilise ses tentacules pour attraper des proies et se défendre contre les prédateurs. La grotte, décorée de coraux et de spongiaires, offre un refuge sûr pour cette créature fascinante. La lumière naturelle, pénétrant à travers les ouvertures de la grotte, éclaire la pieuvre et crée des reflets scintillants sur sa peau texturée. Cette photographie, capturant un instant de la vie de la pieuvre, met en lumière la beauté et la complexité de cette créature intelligente, tout en soulignant l'importance de la préservation de ses habitats naturels.",
        "images/photos/photographer6/photo4.jpg",
        6
    ),
    (
        "Bal des Anges",
        "Un groupe de poissons-anges nageant élégamment parmi les coraux et les algues, leurs nageoires majestueuses et leurs couleurs vives créant un spectacle enchanteur. Les poissons-anges, avec leurs motifs distinctifs et leurs mouvements gracieux, ajoutent une touche de beauté et de sérénité à cette scène sous-marine. Chaque poisson-ange utilise ses nageoires pour se déplacer avec précision et élégance, explorant les recoins du récif à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la grâce des poissons-anges, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer6/photo5.jpg",
        6
    ),
    (
        "Cité des Anémones",
        " Une colonie d'anémones de mer s'étendant sur le fond marin, leurs tentacules colorés et ondulants créant un spectacle visuel fascinant. Les anémones, avec leurs couleurs vives et leurs mouvements gracieux, offrent un refuge et de la nourriture à de nombreuses créatures marines. Les poissons-clowns, les crevettes et les crabes vivent en symbiose avec les anémones, profitant de leur protection contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les anémones et crée des reflets scintillants sur leurs tentacules. Cette photographie, capturant un instant de la vie dans la cité des anémones, met en lumière la beauté et la complexité des interactions marines, tout en soulignant l'importance de la préservation de ces habitats uniques.",
        "images/photos/photographer6/photo6.jpg",
        6
    ),
    (
        "Le Royaume des Nudibranches",
        "Un groupe de nudibranches colorés se déplaçant sur le fond marin, leurs corps délicats et leurs motifs éclatants créant un spectacle visuel époustouflant. Les nudibranches, avec leurs formes variées et leurs couleurs vives, explorent les coraux et les rochers à la recherche de nourriture. Chaque nudibranche utilise ses appendices sensoriels pour détecter les proies et les dangers. La lumière naturelle, pénétrant à travers l'eau, éclaire les nudibranches et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures fascinantes, met en lumière la beauté et la diversité des nudibranches, tout en soulignant l'importance de la préservation de leurs habitats fragiles.",
        "images/photos/photographer6/photo7.jpg",
        6
    ),
    (
        "Dauphins en Parade",
        "Un groupe de dauphins nageant ensemble, leurs mouvements gracieux et leurs sauts spectaculaires créant un spectacle visuel captivant. Les dauphins, avec leur intelligence et leur sociabilité, forment des groupes sociaux complexes et interagissent constamment entre eux. Leur peau lisse et leurs corps aérodynamiques leur permettent de se déplacer avec une vitesse et une agilité remarquables. La lumière naturelle, pénétrant à travers l'eau, éclaire les dauphins et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des dauphins, met en lumière la beauté et l'intelligence de ces créatures marines, tout en soulignant l'importance de la préservation de leurs habitats et de la protection contre les menaces humaines.",
        "images/photos/photographer6/photo8.jpg",
        6
    ),
    (
        "Grottes des Murènes",
        "Un groupe de murènes se cachant dans les recoins sombres d'une caverne sous-marine, leurs têtes émergeant pour observer leur environnement. Les murènes, avec leurs corps allongés et leurs mâchoires puissantes, sont des prédateurs nocturnes qui se nourrissent de poissons et d'invertébrés. La caverne, décorée de coraux et de spongiaires, offre un refuge sûr pour ces créatures mystérieuses. La lumière naturelle, pénétrant à travers les ouvertures de la caverne, éclaire les murènes et crée des reflets scintillants sur leurs peaux. Cette photographie, capturant un instant de la vie des murènes, met en lumière la beauté et la dangerosité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer6/photo9.jpg",
        6
    ),
    (
        "Ballet des Raies Pastenagues",
        "Un groupe de raies pastenagues se déplaçant avec grâce sur le fond marin, leurs ailes larges et leurs queues fines créant un spectacle visuel hypnotique. Les raies pastenagues, avec leurs mouvements fluides et leurs corps aplatis, ajoutent une touche de sérénité à cette scène sous-marine. Chaque raie utilise ses ailes pour se déplacer en rythme avec les courants, explorant le fond marin à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les raies et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des raies pastenagues, met en lumière la beauté et la grâce de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer6/photo10.jpg",
        6
    ),
    (
        "Étoiles de la Nuit",
        " Une scène sous-marine illuminée par des créatures bioluminescentes, leurs corps scintillants créant un spectacle visuel enchanteur. Les créatures bioluminescentes, avec leurs motifs lumineux et leurs mouvements gracieux, ajoutent une touche de magie à cette scène nocturne. La lumière naturelle, filtrée à travers l'eau, éclaire les créatures et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie nocturne sous-marine, met en lumière la beauté et la diversité des créatures bioluminescentes, tout en soulignant l'importance de la préservation de ces habitats fragiles.",
        "images/photos/photographer7/photo1.jpg",
        7
    ),
    (
        "La Grande Migration des Thons",
        "Un groupe de thons nageant ensemble, leurs corps puissants et leurs mouvements rapides créant un spectacle visuel impressionnant. Les thons, avec leurs corps fuselés et leurs nageoires puissantes, se déplacent en grands groupes pour parcourir des milliers de kilomètres à la recherche de nourriture et de sites de reproduction. La lumière naturelle, pénétrant à travers l'eau, éclaire les thons et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la migration des thons, met en lumière la force et la détermination de ces créatures marines, tout en soulignant l'importance de la préservation de leurs routes migratoires et de la protection contre la surpêche.",
        "images/photos/photographer4/photo2.jpg",
        7
    ),
    (
        "Symphonie des Poissons-Lions",
        "Un groupe de poissons-lions nageant parmi les coraux, leurs nageoires élégantes et leurs épines venimeuses créant un spectacle visuel captivant. Les poissons-lions, avec leurs couleurs vives et leurs motifs distinctifs, ajoutent une touche de beauté et de danger à cette scène sous-marine. Chaque poisson-lion utilise ses nageoires pour se déplacer avec grâce et précision, explorant les recoins du récif à la recherche de proies. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-lions et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la dangerosité des poissons-lions, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer7/photo3.jpg",
        7
    ),
    (
        "Danse des Poissons-Papillons",
        "Un groupe de poissons-papillons nageant en synchronisation parmi les coraux, leurs nageoires délicates et leurs couleurs éclatantes créant un ballet aquatique envoûtant. Les poissons-papillons, avec leurs motifs distinctifs et leurs mouvements gracieux, ajoutent une touche de beauté et de sérénité à cette scène sous-marine. Chaque poisson-papillon utilise ses nageoires pour se déplacer avec précision et élégance, explorant les recoins du récif à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la grâce des poissons-papillons, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer7/photo4.jpg",
        7
    ),
    (
        "Forêt des Algues Brunes",
        "Une forêt sous-marine d'algues brunes s'étendant à perte de vue, créant un habitat riche en vie marine. Les longues frondes d'algues brunes ondulent doucement avec les courants, formant des allées et des arches naturelles à travers lesquelles nagent de nombreuses créatures marines. Les poissons, les crustacés et les mollusques trouvent refuge et nourriture dans cette forêt aquatique. La lumière naturelle, pénétrant à travers l'épaisseur des algues, crée des jeux d'ombres et de lumières fascinants sur le fond marin. Cette photographie, capturant l'immensité et la beauté de la forêt d'algues brunes, met en lumière l'importance de ces écosystèmes pour la biodiversité marine, tout en soulignant la nécessité de leur protection contre les menaces environnementales.",
        "images/photos/photographer7/photo5.jpg",
        7
    ),
    (
        "Récif des Couleurs",
        "Un récif corallien aux couleurs vives et éclatantes, peuplé de créatures marines fascinantes. Les coraux, aux formes variées et aux teintes éclatantes, créent un paysage sous-marin vibrant de vie. Les poissons-papillons, les demoiselles et les chirurgiens virevoltent parmi les coraux, ajoutant du mouvement et de la couleur à cette scène. Les crevettes, les crabes et les étoiles de mer se déplacent lentement sur le fond marin, tandis que les murènes et les poulpes se cachent dans les anfractuosités des rochers. La lumière du soleil, pénétrant à travers les eaux claires, éclaire les coraux et crée des jeux d'ombres et de lumières fascinants. Cette photographie, capturant l'effervescence de la vie sur le récif, met en lumière la complexité et la beauté des écosystèmes coralliens, tout en soulignant l'importance de leur conservation.",
        "images/photos/photographer7/photo6.jpg",
        7
    ),
    (
        "Grottes des Langoustes",
        "Un groupe de langoustes se cachant dans les recoins sombres d'une caverne sous-marine, leurs antennes longues et fines émergeant pour observer leur environnement. Les langoustes, avec leurs corps robustes et leurs pinces puissantes, sont des prédateurs nocturnes qui se nourrissent de poissons et d'invertébrés. La caverne, décorée de coraux et de spongiaires, offre un refuge sûr pour ces créatures mystérieuses. La lumière naturelle, pénétrant à travers les ouvertures de la caverne, éclaire les langoustes et crée des reflets scintillants sur leurs carapaces. Cette photographie, capturant un instant de la vie des langoustes, met en lumière la beauté et la dangerosité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer7/photo7.jpg",
        7
    ),
    (
        "Danse des Poissons-Chirurgiens",
        "Un groupe de poissons-chirurgiens nageant en synchronisation parmi les coraux, leurs nageoires délicates et leurs couleurs éclatantes créant un ballet aquatique envoûtant. Les poissons-chirurgiens, avec leurs motifs distinctifs et leurs mouvements gracieux, ajoutent une touche de beauté et de sérénité à cette scène sous-marine. Chaque poisson-chirurgien utilise ses nageoires pour se déplacer avec précision et élégance, explorant les recoins du récif à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la grâce des poissons-chirurgiens, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer7/photo8.jpg",
        7
    ),
    (
        "Royaume des Coquillages",
        "Un groupe de coquillages colorés dispersés sur le fond marin, leurs motifs distinctifs et leurs formes variées créant un spectacle visuel fascinant. Les coquillages, avec leurs couleurs vives et leurs textures uniques, ajoutent une touche de beauté et de diversité à cette scène sous-marine. Chaque coquillage abrite une créature marine qui utilise sa coquille pour se protéger des prédateurs et des conditions environnementales. La lumière naturelle, pénétrant à travers l'eau, éclaire les coquillages et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des coquillages, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer7/photo9.jpg",
        7
    ),
    (
        "Bal des Poissons-Papillons",
        "Un groupe de poissons-papillons nageant en synchronisation parmi les coraux, leurs nageoires délicates et leurs couleurs éclatantes créant un ballet aquatique envoûtant. Les poissons-papillons, avec leurs motifs distinctifs et leurs mouvements gracieux, ajoutent une touche de beauté et de sérénité à cette scène sous-marine. Chaque poisson-papillon utilise ses nageoires pour se déplacer avec précision et élégance, explorant les recoins du récif à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la grâce des poissons-papillons, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer7/photo10.jpg",
        7
    ),
    (
        "Festival des Nudibranches",
        "Un groupe de nudibranches colorés se déplaçant sur le fond marin, leurs corps délicats et leurs motifs éclatants créant un spectacle visuel époustouflant. Les nudibranches, avec leurs formes variées et leurs couleurs vives, explorent les coraux et les rochers à la recherche de nourriture. Chaque nudibranche utilise ses appendices sensoriels pour détecter les proies et les dangers. La lumière naturelle, pénétrant à travers l'eau, éclaire les nudibranches et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures fascinantes, met en lumière la beauté et la diversité des nudibranches, tout en soulignant l'importance de la préservation de leurs habitats fragiles.",
        "images/photos/photographer8/photo1.jpg",
        8
    ),
    (
        "Garde du Trésor",
        "Un groupe de poissons-chirurgiens nageant en synchronisation parmi les coraux, leurs nageoires délicates et leurs couleurs éclatantes créant un ballet aquatique envoûtant. Les poissons-chirurgiens, avec leurs motifs distinctifs et leurs mouvements gracieux, ajoutent une touche de beauté et de sérénité à cette scène sous-marine. Chaque poisson-chirurgien utilise ses nageoires pour se déplacer avec précision et élégance, explorant les recoins du récif à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons et les coraux, créant des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie de ces créatures majestueuses, met en lumière la beauté et la grâce des poissons-chirurgiens, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer8/photo2.jpg",
        8
    ),
    (
        "Mystères du Cimetière Marin",
        "Un site de plongée dévoilant les vestiges d'un ancien navire naufragé, couvert de coraux et abritant une multitude de créatures marines. Les structures rouillées du navire, décorées de coraux multicolores, créent un paysage à la fois mystérieux et fascinant. Des poissons de toutes tailles et couleurs nagent à travers les ouvertures et les cavités du navire, tandis que les anémones et les éponges colonisent les surfaces métalliques. Les courants doux déplacent délicatement les frondes d'algues accrochées à l'épave, ajoutant du mouvement à cette scène silencieuse. La lumière du soleil, filtrée par les eaux profondes, éclaire le navire et ses habitants, créant des ombres et des reflets d'une beauté envoûtante. Cette photographie, capturant la vie et la beauté dans ce cimetière marin, met en lumière la résilience de la nature et la façon dont elle colonise et transforme les vestiges humains.",
        "images/photos/photographer8/photo3.jpg",
        8
    ),
    (
        "Arches de Corail",
        "Une série d'arches de corail naturelles formant des passages sous-marins spectaculaires, habités par une diversité incroyable de vie marine. Les coraux aux couleurs éclatantes et aux formes variées créent des paysages sous-marins enchanteurs, où se cachent de nombreuses créatures marines. Des poissons de récif aux couleurs vives nagent à travers ces arches, explorant chaque recoin à la recherche de nourriture et de refuge. Les courants doux et la lumière filtrée par l'eau ajoutent une atmosphère mystique à cette scène. Cette photographie, capturant la beauté architecturale des arches de corail, met en lumière l'importance de la préservation des récifs coralliens pour la biodiversité marine.",
        "images/photos/photographer8/photo4.jpg",
        8
    ),
    (
        "Royaume des Crabes",
        "Un groupe de crabes colorés explorant le fond marin, leurs pattes agiles et leurs pinces puissantes créant un spectacle captivant. Les crabes, avec leurs carapaces robustes et leurs comportements territoriaux, ajoutent une touche de dynamisme à cette scène sous-marine. Chaque crabe utilise ses pinces pour creuser dans le sable, chercher de la nourriture et se défendre contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les crabes et crée des reflets scintillants sur leurs carapaces. Cette photographie, capturant un instant de la vie des crabes, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer8/photo5.jpg",
        8
    ),
    (
        "Symphonie des Étoiles de Mer",
        "Un groupe d'étoiles de mer de différentes espèces et couleurs s'étalant sur le fond marin, leurs formes et motifs créant un spectacle visuel fascinant. Les étoiles de mer, avec leurs bras flexibles et leurs mouvements lents, ajoutent une touche de tranquillité à cette scène sous-marine. Chaque étoile de mer utilise ses ventouses pour se déplacer et se nourrir, explorant les rochers et les coraux à la recherche de proies. La lumière naturelle, pénétrant à travers l'eau, éclaire les étoiles de mer et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des étoiles de mer, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer8/photo6.jpg",
        8
    ),
    (
        "Cascade des Mérous",
        "Un groupe de mérous nageant en formation le long d'un récif, leurs corps massifs et leurs couleurs variées créant un spectacle visuel impressionnant. Les mérous, avec leurs corps robustes et leurs mâchoires puissantes, sont des prédateurs importants dans les écosystèmes marins. Chaque mérou utilise ses nageoires pour se déplacer avec grâce et précision, explorant les recoins du récif à la recherche de proies. La lumière naturelle, pénétrant à travers l'eau, éclaire les mérous et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des mérous, met en lumière la beauté et la force de ces créatures, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer8/photo7.jpg",
        8
    ),
    (
        "Rencontre avec le Poisson-Lune",
        "Un poisson-lune géant nageant paisiblement dans les eaux profondes, son corps massif et ses nageoires délicates créant un spectacle visuel captivant. Le poisson-lune, avec sa forme unique et ses mouvements lents, est une créature fascinante des océans. Chaque mouvement de ses nageoires génère des ondulations douces dans l'eau, ajoutant une touche de tranquillité à cette scène sous-marine. La lumière naturelle, pénétrant à travers l'eau, éclaire le poisson-lune et crée des reflets scintillants sur ses écailles argentées. Cette photographie, capturant un instant de la vie du poisson-lune, met en lumière la beauté et la singularité de cette créature, tout en soulignant l'importance de la préservation de ses habitats naturels.",
        "images/photos/photographer8/photo8.jpg",
        8
    ),
    (
        "Lagune des Hippocampes",
        "Un groupe d'hippocampes se cachant parmi les algues et les coraux dans une lagune tranquille, leurs corps graciles et leurs mouvements délicats créant un spectacle visuel enchanteur. Les hippocampes, avec leurs formes élégantes et leurs couleurs variées, ajoutent une touche de magie à cette scène sous-marine. Chaque hippocampe utilise sa queue préhensile pour s'accrocher aux algues et se protéger des courants. La lumière naturelle, pénétrant à travers l'eau, éclaire les hippocampes et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des hippocampes, met en lumière la beauté et la fragilité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer8/photo9.jpg",
        8
    ),
    (
        "Marée de Poissons-Perroquets",
        "Un groupe de poissons-perroquets nageant parmi les coraux, leurs becs puissants et leurs couleurs vives créant un spectacle visuel captivant. Les poissons-perroquets, avec leurs corps robustes et leurs comportements sociaux, sont des acteurs importants dans les écosystèmes marins. Chaque poisson-perroquet utilise son bec pour ronger les coraux et se nourrir, contribuant ainsi à la santé des récifs coralliens. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-perroquets et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-perroquets, met en lumière la beauté et la complexité de ces créatures, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer8/photo10.jpg",
        8
    ),
    (
        "Forêt de Corail Noir",
        "Une forêt de corail noir s'étendant sur le fond marin, ses branches délicates et ses motifs sombres créant un spectacle visuel fascinant. Le corail noir, avec ses formes uniques et ses couleurs profondes, ajoute une touche de mystère à cette scène sous-marine. De nombreuses créatures marines trouvent refuge et nourriture dans cette forêt aquatique. La lumière naturelle, pénétrant à travers l'épaisseur des branches de corail, crée des jeux d'ombres et de lumières intrigants sur le fond marin. Cette photographie, capturant l'immensité et la beauté de la forêt de corail noir, met en lumière l'importance de ces écosystèmes pour la biodiversité marine, tout en soulignant la nécessité de leur protection contre les menaces environnementales.",
        "images/photos/photographer9/photo1.jpg",
        9
    ),
    (
        "Cité des Spongiaires",
        "Une colonie de spongiaires s'étendant sur le fond marin, leurs formes variées et leurs couleurs éclatantes créant un spectacle visuel captivant. Les spongiaires, avec leurs textures uniques et leurs capacités filtrantes, jouent un rôle essentiel dans la santé des écosystèmes marins. Chaque spongiaire abrite une multitude de créatures marines qui trouvent refuge et nourriture parmi leurs structures complexes. La lumière naturelle, pénétrant à travers l'eau, éclaire les spongiaires et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie dans la cité des spongiaires, met en lumière la beauté et la complexité des interactions marines, tout en soulignant l'importance de la préservation de ces habitats uniques.",
        "images/photos/photographer9/photo2.jpg",
        9
    ),
    (
        "Féérie des Poissons-Cailloux",
        "Un groupe de poissons-cailloux parfaitement camouflés parmi les rochers et les coraux, leurs corps mimétiques créant un spectacle visuel intrigant. Les poissons-cailloux, avec leurs couleurs et leurs motifs se fondant dans leur environnement, sont des maîtres du camouflage. Chaque poisson utilise son mimétisme pour se protéger des prédateurs et surprendre ses proies. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-cailloux et crée des reflets subtils sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-cailloux, met en lumière la beauté et l'ingéniosité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer9/photo3.jpg",
        9
    ),
    (
        "Jardin des Algues Rouges",
        "Une vaste étendue d'algues rouges s'épanouissant sur le fond marin, leurs frondes délicates et leurs teintes vibrantes créant un tapis coloré sous les eaux. Les algues rouges, avec leurs textures fines et leurs mouvements gracieux, ajoutent une touche de couleur et de vie à cette scène sous-marine. De nombreux poissons et invertébrés trouvent refuge et nourriture parmi ces algues. La lumière naturelle, filtrée par l'eau, illumine les algues rouges et crée des reflets scintillants sur leurs frondes. Cette photographie, capturant un instant de la vie dans le jardin des algues rouges, met en lumière la beauté et l'importance de ces plantes marines pour l'écosystème océanique.",
        "images/photos/photographer9/photo4.jpg",
        9
    ),
    (
        "Tapis des Oursins",
        "Un groupe d'oursins dispersés sur le fond marin, leurs épines menaçantes et leurs motifs variés créant un spectacle visuel fascinant. Les oursins, avec leurs carapaces robustes et leurs épines acérées, ajoutent une touche de mystère et de danger à cette scène sous-marine. Chaque oursin utilise ses épines pour se défendre contre les prédateurs et se déplacer sur le substrat. La lumière naturelle, pénétrant à travers l'eau, éclaire les oursins et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des oursins, met en lumière la beauté et la complexité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.l",
        "images/photos/photographer9/photo5.jpg",
        9
    ),
    (
        "Refuge des Crustacés",
        "Un groupe de crustacés se cachant parmi les rochers et les coraux, leurs carapaces robustes et leurs pinces puissantes créant un spectacle captivant. Les crustacés, avec leurs comportements territoriaux et leurs capacités de camouflage, sont des acteurs essentiels dans les écosystèmes marins. Chaque crustacé utilise ses pinces pour chercher de la nourriture et se défendre contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les crustacés et crée des reflets scintillants sur leurs carapaces. Cette photographie, capturant un instant de la vie des crustacés, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer9/photo6.jpg",
        9
    ),
    (
        "Mer des Méduses",
        "Une multitude de méduses flottant gracieusement dans les eaux profondes, leurs corps translucides et leurs tentacules délicats créant un spectacle visuel enchanteur. Les méduses, avec leurs mouvements élégants et leurs couleurs changeantes, ajoutent une touche de magie et de mystère à cette scène sous-marine. Chaque méduse utilise ses tentacules pour capturer de petites proies et se déplacer avec légèreté dans l'eau. La lumière naturelle, pénétrant à travers l'eau, éclaire les méduses et crée des reflets scintillants sur leurs surfaces gélatineuses. Cette photographie, capturant un instant de la vie des méduses, met en lumière la beauté et la fragilité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer9/photo7.jpg",
        9
    ),
    (
        "Labyrinthe des Coraux",
        "Un labyrinthe de coraux complexes formant des passages sous-marins fascinants, habités par une diversité incroyable de vie marine. Les coraux, avec leurs formes variées et leurs couleurs éclatantes, créent des paysages sous-marins enchanteurs. Des poissons de toutes tailles et couleurs nagent à travers ce labyrinthe, explorant chaque recoin à la recherche de nourriture et de refuge. Les courants doux et la lumière filtrée par l'eau ajoutent une atmosphère mystique à cette scène. Cette photographie, capturant la complexité et la beauté du labyrinthe de coraux, met en lumière l'importance de la préservation des récifs coralliens pour la biodiversité marine.",
        "images/photos/photographer9/photo8.jpg",
        9
    ),
    (
        "Parade des Poissons-Clowns",
        "Un groupe de poissons-clowns nageant parmi les anémones de mer, leurs couleurs vives et leurs mouvements agiles créant un spectacle visuel captivant. Les poissons-clowns, avec leurs comportements sociaux et leurs relations symbiotiques avec les anémones, sont des figures emblématiques des récifs coralliens. Chaque poisson-clown utilise les tentacules de l'anémone pour se protéger des prédateurs et se nourrir. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-clowns et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-clowns, met en lumière la beauté et la complexité des interactions marines, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer9/photo9.jpg",
        9
    ),
    (
        "Oasis des Éponges",
        "Un groupe d'éponges colorées s'étendant sur le fond marin, leurs formes variées et leurs couleurs éclatantes créant un spectacle visuel captivant. Les éponges, avec leurs textures uniques et leurs capacités filtrantes, jouent un rôle essentiel dans la santé des écosystèmes marins. Chaque éponge abrite une multitude de créatures marines qui trouvent refuge et nourriture parmi leurs structures complexes. La lumière naturelle, pénétrant à travers l'eau, éclaire les éponges et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie dans l'oasis des éponges, met en lumière la beauté et la complexité des interactions marines, tout en soulignant l'importance de la préservation de ces habitats uniques.",
        "images/photos/photographer9/photo10.jpg",
        9
    ),
    (
        "Défilé des Poissons-Coffres",
        "Un groupe de poissons-coffres nageant en formation, leurs corps anguleux et leurs couleurs vives créant un spectacle visuel intrigant. Les poissons-coffres, avec leurs formes uniques et leurs comportements curieux, ajoutent une touche de charme à cette scène sous-marine. Chaque poisson-coffre utilise ses nageoires pour se déplacer avec précision et explorer son environnement. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-coffres et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-coffres, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo1.jpg",
        10
    ),
    (
        "Cité des Crustacés",
        "Un groupe de crustacés se cachant parmi les rochers et les coraux, leurs carapaces robustes et leurs pinces puissantes créant un spectacle captivant. Les crustacés, avec leurs comportements territoriaux et leurs capacités de camouflage, sont des acteurs essentiels dans les écosystèmes marins. Chaque crustacé utilise ses pinces pour chercher de la nourriture et se défendre contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les crustacés et crée des reflets scintillants sur leurs carapaces. Cette photographie, capturant un instant de la vie des crustacés, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo2.jpg",
        10
    ),
    (
        "Mosaïque des Mollusques",
        "Un groupe de mollusques aux coquilles colorées dispersés sur le fond marin, leurs motifs distinctifs et leurs formes variées créant un spectacle visuel fascinant. Les mollusques, avec leurs couleurs vives et leurs textures uniques, ajoutent une touche de beauté et de diversité à cette scène sous-marine. Chaque mollusque abrite une créature marine qui utilise sa coquille pour se protéger des prédateurs et des conditions environnementales. La lumière naturelle, pénétrant à travers l'eau, éclaire les mollusques et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des mollusques, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo3.jpg",
        10
    ),
    (
        "Cirque des Poulpes",
        "Un groupe de poulpes se déplaçant avec grâce parmi les rochers et les coraux, leurs tentacules souples et leurs couleurs changeantes créant un spectacle visuel captivant. Les poulpes, avec leurs comportements intelligents et leurs capacités de camouflage, ajoutent une touche de mystère et de fascination à cette scène sous-marine. Chaque poulpe utilise ses tentacules pour explorer son environnement, se nourrir et se défendre contre les prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les poulpes et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poulpes, met en lumière la beauté et la complexité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo4.jpg",
        10
    ),
    (
        "Réunion des Poissons-Papillons",
        "Un groupe de poissons-papillons nageant gracieusement parmi les coraux, leurs couleurs éclatantes et leurs mouvements élégants créant un spectacle visuel enchanteur. Les poissons-papillons, avec leurs motifs distinctifs et leurs comportements sociaux, ajoutent une touche de charme et de vivacité à cette scène sous-marine. Chaque poisson-papillon utilise ses nageoires pour se déplacer avec agilité et précision, explorant les récifs à la recherche de nourriture. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-papillons et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-papillons, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation des récifs coralliens pour leur survie.",
        "images/photos/photographer10/photo5.jpg",
        10
    ),
    (
        "Cavernes des Anguilles",
        "Un groupe d'anguilles se cachant dans les cavernes et les crevasses des rochers, leurs corps allongés et leurs mouvements sinueux créant un spectacle visuel intrigant. Les anguilles, avec leurs comportements nocturnes et leurs capacités de camouflage, ajoutent une touche de mystère et de danger à cette scène sous-marine. Chaque anguille utilise ses capacités de nage pour se déplacer avec agilité dans les cavernes à la recherche de proies et de refuge. La lumière naturelle, pénétrant à travers l'eau, éclaire les anguilles et crée des reflets subtils sur leurs surfaces. Cette photographie, capturant un instant de la vie des anguilles, met en lumière la beauté et la complexité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo6.jpg",
        10
    ),
    (
        "Danse des Crevettes",
        "Un groupe de crevettes se déplaçant avec agilité parmi les coraux et les algues, leurs corps translucides et leurs mouvements rapides créant un spectacle visuel captivant. Les crevettes, avec leurs comportements sociaux et leurs capacités de nettoyage, jouent un rôle essentiel dans les écosystèmes marins. Chaque crevette utilise ses pattes et ses antennes pour chercher de la nourriture et se protéger des prédateurs. La lumière naturelle, pénétrant à travers l'eau, éclaire les crevettes et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des crevettes, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo7.jpg",
        10
    ),
    (
        "Valse des Poissons-Serpents",
        "Un groupe de poissons-serpents nageant gracieusement dans les eaux profondes, leurs corps élancés et leurs mouvements ondulants créant un spectacle visuel enchanteur. Les poissons-serpents, avec leurs comportements nocturnes et leurs capacités de chasse, ajoutent une touche de mystère et de danger à cette scène sous-marine. Chaque poisson-serpent utilise ses mouvements fluides pour se déplacer avec agilité dans l'eau à la recherche de proies. La lumière naturelle, pénétrant à travers l'eau, éclaire les poissons-serpents et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des poissons-serpents, met en lumière la beauté et la complexité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo8.jpg",
        10
    ),
    (
        "Royaume des Concombres de Mer",
        "Un groupe de concombres de mer dispersés sur le fond marin, leurs corps allongés et leurs mouvements lents créant un spectacle visuel fascinant. Les concombres de mer, avec leurs formes uniques et leurs capacités de nettoyage, jouent un rôle essentiel dans la santé des écosystèmes marins. Chaque concombre de mer utilise ses tentacules pour se nourrir de particules organiques et nettoyer le substrat. La lumière naturelle, pénétrant à travers l'eau, éclaire les concombres de mer et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des concombres de mer, met en lumière la beauté et la diversité de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo9.jpg",
        10
    ),
    (
        "Passage des Raies Manta",
        "Un groupe de raies manta nageant majestueusement dans les eaux profondes, leurs corps imposants et leurs mouvements gracieux créant un spectacle visuel enchanteur. Les raies manta, avec leurs ailes géantes et leurs comportements sociaux, ajoutent une touche de majesté à cette scène sous-marine. Chaque raie manta utilise ses mouvements fluides pour se déplacer avec agilité dans l'eau à la recherche de plancton. La lumière naturelle, pénétrant à travers l'eau, éclaire les raies manta et crée des reflets scintillants sur leurs surfaces. Cette photographie, capturant un instant de la vie des raies manta, met en lumière la beauté et la grandeur de ces créatures, tout en soulignant l'importance de la préservation de leurs habitats naturels.",
        "images/photos/photographer10/photo10.jpg",
        10
    );

CREATE TABLE gallery (
    id_user INT REFERENCES user (id),
    id_artwork INT REFERENCES artwork (id),
    PRIMARY KEY (id_user, id_artwork)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hashed_password VARCHAR(100) NOT NULL,
    is_admin TINYINT DEFAULT 0 NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT UX_email UNIQUE (email)
);

INSERT INTO
    user (
        firstname,
        lastname,
        email,
        hashed_password,
        is_admin
    )
VALUES (
        'Hakim',
        'AZIZI',
        'hakazizi@hotmail.com',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        1
    ),
    (
        'Martin',
        'Camille',
        'camille.martin123@hotmail.com',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Durand',
        'Alexandre',
        'alex-durand87@gmail.net',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Lefebvre',
        'Sophie',
        'sophielefebvre@orange.org',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Moreau',
        'Julien',
        'julienmoreau54@free.com',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Lambert',
        'Claire',
        'claire-lambert9@bouygues.com',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Rousseau',
        'Vincent',
        'vincent.rousseau23@caramail.org',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Petit',
        'Emma',
        'emmapetit77@hotmail.net',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Garcia',
        'Lucas',
        'lucas-garcia101@free.com',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    ),
    (
        'Fournier',
        'Manon',
        'manonfournier85@gmail.org',
        '$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q',
        0
    );