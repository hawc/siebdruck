<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Für den gesamten Siebdruckprozess wird eine handvoll Chemikalien benötigt. Dies beginnt bei der
            Vorbereitung des Siebs bis zum Entschichten und Reinigen.
          </p>
          <dl>
            <dt>
              Entfetter
            </dt>
            <dd>
              Damit entfettest du das Sieb vor dem Beschichten. Dies ist vor allem dann notwendig, wenn das Sieb lange
              gelagert wurde oder neu ist. Sollte das Sieb frisch entschichtet sein, ist ein Entfetten oft nicht
              nötig.
            </dd>
            <dt>
              Entschichter
            </dt>
            <dd>
              Mit dem Entschichter entfernt man die alte Emulsion von einem Sieb. Wichtig bei der Wahl des Entschichter
              ist, dass dieser zur Emulsion passt. Im Normalfall empfehlen Händler zur Beschichtungsmasse den richtigen
              Entschichter. Bei der Anwendung sollte mindestens ein Schutz für die Atemwege und Augen getragen werden.
            </dd>
            <dt>
              Siebreiniger
            </dt>
            <dd>
              Es gibt eine ganze Reihe an Siebreinigern, sie werden zum Entfernen von Farbresten genutzt. Reiniger
              für wasserbasierte und Plastisolfarben unterscheiden sich in ihrer Zusammensetzung und sind oft nicht
              untereinander austauschbar, allerdings sind gerade Plastisolreiniger oft wirksam genug um auch wasserbasierte
              Farben zu lösen. Ebenfalls können diese Mittel bei der Reinigung des Siebs helfen, falls der Entschichter
              die Emulsion nicht restlos entfernt. Mehr Infos dazu findest du unter "<a href="/entschichten">Entschichten</a>".
              Auch diese Chemikalen sollten nicht ohne Schutzkleidung genutzt werden.
            </dd>
            <dt>
              Fotoemulsion/Beschichtungsmasse
            </dt>
            <dd>
              Ohne Emulsion kein Siebdruck. Diese meist zähflüssige Masse gibt es in vielen Ausführungen und erfült immer
              den selben Zweck: Eine möglichst gleichmäßige Beschichtung des Siebs sicherzustellen. Bei der Wahl der
              Emulsion ist darauf zu achten, eine passend zur Druckfarbe (wasserbasiert oder Plastisol) und zum Druckmedium
              (Textil oder Papier, ...) zu wählen. Zweikomponentige Diazo-Emulsionen liefern oft ein feineres Druckbild und 
              sind umfangreich einsetzbar, lassen sich aber bei falscher Anwendung schwieriger Entschichten und benötigen eine
              längere Belichtung. Aufgrund der giftigen Diazo-Masse sollten diese Beschichtungsmassen bis zur Belichtung nur mit
              Schutzkleidung verarbeitet werden, sie hinterlässt außerdem unschöne Verfärbungen (auch auf Kleidung und Keramik).
            </dd>
            <dt>
              Sprühkleber
            </dt>
            <dd>
              Sprühkleber ist wichtig um beim Textildruck die Kleidung auf der Unterlage zu fixieren, sonst verrutscht oder
              bleibt am Sieb haften. Ebenfalls kann Sprühkleber für den Druck auf Papier genutzt werden, wenn kein Hydraulik-Tisch
              zur Verfügung steht. Beachten sollte man dabei allerdings, dass man nicht zu viel Kleber auf die Unterlage aufträgt.
              Sonst setzt sich der Kleber am Papier fest. Bei der Wahl des Sprühkleber kann man zwischen solchen für Textil und
              Papier unterscheiden. Bei der Anwendung sollte ausreichend gelüftet werden, Klebepartikel und Lösungsmittel gelangen
              sonst schnell in die Lunge.
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

<style lang="scss">
</style>
