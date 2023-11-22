<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Determinación y calificación de riesgos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La determinación y calificación de riesgos ambientales es un proceso fundamental en la gestión ambiental que implica la identificación y evaluación de peligros que pueden amenazar el entorno natural. En primer lugar, se identifican todos los posibles peligros, que pueden abarcar desde la contaminación hasta desastres naturales. Luego, se evalúa la probabilidad de que ocurran y el daño que pueden causar.
          br
          br
          | Con esta información, se clasifican los riesgos según su gravedad y probabilidad, y se priorizan para abordar los más urgentes. A partir de esta clasificación, se desarrollan estrategias para mitigar o reducir estos riesgos, que pueden incluir medidas de control y prácticas sostenibles. Además, se establece un sistema de monitoreo continuo y revisiones periódicas para asegurar la efectividad de las estrategias y adaptarse a cambios en las condiciones ambientales.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Variables
    .row.justify-content-center.align-items-center 
      .col-lg-7.col-md-12.col-12.mb-3
        p(data-aos="fade-lef") La evaluación de riesgos ambientales implica la consideración de diversas variables que caracterizan tanto la exposición de la población como los efectos en el medio ambiente. Una parte esencial de esta evaluación se relaciona con la toxicidad de las sustancias involucradas. Para abordar esta complejidad, se han desarrollado modelos computarizados que permiten identificar y analizar las variables clave para estimar propiedades y riesgos. 
        p(data-aos="fade-lef") Entre estas variables, las características fisicoquímicas de las sustancias son particularmente importantes, ya que influyen en su comportamiento en el entorno natural. Para llevar a cabo este proceso, la Oficina de Tóxicos y Prevención de la Contaminación (OPPT) ha desarrollado modelos que simulan posibles daños ambientales y estiman grupos de toxicidad, lo que facilita la evaluación y gestión de riesgos ambientales de manera más precisa y efectiva. Estas herramientas son fundamentales para tomar decisiones informadas en la protección del medio ambiente y la salud pública.
      .col-lg-5.col-md-10.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/2.png')

    .row.justify-content-center.mt-5
      .col-8.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[em Insumos de modelos]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/3.svg' alt='En la figura 1 se muestran los modelos que se generan por la simulación de daños ambientales dependiendo de la estructura química de la sustancia, el coeficiente de partición y las reglamentaciones ambientales.')

    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[em Insumos de modelos]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/4.svg' alt='En la figura 1 se muestran los modelos que se generan por la simulación de daños ambientales dependiendo de la estructura química de la sustancia, el coeficiente de partición y las reglamentaciones ambientales.')

    p.mb-5.mt-5(data-aos="fade-left") Los resultados de los modelos utilizados para la evaluación de riesgos ambientales pueden proporcionar información valiosa sobre posibles daños ambientales. Algunos de los resultados clave que se pueden obtener incluyen:

    .row.justify-content-center.mt-5
      .col-8.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[em Resultados de los modelos para la evaluación de riesgos ambientales]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/5.svg' alt='En la figura 2 se muestran los resultados de los posibles daños ambientales según el punto de fusión, punto de ebullición, propiedades, presión de vapor y solubilidad del agua.')

    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[em Resultados de los modelos para la evaluación de riesgos ambientales]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/6.svg' alt='En la figura 2 se muestran los resultados de los posibles daños ambientales según el punto de fusión, punto de ebullición, propiedades, presión de vapor y solubilidad del agua.')

    p.mt-5(data-aos="fade-left") Estos resultados son esenciales para tomar decisiones basadas en datos y desarrollar estrategias efectivas para proteger la salud pública y el medio ambiente. Además, permiten a las autoridades y a las empresas identificar áreas críticas que requieren atención y acción inmediata.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Probabilidad y frecuencia
    .row.justify-content-center.align-items-center 
      .col-lg-5.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/7.png')
      .col-lg-7.col-md-12.col-12.mb-3
        p(data-aos="fade-left") La probabilidad y la frecuencia son conceptos fundamentales en la evaluación de riesgos ambientales, ya que ayudan a estimar la posibilidad y la frecuencia de ocurrencia de eventos adversos en un escenario determinado. La probabilidad se refiere a la chance de que ocurra un evento específico, mientras que la frecuencia se relaciona con la cantidad de veces que se espera que dicho evento se produzca en un período dado. Estos conceptos son esenciales para comprender y cuantificar los riesgos asociados a actividades, instalaciones o áreas geográficas particulares, lo que permite tomar decisiones informadas sobre cómo gestionar y mitigar esos riesgos. La evaluación precisa de la probabilidad y la frecuencia es fundamental para la planificación y la toma de medidas preventivas en la protección del medio ambiente y la salud pública.
        p(data-aos="fade-left") De acuerdo con lo anterior se deben estimar las consecuencias negativas de cada escenario por medio de la siguiente fórmula:
        .row.justify-content-center
          .col-lg-8.col-md-10.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span #[em Fórmula del riesgo para estimar consecuencias]
            figure
              img(src='@/assets/curso/temas/tema1/8.svg' alt='En la figura 3 se muestra la fórmula de riesgos que es igual a la probabilidad dividida por la frecuencia por la gravedad de las consecuencias.')
    
    p.mb-5(data-aos="fade-left") La fórmula se utiliza para estimar el riesgo en función de la probabilidad, la frecuencia y la gravedad de las consecuencias. Esta fórmula es una herramienta común en la evaluación de riesgos ambientales y se utiliza para cuantificar la magnitud del riesgo asociado a un escenario o evento específico.

    .row.justify-content-center
      .col-lg-10.col-12
        .tarjeta.p-4.mb-3(style="background-color: #E7FFD1")
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-check(style="color: #63C500")
                | #[b Probabilidad:] representa la probabilidad de que ocurra un evento o escenario. Se expresa como una cifra entre 0 y 1, donde 0 indica que el evento es altamente improbable, y 1 indica que es altamente probable.
      .col-lg-10.col-12
        .tarjeta.p-4.mb-3(style="background-color: #E7FFD1")
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-check(style="color: #63C500")
                | #[b Frecuencia:] representa la frecuencia con la que se espera que ocurra el evento o escenario en un período de tiempo determinado. Puede expresarse como eventos por año, mes, semana, etc.
      .col-lg-10.col-12
        .tarjeta.p-4.mb-3(style="background-color: #E7FFD1")
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-check(style="color: #63C500")
                | #[b Gravedad de las consecuencias:] mide la magnitud de las consecuencias negativas que resultarían si el evento ocurriera. La gravedad se puede evaluar en función de varios factores, como daño ambiental, impacto económico, riesgo para la salud pública, entre otros.
    
    p.mt-5.mb-5(data-aos="fade-left") La fórmula combina estos tres elementos para calcular el riesgo asociado a un evento específico. Cuanto mayor sea la probabilidad, la frecuencia y la gravedad de las consecuencias, mayor será el riesgo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Es importante destacar que esta fórmula es una herramienta simplificada y que la evaluación de riesgos ambientales en la práctica puede ser mucho más compleja, involucrando múltiples factores y consideraciones. Además, la interpretación de los resultados también es crucial para tomar decisiones informadas sobre la gestión de riesgos ambientales.

    p(data-aos="fade-left") La probabilidad desempeña un papel crucial en la evaluación de riesgos ambientales, ya que permite estimar la posibilidad de que ocurran eventos adversos o impactos negativos en el entorno. Esta evaluación se basa en la asignación de probabilidades a eventos específicos, lo que implica cuantificar la chance de que ocurran. Para determinar estas probabilidades, se pueden utilizar diversos enfoques, tales como:

    .row.justify-content-center.mt-5
      .col-8.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span #[i Enfoques de probabilidad]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/10.svg' alt='En la figura 4 se muestran los enfoques de la probabilidad de los riesgos ambientales, según el conocimiento de los procesos, las instalaciones, productos y sistemas de gestión.')

    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span #[i Enfoques de probabilidad]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/11.svg' alt='En la figura 4 se muestran los enfoques de la probabilidad de los riesgos ambientales, según el conocimiento de los procesos, las instalaciones, productos y sistemas de gestión.')
    
    p.mb-5.mt-5(data-aos="fade-left") Una vez definidos los enfoques a evaluar, se otorgan los valores a las diferentes probabilidades, como se observa a continuación:
    
    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span #[i Probabilidad/frecuencia]
        .tabla-a.mb-5 
          table
            thead(style="background-color: #FFEBDF")
              tr
                th Probabilidad
                th Frecuencia
                th Valor
            tbody
              tr
                td Muy probable.
                td < Una vez al mes.
                td 5.
              tr
                td Altamente probable.
                td < Una vez al año y < Una vez al mes.
                td 4.
              tr
                td Probable.
                td < Una vez cada 10 años y < Una vez al año.
                td 3.
              tr
                td Posible.
                td < Una vez cada 50 años y < Una vez cada 10 años.
                td 2.
              tr
                td Improbable.
                td < Una vez cada 50 años.
                td 1.

    p.mb-5(data-aos="fade-left") Luego de identificar y evaluar los diferentes escenarios relacionados con riesgos ambientales, es fundamental llevar un registro adecuado de los resultados obtenidos. Esta documentación es esencial para una gestión efectiva de los riesgos y la toma de decisiones informadas. Estos datos proporcionan una visión clara de la magnitud de los riesgos y ayudan a priorizar las acciones de mitigación y control necesarias para proteger el medio ambiente y la salud pública. Además, este registro facilita la comunicación con las partes interesadas y las autoridades reguladoras, lo que contribuye a una gestión transparente y responsable de los riesgos ambientales. A continuación, se muestra un ejemplo de una tabla diligenciada con los resultados obtenidos:

    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span #[i Resultado de frecuencia]
        .tabla-a.mb-5 
          table
            thead(style="background-color: #FFEBDF")
              tr
                th Escenarios Identificados
                th No.
                th Factor y/o aspecto
                th Escenario de riesgo
                th Frecuencia
            tbody
              tr
                td Cuarto de tanque de gas.
                td 1
                td Servicio de abastecimiento gas propano.
                td Fugas del tanque.
                td 5
              tr
                td Cuarto de tanque de gas.
                td 2
                td Servicio de abastecimiento gas propano.
                td Accidente por explosión.
                td 4
    
    p(data-aos="fade-left") La determinación de la tolerabilidad o aceptabilidad del riesgo es un paso crucial en la gestión de riesgos ambientales. Esto implica evaluar si los riesgos identificados están dentro de los límites considerados aceptables por la organización y la sociedad en general. Esta evaluación considera una amplia gama de factores, como los aspectos económicos, políticos, financieros, culturales y sociales, además de los aspectos técnicos y ambientales. Una vez que se ha establecido la tolerabilidad del riesgo, se pueden tomar decisiones informadas sobre las acciones de corrección o prevención que deben implementarse. Estas acciones pueden variar desde medidas de control más estrictas hasta cambios en los procesos y políticas de la organización. La gestión de riesgos ambientales busca encontrar un equilibrio entre la protección del medio ambiente y la viabilidad de las operaciones, teniendo en cuenta el impacto en la salud pública y la sostenibilidad a largo plazo.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Población
    .row.justify-content-center 
      .col-lg-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/12.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La población juega un papel fundamental en la determinación y calificación de riesgos ambientales, ya que es directamente afectada por las condiciones del entorno. Su exposición a riesgos ambientales, como la contaminación del aire, el agua o el suelo, puede tener un impacto significativo en su salud y bienestar. La población puede desempeñar un papel activo al informar sobre posibles riesgos y problemas ambientales, lo que a menudo conduce a la identificación y evaluación de dichos riesgos.
              br
              br
              | Además, la opinión y la participación de la población son consideraciones importantes en la gestión de riesgos ambientales. Las comunidades afectadas a menudo tienen conocimientos locales valiosos sobre las condiciones y los impactos ambientales, lo que puede enriquecer la toma de decisiones y las estrategias de mitigación.

    p(data-aos="fade-left") Por lo tanto, la población es tanto una fuente de información como un grupo de interés clave en la calificación de riesgos ambientales, y su involucramiento es esencial para abordar y prevenir los riesgos de manera efectiva. 
    p(data-aos="fade-left") El riesgo ambiental relacionado con la calidad del aire afecta a diversas poblaciones de manera desigual, y su impacto se relaciona tanto con la ubicación geográfica como con factores socioeconómicos y políticos. Según datos de la Organización Mundial de la Salud (OMS), se atribuyen un gran número de muertes prematuras a la contaminación del aire en las Américas. 

    .row.justify-content-center.align-items-center 
      .col-lg-7.col-12.mb-3
        .cajon.p-4.mb-0(style="background-color: #D5FFF5")
          p(data-aos="fade-left") Las poblaciones que residen cerca de fábricas o carreteras enfrentan una mayor exposición a la contaminación, lo que subraya la importancia de la ubicación geográfica en la exposición a riesgos ambientales. Además, factores como la inequidad social, el cumplimiento de las normas y la falta de políticas ambientales sólidas pueden influir en la magnitud del riesgo. Es fundamental abordar esta problemática a nivel global, y la Agenda para el Desarrollo Sostenible de las Naciones Unidas ha establecido metas para reducir significativamente las muertes relacionadas con la contaminación del aire, demostrando un compromiso internacional para mitigar este riesgo ambiental y proteger la salud de las poblaciones afectadas.
      .col-lg-5.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/13.png')
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Muestra y análisis gráfico
    p.mb-5(data-aos="fade-left") En una evaluación definitiva del riesgo ambiental se tiene en cuenta la ecuación siguiente, con la cual, se encuentra la ponderación de la probabilidad y las consecuencias:

    .row.justify-content-center.align-items-center 
      .col-lg-5.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span #[i Fórmula de riesgo ambiental]
        .row.justify-content-center 
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/14.svg' alt='En la figura 5 se muestra la fórmula para calcular el riesgo ambiental dada por la probabilidad multiplicada por las consecuencias.')
      .col-lg-7.col-12
        p(data-aos="fade-lef") La valoración del riesgo ambiental adaptada de UNE 150008 (2008) es un enfoque sistemático y estructurado utilizado para evaluar y calificar los riesgos ambientales en diferentes contextos. Esta metodología se basa en estándares y directrices establecidos y proporciona una forma coherente de medir y clasificar los riesgos ambientales.

    p.mt-5.mb-5(data-aos="fade-left") En este enfoque, se siguen una serie de pasos que incluyen la identificación de peligros, la evaluación de la exposición y la vulnerabilidad de la población o los recursos naturales, y la estimación de las consecuencias adversas potenciales. A partir de estos datos, se calcula un índice de riesgo que permite clasificar los riesgos en función de su gravedad y probabilidad de ocurrencia, como se observa en la siguiente tabla:

    .row.justify-content-center 
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span #[i Valoración del riesgo ambiental adaptada de UNE 150008 (2008)]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/15.svg' alt='En la tabla 3 se muestran los valores establecidos para cada riesgo y su métrica en colores.')

    p.mt-5.mb-5(data-aos="fade-left") La presentación de los resultados de la valoración de riesgos ambientales se lleva a cabo mediante la utilización de la matriz de riesgos y tablas de doble entrada. Estas herramientas visuales permiten una comprensión más clara y detallada de los escenarios evaluados, considerando tanto la probabilidad como las consecuencias de los riesgos. La matriz de riesgos clasifica y prioriza los riesgos en función de su probabilidad y gravedad, lo que facilita la identificación de las áreas críticas que requieren una atención inmediata. Por otro lado, las tablas de doble entrada desglosan los riesgos y sus posibles resultados, proporcionando una visión detallada de las combinaciones específicas de riesgos y consecuencias. Estas herramientas son esenciales para tomar decisiones informadas y llevar a cabo una gestión eficaz de los riesgos ambientales, contribuyendo así a la protección del medio ambiente y la salud pública, tal como se ilustra en el ejemplo proporcionado por la Agencia Nacional de Seguridad Vial en 2020, que se muestra a continuación:

    .row.justify-content-center 
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span #[i Valoración de riesgos adaptada de UNE 150008 (2008)]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/16.svg' alt='En la tabla 4 se muestra la matriz de riesgo teniendo en cuenta la gravedad en las columnas y la probabilidad en las filas.')

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
