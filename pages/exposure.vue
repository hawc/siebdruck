<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <p>
                Das richtige Belichten der <a href="/screens">Siebe</a> ist ein wichtiger Teil der Druckvorbereitung.
                Sollte das Sieb zu kurz belichtet sein, löst sich beim Ausspülen zu viel Emulsion. Bei einer zu langen
                Belichtungsdauer wird unter Umständen das Sieb auch an den Bedruckten Stellen der Folie belichtet,
                was zur Folge hat, dass sich auch dort die Emulsion nicht auswaschen lässt. Beides hat zur Folge,
                dass man das Sieb erneut entschichten muss und den Prozess von vorn beginnen muss.
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
