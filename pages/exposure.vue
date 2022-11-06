<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Das richtige Belichten der <a href="/screens">Siebe</a> ist ein wichtiger Teil der Druckvorbereitung.
            Da die richtige Belichtungszeit von vielen Faktoren abhängig ist (Stärke und UV-Anteil der Lichtquelle,
            Beschichtungsmasse, Maschendichte und Farbe des Siebs,...), sollte man vor den ersten Druckversuchen
            die optimale Dauer ertesten. Dazu nutzt man entweder spezielle Tests aus dem Fachhandel, oder deckt beim
            Belichten eines Probesiebs nach und nach einen Teil des Siebs ab und notiert dazu die Dauer. Im DIY-Bereich
            sollte das Ergebnis zwischen 5 und 30 Minuten liegen.
          </p>
          <p>
            Bei unzureichender Belichtungszeit kann es zu verschiedenen Problemen kommen, die sich beim Auswaschen
            oder Entschichten rächen. Sollte das Sieb zu kurz belichtet sein, löst sich beim Ausspülen zu viel Emulsion. 
            Bei einer zu langen Belichtungsdauer wird unter Umständen das Sieb auch an den bedruckten Stellen der 
            Folie belichtet, was zur Folge hat, dass sich auch dort die Emulsion nicht auswaschen lässt. 
            Beides hat zur Folge, dass man das Sieb erneut entschichten muss und den Prozess von vorn beginnen muss.
            Bei einer zu kurzen Belichtungsdauer kann es außerdem beim Entschichten zu Problemen kommen. Da die Emulsion
            nicht komplett mit dem UV-Licht reagiert hat, kann der Entschichter seine volle Wirkung nicht entfalten.
            Dadurch wird der Entschichtungsvorgang langwierig und anstrengend. Ich habe die Erfahrung gemacht, dass in dem
            Fall Plastisol-Siebreiniger bei der Entschichtung hilft.
          </p>
          <p>
            Nach dem Belichten und Auswaschen sollte das Sieb, nachdem es getrocknet ist, noch einmal umfangreich von beiden
            Seiten nachbelichtet werden. Damit wird sichergestellt, dass die Emulsion komplett durchbelichtet ist.
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