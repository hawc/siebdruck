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
    <footerNav noContactFooter></footerNav>
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
        align-self: center;
        width: 25%;
      }
    }
    input,
    textarea {
      flex-grow: 1;
      appearance: none;
      border: 1px solid black !important;
      padding: 5px 10px;
      font-size: 100%;
    }
    button {
      background: black;
      color: white;
      appearance: none;
      border: none;
      width: 100%;
      padding: 10px;
      font-size: 100%;
    }
  }
</style>
