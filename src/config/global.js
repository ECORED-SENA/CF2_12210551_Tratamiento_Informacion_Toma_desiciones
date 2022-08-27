export default {
  global: {
    componenteFormativo: 'Gestión de la información y sus procesos',
    descripcionCurso:
      'Se abordan las temáticas correspondientes a los mecanismos de gestión documental desde el punto de vista del tratamiento de la información, almacenamiento e instrumentos, además reconociendo la importancia de la confidencialidad y custodia de la información,  igualmente las técnicas de archivo, procesos internos empresariales, implementación de acciones de mejora continua, contemplando los planes preventivos y correctivos que sean requeridos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Procesos y procedimientos para la gestión de calidad de la información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Almacenamiento de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Instrumentos archivísticos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Atención de PQRS',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Informes y formatos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Confidencialidad y custodia de la información',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Acciones de mejoramiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Correctivas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Preventivas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procesos de interpretación, argumentación y proposición',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Presidencial de Cooperación APC-Colombia. (2017). <i>Programa de gestión documental. APC-Colombia.</i> ',
      link:
        'https://www.apccolombia.gov.co/sites/default/files/archivos_usuario/2017/a-ot-009programagestiondocumentalv5.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia. (2015). <i>Guía para la clasificación de la información de acuerdo con sus niveles de seguridad. Archivo General de la Nación.</i> ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/3_Transparencia/3.3%20Procesos%20y%20Procedimientos/GIT-G-01_GUIA_PARA_LA_CALIFICACI%C3%93N_DE_LA_INFORMACI%C3%93N_AGN.pdf',
    },

    {
      referencia:
        'Departamento Nacional de Planeación DNP-Colombia. (2016). <i>Criterios normativos para peticiones, quejas, reclamos, solicitudes y denuncias (PQRSD). DNP.</i> ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/CRITERIOS%20NORMATIVOS%20PARA%20PQRSD%20V2.pdf',
    },

    {
      referencia:
        'Federación Nacional de Departamentos FND-Colombia. (2021). <i>Política de gestión documental. FND.</i> ',
      link:
        'https://www.fnd.org.co/docs/transparencia/gestion-documental/Pol%C3%ADtica%20Gesti%C3%B3n%20Documental%20.pdf',
    },
    {
      referencia:
        'Heredia, A. (2008). <i>Gestión de documentos y administración de archivos. CNB.</i> ',
      link: 'https://cnb.gov.co/ojs/index.php/codices/article/view/199/149',
    },
    {
      referencia:
        'Martelo, R., Madera, J. y Betín, A. (2015). <i>Software para gestión documental, un componente modular del sistema de gestión de seguridad de la información (SGSI). Scielo.</i>',
      link: 'https://dx.doi.org/10.4067/S0718-07642015000200015',
    },
  ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'Proceso que brinda alternativa de solución que se aplica sobre alguna falencia o falla que se desarrolla en la empresa.',
    },
    {
      termino: 'Acciones preventivas',
      significado:
        'Proceso que se anticipa sobre una posible falencia o falla que se desarrolle en la empresa.',
    },
    {
      termino: 'Gestión de calidad',
      significado:
        'Conjunto de procesos relacionados con la organización especializada que ayuda a la empresa a determinar puntos de revisión y ejecución, que permiten gestionar la documentación de forma organizada y coherente con las necesidades previstas en la empresa.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'Conjunto de normas, prácticas y técnicas que buscan el correcto manejo de la información de una empresa.',
    },
    {
      termino: 'Plan de mejoramiento ',
      significado:
        'Procedimiento gerencial que orienta la mejora continua de una empresa a través de un periodo determinado, según criterio evaluado previamente.',
    },
    {
      termino: 'PQRS',
      significado: 'Peticiones, quejas, reclamos y sugerencias.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'Mecanismo interno que se establece en una empresa para salvaguardar la esencia de la información que se considere confiable y que contenga principios de privacidad. ',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Proceso en el cual se protege la información general que custodia una organización, siempre aplicando los lineamientos del marco legal.',
    },
  ],
  complementario: [
    {
      tema: 'Gestión documental',
      referencia:
        'Didáctica Empresarial. (2020). <i>Sistema de gestión documental</i> [video]',
      tipo: 'Video',
      link: 'https://youtu.be/uxLwxvnG2NY',
    },
    {
      tema: 'Confidencialidad y custodia de la información',
      referencia:
        'Microvideos UTPL. (2017). <i>Protección, cuidado y custodia de documentos (Gestión de la documentación)</i> [video]',
      tipo: 'Video',
      link: 'https://youtu.be/qhFSrajAYFQ      ',
    },
    {
      tema: 'Acciones de mejoramiento',
      referencia:
        'Gestión & Formación. (2020). <i>Acciones correctivas y preventivas</i> [video].',
      tipo: 'Video',
      link: 'https://youtu.be/9Sc7JtubLg4',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Francisco Chará Carrero ',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Giovanna Andrea Escobar',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Carlos Ramirez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Daniel Polanco'],
        cargo: 'Validación Diseño web        ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
