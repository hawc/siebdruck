<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
          <p>
            Die Wahl des richtigen Rakels ist eine große Hilfe für ein sauberes Druckergebnis.
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