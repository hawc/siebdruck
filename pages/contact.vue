<template>
  <div class="site">
    <siteHeader></siteHeader>
    <main>
      <div class="wrap">
        <div class="contentWrapper">
          <form class="contact" name="contact" netlify>
            <p>
              <label>
                <span>Name</span>
                <input type="text" name="name" /></label>
            </p>
            <p>
              <label>
                <span>E-Mail</span>
                <input type="email" name="email" /></label>
            </p>
            <p>
              <label>
                <span>Nachricht</span>
                <textarea name="message"></textarea></label>
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

<style scoped lang="scss">
  .contentWrapper {
    display: flex;
    justify-content: center;
  }
  .contact {
    display: flex;
    flex-direction: column;
    flex-basis: 500px;
    label {
      flex-direction: row;
      display: flex;
      span {
        width: 25%;
      }
    }
}
</style>
