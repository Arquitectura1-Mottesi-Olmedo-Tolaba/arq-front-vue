<template lang="html">
  <div>
    <error-message v-if="this.showErrorMessage()" title="Error" :message="this.errorMessage" />
    <student-information :information="this.information()" />

    <div class="ui three top attached steps">
      <a class="step" :class="{active: is('offer')}" v-on:click="goTo('offer')">
        <i class="browser icon"></i>
        <div class="content">
          <div class="title">Materias</div>
        </div>
      </a>
      <a class="step" :class="{active: is('suggestions')}" v-on:click="goTo('suggestions')">
        <i class="italic icon" ></i>
        <div class="content">
          <div class="title">Sugerencias?</div>
        </div>
      </a>
      <a class="step" :class="{active: is('send')}" v-on:click="goTo('send')">
        <i class="send icon"></i>
        <div class="content">
          <div class="title">Enviar</div>
        </div>
      </a>
    </div>
    <div class="ui attached segment">
      <list-offer v-if="is('offer')" :listData="offers()" :searchFunction="this.searchFunction" :amountInPage='8'/>
      <suggestions-offer v-if="is('suggestions')" :message="academicOffer.message" @change="changeMessage" :amountInPage='2'/>
      <send-offer v-if="is('send')" :listData="offers()" :searchFunction="this.searchFunction" :amountInPage='2'/>
    </div>
    <div class="ui bottom attached steps">
      <a v-if="is('offer')" class="step" v-on:click="goTo('suggestions')">
        <i class="Arrow Circle Outline Right icon"></i>
        <div class="content">
          <div>Siguiente</div>
        </div>
      </a>
      <a v-if="is('suggestions')" class="step" v-on:click="goTo('send')">
        <i class="Arrow Circle Outline Right icon"></i>
        <div class="content">
          <div>Siguiente</div>
        </div>
      </a>
      <a v-if="is('send')" class="step" v-on:click="sendApplayOffer()">
        <i class="Arrow Circle Outline Right icon"></i>
        <div class="content">
          <div>Enviar</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ListOffer from '@/components/studentView/listOffers.vue'
import StudentInformation from '@/components/studentView/studentInformation.vue'
import SuggestionsOffer from '@/components/studentView/suggestionsOffer.vue'
import SendOffer from '@/components/studentView/sendOffer.vue'
import ErrorMessage from '@/components/errorMessage.vue'
import StudentService from '@/services/studentService.js'

export default {
  name: 'AcademicOfferForm',
  components:{
    'list-offer': ListOffer,
    'student-information':StudentInformation,
    'suggestions-offer': SuggestionsOffer,
    'send-offer': SendOffer,
    'error-message': ErrorMessage
  },
  data(){
    return{
      academicOffer: {
        student: {},
        offers: [],
        period: {},
        message: ''
      },
      subjectName: '',
      option: 'offer',
      code: '',
      errorMessage: ''
    }
  },

  created: function(){
    this.code = this.$route.params.id
    this.fetchAcademicOffer(this.$route.params.id);
  },

  methods: {
    information(){
      return {
        subject: this.academicOffer.name,
        period: this.academicOffer.period,
        student: this.academicOffer.student
      }
    },
    fetchAcademicOffer(academicOfferCode){
      StudentService.fetchAcademicOffer(academicOfferCode).then(
        response => this.academicOffer = response.body
      , response => {}
      )
    },
    isNotApprovedSubjects(subject){
      return !this.academicOffer.student.approvedSubjects
        .some(approvedSubject => approvedSubject.name === subject.name);
    },
    offers(){
      return this.academicOffer.offers;
    },
    searchFunction(data, message){
      return data.subject.name.toLowerCase().includes(message)
    },
    sendApplayOffer(){
      var applyOffers = this.academicOffer.offers.map(offer => {
        return {
          subject: offer.subject,
          option: offer.selectedOption
        }
      })
      console.log("pepe")
      applyOffers.message = this.message
      StudentService.sendOffer(this.code, applyOffers, this.message, this.successSendOffer, this.errorSendOffer);
    },
    is(option){
      return this.option === option
    },
    goTo(option){
      return this.option = option
    },
    changeMessage(message){
      this.message= message
    },
    successSendOffer(){
      this.$router.push('/submitPage')
    },
    errorSendOffer(error){
      this.errorMessage = error.body.message
    },
    showErrorMessage(){
      return this.errorMessage.length > 0
    }
  }
};
</script>
