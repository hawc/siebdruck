<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0;
}

body {
  padding: 0;
}

.site {
  position: relative;
  min-height: 100vh;
}

h1 {
  text-decoration: underline;
}

main {
  padding-bottom: 50px;
}

a,
a:active,
a:hover,
a:visited {
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

p:not(:last-child) {
  margin-bottom: 20px;
}

dl {
  margin: 20px 0;
  dt {
    margin-top: 20px;
    font-weight: bold;
  }
}

hr {
  border: none;
  height: 1px;
  margin: 0 auto;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
}

.wrap {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

textarea {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  height: 100px;
}
</style>
