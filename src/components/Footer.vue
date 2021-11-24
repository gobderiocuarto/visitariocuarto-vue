<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-3">1</div> -->
        <div class="col-md-6">
          <div class="social">
            <a href="" class="btn"><i class="fab fa-fw fa-facebook-f"></i></a>
            <a href="" class="btn"><i class="fab fa-fw fa-instagram"></i></a>
            <a href="" class="btn"><i class="fab fa-fw fa-twitter"></i></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="brand">
            <a
              href="https://riocuarto.gov.ar?utm_source=destinoriocuarto&utm_medium=link&utm_campaign=link_in_footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGRC />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoGRC from "@/components/LogoGRC.vue";
export default {
  name: "Footer",
  components: {
    LogoGRC,
  },
};
</script>
