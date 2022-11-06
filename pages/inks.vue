<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Es gibt unterschiedliche Farben für verschiedene Anwendungsbereiche. Besonders beim Textildruck
            muss man zwischen Plastisolfarben und wassierbasierten Farben unterscheiden. Erstere ermöglichen zwar
            einen besonders hohen Farbauftrag mit besonderer Haptik, sind in der Handhabung aber wesentlich
            umständlicher, benötigen zur Reinigung der Geräte bestimmte Chemikalien und sind oft sehr
            umweltunfreundlich. Für die DIY-Anwendung sind daher wasserbasierte Farben zu empfehlen.
          </p>
        </div>
      </div>
    </main>
    <footerNav></footerNav>
  </div>
</template>

<script>
import siteHeader from '~/components/header';
import footerNav from '~/components/footer';

export default {
  components: {
    siteHeader,
    footerNav
  }
}
</script>