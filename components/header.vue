<template>
    <div>
    <header class="siteHeader">
      <div class="wrap">
        <h1 class="site__headline"><a href="/">Sieb & Druck</a></h1>
        <h2 class="site__subline">Gelerntes aus der Arbeit mit Farbe</h2>
      </div>
    </header>
    <navigation></navigation>
    </div>
</template>

<script>
import navigation from '~/components/navigation'

export default {
    components: {
        navigation
    }
}
</script>

<style lang="scss">
.siteHeader {
    padding-top: 50px;
    text-align: center;
}
.site__headline {
    font-family: 'Abril Fatface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 3rem;
    a,
    a:active,
    a:hover,
    a:visited {
        border: none;
    }
}
.site__subline {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: .9rem;
}
</style>
