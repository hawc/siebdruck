<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <p>
              Moin! Ich bin Hendrik und ich drucke selbst unfassbar gern. Gestartet habe ich mit dem Druck
              von T-Shirts im WG-Zimmer. Schnell ging's dann in ein eigenes Atelier, dort konnte ich mich 
              umfassend mit den verschiedenen Möglichkeiten und Spielarten des Siebdrucks auseinandersetzen.
              Mittlerweile drucke ich hauptsächlich auf Papier und verkaufe Kleinserien von Kunstdrucken, darum
              soll es aber hier nicht gehen.
            </p>
            <p>
              In den vergangenen Jahren habe ich einiges versucht und dabei eine ganze handvoll Fehler gemacht.
              Klar, das gehört zum Lernen dazu, aber eine kurze Einleitung hätte mir sicher einige Kopfschmerzen
              erspart. Bücher und YouTube-Videos sind oft sehr auf den textilen Druck fokussiert und befassen sich
              größtenteils mit der Motiverstellung und dem Druckprozess an sich. Ich möchte hier stattdessen einen
              kompakten Überblick darüber bieten, wie sich verschiedene Materialien und Drucktechniken unterscheiden.
            </p>
            <p>
              Viel Spaß beim Lesen!
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
