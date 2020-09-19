<template>
  <div id="app" class="container-fluid">
    <div class="row d-none d-sm-flex">
      <Left />
      <Chat />
    </div>
    <div class="row mobile-message row d-flex d-sm-none">
      <div class="warning">
        <div class="text-center">
          <p class="material-icons">warning</p>
          Small mod'da bu uygulama görüntülnemez.
          Görsel sorunlara yol açabilir.
          <p>Whatsapp'ın Mobil
            <a href="#">Uygulamasını</a>
          İndirin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Left from './components/left'
import Chat from './components/chat'

export default {
  name: 'App',
  components: {
    Left,
    Chat
  }
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mobile-message {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;


  .warning {
    background: var(--warning);
    border-radius: 5px;
    padding: 1rem 2.5rem 1rem 2.5rem;
    opacity: 0.9;
    display: flex;
    align-items: center;
    width: 80%;
  }
}
</style>
