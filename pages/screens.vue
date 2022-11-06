<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Die verschiedenen Maschenweiten ermöglichen unterschiedlichen Anwendungsarten beim Siebdruck.
            Generell gilt: Feinere Siebgewebe sind für feieren Druck, benötigen dabei jedoch dünnere
            Farben (z.B. wassierbasierte, u.U. mithilfe von Verzögerer). Außerdem spielt die Wahl des Rakels
            hier eine wichtige Rolle. Festere Rakelgummis für sehr feine Drucke und Rasterdrucke mit
            Plastisolfarben.
          </p>
          <dl>
            <dt>20T - 30T</dt>
            <dd>Für extrem dicken Farbauftrag mit Spezialfarben oder Kleber zum Beflocken.
            </dd>
            <dt>30T - 40T</dt>
            <dd>Für Drucke von grobpigmentierten Sonderfarben (z.B. mit Metallic-Effekt oder
                Glitzerpartikeln), sowie für deckende Weißdrucke.
            </dd>
            <dt>40T - 50T</dt>
            <dd>Für deckenden Druck auf dunklen Textilien mit dickflüssigen Druckfarben wie Deckweiß
                und/oder Plastisolfarben.
            </dd>
            <dt>50T - 60T</dt>
            <dd>Für den Textildruck mit den meisten Farben auf hellen und dunklen Textilien geeignet.</dd>
            <dt>60T - 75T</dt>
            <dd>Für den Textildruck auf hellen Textilien mit flüssigeren Druckfarben (meist wasserbasierte, dunklere Töne)
                geeignet. Nutzbar für recht detaillierte Designs.</dd>
            <dt>75T - 85T</dt>
            <dd>Für den Textildruck von sehr detaillierten Designs auf hellen Textilien mit flüssigeren
                Druckfarben (meist wasserbasierte, dunklere Töne), sowie für mittelfeine Drucke auf Papier.
                Halbtonrasterdrucke sind hierbei auch bereits möglich, benötigen aber etwas Geschick beim Beschichten.</dd>
            <dt>85T - 100T</dt>
            <dd>Für sehr feine Druck (inkl. Halbtonraster), hauptsächlich auf Papier oder anderen festen Medien.</dd>
            <dt>120T - 140T</dt>
            <dd>Für sehr feine Rasterdrucke auf Papier und schlecht saugfähigen Medien (z.B. Plastik oder Glas).</dd>
          </dl>
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