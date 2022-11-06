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
          <p>
            Im Folgenden gebe ich eine kurz Übersicht der Anwedungszwecke und wie ich dafür das Sieb beschichte.
          </p>
          <dl>
            <dt>
              Hoher Farbauftrag: Textildruck
            </dt>
            <dd>
              3-Fach-Beschichtung (innen-außen-innen)
            </dd>
            <dt>
              Mittlerer Farbauftrag: Textildruck<br/>
              Hoher Farbauftrag: Druck auf Papier
            </dt>
            <dd>
              2-Fach-Beschichtung (innen-außen)
            </dd>
            <dt>
              Mittlerer Farbauftrag: Druck auf Papier
            </dt>
            <dd>
              1-Fach-Beschichtung (innen)
            </dd>
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