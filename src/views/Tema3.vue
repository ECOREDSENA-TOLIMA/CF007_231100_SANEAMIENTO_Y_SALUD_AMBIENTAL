<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informe de valoración de riesgos
    .row.justify-content-center.align-items-center 
      .col-lg-3.col-md-6.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/1.svg')
      .col-lg-9.col-md-12.col-12.mb-3
        p(data-aos="fade-left") El informe de valoración de riesgos es una herramienta esencial en la gestión de la seguridad y salud en el trabajo. Comienza con la identificación de los riesgos, seguido del análisis de dichos riesgos, donde se evalúan la probabilidad y las consecuencias. Luego, se procede a la valoración de los riesgos para determinar su nivel y se identifican los controles necesarios para mitigarlos. Este informe tiene como objetivos principales identificar eficazmente las situaciones peligrosas y de alto riesgo, lo que puede conducir a la implementación de medidas de control y mejoras en el entorno laboral para prevenir accidentes y proteger la salud de los trabajadores. Las recomendaciones derivadas de este informe guían el proceso de mejora continua en el lugar de trabajo.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Conceptos

    p(data-aos="fade-left") De acuerdo con lo establecido por el Ministerio de Ambiente, la gestión del riesgo consiste en una serie de actividades diseñadas para reducir las pérdidas de vida humanas y la destrucción de infraestructuras a través de identificar, analizar y cuantificar riesgos que se presentan en un lugar en específico y realizando acciones preventivas y correctivas para la mejora de las problemáticas encontradas.
    p(data-aos="fade-left") Es así que, es importante reconocer y apropiar algunos de los conceptos más importantes en la valoración de riesgos:

    .row 
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
        .row.justify-content-center(titulo="Amenaza")
          .col-lg-7.mb-md-8.col-12
            p Se define como un peligro latente que puede originarse de eventos naturales o accidentes de origen humano, y que tiene el potencial de causar pérdida de vidas, lesiones, impactos en la salud, así como daños a la propiedad y la infraestructura. Esta definición se encuentra respaldada en el artículo 4 del Capítulo I de la Ley 1523 de 2012, promulgada por el Congreso de la República de Colombia en 2012.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema3/2.png')

        .row.justify-content-center(titulo="Desastre")
          .col-lg-7.mb-md-8.col-12
            p Se define como el resultado de la manifestación de uno o varios eventos naturales o antropogénicos no intencionales que, al encontrar condiciones propicias de vulnerabilidad en las personas, bienes e infraestructura, causan daños o pérdidas humanas, materiales, económicas o ambientales. Este fenómeno genera una alteración intensa o grave en la situación y requiere que el Estado y el sistema nacional emprendan acciones de respuesta a la emergencia, rehabilitación y reconstrucción. Esta definición se encuentra respaldada en el artículo 4 del Capítulo I de la Ley 1523 de 2012, promulgada por el Congreso de la República de Colombia en 2012.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema3/3.png')
          

        .row.justify-content-center(titulo="Gestión del riesgo de desastres")
          .col-lg-7.mb-md-8.col-12
            p Se define como el proceso de planificación, ejecución, seguimiento y evaluación de políticas y acciones continuas con el propósito de entender y concienciar sobre el riesgo. Este proceso tiene como objetivos principales prevenir la generación del riesgo, reducirlo o controlarlo en caso de que ya exista, y prepararse para gestionar situaciones de desastre. Además, la gestión del riesgo incluye las acciones de recuperación, que abarcan la rehabilitación y la reconstrucción. Esta definición se encuentra en el artículo 4 del Capítulo I de la Ley 1523 de 2012, emitida por el Congreso de la República de Colombia en 2012.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema3/4.png')

        .row.justify-content-center(titulo="Mitigación del riesgo")
          .col-lg-7.mb-md-8.col-12
            p Se refiere a las medidas correctivas implementadas para reducir daños y pérdidas que puedan ocurrir. Estas medidas incluyen reglamentos de seguridad y proyectos de inversión, tanto públicos como privados, diseñados para disminuir las condiciones de amenaza y vulnerabilidad existentes. Esta definición se encuentra en el artículo 4 del Capítulo I de la Ley 1523 de 2012, promulgada por el Congreso de la República de Colombia en 2012.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema3/5.png')

        .row.justify-content-center(titulo="Vulnerabilidad")
          .col-lg-7.mb-md-8.col-12
            p Se refiere a las condiciones influenciadas por factores físicos, sociales, económicos y ambientales que incrementan la susceptibilidad y exposición de una comunidad a los impactos de amenazas. Esta definición se encuentra en el Marco de Sendai para la Reducción del Riesgo de Desastre 2015-2030, publicado por UNISDR en 2015.
          .col-lg-4.mb-4.mb-md-8.col-10
            figure
              img(src='@/assets/curso/temas/tema3/6.png')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Tipos y características
    p(data-aos="fade-left") Es importante tener en cuenta que para realizar una valoración de riesgos y generar un informe, existen varios métodos disponibles. Estos métodos pueden variar en complejidad y enfoque según las necesidades y circunstancias específicas. Cada uno de estos métodos tiene sus propias características y aplicaciones particulares, los cuales se describirán a continuación:

    .row 
      .col-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Matriz causa-efecto Leopold")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                h4 
                p Es un método cualitativo utilizado en las evaluaciones de impacto ambiental para valorar distintas alternativas de un proyecto. Se basa en la identificación de las causas y efectos relacionados con el proyecto. Los impactos más significativos se discuten y se les asignan calificaciones. 
                p Es importante destacar que este método permite considerar tanto la probabilidad como la gravedad de los impactos. También se pueden señalizar celdas si se cree que condiciones extremas, aunque poco probables, podrían ocurrir. La matriz causa-efecto Leopold es útil para evaluar y comparar las implicaciones ambientales de diferentes opciones de proyecto.      
              .col-lg-3.col-md-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/7.svg')

          .tarjeta.color-acento-botones--borde.p-4(titulo="Método t. Fine")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                p Es una herramienta que permite calcular el grado de peligrosidad asociado a cada riesgo identificado. Utiliza una fórmula matemática que considera tanto la probabilidad de ocurrencia como las consecuencias que podrían derivarse en caso de que el evento se materialice. Se evalúan criterios como el Grado de Peligrosidad (GP), la calificación del riesgo y las medidas de actuación. 
                p El análisis se centra en factores determinantes del peligro, incluyendo las consecuencias, la probabilidad y la exposición continua. Este método proporciona una manera cuantitativa de evaluar los riesgos, lo que permite priorizar y tomar decisiones informadas para la gestión de los mismos.
              .col-lg-3.col-md-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/8.svg') 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Método Gustav Purt")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                p Se enfoca en la evaluación de riesgos relacionados con incendios y la determinación de medidas de protección contra incendios efectivas. Su objetivo principal es minimizar la probabilidad de que ocurra un incendio y, en caso de que ocurra, prevenir su rápida y descontrolada propagación. Para ello, se realiza un cálculo del riesgo del edificio (GR) y se consideran factores como la estructura del edificio, sistemas de detección y extinción de incendios, y otros elementos relevantes. 
                p También se evalúa el riesgo del contenido (IR) tomando en cuenta diversos factores. Con base en estos cálculos y apreciaciones, se establecen medidas específicas de protección contra incendios. El método Gustav Purt busca garantizar la seguridad contra incendios en edificios y sus contenidos.
              .col-lg-3.col-md-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/9.svg')
          .tarjeta.color-acento-botones--borde.p-4(titulo="Árbol de fallos")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                p Es una técnica deductiva de análisis que se inicia con la selección de un "suceso no deseado o evento no previsto" como punto de partida. Este evento puede ser desde un accidente grave hasta un acontecimiento de menor envergadura. El propósito de este método es identificar las causas subyacentes de estos eventos no deseados, tanto en situaciones de alto impacto como en aquellas de menor importancia. A través del árbol de fallos, se busca analizar y visualizar de manera detallada cómo se llega a esos sucesos no deseados y cuáles son los factores que contribuyen a que ocurran. 
                p El árbol de fallos es una herramienta efectiva para comprender las causas de incidentes o accidentes y, a partir de esa comprensión, tomar medidas preventivas o correctivas adecuadas.
              .col-lg-3.col-md-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/10.svg')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Estructura y procedimientos
    p(data-aos="fade-left") Un informe final de valoración de riesgos es un documento esencial que resume los hallazgos y evaluaciones relacionados con las actividades en un proceso productivo. La estructura y los procedimientos para elaborar este informe deben ser cuidadosamente planeados para garantizar que todos los riesgos, peligros y vulnerabilidades sean claramente identificados y documentados. El informe debe seguir una estructura organizada para una comprensión efectiva y tomar medidas adecuadas. En general, un buen informe de valoración de riesgos debe constar de los siguientes pasos:

    .row.mt-5 
      .col-12.desktop
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/11.svg')
    
          .tarjeta.color-acento-botones.p-3(x="43.3%" y="24.1%" numero="")
            .h5.mb-2 Descripción de la Empresa
            p Descripción de la empresa, la cual debe contener información como la misión, visión, objetivos, organigrama y objetivos estratégicos.

          .tarjeta.color-acento-botones.p-3(x="43.4%" y="53.9%" numero="")
            .h5.mb-2 Objetivos
            p Desglosar los objetivos, las políticas y los procedimientos.

          .tarjeta.color-acento-botones.p-3(x="41.7%" y="83.3%" numero="")
            .h5.mb-2 Evaluación de riesgos
            p Identificación de los riesgos de acuerdo a los métodos de valoración (cualitativo, cuantitativo y riesgo inherente).

          .tarjeta.color-acento-botones.p-3(x="66.7%" y="83.5%" numero="")
            .h5.mb-2 Controles
            p Definir los controles: preventivo, defectivo y correctivo.

          .tarjeta.color-acento-botones.p-3(x="66.7%" y="53.4%" numero="")
            .h5.mb-2 Riesgo residual
            p Riesgo residual o matriz de riesgos, para la visión de los peligros que afectan a la empresa.

          .tarjeta.color-acento-botones.p-3(x="66.3%" y="24%" numero="")
            .h5.mb-2 Toma de decisiones
            p Estrategia y toma de decisiones, con el fin de cumplir la normativa y definir mapa de riesgos.

          .tarjeta.color-acento-botones.p-3(x="89.5%" y="24.3%" numero="")
            .h5.mb-2 Planes de acción
            p Planes de acción por medio de la matriz DOFA.

          .tarjeta.color-acento-botones.p-3(x="89.5%" y="53.1%" numero="")
            .h5.mb-2 Auditoría externa
            p Supervisión o auditoría externa, realizada por un agente externo a la organización.
          
          .tarjeta.color-acento-botones.p-3(x="89.6%" y="83.6%" numero="")
            .h5.mb-2 Conclusiones y recomendaciones
            p Se derivan de la evaluación de los riesgos identificados y tienen como objetivo proporcionar una guía clara para la toma de decisiones y la acción.

    .row.justify-content-center
      .col-12.movil
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/13.svg')
    
    p.mt-3(data-aos="fade-left") El procedimiento general de la estructura se puede evidenciar a continuación:

    .row.justify-content-center.mt-5.mb-5
      .col-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span #[i Procedimiento]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/12.svg' alt='En la figura 8 se describe el procedimiento general del modelo de informe de gestión de riesgos con cada una de sus etapas.')

    .row.justify-content-center.align-items-center.mb-3 
      .col-lg-2.col-md-4.col-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/14.svg')
      .col-lg-10.col-12.mb-3
        p(data-aos="fade-ñeft") En la gestión de riesgos laborales, es fundamental aplicar una estrategia que combine la prevención en la infraestructura y el entorno de trabajo, la implementación de controles para los riesgos residuales, el uso adecuado de Elementos de Protección Individual (EPI), el cumplimiento de normas y regulaciones, la participación activa de los trabajadores en la identificación de riesgos, la formación y la creación de una cultura de seguridad en el trabajo, además de establecer un sistema de monitoreo y evaluación para garantizar que todas las medidas sean efectivas y se cumplan adecuadamente. Esta gestión de riesgos no solo protege a los trabajadores, sino que también puede mejorar la productividad y garantizar el cumplimiento de las obligaciones legales y éticas.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
