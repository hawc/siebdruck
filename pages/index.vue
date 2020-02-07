<template>
  <div class="site">
    <header class="siteHeader">
      <div class="wrap">
        <h1 class="site__headline">Sieb & Druck</h1>
        <h2 class="site__subline">Gelerntes aus der Arbeit mit Farbe</h2>
      </div>
    </header>
    <navigation></navigation>
    <main>
      <div class="wrap">
        <div class="content"></div>
      </div>
    </main>
    <footerNav class="siteFooter"></footerNav>
  </div>
</template>

<script>
    import navigation from '~/components/navigation';
    import footerNav from '~/components/footer';

    export default {
        components: {
            navigation,
            footerNav,
        }
    }
</script>

<style lang="scss">
    .siteHeader {
        margin: 50px 0;
        text-align: center;
    }
    .site__headline {
        font-family: 'Abril Fatface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: normal;
        font-size: 3rem;
    }
    .site__subline {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-size: .9rem;
    }
    .siteFooter {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
</style>
