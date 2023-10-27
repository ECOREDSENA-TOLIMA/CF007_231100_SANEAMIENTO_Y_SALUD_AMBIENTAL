<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Valoración de riesgos asociados a factores ambientales, proceso crucial para proteger el entorno y la salud pública. Este proceso analiza las amenazas potenciales, como contaminación del aire, cambios climáticos extremos y degradación de ecosistemas, identificando sus consecuencias en la sociedad y la naturaleza. Evaluando la probabilidad de eventos adversos, se pueden implementar medidas preventivas y de mitigación. Asimismo, permite planificar de manera sostenible, evitando inversiones riesgosas en zonas vulnerables. La sensibilización acerca de estos riesgos fomenta la responsabilidad individual y colectiva hacia un enfoque más consciente del medio ambiente, asegurando un futuro más seguro y saludable.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describen los principales temas del componente formativo tales como: la calificación de riesgos, el concepto de bioseguridad y la valoración de los riesgos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
