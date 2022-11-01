<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <p>
                Bevor ein Motiv auf das Sieb gelangen kann, muss die Beschichtungsmasse, auch Emulsion genannt,
                aufgetragen werden. Siebdichte, Anwendungsbereich und Druckfarbe haben sowohl einen Einfluss auf
                die Wahl der Beschichtungsmassen, als auch auf die Dicke des Auftrags. Kurz gilt: Je mehr Farbe
                aufgetragen werden soll, umso dicker muss die Emulsion auf dem Sieb sein. Dies beeinflusst wiederum
                die Dauer der <a href="/exposure">Belichtung</a>.
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
