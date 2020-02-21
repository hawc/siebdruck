<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
$primaryColor: blue;

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.cta {
  display: inline-block;
  color: $primaryColor;
  margin: 20px 0;
  &:active,
  &:hover,
  &:visited {
    color: $primaryColor;
  }
}
/*
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
*/
</style>
