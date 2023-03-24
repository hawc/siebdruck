<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Textildruck ist der wohl bekannteste Einsatz von Siebdruck. Und für
            mich persönlich auch der komplexeste. Hierbei gibt es einige
            Faktoren, die man beim Wunsch nach einem perfekten Druckbild zu
            beachten hat.
          </p>
          <p>
            Vorweg zum Grundsätzlichen: Für den Druck auf Textilien braucht es
            die richtige Kombination aus Sieb-Maschenweite, Beschichtungsmasse
            und Druckfarbe. Vorkonfigurierte Sets von gängigen
            Siebdruck-Händlern nehmen einem viele Entscheidungen ab und helfen
            dabei, sehr schnell zu einem guten Druckergebnis zu kommen. Der
            Kompromiss dabei ist, dass damit oft keine besonders feinen Motive
            druckbar sind oder nur kleine Auflagen gedruckt werden können.
          </p>
          <p>
            Für den professionelleren Textildruck sollte man daher die weiteren
            Möglichkeiten ausloten. Hierbei sollte man sich um die folgenden
            Bestandteilen Gedanken machen:
          </p>
          <p>Druckfarbe:</p>
          <ul>
            <li>
              wasserbasierte Farbe: sehr verträglich, Geräte lassen sich leicht
              reinigen, trocknet schnell ein, hohe Haltbarkeit
            </li>
            <li>
              Plastisolfarbe: Sieb u.A. muss mit Chemikalien gereinigt werden,
              trocknet nicht ein, leichter 3D-Effekt, sehr hohe Haltbarkeit
            </li>
            <li>
              Effektfarben: z.B. für besondere Texturen, basiert oft auf
              wasserbasierter oder Plastisolfarbe
            </li>
          </ul>
          <p>
            Da die Druckfarbe für Textildruck eine höhe Viskosität als solche
            für den Druck auf Papier hat, sollte grundsätzlich zu Siebe mit
            größeren Maschenweiten gegriffen werden. Je nach Farbe liegt diese
            ca. bei 30T - 75T.
          </p>
        </div>
      </div>
    </main>
    <footerNav></footerNav>
  </div>
</template>

<script>
import siteHeader from "~/components/header";
import footerNav from "~/components/footer";

export default {
  components: {
    siteHeader,
    footerNav,
  },
};
</script>
