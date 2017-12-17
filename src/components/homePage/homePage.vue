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
import AcademicOfferCodeForm from '@/components/homePage/academicOfferCodeForm.vue'
import LoginForm from '@/components/homePage/loginForm.vue'

export default {
  name: 'HomePage',
  components:{
    'academic-offer-code-form': AcademicOfferCodeForm,
    'login-form': LoginForm
  }
};
</script>
