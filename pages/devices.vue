<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <p>
                Siebdruck ist fürs Kennenlernen sehr gut ohne besondere Geräte zu bewerkstelligen. Sobald man jedoch
                größere Auflagen drucken will oder mehrfarbige Motive entwirft, wird man nicht um gewissen Hilfsmittel
                herumkommen. Hier findest du eine kurze Aufstellung der verschiedenen Geräte für den DIY-Betrieb.
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

<style lang="scss">
</style>
