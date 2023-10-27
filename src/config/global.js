export default {
  global: {
    componenteFormativo:
      'Valoración de riesgos asociados a factores ambientales',
    descripcionCurso:
      'La gestión de riesgos se utiliza cada vez más en todos aquellos servicios sanitarios que devengan un proceso de inspección, vigilancia y control. Por tal motivo es importante también tener claridad de todo el tema de bioseguridad vigente y obligatorio en cada empresa, y saber entregar los informes de riesgos que requieren estas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Determinación y calificación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Probabilidad y frecuencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Población',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Muestra y análisis gráfico',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Controles de bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Prácticas seguras',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Protocolos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elementos de protección individual',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Informe de valoración de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos y características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructura y procedimientos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        titulo: 'Descargar pdf',
        download: 'downloads/CFA.zip',
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
  complementario: [
    {
      tema: 'Controles de bioseguridad',
      referencia: 'Ministerio del trabajo, Resolución 11/17, 2017, ',
      tipo: 'PDF',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/647970/Resoluci%C3%B3n+1111-+est%C3%A1ndares+minimos-marzo+27.pdf',
    },
    {
      tema: 'Elementos de protección personal.',
      referencia: 'Decreto 773/97, Equipo protección personal, 1997.',
      tipo: 'PDF',
      link:
        'https://personales.gestion.unican.es/martinji/archivos/eprotindividual.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'evento repentino de una actividad que da lugar a una lesión daño o pérdida de la vida de personas, a la calidad o pérdida en el proceso',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas que tienen por objeto eliminar o minimizar el factor de riesgo biológico que pueda llegar a afectar la salud, el medio ambiente o la vida de las personas, asegurando que el desarrollo o producto final de dichos procedimientos no atenten contra la salud y seguridad de los trabajadores.',
    },
    {
      termino: 'Elementos de protección individual',
      significado:
        'son todos aquellos equipos destinados al trabajador para que se proteja de cualquier riesgo que pueda amenazar la seguridad de él o su salud en el trabajo. Los EPP no evitan el accidente o el contacto con elementos agresivos, pero ayudan a que la lesión sea menos grave.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'puede considerarse como toda circunstancia, condición o situación presentes en el ambiente de trabajo, que de no ser eliminados y/o controlados podrán desencadenar como consecuencia accidentes de trabajo y/o enfermedades laborales.',
    },
    {
      termino: 'Medidas de seguridad',
      significado:
        'son aquellas acciones, para disminuir la probabilidad de un evento adverso.',
    },
    {
      termino: 'Protocolo',
      significado:
        'un protocolo son aquellos lineamientos que sirven para orientar a cualquier tipo de persona frente a las medidas requeridas para mitigar la transmisión de algún virus o enfermedad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (2020). identificación y análisis de riesgos ambientales asociados al plan institucional de gestión ambiental (piga) de la agencia nacional de seguridad vial (ansv).',
      link:
        'https://ansv.gov.co/sites/default/files/Estudio%20de%20riesgos%20ambientales%20%28PIGA%29.pdf',
    },
    {
      referencia: 'Decreto 773/97, Equipo protección personal, 1997.',
      link:
        'https://personales.gestion.unican.es/martinji/archivos/eprotindividual.pdf',
    },
    {
      referencia: 'Gobierno de Colombia, Guía para analizar los riesgos, 2020.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/3_Gu%C3%ADa%20para%20analizar%20los%20riesgos_ajustado_VFcc.pdf',
    },
    {
      referencia:
        'GTC 45, 2020, Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/6034/ParraCuestaDianaMarcelaVasquezVeraErikaVanessa2016-AnexoA.pdf;jsessionid=3914F09D249CECD5857AFE7911279B50?sequence=2',
    },
    {
      referencia: 'MINAMBIENTE. (s.f.).',
      link:
        'http://www.cornare.gov.co/planificacion-ambiental/gestion-del-riesgo',
    },
    {
      referencia:
        'Ministerio de salud y protección social , 2021, gestión integral de los elementos de protección personal (EPP).',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia: 'Ministerio del trabajo, Resolución 11/17, 2017.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/647970/Resoluci%C3%B3n+1111-+est%C3%A1ndares+minimos-marzo+27.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2020). Calidad del Aire.',
      link: 'https://www.paho.org/es/temas/calidad-aire',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
