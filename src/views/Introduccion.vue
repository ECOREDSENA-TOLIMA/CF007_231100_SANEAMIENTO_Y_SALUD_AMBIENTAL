<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-left") La valoración de riesgos asociados a factores ambientales es un proceso fundamental en la gestión de riesgos en diversas áreas, desde la industria hasta la salud pública y la planificación urbana. Este enfoque se centra en identificar, evaluar y mitigar los peligros que pueden surgir debido a condiciones y eventos ambientales adversos.
    p.mb-5(data-aos="fade-left") Los factores ambientales pueden incluir una amplia gama de elementos, como condiciones climáticas extremas, desastres naturales, contaminación del aire y del agua, cambios en los ecosistemas y más. La valoración de riesgos busca entender la probabilidad de que estos factores puedan causar daños a las personas, la propiedad, la biodiversidad y los recursos naturales.

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/39GakP99BrY?si=7xsNS7-V9WNfGQu_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
