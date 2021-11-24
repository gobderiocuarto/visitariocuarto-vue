<template>
  <div class="data">
    <div class="card">
      <div class="card-body">
        <h5>+Info del Evento</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="item">
              <div class="icon">
                <font-awesome-icon icon="calendar-alt" class="card-icon" />
              </div>
              <div class="info">
                <h6>fecha</h6>
                <p>
                  {{ event.start_date | moment("ddd D [de] MMMM YYYY") }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item">
              <div class="icon">
                <font-awesome-icon icon="clock" class="card-icon" />
              </div>
              <div class="info">
                <h6>hora</h6>
                <p>{{ event.start_time.slice(0, 5) }} hs</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item">
              <div class="icon">
                <font-awesome-icon icon="flag" class="card-icon" />
              </div>
              <div class="info">
                <h6>donde</h6>
                <router-link
                  :to="{
                    name: 'Service',
                    params: {
                      id: event.place.organization_id,
                      slug: event.place.slug,
                      title: event.place.organization,
                    },
                  }"
                >
                  {{ event.place.organization }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item">
              <div class="icon">
                <font-awesome-icon icon="map-marker-alt" class="card-icon" />
              </div>
              <div class="info">
                <h6>dirección</h6>
                <p>
                  <span>{{ event.place.street }}</span>
                  {{ event.place.number }}.
                  {{ event.place.city.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventData",
  props: {
    event: Object,
  },
};
</script>
