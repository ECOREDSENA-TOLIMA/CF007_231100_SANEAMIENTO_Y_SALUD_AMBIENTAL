<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Controles de bioseguridad
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-10.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/1.png')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Los controles de bioseguridad tienen como objetivo fundamental establecer directrices generales para la identificación y gestión de riesgos en las diversas actividades llevadas a cabo en los entornos laborales. Estos controles son esenciales para prevenir y controlar posibles peligros que puedan surgir en el proceso productivo. Es importante destacar que la realización de controles de seguridad es una práctica diaria en todas las actividades laborales. Sin embargo, las matrices de identificación de peligros y riesgos se actualizan en casos específicos, como la introducción de nuevas actividades en el proceso, cambios en la ubicación de trabajo o la ocurrencia de accidentes, incidentes o emergencias laborales. Incluso si no se producen eventos de este tipo, se recomienda actualizar estas matrices al menos anualmente. La gestión adecuada de los riesgos laborales contribuye a garantizar un entorno de trabajo seguro y proteger la salud de los trabajadores.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Conceptos
    p(data-aos="fade-left") Es esencial que el personal de trabajo comprenda y tenga claridad sobre las definiciones clave en el campo de la bioseguridad, ya que estas definiciones son fundamentales para el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SGSST) y contribuyen a mantener un entorno laboral seguro, preservando la salud y el bienestar de todas las personas involucradas. A continuación, se mencionan algunos de los conceptos relevantes en el ámbito de la bioseguridad:

    .row 
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
        .row.justify-content-center(titulo="Accidente de trabajo")
          .col-lg-7.mb-md-8.col-12
            p Se refiere a un suceso inesperado que ocurre como resultado directo o indirecto del trabajo realizado por un empleado y que provoca una lesión física, alteración funcional, discapacidad o incluso la muerte. Estos accidentes pueden ocurrir en una amplia variedad de entornos laborales y pueden involucrar desde lesiones menores hasta incidentes graves.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-12
                .tarjeta-avatar-b
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
                  .tarjeta(style="background-color:#FFAE7E")
                    .p-4
                    p.p-2 Es también accidente de trabajo aquel que se produce durante la ejecución de órdenes del empleador, o durante la ejecución de una labor bajo su autoridad, incluso fuera del lugar y horas de trabajo.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/2.png')

        .row.justify-content-center(titulo="Elemento de Protección Individual (EPP)")
          .col-lg-7.mb-md-8.col-12
            p Se refiere a los equipos o dispositivos utilizados por las personas para proporcionar una barrera de seguridad entre un peligro potencial y alguna parte de su cuerpo. Estos elementos están diseñados para proteger a los trabajadores u otras personas de lesiones o daños cuando están expuestos a riesgos en el entorno laboral u otras situaciones peligrosas.
            p Los elementos de protección individual incluyen una amplia variedad de equipos, como cascos, gafas de seguridad, protectores auditivos, guantes, calzado de seguridad, mascarillas respiratorias, arneses de seguridad, chalecos antibalas y cualquier otro dispositivo diseñado para proteger al individuo de un peligro específico.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/3.png')
          

        .row.justify-content-center(titulo="Enfermedad")
          .col-lg-7.mb-md-8.col-12
            p En el contexto de la norma ISO 45001, se puede considerar que una enfermedad abarca cualquier condición física o mental que pueda estar relacionada con el trabajo y que cause daño o malestar a un trabajador. La norma ISO 45001 se enfoca en la prevención de lesiones y enfermedades laborales a través de la identificación y el control de riesgos en el entorno laboral. El objetivo principal de esta norma es garantizar un ambiente de trabajo seguro y saludable para los empleados, promoviendo la prevención de lesiones y enfermedades relacionadas con el trabajo.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/4.png')

        .row.justify-content-center(titulo="Enfermedad profesional")
          .col-lg-7.mb-md-8.col-12
            p La definición de enfermedad profesional según el Decreto 2566 de 2009 del Ministerio de la Protección Social, establece que se trata de un estado patológico que ocurre como una consecuencia directa de la clase de trabajo que realiza el trabajador o del entorno en el que se ha visto obligado a trabajar. Esto puede deberse a la exposición a agentes físicos, químicos o biológicos relacionados con su labor. En resumen, una enfermedad profesional es aquella que se origina directamente debido a las condiciones y riesgos presentes en el entorno laboral del trabajador.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/5.png')

        .row.justify-content-center(titulo="Incidente")
          .col-lg-7.mb-md-8.col-12
            p Según la norma ISO 45001, un incidente se define como un evento no deseado que resulta en una lesión, enfermedad, daño a la propiedad, interrupción de las operaciones o cualquier combinación de estos. Estos incidentes pueden variar en gravedad, desde situaciones menores hasta eventos más serios que pueden llevar a lesiones, enfermedades graves o daños significativos. La norma ISO 45001 se enfoca en la identificación y el control de estos incidentes para prevenir lesiones y enfermedades laborales y promover un entorno de trabajo seguro y saludable.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/6.png')
              
        .row.justify-content-center(titulo="Medidas de control")
          .col-lg-7.mb-md-8.col-12
            p Las medidas de control en bioseguridad son acciones y precauciones específicas diseñadas para prevenir la exposición a riesgos biológicos, químicos o físicos en entornos donde se manipulan agentes biológicos. Estas medidas incluyen el uso de equipo de protección personal, prácticas de trabajo seguras, instalaciones adecuadas, capacitación, monitoreo, gestión de desechos, control de acceso y evaluación de riesgos. Su objetivo es proteger a los trabajadores, la comunidad y el medio ambiente de posibles riesgos asociados con la manipulación de agentes biológicos peligrosos, y son esenciales en laboratorios, instalaciones de salud y otros entornos donde se trabaja con agentes biológicos.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema2/7.png')

    .row 
      p(data-aos="fade-left") Es fundamental comprender los conceptos básicos en la valoración de riesgos, ya que esta comprensión proporciona la base necesaria para llevar a cabo una evaluación efectiva. Esto no solo facilita la organización del informe de valoración de riesgos, sino que también permite una interpretación precisa de los resultados y, en última instancia, la formulación de conclusiones y recomendaciones significativas para la entidad. Un entendimiento claro de los conceptos es esencial para abordar adecuadamente los riesgos y tomar medidas apropiadas para mitigarlos.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Prácticas seguras
    
    .col-lg-12.col-12
      .cajon.color-primario.p-4.mb-4(style="background-color: #E7FFD1")
        p La implementación de prácticas seguras es esencial en cualquier proceso productivo o actividad, ya que garantiza la seguridad de quienes participan en estas actividades. Esto incluye mantener un ambiente de trabajo limpio y ordenado, utilizar la ropa y equipo de protección adecuados, como guantes y protección visual, y seguir pautas específicas para prevenir riesgos. Antes de aplicar buenas prácticas, es crucial comprender y reconocer los diversos tipos de riesgos asociados con una determinada actividad o proceso. Esto es fundamental para garantizar un entorno de trabajo seguro y minimizar los peligros para los trabajadores y aquellos que los rodean.

    .row.justify-content-center.mt-5
      .col-8.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span #[i Tipos de riesgos]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/8.svg' alt='En la figura 6 se muestran los tipos de riesgo: biológicos, ambientales, físicos, químicos, psicofisiológicos.')

    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span #[i Tipos de riesgos]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/9.svg' alt='En la figura 6 se muestran los tipos de riesgo: biológicos, ambientales, físicos, químicos, psicofisiológicos.')

    .row.mt-5 
      p(data-aos="fade-left") La implementación de buenas prácticas es esencial para minimizar los riesgos y garantizar la seguridad en las actividades laborales. Estas prácticas son procesos o estructuras diseñados para reducir la probabilidad de eventos que puedan afectar la salud humana. Su objetivo principal es prevenir, minimizar o eliminar los riesgos identificados. Las normas de bioseguridad desempeñan un papel crucial en la promoción de actos seguros entre los empleados que realizan diversas actividades. Algunas de las buenas prácticas de bioseguridad generales que se pueden aplicar a casi todos los procesos productivos incluyen:

    .row 
      .cajon.p-4.mb-3(style="background-color: #E7FFD1")
        SlyderB(:datos="datosSlyder")
    .row.mt-3 
      p(data-aos="fade-left") Las barreras secundarias y las prácticas de diseño en las instalaciones son fundamentales para brindar protección adicional a los trabajadores en su entorno laboral. Estas medidas se centran en la construcción de instalaciones seguras que minimicen los riesgos y en el cumplimiento de prácticas de limpieza, desinfección y manejo de residuos para garantizar un ambiente de trabajo saludable. Estas estrategias son especialmente relevantes en sectores donde la seguridad y la higiene son prioritarias, como la atención médica, la industria alimentaria y la investigación científica, y contribuyen a reducir la exposición a peligros en el lugar de trabajo. La implementación efectiva de barreras secundarias y prácticas de diseño adecuadas es esencial para la prevención de accidentes y la protección de la salud de los trabajadores.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Protocolos

    p(data-aos="fade-left") La Resolución 0312 de 2019 establece los estándares mínimos para el Sistema de Gestión de Seguridad en el Trabajo (SGSST), que deben ser cumplidos por empleadores y contratistas. Esta resolución define normas, requisitos y procedimientos obligatorios que aseguran el cumplimiento de las condiciones básicas de seguridad en el trabajo. El objetivo principal de esta resolución es verificar y controlar el cumplimiento de estas condiciones, garantizando un entorno laboral seguro y saludable para los trabajadores, y promoviendo la prevención de accidentes y enfermedades laborales. Cumplir con los estándares mínimos establecidos en esta resolución es fundamental para asegurar la seguridad y bienestar de los trabajadores en Colombia.
    p(data-aos="fade-left") A continuación, se muestra un ejemplo del protocolo establecido para el Covid 19:

    .row.justify-content-center.mt-5
      .col-8.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span #[i Diagrama bioseguridad para el Covid-19]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/17.svg' alt='En la figura 7 se muestra el diagrama de bioseguridad aplicado para el Covid 19: lavado de manos, desinfección del calzado, uso de tapabocas, distanciamiento social.')

    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span #[i Diagrama bioseguridad para el Covid-19]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/18.svg' alt='En la figura 7 se muestra el diagrama de bioseguridad aplicado para el Covid 19: lavado de manos, desinfección del calzado, uso de tapabocas, distanciamiento social.')
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7.col-12.mb-3
        p(data-aos="fade-left") El protocolo de bioseguridad es fundamental en la prevención de la propagación del Covid-19 y se ha convertido en un estándar ampliamente adoptado en todos los sectores para proteger a las personas. El diagrama que se muestra representa un conjunto de medidas de bioseguridad básicas que son aplicables a una variedad de procesos y actividades en diferentes sectores. Estas medidas incluyen el uso de elementos de protección personal, como mascarillas y guantes, el distanciamiento social, la higiene frecuente de manos y la desinfección de superficies. Estas acciones son esenciales para reducir el riesgo de contagio y mantener la seguridad de las personas en tiempos de pandemia.
      .col-lg-5.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/19.png')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Elementos de protección individual
    p(data-aos="fade-left") Los Elementos de Protección Individual (EPI) desempeñan un papel crucial en la seguridad y salud de los trabajadores. Estos equipos son diseñados para proteger a los trabajadores de riesgos específicos presentes en su entorno laboral. La eficacia de los EPI depende de una correcta elección, uso y mantenimiento. Es esencial que se integren a un sistema de seguridad y salud en el trabajo, donde se identifiquen los peligros y riesgos, se definan los EPI necesarios, se entreguen a los trabajadores y se realicen inspecciones y capacitaciones para su uso adecuado. Las especificaciones técnicas de los EPI son fundamentales para garantizar su funcionamiento y seguridad en el trabajo, como se muestran a continuación:
    .row.mt-5 
      .col-12.desktop
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/20.svg')
    
          .tarjeta.color-acento-botones.p-3(x="26.7%" y="10.8%" numero="")
            .h5.mb-2 Cabeza
            li Cascos de seguridad para construcción, industrias y minas.
            li Cascos para usos especiales (fuego, productos químicos, entre otros).

          .tarjeta.color-acento-botones.p-3(x="72.1%" y="10.6%" numero="")
            .h5.mb-2 Oído
            li Tapones.
            li Protectores auditivos desechables o reutilizables.
            li Orejeras con arnés de cabeza.
            li Cascos antirruidos.
            li Protectores auditivos dependiendo del nivel.

          .tarjeta.color-acento-botones.p-3(x="26.7%" y="33%" numero="")
            .h5.mb-2 Vías respiratorias
            li Equipos filtrantes de partículas (molestas, nocivas, tóxicas o radiactivas).
            li Equipos filtrantes frente a gases y vapores.
            li Equipos filtrantes mixtos.
            li Equipos aislantes de aire libre.
            li Equipos aislantes con suministro de aire.
            li Equipos respiratorios con casco o pantalla para soldadura.
            li Equipos respiratorios con máscara amovible para soldadura.
            li Equipos de submarinismo.

          .tarjeta.color-acento-botones.p-3(x="72.1%" y="33%" numero="")
            .h5.mb-2 Ojos y cara
            li Gafas de universal.
            li Gafas uní o biocular.
            li Cazoletas.
            li Pantallas faciales.

          .tarjeta.color-acento-botones.p-3(x="26.7%" y="55.2%" numero="")
            .h5.mb-2 Tronco y abdomen
            li Chalecos, chaquetas y mandiles de protección contra las agresiones mecánicas y químicas.
            li Chalecos termógenos.
            li Mandiles de protección contra los rayos X.
            li Cinturones de sujeción del tronco.
            li Fajas y cinturones anti vibraciones.

          .tarjeta.color-acento-botones.p-3(x="72.1%" y="55%" numero="")
            .h5.mb-2 Manos y brazos
            li Guantes contra las agresiones mecánicas (perforaciones, cortes y vibraciones).
            li Guantes contra las agresiones químicas.
            li Guantes contra las agresiones de origen eléctrico.
            li Guantes contra las agresiones de origen térmico.

          .tarjeta.color-acento-botones.p-3(x="26.7%" y="79%" numero="")
            .h5.mb-2 Todo el cuerpo
            li Equipos de protección contra las caídas de altura.
            li Dispositivos anticaídas deslizantes.
            li Arneses.
            li Cinturones de sujeción.
            li Dispositivos anti caídos con amortiguador.
            li Ropa de protección contra las agresiones mecánicas.
            li Ropa de protección contra las agresiones químicas.
            li Ropa de protección contra las proyecciones de metales en fusión y las radiaciones infrarrojas.

          .tarjeta.color-acento-botones.p-3(x="72.1%" y="78.6%" numero="")
            .h5.mb-2 Pies y piernas
            li Calzado de protección.
            li Calzado y cubre calzado de protección contra el calor.
            li Calzado y cubre calzado de protección contra el frío.
            li Calzado frente a la electricidad.
            li Calzado de protección contra las motosierras.
            li Protectores amovibles del empeine.
            li Polainas.
            li Suelas amovibles (antitérmicas, anti perforación o anti transpiración).
            li Rodilleras.
    
    .row.justify-content-center.mb-3
      .col-12.movil
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/21.svg')
    p(data-aos="fade-left") Los elementos de protección individual son esenciales para salvaguardar la seguridad y salud de los trabajadores en entornos laborales donde no es posible eliminar por completo los riesgos. Es crucial que estos elementos cumplan con las regulaciones de diseño y fabricación para garantizar su efectividad. Además, deben ser seleccionados teniendo en cuenta las características anatómicas, fisiológicas y el estado de salud de cada trabajador, para asegurar una protección adecuada.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Barreras de protección personal',
        texto:
          'Son dispositivos y medidas utilizados para prevenir la exposición a riesgos laborales. Incluyen Equipos de Protección Individual (EPI), barreras físicas, sistemas de ventilación, dispositivos de seguridad en maquinaria, y protocolos de seguridad. Estas barreras se aplican según los riesgos presentes en un entorno laboral para garantizar la seguridad de los trabajadores.',
        imagen: require('@/assets/curso/temas/tema2/10.jpg'),
      },
      {
        titulo: 'Protección para la cabeza',
        texto:
          'Es fundamental en entornos de trabajo donde exista el riesgo de impactos, caídas de objetos o exposición a condiciones peligrosas. Los cascos o casquetes son Equipos de Protección Individual (EPI) diseñados para resguardar la cabeza de lesiones. Estos dispositivos pueden incluir cascos de seguridad industrial, cascos para la construcción, cascos de obreros, cascos de escalada, entre otros. Los cascos suelen estar fabricados con materiales resistentes y están diseñados para absorber o desviar impactos y proteger la cabeza de objetos que puedan caer desde altura.',
        imagen: require('@/assets/curso/temas/tema2/11.jpg'),
      },
      {
        titulo: 'Protección facial',
        texto:
          'Es un Equipo de Protección Individual (EPI) diseñado para resguardar el rostro de posibles riesgos en el entorno de trabajo. Incluye una variedad de dispositivos que se utilizan según las necesidades específicas, como gafas de seguridad, pantallas faciales, caretas, protectores de oídos y oculares, entre otros. Estos equipos protegen los ojos, la cara y, en algunos casos, el cuello de partículas voladoras, salpicaduras químicas, radiación y otros riesgos. La selección del tipo de protección facial depende de la naturaleza de los riesgos presentes en la actividad laboral y la exposición del trabajador a ellos.',
        imagen: require('@/assets/curso/temas/tema2/12.jpg'),
      },
      {
        titulo: 'Protección respiratoria',
        texto:
          'Es un Equipo de Protección Individual (EPI) esencial, utilizado para salvaguardar el sistema respiratorio de los trabajadores en entornos con riesgos para la salud, debido a la inhalación de contaminantes como partículas sólidas, gases, vapores, humos o agentes biológicos. Los dispositivos incluyen mascarillas, respiradores, filtros y sistemas de suministro de aire, y la elección adecuada depende del tipo y nivel de riesgo. Los trabajadores deben seguir las normativas y las recomendaciones del fabricante para garantizar la eficacia de estos dispositivos y prevenir enfermedades respiratorias.',
        imagen: require('@/assets/curso/temas/tema2/13.jpg'),
      },
      {
        titulo: 'Protección corporal',
        texto:
          'La protección corporal es un componente esencial de los Equipos de Protección Personal (EPP), utilizados para resguardar el cuerpo de los trabajadores de lesiones o riesgos en el lugar de trabajo. Estos equipos varían según el tipo de trabajo y los riesgos específicos, e incluyen prendas como overoles, trajes especiales para ambientes peligrosos, chalecos de alta visibilidad, delantales, guantes resistentes, botas de seguridad, cascos y otros elementos destinados a proteger diferentes áreas del cuerpo. La elección de la protección corporal adecuada depende de la naturaleza del trabajo y los riesgos involucrados, y es fundamental para garantizar la seguridad y prevenir lesiones en el entorno laboral.',
        imagen: require('@/assets/curso/temas/tema2/14.jpg'),
      },
      {
        titulo: 'Protección de manos',
        texto:
          'Es un elemento esencial de los Equipos de Protección Personal (EPP), utilizados en entornos laborales para resguardar las manos de los trabajadores de desechos o riesgos específicos. Los guantes son la principal forma de protección de manos y están disponibles en una amplia variedad de tipos, diseños y materiales, diseñados para abordar diferentes riesgos como cortes, abrasiones, productos químicos, calor, electricidad y más. La elección del tipo de guantes adecuados depende del tipo de trabajo y los riesgos específicos involucrados. Los trabajadores deben seguir las regulaciones y las recomendaciones del fabricante al usar guantes para garantizar su seguridad y prevenir lesiones en el lugar de trabajo.',
        imagen: require('@/assets/curso/temas/tema2/15.jpg'),
      },
      {
        titulo: 'Protección para pies',
        texto:
          'La protección para los pies, como parte esencial del equipo de protección personal, es crítica para garantizar la seguridad en el entorno laboral. Esto generalmente se logra mediante el uso de calzado de seguridad diseñado para mitigar una variedad de riesgos, como caídas de objetos pesados, exposición a productos químicos, temperaturas extremas y otros peligros potenciales. Estos zapatos pueden estar hechos de materiales resistentes y pueden incluir características como punteras de acero, suelas antideslizantes y resistencia a productos químicos. La elección del calzado adecuado depende del tipo de trabajo y los riesgos involucrados, y es crucial cumplir con las regulaciones de seguridad para garantizar una protección efectiva.',
        imagen: require('@/assets/curso/temas/tema2/16.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
