<template>
    <div id="accademicOffer">
        <h1> {{accademicOffer.name}} - {{showPeriod()}}</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Materia</td>
                <td>Opciones</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="offer in offers">
                    <td>{{ offer.subject.name }}</td>
                    <td>
                      <span>TODO</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                accademicOffer: {},
                offers: []
            }
        },

        created: function()
        {
            this.fetchAccademicOffer();
        },

        methods: {
            fetchAccademicOffer: function()
            {
                this.$http.get('http://localhost:3000/api/accademicOffer').then((response) => {
                    this.accademicOffer = response.body;
                    this.offers = this.accademicOffer.offers;
                }, (response) => {

                });
            },

            showPeriod: function()
            {
              var period = this.accademicOffer.period
                return "asd" //"Año:" ++ period.year ++ " - Cuatrimestre:" ++ period.quarter;
            }
        }
    }
</script>
