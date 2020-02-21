<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <p>
                Siebdruck ist dafür bekannt, besonders flexibel für viele Oberflächen eingesetzt werden
                zu können. Der klassische Druck auf Papier scheint dabei ein Selbstläufer zu sein, jedoch
                gibt es hier gerade im DIY-Bereich und für Anfänger ein paar Details zu beachten.
            </p>
            <!-- <p>
                Vor dem Druck steht die Wahl des richtigen <a href="/siebe">Siebs</a> (im Normalfall eines mit
                höherer Maschendichte) und eines <a href="/rakel">Rakels</a>.
            </p> -->
            <p>
                Durch den hohen Feuchtigkeitsanteil von wasserbasierter Druckfarbe weicht zu dünnes Papier
                nach dem Druck schnell auf und verzieht sich beim Trocknen oder bleibt sogar am Arbeitstisch
                kleben (bei Fixierung mit Sprühkleber, falls kein Hydrauliktisch genutzt wird).
            </p>
            <p>
                Daher sollte bei der Wahl des Papiers darauf geachtet werden, eines mit einer Grammatur von mindestens
                200gsm zu wählen, bestenfalls sogar eines mit 300gsm oder mehr. Ein positiver Nebeneffekt
                des schweren Papiers: Es wirkt oft hochwertiger als dünneres.
            </p>
            <p>
                Es sollte außerdem bevorzugt offenporiges Papier genutzt werden. Dabei kann die Farbe - im Gegensatz
                zu gestrichenem Papier - schnell einziehen. Dadurch trocknet sie schnell und kann später nicht
                abplatzen.
            </p>
            <p>
                Bei mehrfarbigem Druck sollte darauf geachtet werden, dass die Farbe des vorherigen Druck-Durchgangs
                komplett getrocknet ist, bevor die nächste Farbe folgt. Bei mittlerem Farbauftrag sollten dafür bereits
                15 - 20 Minuten reichen. So sammelt sich im Papier keine Feuchtigkeit, die dieses verziehen lassen könnte.
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
