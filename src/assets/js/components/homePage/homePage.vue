<template>
  <sui-grid :columns="3" divided centered>
    <sui-grid-row>
      <sui-grid-column>
        <academic-offer-code-form />
      </sui-grid-column>
      <sui-grid-column>
        <login-form />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
const AcademicOfferCodeForm = require('./academicOfferCodeForm.vue');
const LoginForm = require('./loginForm.vue');

export default {
  name: 'HomePage',
  components:{
    'academic-offer-code-form': AcademicOfferCodeForm,
    'login-form': LoginForm
  }
};
</script>
