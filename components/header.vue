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
    navigation,
  }
}
</script>