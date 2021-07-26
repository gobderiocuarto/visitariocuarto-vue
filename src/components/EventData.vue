<template>
  <div class="data">
    <h5>+Info del Evento</h5>
    <div class="card">
      <!-- <div class="card-header">
        + Info
      </div> -->
      <div class="card-body">
        <div class="item">
          <div class="icon">
            <font-awesome-icon icon="calendar-alt" class="card-icon" />
          </div>
          <div class="info">
            <h6>fecha</h6>
            <p>
              <!-- {{ formatDate(event.start_date) }} -->
              {{ event.start_date | moment("ddd D [de] MMMM YYYY") }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <font-awesome-icon icon="clock" class="card-icon" />
          </div>
          <div class="info">
            <h6>hora</h6>
            <p>{{ event.start_time.slice(0, 5) }} hs</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <font-awesome-icon icon="flag" class="card-icon" />
          </div>
          <div class="info">
            <h6>donde</h6>
            <p>{{ event.place.organization }}</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <font-awesome-icon icon="map-marker-alt" class="card-icon" />
          </div>
          <div class="info">
            <h6>ubicación</h6>
            <p>
              <span>{{ event.place.street }}</span> {{ event.place.number }}.
              {{ event.place.city.name }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <font-awesome-icon icon="map-marker-alt" class="card-icon" />
          </div>
          <div class="info">
            <h6>compartilo</h6>
            <a class="mr-2" href="">facebook</a>
            <a class="mr-2" href="">twitter</a>
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
