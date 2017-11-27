<template>
  <sui-grid :columns="3" divided centered>
    <sui-grid-row>
      <sui-grid-column>
        <accademic-offer-code-form />
      </sui-grid-column>
      <sui-grid-column>
        <login-form />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
const AccademicOfferCodeForm = require('./accademicOfferCodeForm.vue');
const LoginForm = require('./LoginForm.vue');

export default {
  name: 'HomePage',
  components:{
    'accademic-offer-code-form': AccademicOfferCodeForm,
    'login-form': LoginForm
  }
};
</script>
