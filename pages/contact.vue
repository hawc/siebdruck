<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="content">
            <form name="contact" netlify>
              <p>
                <label>Name <input type="text" name="name" /></label>
              </p>
              <p>
                <label>E-Mail <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Nachricht <textarea></textarea></label>
              </p>
              <p>
                <button type="submit">Absenden</button>
              </p>
            </form>
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
