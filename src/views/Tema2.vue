<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Controles de bioseguridad
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Conceptos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Prácticas seguras
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Protocolos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Elementos de protección individual

</template>

<script>
export default {
  name: 'Tema2',
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
