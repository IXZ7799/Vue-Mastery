app.component('recommendation-list', {
    props: {
        recommendations: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="recommendation-container">
    <h3>Recommendations:</h3>
      <ul>
        <li v-for="(recommendation, index) in recommendations" :key="index">
          {{ recommendation.name }} said:
          <br/>
          " {{ recommendation.recommendation }}. "
          <br/>
        </li>
      </ul>
    </div>`
})