app.component('recommendation-form', {
    template:
        /*html*/
        `<form class="recommend-product" @submit.prevent="onSubmit">
      <h3>Would you recommend this product?</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="recommendation">Would you recommend this product?</label>      
      <textarea id="recommendation" v-model="recommend"></textarea>
  
      <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            recommendation: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.recommendation === '') {
                alert('Recommendation is incomplete.')
                return
            }
            let productRecommendation = {
                name: this.name,
                recommendation: this.recommendation
            }
            this.$emit('recommendation-submitted', productRecommendation)

            this.name = ''
            this.recommendation = ''
        }
    }
})